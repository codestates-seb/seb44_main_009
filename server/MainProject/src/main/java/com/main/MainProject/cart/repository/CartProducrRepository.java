package com.main.MainProject.cart.repository;

import com.main.MainProject.product.cartProduct.CartProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartProducrRepository extends JpaRepository<CartProduct, Long> {
}
