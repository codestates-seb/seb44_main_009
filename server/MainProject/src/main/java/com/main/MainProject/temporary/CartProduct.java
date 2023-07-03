package com.main.MainProject.temporary;

import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.order.entity.Order;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class CartProduct {
    @Id
    private Long productId;

    private int quentity;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    private Cart cart;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;
}
