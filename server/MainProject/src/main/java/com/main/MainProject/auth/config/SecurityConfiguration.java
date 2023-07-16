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
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
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
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity, MemberService memberService) throws Exception {
        httpSecurity
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
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/member/signup").permitAll()
                        .antMatchers(HttpMethod.PATCH, "/member/update").hasRole("USER")
//                        .antMatchers(HttpMethod.GET, "/member").hasRole("ADMIN")
//                        .antMatchers(HttpMethod.GET, "/member/getmember").hasAnyRole("USER", "ADMIN")
//                        .antMatchers(HttpMethod.DELETE, "/member/delete").hasAnyRole("USER", "ADMIN")
//                        .antMatchers(HttpMethod.POST, "/question/create").hasRole("USER")
//                        .antMatchers(HttpMethod.POST, "/question/**").hasRole("USER")
//                        .antMatchers(HttpMethod.PATCH, "/question/update/**").hasRole("USER")
//                        .antMatchers(HttpMethod.DELETE, "/question/delete/**").hasRole("USER")
//                        .antMatchers(HttpMethod.POST, "/comment/create").hasAnyRole("USER","ADMIN")
//                        .antMatchers(HttpMethod.PATCH,"/comment/update/**").hasRole("USER")
//                        .antMatchers(HttpMethod.DELETE,"/comment/delete/**").hasRole("USER")
//                        .antMatchers(HttpMethod.PATCH,"/comment/choose/**").hasRole("USER")
                        .anyRequest().permitAll()
                );
        return httpSecurity.build();
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
