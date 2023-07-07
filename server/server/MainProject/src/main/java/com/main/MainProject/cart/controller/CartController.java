package com.main.MainProject.cart.controller;

import com.main.MainProject.cart.dto.CartDto;
import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.cart.mapper.CartMapper;
import com.main.MainProject.cart.service.CartService;
import com.main.MainProject.dto.SingleResponseDto;
import com.main.MainProject.member.service.MemberService;
import com.main.MainProject.product.cartProduct.CartProduct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import static com.main.MainProject.cart.dto.CartDto.*;

@RestController
@RequestMapping("/carts")
@Slf4j
@Validated
public class CartController {
    private final static String CART_DEFAULT_URL = "/carts";

    private final CartService cartService;
    private final MemberService memberService;
    private final CartMapper mapper;

    public CartController(CartService cartService, MemberService memberService, CartMapper mapper) {
        this.cartService = cartService;
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping("/{cart-id}")
    public ResponseEntity<?> postCartProduct(@PathVariable("cart-id") @Positive long cartId,
                                             @RequestBody Post requestBody) {
        requestBody.setCartId(cartId);
        CartProduct cartProduct = mapper.cartPostDtoToCartProduct(requestBody);
        Cart cart = cartService.addProductToCart(cartProduct, requestBody.getQuantity());

        return new ResponseEntity<>(new SingleResponseDto<>("장바구니에 담겼습니다!"), HttpStatus.OK);
    }

    @PatchMapping("/update/{cart-id}")
    public ResponseEntity patchCartProduct(@PathVariable("cart-id") @Positive long cartId,
                                     @Valid @RequestBody Patch requestBody) {
        //TODO: cartProductList mapper에서 받아와야함
        Cart cart = cartService.updateCart(cartId, mapper.cartPatchToCart(requestBody));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.cartToResponse(cart)), HttpStatus.OK);
    }

    @GetMapping("/{cart-id}")
    public ResponseEntity getCartProduct(@PathVariable("cart-id") @Positive long cartId){
        Cart cart = cartService.findVerifiedCart(cartId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.cartToResponse(cart)), HttpStatus.OK);
    }
}
