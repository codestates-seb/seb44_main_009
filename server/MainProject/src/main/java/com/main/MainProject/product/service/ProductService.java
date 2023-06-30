package com.main.MainProject.product.service;

import com.main.MainProject.product.domain.Product;
import com.main.MainProject.product.repository.ProductRepository;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    private ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product createProduct(Product product) {

        
    }
}
