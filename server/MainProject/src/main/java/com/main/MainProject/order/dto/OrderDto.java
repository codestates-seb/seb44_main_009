package com.main.MainProject.order.dto;

import com.main.MainProject.temporary.Address;
import com.main.MainProject.temporary.CartProduct;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

public class OrderDto {

    @AllArgsConstructor
    @Getter
    public static class Post{
        private List<CartProduct> cartProductList;
    }
    @AllArgsConstructor
    @Getter
    public static class Patch {
        private String reciverName;

        private int zipcode;

        private String addressName;

        private String addressDetails;

        private String telNum;

        private String request;
    }

    @AllArgsConstructor
    public static class Response {
        private List<CartProduct> cartProductList;

        private int totalPrice;

        Address address;

        private String shippingStatus;

        private String reviewStatus;

    }
}
