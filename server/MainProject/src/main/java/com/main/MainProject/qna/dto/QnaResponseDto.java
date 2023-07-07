package com.main.MainProject.qna.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class QnaResponseDto {
    private Long qnaId;
    private String title;
    private String content;
}
