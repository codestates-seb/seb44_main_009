package com.main.MainProject.product.category.mapper;

import com.main.MainProject.product.category.dto.CategoryDto;
import com.main.MainProject.product.category.entity.Category;
import com.main.MainProject.product.dto.ProductDto;
import com.main.MainProject.product.entity.Product;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;

import static com.main.MainProject.product.category.dto.CategoryDto.*;
import static com.main.MainProject.product.dto.ProductDto.*;

@Mapper(componentModel = "spring")
public interface CategoryMapper {

    Category categoryPostDtoToCategory(CategoryPostDto categoryPostDto);

    Category categoryPatchDtoToCategory(CategoryPatchDto categoryPatchDto);

    CategoryResponseDto categoryToCategoryResponseDto(Category category);

    default CategoryDto.CategoryListResponseDto categoryToCategoryListResponseDto(Category category) {
        if (category == null) {
            return null;
        }

        CategoryDto.CategoryListResponseDto categoryListResponseDto = new CategoryDto.CategoryListResponseDto();

        categoryListResponseDto.setName(category.getName());
        categoryListResponseDto.setSlug(category.getSlug());
        categoryListResponseDto.setProducts(productListToProductResponseDtoList(category.getProducts()));

        return categoryListResponseDto;
    }

    default List<ProductResponseDto> productListToProductResponseDtoList(List<Product> list) {
        if (list == null) {
            return null;
        }

        List<ProductDto.ProductResponseDto> list1 = new ArrayList<ProductResponseDto>(list.size());
        for (Product product : list) {
            list1.add(productToProductResponseDto(product));
        }

        return list1;
    }

    default ProductDto.ProductResponseDto productToProductResponseDto(Product product) {
        if (product == null) {
            return null;
        }

        ProductDto.ProductResponseDto.ProductResponseDtoBuilder productResponseDto = ProductDto.ProductResponseDto.builder();

        productResponseDto.productId(product.getProductId());
        productResponseDto.name(product.getName());
        productResponseDto.price(product.getPrice());
        productResponseDto.content(product.getContent());
        productResponseDto.count(product.getCount());
        productResponseDto.sizes(product.getSize());
        productResponseDto.colors(product.getColors());
        productResponseDto.personalColor(product.getPersonalColor());

        return productResponseDto.build();
    }

}
