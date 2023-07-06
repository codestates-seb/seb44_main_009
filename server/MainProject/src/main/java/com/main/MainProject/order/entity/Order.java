package com.main.MainProject.order.entity;

import com.main.MainProject.audit.Auditable;
import com.main.MainProject.address.Address;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity(name = "ORDERS")
public class Order extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private OrderStatus orderStatus= OrderStatus.BEFORE_PAYMENT;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private Reviewstatus reviewstatus = Reviewstatus.IMPOSSIBLE_REVIEW;

    @ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;

//    @ManyToOne
//    @JoinColumn(name = "member_id")
//    private Member member;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderProduct> orderProductList = new ArrayList<>();

    public void addOrderProduct(OrderProduct orderProduct) {
        orderProduct.setOrder(this);
        orderProductList.add(orderProduct);
    }

    public void removeOrderProduct(OrderProduct orderProduct) {
        orderProduct.setOrder(null);
        orderProductList.remove(orderProduct);
    }

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

    public enum OrderStatus{
        BEFORE_PAYMENT(1, "결제 미완료"),
        AFTER_PAYMENT(2, "결제 완료"),
        PREPARING_PRODUCT(3, "상품 준비중"),
        SHIPPING_START(4, "배송 시작"),
        PRODUCT_SHIPPING(5, "배송 중"),
        SHIPPING_COMPLIETED(6, "배송 완료"),
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
