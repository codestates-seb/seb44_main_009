package com.main.MainProject.cart.dto;

import com.main.MainProject.temporary.CartProduct;

import java.util.List;

public class CartDto {

    public static class Patch{
        private List<CartProduct> cartProductList;
    }

    public static class Response{
        private List<CartProduct> cartProductList;

        private int totalPrice;
    }
}
