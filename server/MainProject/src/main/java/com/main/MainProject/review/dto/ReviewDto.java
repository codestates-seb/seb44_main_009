package com.main.MainProject.review.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class ReviewDto {
    @Getter
    @AllArgsConstructor
    public static class RequestDTO{
        @NotBlank(message = "제품후기 제목은 공백이 아니어야 합니다.")
        private String title;

        @NotBlank(message = "제품후기 내용은 공백이 아니어야 합니다.")
        private String content;

        @NotBlank(message = "제품후기 점수는 공백이 아니어야 합니다.")
        private int score;
    }

    @Getter
    @AllArgsConstructor
    public static class Response{

        private long reviewId;

        private String memberName;

        private String productName;
        private String productPersonalColor;
        private String productColor;

        private String title;

        private String content;

        private int score;

        private int vote;

        private LocalDateTime createdAt;

        private LocalDateTime lastModifiedAt;
    }
}
