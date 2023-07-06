package com.main.MainProject.cart.service;

import com.main.MainProject.cart.dto.CartDto;
import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.cart.repository.CartProducrRepository;
import com.main.MainProject.cart.repository.CartRepository;
import com.main.MainProject.exception.BusinessLogicException;
import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.member.entity.Member;
import com.main.MainProject.order.entity.OrderProduct;
import com.main.MainProject.product.cartProduct.CartProduct;
import com.main.MainProject.product.entity.Product;
import com.main.MainProject.product.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CartService {
    private final CartRepository cartRepository;
    private final ProductService productService;
    private final CartProducrRepository cartProducrRepository;

    public CartService(CartRepository cartRepository, ProductService productService,
                       CartProducrRepository cartProducrRepository) {
        this.cartRepository = cartRepository;
        this.productService = productService;
        this.cartProducrRepository = cartProducrRepository;
    }

    public Cart createCart(Member member){
        Cart cart = new Cart(member);
        return cartRepository.save(cart);
    }

    public Cart createCartProduct(long cartId, long productId, int quantity){
        Cart findCart = findVerifiedCart(cartId);
        Product findProduct = productService.findVerifiedProduct(productId);
        CartProduct cartProduct = new CartProduct(quantity, findProduct, findCart);
        cartProducrRepository.save(cartProduct);

        return cartRepository.save(findCart);
    }

    public Cart updateCart(long cartId, CartDto.Patch patch) {
        Cart findCart = findVerifiedCart(cartId);

        List<CartProduct> cartProductList = patch.getCartProductDtoList().stream()
                .map(cartProductDto -> convertDto(cartProductDto, findCart)).collect(Collectors.toList());
        if (!cartProductList.isEmpty()) {
            List<CartProduct> findCartCartProductList = findCart.getCartProductList();
            findCartCartProductList.removeIf(cartProductList::contains);
            findCartCartProductList.addAll(cartProductList);
        }

        cartRepository.save(findCart);
        return findCart;
    }


    //임시
    private CartProduct convertDto(CartDto.cartProductDto cartProductDto, Cart cart){
        Product findProduct = productService.findVerifiedProduct(cartProductDto.getProductId());
        CartProduct cartProduct = new CartProduct(cartProductDto.getQuantity(), findProduct, cart);
        return cartProduct;
    }

    //카트 비우기
    public void cartClear(Cart cart){
        cart.getCartProductList().clear();
        cartRepository.save(cart);
    }

    public Cart findVerifiedCart(long cartId){
        Optional<Cart> optionalCart =
                cartRepository.findById(cartId);
        Cart findCart = optionalCart.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.CART_NOT_FOUND));
        return findCart;
    }

}
