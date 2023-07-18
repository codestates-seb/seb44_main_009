package com.main.MainProject.cart.mapper;


import com.main.MainProject.cart.dto.CartDto;
import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.product.cartProduct.CartProduct;
import com.main.MainProject.product.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CartMapper {

    @Mapping(target = "quantity", ignore = true)
    CartProduct cartPostDtoToCartProduct(CartDto.Post cartPost);

//    Cart cartPatchToCart(CartDto.Patch requestBody);


    default CartDto.Response cartToResponse(Cart cart){
        if ( cart == null ) {
            return null;
        }

        List<CartDto.cartProductResponse> cartProductList = cart.getCartProductList().stream()
                .map(cartProduct -> cartProductToCartProductResponse(cartProduct))
                .collect(Collectors.toList());

        int totalProductPrice = cart.getCartProductList().stream()
                .filter(cartProduct -> cartProduct != null && cartProduct.getProduct() != null)
                .mapToInt(cartProduct -> cartProduct.getProduct().getPrice() * cartProduct.getQuantity())
                .sum();

        int shippingCost = 0;
        if(cartProductList.size() > 0){
            shippingCost = 3000;
        }

        int totalPrice = totalProductPrice + shippingCost;

        CartDto.Response response = new CartDto.Response( cartProductList, shippingCost, totalProductPrice, totalPrice );

        return response;
    }

    default CartDto.cartProductResponse cartProductToCartProductResponse(CartProduct cartProduct){
        if ( cartProduct == null ) {
            return null;
        }
        int quentity = 0;

        quentity = cartProduct.getQuantity();
        Product.PersonalColor personalColor = cartProduct.getProduct().getPersonalColor();

        String color = cartProduct.getColor();
        String size = cartProduct.getSize();
        long cartProductId = cartProduct.getCartProductId();
        String productName =  cartProduct.getProduct().getName();
        int productPrice = cartProduct.getProduct().getPrice();
        int totalProductPrice = cartProduct.getProduct().getPrice() * quentity;

        CartDto.cartProductResponse cartProductResponse =
                new CartDto.cartProductResponse( cartProductId,productName, quentity, size, color,personalColor, productPrice, totalProductPrice );

        return cartProductResponse;
    }
}
