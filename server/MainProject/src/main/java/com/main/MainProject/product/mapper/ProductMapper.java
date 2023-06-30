package com.main.MainProject.product.mapper;

import com.main.MainProject.product.domain.Product;
import com.main.MainProject.product.dto.ProductDto;
import org.mapstruct.Mapper;

import static com.main.MainProject.product.dto.ProductDto.*;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    Product productPostDtoToProduct(ProductPostDto productPostDto);

    Product productPatchDtoToProduct(ProductPatchDto productPatchDto);

    ProductResponseDto productToProductResponseDto(Product product);
}
