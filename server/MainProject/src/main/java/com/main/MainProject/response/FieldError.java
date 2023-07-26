package com.main.MainProject.response;

import lombok.Getter;
import org.springframework.validation.BindingResult;

import java.util.List;

@Getter
public class FieldError implements Error{
    private String field;
    private String rejectedValue;
    private String reason;

    private FieldError(String field, String rejectedValue, String reason) {
        this.field = field;
        this.rejectedValue = rejectedValue;
        this.reason = reason;
    }

    public static List<Error> of(BindingResult bindingResult) {
        final List<org.springframework.validation.FieldError> fieldErrors = bindingResult.getFieldErrors();

        return Error.from(fieldErrors,
                error -> new FieldError(
                        error.getField(),
                        error.getRejectedValue() == null ?
                                "" : error.getRejectedValue().toString(),
                        error.getDefaultMessage()));
    }
}
