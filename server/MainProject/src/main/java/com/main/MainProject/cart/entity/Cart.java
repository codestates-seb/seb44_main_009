package com.main.MainProject.cart.entity;

import com.main.MainProject.member.entity.Member;
import com.main.MainProject.product.cartProduct.CartProduct;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Entity
@Getter
@Setter
public class Cart {
    @Id
    private Long cartId;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CartProduct> cartProductList = new ArrayList<>();

    public Cart(List<CartProduct> cartProductList) {
        this.cartProductList = cartProductList;
    }

    @OneToOne
    @JoinColumn(name = "member_id")
    private Member member;

}
