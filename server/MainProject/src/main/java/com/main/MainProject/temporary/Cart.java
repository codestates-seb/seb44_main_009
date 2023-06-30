package com.main.MainProject.temporary;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Cart {
    @Id
    private Long cartId;

    private int totalPrice;

    private List<OrderProduct> orderProductList = new ArrayList<>();

}
