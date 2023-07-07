package com.main.MainProject.cart.entity;

import com.main.MainProject.member.entity.Member;
import com.main.MainProject.product.cartProduct.CartProduct;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartId;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CartProduct> cartProductList = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void addToCart(CartProduct cartProduct, int quantity) {
        CartProduct existProduct = findCartProduct(cartProduct);
        if (existProduct != null) {
            existProduct.setQuantity(existProduct.getQuantity() + quantity);
        } else {
            cartProduct.setQuantity(quantity);
            cartProductList.add(cartProduct);
        }
    }

    public CartProduct findCartProduct(CartProduct cartProduct) {
        return cartProductList.stream()
                .filter(cartItem -> cartItem.getProduct().equals(cartProduct))
                .findFirst()
                .orElse(null);
    }
}

