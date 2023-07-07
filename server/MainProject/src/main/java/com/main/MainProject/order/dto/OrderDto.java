package com.main.MainProject.order.dto;

import com.main.MainProject.order.entity.Order;
import com.main.MainProject.order.entity.OrderProduct;
import com.main.MainProject.product.cartProduct.CartProduct;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

public class OrderDto {


    @AllArgsConstructor
    @Getter
    public static class Address {
        private String receiverName;

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
    }

    @AllArgsConstructor
    @Getter
    public static class ResponseDetail {
        private Long orderId;

        private List<orderProductResponse> cartProductList;

        private int totalPrice;

        OrderDto.Address address;

        private Order.OrderStatus shippingStatus;
    }

    @AllArgsConstructor
    @Getter
    public static class orderProductResponse{
        long productId;
        private String productName;
        private int quentity;
        private OrderProduct.Reviewstatus reviewStatus;
        private int totalProductPrice;

    }
}
