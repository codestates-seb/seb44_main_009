package com.main.MainProject.exception;

import lombok.Getter;

//오류를 작성해주세요
public enum ExceptionCode {
    //제품 수량이 부족합니다
    QUANTITY_IS_MORE_THAN_PRODUCT_COUNT(500, "quantity is more than product count"),

    //회원이 존재하지 않음
    MEMBER_NOT_FOUND(404, "Member not found"),

    //회원이 이미 존재함
    MEMBER_EXISTS(409, "Member already exists"),

    NICKNAME_EXISTS(409,"Nickname already exists"),

    QNA_NOT_FOUND(404, "Qna not found"),

    //상품이 존재하지 않음

    //상품 수량이 부족

    //배송이 시작된 상품

    //로그인 되지 않은 회원입니다

    //상품이 주문에 포함되어있지 않습니다
    PRODUCT_IS_NOT_MATCH_ORDER(404, "product is not match order"),
    //상품의 주문자가 아닙니다
    MEMBER_IS_NOT_MATCH_ORDER(404, "member is not match"),
    //카트가 존재하지 않습니다
    CART_NOT_FOUND(404, "Cart not found"),

    //주문을 찾을 수 없습니다
    ORDER_NOT_FOUND(404, "order not found"),

    CAN_NOT_WRITE_REVIEW(404, "sorry can not write review"),

    //리뷰를 찾을 수 없습니다
    REVIEW_NOT_FOUND(404, "review not found"),

    //리뷰를 작성한 회원이 아닙니다
    YOU_ARE_NOT_WRITER(404, "you are not writer"),

    //카트가 비어있습니다
    CART_IS_EMPTY(500, "cart is empty"),

    //주문을 취소할 수 없습니다
    CANNOT_CHANGE_ORDER(403, "Order can not change"),

    COLOR_NOT_FOUND(404,"Color Not Found"),

    COLOR_EXIST(409, "Color Is Already Exists");





    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
