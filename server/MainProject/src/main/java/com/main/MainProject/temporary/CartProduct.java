package com.main.MainProject.temporary;

import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.order.entity.Order;
import com.main.MainProject.product.entity.Product;
import com.main.MainProject.review.Review;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class CartProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartProductId;
    @Column(nullable = false)
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

    @ManyToOne
    @JoinColumn(name = "review_id")
    private Review review;
}
