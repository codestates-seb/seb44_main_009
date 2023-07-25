package com.main.MainProject.order.dto;

import com.main.MainProject.order.entity.Order;
import com.main.MainProject.order.entity.OrderProduct;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.lang.Nullable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.List;

public class OrderDto {

//    @AllArgsConstructor
//    @Getter
//    public  static class Post{
//        private long productId;
//        private int quantity;
////        private String size;
////        private String color;
//    }

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
        private Long memberId;
        private Order.OrderStatus shippingStatus;
    }

    @AllArgsConstructor
    @Getter
    @Builder
    public static class ResponseDetail {
        private Long orderId;

        private List<orderProductResponse> cartProductList;

        private int shippingCost;
        private int productTotalPrice;
        private int totalPrice;

        OrderDto.Address address;

        private Order.OrderStatus shippingStatus;

        private LocalDateTime createdAt;
        private LocalDateTime lastModifiedAt;
    }

    @AllArgsConstructor
    @Getter
    @Builder
    public static class orderProductResponse{
        long productId;
        private String productName;
        private int productPrice;
        private int quantity;
        private int totalProductPrice;
        private OrderProduct.Reviewstatus reviewStatus;
        private String productImageName;
    }
}
