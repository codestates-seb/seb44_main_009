package com.main.MainProject.member.dto;

import com.main.MainProject.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
@AllArgsConstructor
public class MemberResponseDto {
    private Long memberId;
    private String korName;
    private String email;
    private String phoneNumber;
    private String nickName;
    private String address;
    private String personalColor;
    private String password;
    private Member.MemberStatus memberStatus;

    public String getMemberStatus() {
        return memberStatus.getStatus();
    }

    public void setMemberId(Long memberId) {
        this.memberId = memberId;
    }
}
