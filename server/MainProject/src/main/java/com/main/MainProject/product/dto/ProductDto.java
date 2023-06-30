package com.main.MainProject.product.dto;

import com.main.MainProject.product.domain.Category;
import com.main.MainProject.product.domain.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

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

        @NotBlank(message = "공백이 아니어야 합니다.")
        private int count;

        private Category category;
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

        @NotBlank(message = "공백이 아니어야 합니다.")
        private int count;

        private Category category;
    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class ProductResponseDto {
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

        @NotBlank(message = "공백이 아니어야 합니다.")
        private int count;

        private Category category;
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
        private Category category;
    }
}
