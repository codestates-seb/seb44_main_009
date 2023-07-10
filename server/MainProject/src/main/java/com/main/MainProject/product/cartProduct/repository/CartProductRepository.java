package com.main.MainProject.product.cartProduct.repository;

import com.main.MainProject.product.cartProduct.CartProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartProductRepository extends JpaRepository<CartProduct, Long> {
}
