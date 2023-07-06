package com.main.MainProject.review;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class ReviewDto {
    @Getter
    @AllArgsConstructor
    public static class RequestDTO{
        private String title;

        private String content;

        private int score;
    }

    @Getter
    @AllArgsConstructor
    public static class Response{

        private long reviewId;
        private String memberName;

        private String title;

        private String content;

        private int score;
    }
}
