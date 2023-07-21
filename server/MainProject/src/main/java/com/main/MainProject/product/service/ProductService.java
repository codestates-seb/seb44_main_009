package com.main.MainProject.product.service;

import com.main.MainProject.s3upload.S3Uploader;
import com.main.MainProject.exception.BusinessLogicException;
import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.product.category.entity.Category;
import com.main.MainProject.product.category.service.CategoryService;
import com.main.MainProject.product.color.service.ColorService;
import com.main.MainProject.product.entity.Product;
import com.main.MainProject.product.repository.ProductRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final CategoryService categoryService;
    private final ColorService colorService;

    private final S3Uploader s3Uploader;

    public ProductService(ProductRepository productRepository, CategoryService categoryService,
                          ColorService colorService, S3Uploader s3Uploader) {
        this.productRepository = productRepository;
        this.categoryService = categoryService;
        this.colorService = colorService;
        this.s3Uploader = s3Uploader;
    }

    public Product createProduct(Product product, Category category) {
        verifyExistProduct(product.getName());
        product.setCategory(category);
        category.addProducts(product);

        return productRepository.save(product);
    }

    public Product updateProduct(Product product, Category category, MultipartFile image) throws IOException {
        Product findProduct = findVerifiedProduct(product.getProductId());

        if(!image.isEmpty()) {
            String storedFileName = s3Uploader.upload(image, "product", findProduct.getProductId());
            findProduct.setProductImageName(storedFileName);
        }

        Optional.ofNullable(product.getName()).ifPresent(findProduct::setName);
        Optional.of(product.getCount()).ifPresent(findProduct::setCount);
        Optional.of(product.getPrice()).ifPresent(findProduct::setPrice);
        Optional.ofNullable(product.getColors()).ifPresent(findProduct::setColors);
        Optional.ofNullable(product.getSize()).ifPresent(findProduct::setSize);
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
            throw new BusinessLogicException(ExceptionCode.PRODUCT_EXISTS);
        }
    }

    public Product findVerifiedProduct(long productId) {
        Optional<Product> optionalProduct = productRepository.findById(productId);

        return optionalProduct.orElseThrow(() -> new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND));
    }

}
