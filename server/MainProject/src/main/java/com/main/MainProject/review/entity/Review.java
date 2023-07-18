package com.main.MainProject.review.entity;

import com.main.MainProject.audit.Auditable;
import com.main.MainProject.member.entity.Member;
import com.main.MainProject.order.entity.Order;
import com.main.MainProject.order.entity.OrderProduct;
import com.main.MainProject.product.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Review extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @Column(length = 200, nullable = false)
    private String content;

    @Enumerated(value = EnumType.STRING)
    private EnjoyStatus enjoyStatus = EnjoyStatus.YES;

    @Enumerated(value = EnumType.STRING)
    private ProductPersonalColorStatus productPersonalColorStatus = ProductPersonalColorStatus.COOL;

    @Enumerated(value = EnumType.STRING)
    private SizeStatus sizeStatus = SizeStatus.FIT;

    @Enumerated(value = EnumType.STRING)
    private ProductColorStatus productColorStatus = ProductColorStatus.DISPLAY;

    public enum EnjoyStatus{

        NO,
        YES;
    }

    public enum ProductPersonalColorStatus{
        COOL,
        WARM;
    }

    public enum SizeStatus{
        SMALL,
        FIT,
        BIG;
    }

    public enum ProductColorStatus{
        BRIGHT,
        DISPLAY,
        DARK;

    }

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private int vote;

}
