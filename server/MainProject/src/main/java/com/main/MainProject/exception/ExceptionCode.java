package com.main.MainProject.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member already exists"),

    //상품 수량이 부족

    //배송이 시작된 상품

    //로그인 되지 않은 회원입니다

    //카트가 존재하지 않습니다.
    CART_NOT_FOUND(404, "Cart not found"),

    //주문을 찾을 수 없습니다
    ORDER_NOT_FOUND(404, "order not found"),

    //카트가 비어있습니다
    CART_IS_EMPTY(500, "cart is empty"),

    //주문을 취소할 수 없습니다
    CANNOT_CHANGE_ORDER(403, "Order can not change");


    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }

    @Getter
    private int status;
    @Getter
    private String message;
}