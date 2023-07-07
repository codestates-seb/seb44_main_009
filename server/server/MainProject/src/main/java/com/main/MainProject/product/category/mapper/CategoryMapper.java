package com.main.MainProject.product.category.mapper;

import com.main.MainProject.product.category.dto.CategoryDto;
import com.main.MainProject.product.category.entity.Category;
import com.main.MainProject.product.dto.ProductDto;
import com.main.MainProject.product.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import static com.main.MainProject.product.category.dto.CategoryDto.*;
import static com.main.MainProject.product.dto.ProductDto.*;

@Mapper(componentModel = "spring")
public interface CategoryMapper {

    Category categoryPostDtoToCategory(CategoryPostDto categoryPostDto);
    Category categoryPatchDtoToCategory(CategoryPatchDto categoryPatchDto);
    CategoryResponseDto categoryToCategoryResponseDto(Category category);
    CategoryListResponseDto categoryToCategoryListResponseDto(Category category);
    ProductResponseDto productToProductResponseDto(Product product);
}
