package com.main.MainProject.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member already exists");

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }

    @Getter
    private int status;
    @Getter
    private String message;
}
