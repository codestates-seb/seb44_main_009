package com.main.MainProject.cart.entity;

import com.main.MainProject.audit.Auditable;
import com.main.MainProject.temporary.CartProduct;
import com.main.MainProject.temporary.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Entity
@Getter
public class Cart {
    @Id
    private Long cartId;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CartProduct> cartProductList = new ArrayList<>();


    public Cart(List<CartProduct> cartProductList) {
        this.cartProductList = cartProductList;
    }

    //TODO: 회원과 연관관계 추가하기
//    @OneToOne
//    @JoinColumn(name = "member_id")
//    private Member member;
}
