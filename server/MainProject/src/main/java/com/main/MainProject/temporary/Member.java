package com.main.MainProject.temporary;

import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.order.entity.Order;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Member {
    @Id
    private Long memberId;

    private String name;

    private String phone;

    private String nickname;

    private Address address;

    @OneToOne(mappedBy = "member", cascade = CascadeType.PERSIST, orphanRemoval = true)
    private Cart cart;

    @OneToMany(mappedBy = "member", cascade = CascadeType.PERSIST, orphanRemoval = true)
    private List<Order> orderList = new ArrayList<>();
}
