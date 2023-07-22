package com.main.MainProject.product.category.entity;

import com.main.MainProject.product.entity.Product;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
//@Builder
//@AllArgsConstructor
@NoArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;

    @Column(nullable = false, length = 20)
    private String name;

    @Column(nullable = false, length = 20)
    private String slug;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
//    @Builder.Default
    private List<Product> products = new ArrayList<>();

    public void addProducts(Product product) {
        this.products.add(product);
    }
}