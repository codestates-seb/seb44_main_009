package com.main.MainProject.wishlist.entity;

import com.main.MainProject.member.entity.Member;
import com.main.MainProject.product.entity.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class WishList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wishlistId;

    @OneToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToMany
    @JoinTable(name = "WISHLIST_PRODUCT",
               joinColumns = @JoinColumn(name = "WISHLIST_ID"),
                inverseJoinColumns = @JoinColumn(name = "PRODUCT_ID"))
    private List<Product> products = new ArrayList<>();

    @Transient
    private Long memberId;

    @Transient
    private Long productId;
}
