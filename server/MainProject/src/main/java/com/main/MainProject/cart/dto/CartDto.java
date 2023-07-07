package com.main.MainProject.cart.dto;

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

        private int shippingCost;
        private int totalOrderPrice;
        private int estimatedTotalPrice;

    }

    @AllArgsConstructor
    @Getter
    public static class cartProductResponse{
        private String productName;
        private int quantity;
        private int productPrice;
        private int totalProductPrice;
    }
}
