package com.main.MainProject.product.mapper;

import com.main.MainProject.product.category.entity.Category;
import com.main.MainProject.product.color.dto.ColorDto;
import com.main.MainProject.product.color.entity.Color;
import com.main.MainProject.product.dto.ProductDto;
import com.main.MainProject.product.entity.Product;
import com.main.MainProject.product.size.Size;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.ArrayList;
import java.util.List;

import static com.main.MainProject.product.dto.ProductDto.*;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    //@Mapping(target = "size", ignore = true)
    default Product productPostDtoToProduct(ProductPostDto productPostDto){
        if ( productPostDto == null ) {
            return null;
        }

        Product product = new Product();

        product.setName( productPostDto.getName() );
        product.setPrice( productPostDto.getPrice() );
        product.setContent( productPostDto.getContent() );
        product.setCount(productPostDto.getCount() );
        List<Color> list = productPostDto.getColors();
        if ( list != null ) {
            for (Color color : list) {
                color.setProduct(product);
            }
            product.setColors( new ArrayList<Color>( list ) );
        }
        List<Size> sizes = productPostDto.getSizes();
        if (sizes != null) {
            product.setSize(new ArrayList<Size>(sizes));
        }
        product.setPersonalColor( productPostDto.getPersonalColor() );

        return product;
    }

    default Product productPatchDtoToProduct(ProductDto.ProductPatchDto productPatchDto) {
        if ( productPatchDto == null ) {
            return null;
        }

        Product product = new Product();

        product.setProductId( productPatchDto.getProductId() );
        product.setName( productPatchDto.getName() );
        product.setPrice( productPatchDto.getPrice() );
        product.setContent( productPatchDto.getContent() );
        product.setCount( productPatchDto.getCount() );
        List<Color> list = productPatchDto.getColors();
        if ( list != null ) {
            product.setColors( new ArrayList<Color>( list ) );
        }
        product.setPersonalColor( productPatchDto.getPersonalColor() );
        List<Size> sizes = productPatchDto.getSizes();
        if (sizes != null) {
            product.setSize(new ArrayList<Size>(sizes));
        }
        product.setPersonalColor( productPatchDto.getPersonalColor() );

        return product;
    }

    //@Mapping(source = "category.name", target = "categoryName")
    default ProductResponseDto productToProductResponseDto(Product product) {
        if (product == null) {
            return null;
        }
        ProductResponseDto.ProductResponseDtoBuilder productResponseDto = ProductResponseDto.builder();

        productResponseDto.categoryName(productCategoryName(product));
        productResponseDto.productId(product.getProductId());
        productResponseDto.price(product.getPrice());
        productResponseDto.name(product.getName());
        productResponseDto.content(product.getContent());
        productResponseDto.count(product.getCount());
        productResponseDto.personalColor(product.getPersonalColor());
        productResponseDto.colors(colorListToResponseList(product.getColors()));
        productResponseDto.productImageName(product.getProductImageName());
        List<Size> sizes = product.getSize();
        if (sizes != null) {
            productResponseDto.sizes(new ArrayList<>(sizes));
        }
        return productResponseDto.build();
    }
    List<ProductResponseDto> productsToProductResponseDtos(List<Product> products);

    private String productCategoryName(Product product) {
        if (product == null)
            return null;
        Category category = product.getCategory();

        if (category == null)
            return null;
        String name = category.getName();

        if (name == null)
            return null;

        return name;
    }

    default List<ColorDto.Response> colorListToResponseList(List<Color> colorList) {
        if (colorList == null)
            return null;

        List<ColorDto.Response> colorResponseList = new ArrayList<>(colorList.size());

        for (Color color : colorList) {
            colorResponseList.add(colorToResponse(color));
        }
        return colorResponseList;
    }

    default ColorDto.Response colorToResponse(Color color) {
        if (color == null)
            return null;

        ColorDto.Response.ResponseBuilder colorResponse = ColorDto.Response.builder();

        colorResponse.name(color.getName());

        return colorResponse.build();
    }
}
