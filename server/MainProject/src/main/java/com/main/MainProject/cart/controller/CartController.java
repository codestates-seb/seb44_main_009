package com.main.MainProject.cart.controller;

import com.main.MainProject.cart.dto.CartDto;
import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.cart.mapper.CartMapper;
import com.main.MainProject.cart.service.CartService;
import com.main.MainProject.dto.SingleResponseDto;
import com.main.MainProject.product.cartProduct.CartProduct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

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

    @PostMapping("/{cart-id}/{product-id}/{quantity}")
    public ResponseEntity postCartProduct(@PathVariable("cart-id") @Positive long cartId,
                                          @PathVariable("product-id") @Positive long productId,
                                          @PathVariable("quantity") @Positive int quantity) {
        Cart cart = cartService.createCartProduct(cartId, productId, quantity);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.cartToResponse(cart)), HttpStatus.OK);
    }

    @PatchMapping("/update/{cart-id}")
    public ResponseEntity updateCart(@PathVariable("cart-id") @Positive long cartId,
                                     @Valid @RequestBody CartDto.Patch requestBody) {
        //TODO: cartService.updateCart 정식 구현 이후 수정해야함
        Cart cart = cartService.updateCart(cartId, requestBody);
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
