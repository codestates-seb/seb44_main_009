package com.main.MainProject.cart.service;

import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.cart.repository.CartRepository;
import com.main.MainProject.exception.BusinessLogicException;
import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.temporary.CartProduct;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    private final CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    //TODO: 멤버 생성시 사용
    public void createCart(){
        Cart cart = new Cart();
        cartRepository.save(cart);
    }

    public Cart updateCart(long cartId, Cart cart) {
        Cart findCart = findVerifiedCart(cartId);

        if (!cart.getCartProductList().isEmpty()) {
            List<CartProduct> findCartProductList = findCart.getCartProductList();
            findCartProductList.removeIf(cart.getCartProductList()::contains);
            findCartProductList.addAll(cart.getCartProductList());
        }

        cartRepository.save(findCart);
        return findCart;
    }

    public Cart findVerifiedCart(long cartId){
        Optional<Cart> optionalCart =
                cartRepository.findById(cartId);
        Cart findCart = optionalCart.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.CART_NOT_FOUND));
        return findCart;
    }

}
