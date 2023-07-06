package com.main.MainProject.cart.mapper;


import com.main.MainProject.cart.dto.CartDto;
import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.order.entity.OrderProduct;
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

        List<CartDto.cartProductResponse> cartProductList = cart.getOrderProductList().stream()
                .map(cartProduct -> cartProductToCartProductResponse(cartProduct))
                .collect(Collectors.toList());

        int totalPrice = cart.getOrderProductList().stream()
                .filter(cartProduct -> cartProduct != null && cartProduct.getProduct() != null)
                .mapToInt(cartProduct -> cartProduct.getProduct().getPrice() * cartProduct.getQuentity())
                .sum();

        CartDto.Response response = new CartDto.Response( cartProductList, totalPrice );

        return response;
    }

    default CartDto.cartProductResponse cartProductToCartProductResponse(OrderProduct orderProduct){
        if ( orderProduct == null ) {
            return null;
        }
        int quentity = 0;

        quentity = orderProduct.getQuentity();

        String productName =  orderProduct.getProduct().getName();
        int totalProductPrice = orderProduct.getProduct().getPrice() * quentity;

        CartDto.cartProductResponse cartProductResponse =
                new CartDto.cartProductResponse( productName, quentity, totalProductPrice );

        return cartProductResponse;
    }
}
