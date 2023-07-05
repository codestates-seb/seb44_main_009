package com.main.MainProject.product.dto;

import com.main.MainProject.product.category.entity.Category;
import com.main.MainProject.product.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.util.List;

public class ProductDto {

    @Getter
    public static class ProductPostDto {
        @NotBlank(message = "공백이 아니어야 합니다.")
        private String name;

        @Min(value = 100)
        private int price;

        @NotBlank(message = "공백이 아니어야 합니다.")
        private String color; // 추후에 컬러도 entity로 변경?

        @NotBlank(message = "공백이 아니어야 합니다.")
        private String content;

        private int count;

        @NotBlank(message = "공백이 아니어야 합니다.")
        private String personalColor;

//        private Category category;
        @Positive
        private long categoryId;
    }


    @Getter
    @Setter
    public static class ProductPatchDto {
        @Positive
        private Long productId;

        @NotBlank(message = "공백이 아니어야 합니다.")
        private String name;

        @Min(value = 100)
        private int price;

        @NotBlank(message = "공백이 아니어야 합니다.")
        private String color; // 추후에 컬러도 entity로 변경?

        @NotBlank(message = "공백이 아니어야 합니다.")
        private String content;

        private int count;

        @NotBlank(message = "공백이 아니어야 합니다.")
        private String personalColor;

        @Positive
        private long categoryId;
    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class ProductResponseDto {

        private Long productId;
        private String name;
        private int price;
        private String color;
        private String content;
        private int count;
        private String personalColor;
        private String categoryName;
    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class SearchProductResponse {

        private Long productId;
        private String name;
        private int price;
        private String color;
        private String content;
        private String personalColor;
        private String categoryName;
    }
}
