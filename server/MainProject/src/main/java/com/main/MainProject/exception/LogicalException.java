package com.main.MainProject.exception;

import lombok.Getter;

public class LogicalException extends RuntimeException{
    @Getter
    private ExceptionCode exceptionCode;

    public LogicalException(ExceptionCode e) {
        super(e.getMessage());
        this.exceptionCode = e;
    }
}
