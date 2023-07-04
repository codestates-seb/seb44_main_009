package com.main.MainProject.cart.dto;

import com.main.MainProject.temporary.CartProduct;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

public class CartDto {

    @Getter
    @AllArgsConstructor
    public static class Patch{
        private List<CartProduct> cartProductList;
    }


    @AllArgsConstructor
    @Getter
    public static class Response{
        private List<CartProduct> cartProductList;

        private int totalPrice;
    }
}
