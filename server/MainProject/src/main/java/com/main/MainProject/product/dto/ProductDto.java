package com.main.MainProject.product.dto;

import com.main.MainProject.product.color.Color;
import com.main.MainProject.product.size.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.util.List;

import static com.main.MainProject.product.entity.Product.*;

public class ProductDto {

    @Getter
    public static class ProductPostDto {
        @NotBlank(message = "공백이 아니어야 합니다.")
        private String name;

        @Min(value = 100)
        private int price;

        @NotBlank(message = "공백이 아니어야 합니다.")
        private String content;

        private int count;

        private List<Color> colors;

        private List<Size> sizes;

        private PersonalColor personalColor;

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
        private String content;

        private int count;

        private List<Size> sizes;

        private List<Color> colors;

        private PersonalColor personalColor;

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
        private String content;
        private int count;
        private List<Size> sizes;
        private List<Color> colors;
        private PersonalColor personalColor;
        private String categoryName;
        private String productImageName;
    }

//    @Getter
//    @Builder
//    @AllArgsConstructor
//    public static class SearchProductResponse {
//
//        private Long productId;
//        private String name;
//        private int price;
//        private String color;
//        private String content;
//        private PersonalColor personalColor;
//        private String categoryName;
//    }
}
