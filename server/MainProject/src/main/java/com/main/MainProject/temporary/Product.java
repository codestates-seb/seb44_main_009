package com.main.MainProject.temporary;

import com.main.MainProject.order.entity.Order;

import javax.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    private String name;
    private int price;
    private String coloer;

    private String content;
    private int count;

    @ManyToOne
    private Cart cart;

    @ManyToOne
    private Order order;

    @ManyToOne()
    private Product product;
}
