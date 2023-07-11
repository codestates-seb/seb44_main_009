package com.main.MainProject.member.dto;

import com.main.MainProject.member.entity.Member;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
public class MemberPatchDto {
    private Long memberId;

//    @NotBlank(message = "회원 이름은 입력하세요.")
    private String korName;

//    @NotBlank
    @Email
    private String email;

//    @NotBlank(message = "전화번호를 입력하세요.")
    private String phoneNumber;

/*    @NotBlank(message = "닉네임을 입력하세요.")*/
    private String nickName;

//    @NotBlank(message = "주소를 입력하세요.")
    private String address;

//    @NotBlank(message = "쿨톤 / 웜톤 중 작성해주세요.")
    private String personalColor;

//    @NotBlank(message = "비밀번호를 입력하세요.")
    private String password;

    public void setMemberId(long memberId) {
        this.memberId = memberId;
    }
}
