package com.main.MainProject.review.dto;

import com.main.MainProject.product.color.Color;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

public class ReviewDto {
    @Getter
    @AllArgsConstructor
    public static class RequestDTO{

        @NotNull(message = "제품후기 내용은 공백이 아니어야 합니다.")
        private String content;

        private String enjoyStatus;

        private String productPersonalColorStatus;

        private String sizeStatus;

        private String productColorStatus;
    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class Response{

        private long reviewId;

        private String memberName;

        private String productName;
        private String productPersonalColor;
        private List<Color> colorDtoList;

        private String content;

        private String enjoyStatus;

        private String productPersonalColorStatus;

        private String sizeStatus;

        private String productColorStatus;

        private int vote;

        private LocalDateTime createdAt;

        private LocalDateTime lastModifiedAt;

        private String reviewImageName;
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class ResponseList{
        private List<Response> responseList;
        private int totalCount;
        private int PersonalColorCoolCount;
        private int PersonalColorWormCount;
    }
}
