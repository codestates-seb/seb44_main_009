package com.main.MainProject.review;

public class ReviewDto {
    public static class RequestDTO{
        private String title;

        private String content;

        private int score;
    }

    public static class Response{

        private long reviewId;
        private String memberName;

        private String title;

        private String content;

        private int score;
    }
}
