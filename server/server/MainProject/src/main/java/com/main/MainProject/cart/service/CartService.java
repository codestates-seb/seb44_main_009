package com.main.MainProject.cart.service;

import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.cart.repository.CartRepository;
import com.main.MainProject.exception.BusinessLogicException;
import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.member.service.MemberService;
import com.main.MainProject.product.cartProduct.CartProduct;
import com.main.MainProject.product.entity.Product;
import com.main.MainProject.product.repository.ProductRepository;
import com.main.MainProject.product.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    private final CartRepository cartRepository;
    private final ProductService productService;


    public CartService(CartRepository cartRepository, ProductService productService) {
        this.cartRepository = cartRepository;
        this.productService = productService;
    }

    //TODO: 멤버 생성시 사용
    public void createCart(){
        Cart cart = new Cart();
        cartRepository.save(cart);
    }

    public Cart addProductToCart(CartProduct cartProduct, int quantity) {

        Product product = productService.findVerifiedProduct(cartProduct.getProductId());
        cartProduct.setProduct(product);

        Cart cart = findVerifiedCart(cartProduct.getCartId());
        cartProduct.setCart(cart);

        cart.addToCart(cartProduct, quantity);

        return cartRepository.save(cart);
    }

//    public List<CartProduct> findCartProducts(long cartId) {
//        findVerifiedCart(cartId);
//        List<CartProduct> cartProductList = cartRepository.findCartProductListById(cartId);
//
//        return cartProductList;
//    }

    public Cart updateCart(long cartId, Cart cart) {
        Cart findCart = findVerifiedCart(cartId);

        if (!cart.getCartProductList().isEmpty()) {
            List<CartProduct> findCartProductList = findCart.getCartProductList();
            findCartProductList.removeIf(cart.getCartProductList()::contains);
            findCartProductList.addAll(cart.getCartProductList());
        }

        return cartRepository.save(findCart);
    }

    public Cart findVerifiedCart(long cartId){
        Optional<Cart> optionalCart =
                cartRepository.findById(cartId);
        Cart findCart = optionalCart.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.CART_NOT_FOUND));
        return findCart;
    }

}
