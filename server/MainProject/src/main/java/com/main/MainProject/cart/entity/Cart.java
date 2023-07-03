package com.main.MainProject.cart.entity;

import com.main.MainProject.audit.Auditable;
import com.main.MainProject.temporary.CartProduct;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Entity
@Getter
public class Cart {
    @Id
    private Long cartId;

    private List<CartProduct> cartProductList = new ArrayList<>();

}
