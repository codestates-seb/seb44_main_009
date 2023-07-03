package com.main.MainProject.order.dto;

import com.main.MainProject.temporary.Address;
import com.main.MainProject.temporary.CartProduct;

import java.util.List;

public class OrderDto {

    public static class Post{
        private List<CartProduct> cartProductList;
    }

    public static class Patch {
        Address address;
    }

    public static class Response {
        private List<CartProduct> cartProductList;

        private int totalPrice;

        Address address;

        private String shippingStatus;

        private String reviewStatus;

    }
}
