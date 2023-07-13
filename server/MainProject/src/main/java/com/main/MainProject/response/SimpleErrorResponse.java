package com.main.MainProject.response;

import com.main.MainProject.exception.ExceptionCode;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class SimpleErrorResponse {
    private Integer status;
    private String message;

    public SimpleErrorResponse(Integer status, String message) {
        this.status = status;
        this.message = message;
    }

    public static SimpleErrorResponse of(ExceptionCode exceptionCode) {
        return new SimpleErrorResponse(exceptionCode.getStatus(), exceptionCode.getMessage());
    }

    public static SimpleErrorResponse of(HttpStatus httpStatus) {
        return new SimpleErrorResponse(httpStatus.value(), httpStatus.getReasonPhrase());
    }

    public static SimpleErrorResponse of(int status, String message) {
        return new SimpleErrorResponse(status, message);
    }
}
