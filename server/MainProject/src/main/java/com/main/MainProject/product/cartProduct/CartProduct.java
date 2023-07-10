package com.main.MainProject.product.cartProduct;


import com.main.MainProject.cart.entity.Cart;

import com.main.MainProject.order.entity.Order;
import com.main.MainProject.product.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Positive;

@Getter
@NoArgsConstructor
@Setter
@Entity
public class CartProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartProductId;

    @Transient
    private Long productId;

//    @Transient
//    private Long cartId;

    @Column(nullable = false)
    private int quantity;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    private Cart cart;

//    public CartProduct(int quantity, Product product, Cart cart) {
//        this.quantity = quantity;
//        this.product = product;
//        this.cart = cart;
//    }
}
