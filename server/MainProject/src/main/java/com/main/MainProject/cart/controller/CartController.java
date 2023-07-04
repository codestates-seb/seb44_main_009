package com.main.MainProject.cart.controller;

import com.main.MainProject.cart.dto.CartDto;
import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.cart.mapper.CartMapper;
import com.main.MainProject.cart.service.CartService;
import com.main.MainProject.dto.SingleResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/cart")
@Slf4j
@Validated
public class CartController {
    private final static String CART_DEFAULT_URL = "/cart";

    private final CartService cartService;
    private final CartMapper mapper;

    public CartController(CartService cartService,
                          CartMapper mapper) {
        this.cartService = cartService;
        this.mapper = mapper;
    }

    @PatchMapping("/update/{cart-id}")
    public ResponseEntity updateCart(@PathVariable("cart-id") @Positive long cartId,
                                     @Valid @RequestBody CartDto.Patch requestBody) {
        //TODO: cartProductList mapper에서 받아와야함
        Cart cart = cartService.updateCart(cartId, mapper.cartPatchToCart(requestBody));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.cartToResponse(cart)), HttpStatus.OK);
    }

    @GetMapping("/{cart-id}")
    public ResponseEntity getCart(@PathVariable("cart-id") @Positive long cartId){
        Cart cart = cartService.findVerifiedCart(cartId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.cartToResponse(cart)), HttpStatus.OK);
    }
}
