package com.main.MainProject.product.service;

import com.main.MainProject.product.category.entity.Category;
import com.main.MainProject.product.category.repository.CategoryRepository;
import com.main.MainProject.product.category.service.CategoryService;
import com.main.MainProject.product.entity.Product;
import com.main.MainProject.product.repository.ProductRepository;
import com.main.MainProject.qna.entity.Qna;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final CategoryService categoryService;

    public ProductService(ProductRepository productRepository, CategoryRepository categoryRepository, CategoryService categoryService) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.categoryService = categoryService;
    }

    public Product createProduct(Product product, Category category) {
        verifyExistProduct(product.getName());
        product.setCategory(category);
        category.addProducts(product);

        return productRepository.save(product);
    }

    public Product updateProduct(Product product, Category category) {
        Product findProduct = findVerifiedProduct(product.getProductId());

        Optional.ofNullable(product.getName()).ifPresent(findProduct::setName);
        Optional.of(product.getCount()).ifPresent(findProduct::setCount);
        Optional.of(product.getPrice()).ifPresent(findProduct::setPrice);
        Optional.ofNullable(product.getColor()).ifPresent(findProduct::setColor);
        Optional.ofNullable(product.getContent()).ifPresent(findProduct::setContent);
        Optional.ofNullable(category.getCategoryId()).ifPresent(categoryId -> findProduct.setCategory(categoryService.findVerifiedCategory(categoryId)));
        Optional.ofNullable(product.getPersonalColor()).ifPresent(findProduct::setPersonalColor);
        Optional.ofNullable(product.getProductStatus()).ifPresent(findProduct::setProductStatus);

        return productRepository.save(findProduct);
    }

    public Product findProduct(long productId) {

        return findVerifiedProduct(productId);
    }

    public Page<Product> findProducts(int page, int size) {

        return productRepository.findAll(PageRequest.of(page, size));
    }

    public void deleteProduct(long productId) {
        Product findProduct = findVerifiedProduct(productId);
        findProduct.setProductStatus(Product.ProductStatus.PRODUCT_SOLD_OUT);

        productRepository.save(findProduct);
    }

    public void verifyExistProduct(String name) {
        Optional<Product> optionalProduct = productRepository.findByName(name);

        if (optionalProduct.isPresent()) {
            throw new RuntimeException("이미 존재하는 상품입니다.");
        }
    }

    public Product findVerifiedProduct(long productId) {
        Optional<Product> optionalProduct = productRepository.findById(productId);

        return optionalProduct.orElseThrow(() -> new RuntimeException("존재하지 않는 상품입니다."));
    }

    public List<Product> getProductByCategory(Category category) {
        return productRepository.findByCategory(category);
    }

}
