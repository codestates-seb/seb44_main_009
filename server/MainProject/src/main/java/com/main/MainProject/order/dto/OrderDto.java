package com.main.MainProject.order.dto;

import com.main.MainProject.cart.dto.CartDto;
import com.main.MainProject.order.entity.Order;
import com.main.MainProject.temporary.Address;
import com.main.MainProject.temporary.CartProduct;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

public class OrderDto {


    @AllArgsConstructor
    @Getter
    public static class Address {
        private String reciverName;

        private int zipcode;

        private String addressName;

        private String addressDetails;

        private String telNum;

        private String request;
    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private List<cartProductResponse> cartProductList;

        private int totalPrice;

        Address address;

        private Order.OrderStatus shippingStatus;

        private Order.Reviewstatus reviewStatus;

    }

    @AllArgsConstructor
    @Getter
    public static class cartProductResponse{
        private String productName;
        private int quentity;
        private int totalProductPrice;
    }
}
