package com.main.MainProject.order.dto;

import com.main.MainProject.order.entity.Order;
import com.main.MainProject.order.entity.OrderProduct;
import com.main.MainProject.product.cartProduct.CartProduct;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.List;

public class OrderDto {


    @AllArgsConstructor
    @Getter
    public static class Address {

        @NotBlank(message = "이름은 공백이 아니어야 합니다.")
        private String receiverName;
        @NotBlank(message = "우편번호는 공백이 아니어야 합니다.")
        private int zipcode;

        private String addressName;

        @NotBlank(message = "주소는 공백이 아니어야 합니다.")
        private String addressDetails;

        @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$",
                message = "휴대폰 번호는 010으로 시작하는 11자리 숫자와 '-'로 구성되어야 합니다")
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
