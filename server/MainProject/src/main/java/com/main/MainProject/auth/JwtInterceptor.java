package com.main.MainProject.auth;

import com.main.MainProject.auth.jwt.JwtTokenizer;
import com.main.MainProject.auth.utils.ErrorResponder;
import com.main.MainProject.exception.BusinessLogicException;
import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.member.entity.Member;
import com.main.MainProject.member.service.MemberService;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@Component
public class JwtInterceptor implements HandlerInterceptor {
    private final JwtTokenizer jwtTokenizer;
    private final MemberService memberService;

    public JwtInterceptor(JwtTokenizer jwtTokenizer, MemberService memberService) {
        this.jwtTokenizer = jwtTokenizer;
        this.memberService = memberService;
    }

    @Getter
    public static Long authenicatedMemberId;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        System.out.println("----------------------------------intercepter");
        try {
            System.out.println("----------------------------------intercepter---시작");

            String jws = request.getHeader("Authorization").replace("Bearer", "");
            String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey()); // JWT 서명(Signature)을 검증하기 위한 Secret Key를 얻습니다.
            Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody(); // JWT에서 Claims를 파싱합니다.

            Long memberId = Long.parseLong(claims.get("memberId").toString());
            System.out.println("----------------------------------" + memberId);

            if(memberId != null) {
                authenicatedMemberId = memberId;
                System.out.println("----------------------------------intercepter" + memberId);

                return true;
            }
            else {
                ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED);
                System.out.println("----------------------------------intercepter" + memberId);
                return false;
            }

        }catch (Exception ex){//
            new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
            System.out.println("----------------------------------intercepter-----member not found");
            return false;
        }
    }
}
