package com.main.MainProject.cart.dto;

import com.main.MainProject.product.cartProduct.CartProduct;
import lombok.*;

import java.util.List;

public class CartDto {

    @Getter
    @Setter
//    @NoArgsConstructor
    public static class Post {
        private long cartId;
        private long productId;
        private int quantity;
    }

//    @Getter
//    @AllArgsConstructor
//    public static class cartProductDto{
//        private long productId;
//        private int quantity;
//    }

//    @Getter
//    @AllArgsConstructor
//    public static class Patch{
//        private List<cartProductDto> cartProductDtoList;
//    }


    @AllArgsConstructor
    @Getter
    public static class Response{
        private List<cartProductResponse> cartProductList;

        private int shippingCost;
        private int totalProductPrice;
        private int totalOrderPrice;
    }

    @AllArgsConstructor
    @Getter
    public static class cartProductResponse{
        private long cartProductId;
        private String productName;
        private int quantity;
        private int productPrice;
        private int totalProductPrice;
    }
}
