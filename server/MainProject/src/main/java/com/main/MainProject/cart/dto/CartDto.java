package com.main.MainProject.cart.dto;

import com.main.MainProject.product.cartProduct.CartProduct;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

public class CartDto {

    @Getter
    @AllArgsConstructor
    public static class cartProductDto{
        private long productId;
        private int quantity;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch{
        private List<cartProductDto> cartProductDtoList;
    }


    @AllArgsConstructor
    @Getter
    public static class Response{
        private List<CartDto.cartProductResponse> cartProductList;

        private int totalOrderPrice;
    }

    @AllArgsConstructor
    @Getter
    public static class cartProductResponse{
        private String productName;
        private int quentity;
        private int totalProductPrice;
    }
}
