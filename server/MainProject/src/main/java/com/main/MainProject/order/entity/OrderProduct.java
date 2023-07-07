package com.main.MainProject.order.entity;

import com.main.MainProject.product.entity.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class OrderProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderProductId;
    @Column(nullable = false)
    private int quantity;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private Reviewstatus reviewstatus = Reviewstatus.IMPOSSIBLE_REVIEW;

    public enum Reviewstatus{
        IMPOSSIBLE_REVIEW("리뷰 작성 불가"),
        POSSIBLE_REVIEW("리뷰 작성 가능"),
        REVIEW_WIITE("리뷰 작성 완료");

        @Getter
        private String status;

        Reviewstatus(String status) {
            this.status = status;
        }
    }

    public OrderProduct(int quantity, Product product) {
        this.quantity = quantity;
        this.product = product;
    }
}

