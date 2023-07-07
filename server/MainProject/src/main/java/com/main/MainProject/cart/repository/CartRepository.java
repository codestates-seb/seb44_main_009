package com.main.MainProject.cart.repository;

import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.product.cartProduct.CartProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
//    List<CartProduct> findCartProductListById(long cartId);
}
