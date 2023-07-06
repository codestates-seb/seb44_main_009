package com.main.MainProject.qna.dto;

import com.main.MainProject.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Positive;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class QnaPostDto {
    @Positive
    private Long memberId;

    @NotBlank(message="제목을 입력하세요")
    private String title;

    @NotBlank(message="질문을 입력하세요")
    private String content;

    public Member getMember() {
        Member member = new Member();
        member.setMemberId(memberId);
        return member;
    }
}
