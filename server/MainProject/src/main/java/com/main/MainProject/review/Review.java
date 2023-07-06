package com.main.MainProject.review;

import com.main.MainProject.audit.Auditable;
import com.main.MainProject.order.entity.OrderProduct;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class Review extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    private String title;

    private String content;

    @Min(0)
    @Max(5)
    private int score;

//    @ManyToOne
//    @JoinColumn(name = "member_id")
//    private Member member;

    private OrderProduct orderProduct;

}
