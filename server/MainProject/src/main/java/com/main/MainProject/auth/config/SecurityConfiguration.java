package com.main.MainProject.auth.config;

import com.main.MainProject.auth.filter.JwtAuthenticationFilter;
import com.main.MainProject.auth.filter.JwtVerificationFilter;
import com.main.MainProject.auth.handler.MemberAccessDeniedHandler;
import com.main.MainProject.auth.handler.MemberAuthenticationEntryPoint;
import com.main.MainProject.auth.handler.MemberAuthenticationFailureHandler;
import com.main.MainProject.auth.handler.MemberAuthenticationSuccessHandler;
import com.main.MainProject.auth.jwt.JwtTokenizer;
import com.main.MainProject.auth.utils.CustomAuthorityUtils;
import com.main.MainProject.member.service.MemberService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity(debug = true)
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils; // 추가

    public SecurityConfiguration(JwtTokenizer jwtTokenizer,
                                 CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, MemberService memberService) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
//                .logout() // 로그아웃 설정 추가
//                .logoutUrl("/logout")
//                .logoutSuccessHandler(customLogoutSuccessHandler())
//                .invalidateHttpSession(true)
//                .deleteCookies("refreshToken")
//                .and()
                .authorizeRequests(authorize -> authorize
                        //members
                        .antMatchers(HttpMethod.POST,"/members/signup").permitAll()
                        .antMatchers(HttpMethod.PATCH,"/members").hasRole("USER")
                        .antMatchers(HttpMethod.GET,"/members").hasRole("USER")
                        .antMatchers(HttpMethod.GET,"/members/list").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE,"/members").hasRole("USER")
                        //products
                        .antMatchers(HttpMethod.POST, "/products").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PATCH, "/products/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/products/*").hasRole("ADMIN")
                        //category
                        .antMatchers(HttpMethod.POST, "/category").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PATCH, "/category/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/category/*").hasRole("ADMIN")
                        //orders
                        .antMatchers(HttpMethod.POST, "/orders/buy").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/orders/request/*").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/orders/update/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.GET, "/orders/list/").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/orders/*").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/orders/delete/*").hasRole("USER")
                        //cart
                        .antMatchers(HttpMethod.POST, "/carts/items").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/carts/items/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/carts").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/carts/items/*").hasRole("USER")
                        //review
                        .antMatchers(HttpMethod.POST, "/reviews/create/*/*").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/reviews/update/*").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/reviews/findByMember").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/reviews/delete/*").hasRole("USER")
                        //qna
                        //wishlist

                        .anyRequest().permitAll()
                );
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    // 커스텀 LogoutSuccessHandler 구현 및 반환
    public LogoutSuccessHandler customLogoutSuccessHandler() {
        return  null;//new CustomLogoutSuccessHandler();
    }


    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/auth/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);


            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}
