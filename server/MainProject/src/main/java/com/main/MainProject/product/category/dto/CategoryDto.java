package com.main.MainProject.product.category.dto;

import com.main.MainProject.product.dto.ProductDto;
import com.main.MainProject.product.entity.Product;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.List;

import static com.main.MainProject.product.dto.ProductDto.*;

public class CategoryDto {
    @Getter
    public static class CategoryPostDto {
        @NotBlank
        private String name;
    }

    @Getter
    @Setter
    public static class CategoryPatchDto {
        private Long categoryId;
        @NotBlank
        private String name;
    }

    @Getter
    @Setter
    public static class CategoryResponseDto {
        private String name;
    }

    @Getter
    @Setter
    public static class CategoryListResponseDto {
        private String name;
        private List<ProductResponseDto> products;
    }
}
