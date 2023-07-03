package com.main.MainProject.cart.entity;

import com.main.MainProject.temporary.CartProduct;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Cart {
    @Id
    private Long cartId;

    private int totalPrice;

    private List<CartProduct> cartProductList = new ArrayList<>();

}
