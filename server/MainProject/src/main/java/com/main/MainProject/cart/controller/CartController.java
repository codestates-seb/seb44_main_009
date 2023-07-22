package com.main.MainProject.cart.controller;

import com.main.MainProject.auth.interceptor.JwtInterceptor;
import com.main.MainProject.cart.dto.CartDto;
import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.cart.mapper.CartMapper;
import com.main.MainProject.cart.service.CartService;
import com.main.MainProject.dto.SingleResponseDto;
import com.main.MainProject.product.cartProduct.CartProduct;
import com.main.MainProject.member.service.MemberService;
import com.main.MainProject.product.cartProduct.CartProduct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/carts")
@Validated
public class CartController {

    private final CartMapper mapper;
    private final CartService cartService;

    public CartController(CartMapper mapper, CartService cartService) {
        this.mapper = mapper;
        this.cartService = cartService;
    }

    @PostMapping("/items")
    public ResponseEntity<?> postCartItem(@RequestBody CartDto.Post requestBody) {
        long memberId = JwtInterceptor.getAuthenticatedMemberId();
        long cartId = memberId;

        requestBody.setCartId(cartId);
        CartProduct cartProduct = mapper.cartPostDtoToCartProduct(requestBody);
        cartService.addToCartItem(cartId, cartProduct, requestBody.getQuantity());

        return ResponseEntity.ok("와! 드디어 상품이 담겼습니다!");
    }

    @GetMapping()
    public ResponseEntity<?> getCart() {
        long memberId = JwtInterceptor.getAuthenticatedMemberId();
        long cartId = memberId;

        Cart cart = cartService.findCart(cartId);

        return new ResponseEntity<>(mapper.cartToResponse(cart),HttpStatus.OK);
    }

    @PatchMapping("/items/{item-id}")
    public ResponseEntity<?> patchCartItem(@PathVariable("item-id") long cartProductId,
                                           @RequestParam("quantity") @Positive int quantity) {
        long memberId = JwtInterceptor.getAuthenticatedMemberId();
        long cartId = memberId;

        cartService.updateCartItem(cartId, cartProductId, quantity);

        return ResponseEntity.ok("상품 수량이 변경되었습니다.");
    }

    @DeleteMapping("/items/{item-id}")
    public ResponseEntity deleteItem(@PathVariable("item-id") long cartProductId) {
        long memberId = JwtInterceptor.getAuthenticatedMemberId();
        long cartId = memberId;

        cartService.deleteCartItem(cartId, cartProductId);

        return ResponseEntity.noContent().build();
    }
}
