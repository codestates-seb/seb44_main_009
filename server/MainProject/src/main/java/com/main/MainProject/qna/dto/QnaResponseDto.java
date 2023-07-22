package com.main.MainProject.qna.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
@AllArgsConstructor
public class QnaResponseDto {
    private Long qnaId;
    private String title;
    private String content;
}
