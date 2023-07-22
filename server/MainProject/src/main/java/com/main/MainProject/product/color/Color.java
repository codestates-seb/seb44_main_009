package com.main.MainProject.product.color;

import com.main.MainProject.product.entity.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Getter
@Setter
@Embeddable
public class Color {

    private String name;
}
