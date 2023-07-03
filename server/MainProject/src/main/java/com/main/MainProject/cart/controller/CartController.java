package com.main.MainProject.cart.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cart")
@Slf4j
@Validated
public class CartController {
    private final static String CART_DEFAULT_URL = "/cart";


    @PatchMapping("")
    public ResponseEntity updateCart(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity getCart(){
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
