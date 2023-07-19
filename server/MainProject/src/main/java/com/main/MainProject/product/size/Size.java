package com.main.MainProject.product.size;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Embeddable;

@Getter
@Setter
@Embeddable // DB에서 단독으로 조회 불가능.
public class Size {
    private String size;
//    private int count; // 재고 수량
}
