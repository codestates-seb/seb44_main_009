package com.main.MainProject.cart.service;

import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.cart.repository.CartRepository;
import com.main.MainProject.exception.BusinessLogicException;
import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.member.entity.Member;
import com.main.MainProject.product.cartProduct.CartProduct;
import com.main.MainProject.product.cartProduct.repository.CartProductRepository;
import com.main.MainProject.product.entity.Product;
import com.main.MainProject.product.service.ProductService;
import org.springframework.stereotype.Service;
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
    private final CartProductRepository cartProductRepository;

    public CartService(CartRepository cartRepository, ProductService productService, CartProductRepository cartProductRepository) {
        this.cartRepository = cartRepository;
        this.productService = productService;
        this.cartProductRepository = cartProductRepository;
    }

    public void addToCartItem(long cartId, CartProduct cartProduct, int quantity) {
        Product product = productService.findProduct(cartProduct.getProductId());
        cartProduct.setProduct(product);
        Cart cart = findVerifiedCart(cartId);
        cartProduct.setCart(cart);

        cart.addToCart(cartProduct, quantity);
        cartRepository.save(cart);
    }

    public void updateCartItem(long cartId, long cartProductId, int quantity) {
        Cart cart = findVerifiedCart(cartId);
        CartProduct cartProduct = findVerifiedCartItem(cartProductId);
        cartProduct.setQuantity(quantity);
        cart.updateCartProduct(cartProduct);

        cartRepository.save(cart);
    }

    public void deleteCartItem(long cartId, long cartProductId) {
        Cart cart = findVerifiedCart(cartId);
        CartProduct cartProduct = findVerifiedCartItem(cartProductId);

        cartProductRepository.delete(cartProduct);
        cartRepository.save(cart);
    }

    public Cart findCart(long cartId) {
        return findVerifiedCart(cartId);
    }

    public void createCart(Member member) {
        Cart cart = new Cart();
        cart.setMember(member);
        cartRepository.save(cart);
    }
  
    public Cart addProductToCart(CartProduct cartProduct, int quantity) {

        Product product = productService.findVerifiedProduct(cartProduct.getProductId());
        cartProduct.setProduct(product);

        Cart cart = findVerifiedCart(cartProduct.getCart().getCartId());
        cartProduct.setCart(cart);

        cart.addToCart(cartProduct, quantity);

        return cartRepository.save(cart);
    }

    public Cart findVerifiedCart(long cartId){
        Optional<Cart> optionalCart =
                cartRepository.findById(cartId);
        Cart findCart = optionalCart.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.CART_NOT_FOUND));
        return findCart;
    }


    public void cartClear(Cart cart){
        cart.getCartProductList().clear();
        cartRepository.save(cart);
    }

    private CartProduct findVerifiedCartItem(long cartProductId) {
        Optional<CartProduct> optionalCartProduct = cartProductRepository.findById(cartProductId);
        return optionalCartProduct.orElseThrow(() -> new RuntimeException("존재하지 않는 상품입니다."));
    }
}


