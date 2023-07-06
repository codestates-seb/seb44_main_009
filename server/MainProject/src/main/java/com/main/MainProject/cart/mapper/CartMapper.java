package com.main.MainProject.cart.mapper;


import com.main.MainProject.cart.dto.CartDto;
import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.product.cartProduct.CartProduct;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CartMapper {
    Cart cartPatchToCart(CartDto.Patch requestBody);

    default CartDto.Response cartToResponse(Cart cart){
        if ( cart == null ) {
            return null;
        }

        List<CartDto.cartProductResponse> cartProductList = cart.getCartProductList().stream()
                .map(cartProduct -> cartProductToCartProductResponse(cartProduct))
                .collect(Collectors.toList());

        int totalPrice = cart.getCartProductList().stream()
                .filter(cartProduct -> cartProduct != null && cartProduct.getProduct() != null)
                .mapToInt(cartProduct -> cartProduct.getProduct().getPrice() * cartProduct.getQuantity())
                .sum();

        CartDto.Response response = new CartDto.Response( cartProductList, totalPrice );

        return response;
    }

    default CartDto.cartProductResponse cartProductToCartProductResponse(CartProduct cartProduct){
        if ( cartProduct == null ) {
            return null;
        }
        int quentity = 0;

        quentity = cartProduct.getQuantity();

        String productName =  cartProduct.getProduct().getName();
        int totalProductPrice = cartProduct.getProduct().getPrice() * quentity;

        CartDto.cartProductResponse cartProductResponse =
                new CartDto.cartProductResponse( productName, quentity, totalProductPrice );

        return cartProductResponse;
    }
}
