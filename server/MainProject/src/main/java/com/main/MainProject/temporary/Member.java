package com.main.MainProject.temporary;

import com.main.MainProject.order.entity.Order;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Order> orderList = new ArrayList<>();
}
