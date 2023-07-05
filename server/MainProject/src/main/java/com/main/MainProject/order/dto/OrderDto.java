package com.main.MainProject.order.dto;

import com.main.MainProject.order.entity.Order;
import lombok.AllArgsConstructor;
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
    public static class OrderResponse{
        private Long orderId;
        private Order.OrderStatus shippingStatus;
        private Order.Reviewstatus reviewStatus;
    }

    @AllArgsConstructor
    @Getter
    public static class ResponseDetail {
        private Long orderId;

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
