package com.main.MainProject.product.entity;

import com.main.MainProject.audit.Auditable;
import com.main.MainProject.order.entity.OrderProduct;
import com.main.MainProject.product.cartProduct.CartProduct;
import com.main.MainProject.product.category.entity.Category;
import com.main.MainProject.qna.entity.Qna;

import com.main.MainProject.product.color.entity.Color;
import com.main.MainProject.review.entity.Review;
import com.main.MainProject.wishlist.entity.WishList;
import lombok.*;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Entity
@Getter
@Setter
//@Builder
//@AllArgsConstructor
@NoArgsConstructor
public class Product extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @Column(nullable = false, length = 20, unique = true)
    private String name; // 상품 이름

    @Column(nullable = false)
    private int price; // 상품 가격

    @Column(nullable = false, length = 100)
    private String content; // 상품 설명

    @Column(nullable = false)
    private int count; // 상품 재고 수량

    @Transient
    private List<String> size = new ArrayList<>(List.of("XL","L","M","S","FREE"));

    @Column
    @Enumerated(value = EnumType.STRING)
    private ProductStatus productStatus = ProductStatus.PRODUCT_ON_SALE;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<Color> colors = new ArrayList<>();

    @Column
    @Enumerated(value = EnumType.STRING)
    private PersonalColor personalColor;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "CATEGORY_ID")
    private Category category;


    @OneToMany(mappedBy = "product")
    private List<Qna> qnaList = new ArrayList<>();

    public enum ProductStatus {
        PRODUCT_ON_SALE(1, "상품 판매중"),
        PRODUCT_SOLD_OUT(2, "상품 품절");

        @Getter
        private int statusNumber;

        @Getter
        private String description;

        ProductStatus(int statusNumber, String description) {
            this.statusNumber = statusNumber;
            this.description = description;
        }
    }

    public enum PersonalColor {
        COOL_TONE("쿨톤"),
        WORM_TONE("웜톤");

        @Getter
        private String description;

        PersonalColor(String description) {
            this.description = description;
        }
    }

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CartProduct> cartProductList = new ArrayList<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviewList = new ArrayList<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<OrderProduct> orderProductList = new ArrayList<>();

    @ManyToMany(mappedBy = "products")
    private List<WishList> wishLists;
}
