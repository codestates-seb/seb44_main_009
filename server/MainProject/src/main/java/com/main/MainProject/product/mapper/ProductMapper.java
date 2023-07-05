package com.main.MainProject.product.mapper;

import com.main.MainProject.product.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

import static com.main.MainProject.product.dto.ProductDto.*;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    Product productPostDtoToProduct(ProductPostDto productPostDto);

    Product productPatchDtoToProduct(ProductPatchDto productPatchDto);

    @Mapping(source = "category.name", target = "categoryName")
    ProductResponseDto productToProductResponseDto(Product product);

    List<ProductResponseDto> productsToProductResponseDtos(List<Product> products);

}
