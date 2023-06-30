package com.main.MainProject.product.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
    @Column(nullable = false, length = 20, unique = true)
    private String name; // 상품 이름

    @Column(nullable = false)
    private int price; // 상품 가격

    @Column(nullable = false, length = 20)
    private String color; // 상품 색상

    @Column(nullable = false, length = 100)
    private String content; // 상품 설명

    @Column(nullable = false)
    private int count; // 상품 재고 수량

    @Column
    @Enumerated(value = EnumType.STRING)
    private ProductStatus productStatus = ProductStatus.PRODUCT_ON_SALE;

    @ManyToOne
    @JoinColumn(name = "CATEGORY_ID")
    private Category category;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

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
}
