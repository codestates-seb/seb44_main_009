package com.main.MainProject.order.entity;

import com.main.MainProject.temporary.Member;
import com.main.MainProject.temporary.OrderProduct;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Value;
import org.hibernate.procedure.spi.ParameterRegistrationImplementor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity(name = "ORDERS")
public class Order {

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
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderProduct> orderProductList = new ArrayList<>();

    private enum Reviewstatus{
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
        BEFORE_PAYMENT("결제 미완료"),
        AFTER_PAYMENT("결제 완료"),
        PREPARING_PRODUCT("상품 준비중"),
        SHIPPING_START("배송 시작"),
        PRODUCT_SHIPPING("배송 중"),
        SHIPPING_COMPLIETED("배송 완료");

        @Getter
        private String status;

        OrderStatus(String status) {
            this.status = status;
        }
    }

}
