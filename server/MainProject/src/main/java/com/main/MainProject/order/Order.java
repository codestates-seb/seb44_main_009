package com.main.MainProject.order;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Value;
import org.hibernate.procedure.spi.ParameterRegistrationImplementor;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private OrderStatus orderStatus= OrderStatus.ORDER_START;
    public enum OrderStatus{
        ORDER_START("주문 시작"),
        ORDER_PAYING("결제 중");

        @Getter
        private String status;

        OrderStatus(String status) {
            this.status = status;
        }
    }

}
