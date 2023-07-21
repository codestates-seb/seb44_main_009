package com.main.MainProject.cart.dto;

import com.main.MainProject.product.cartProduct.CartProduct;
import com.main.MainProject.product.entity.Product;
import lombok.*;

import java.util.List;

import static com.main.MainProject.product.entity.Product.*;

public class CartDto {

    @Getter
    @Setter
//    @NoArgsConstructor
    public static class Post {
        private long cartId;
        private long productId;
        private int quantity;
        private String size;
        private String color;
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
        private String size;
        private String color;
        private PersonalColor personalColor;
        private int productPrice;
        private int totalProductPrice;
    }
}
