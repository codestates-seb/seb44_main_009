package com.main.MainProject.order.entity;

import com.main.MainProject.audit.Auditable;
import com.main.MainProject.address.Address;
import com.main.MainProject.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity(name = "orders")
public class Order extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private OrderStatus orderStatus= OrderStatus.BEFORE_PAYMENT;


    @OneToOne(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private Address address;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderProduct> orderProductList = new ArrayList<>();

    public enum OrderStatus{
        BEFORE_PAYMENT(1, "결제 미완료"),
        AFTER_PAYMENT(2, "결제 완료"),
        PREPARING_PRODUCT(3, "상품 준비중"),
        SHIPPING_START(4, "배송 시작"),
        PRODUCT_SHIPPING(5, "배송 중"),
        SHIPPING_COMPLETED(6, "배송 완료"),
        ORDER_CANCEL(7, "취소된 주문");

        @Getter
        private String status;

        @Getter
        private int stepNumber;

        OrderStatus(int stepNumber, String status) {
            this.status = status;
            this.stepNumber = stepNumber;
        }
    }

}
