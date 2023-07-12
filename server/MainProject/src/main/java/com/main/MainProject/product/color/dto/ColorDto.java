package com.main.MainProject.product.color.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

public class ColorDto {
    @Getter
    public static class Post{
        @NotBlank
        private String name;
    }

    @Getter
    @Setter
    @Builder
    public static class Patch {
        @Positive
        private long colorId;
        @NotBlank
        private String name;
    }
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Response {
        public String name;
    }
}
