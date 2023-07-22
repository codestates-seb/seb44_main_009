package com.main.MainProject.product.controller;

import com.main.MainProject.product.category.entity.Category;
import com.main.MainProject.product.category.service.CategoryService;
import com.main.MainProject.product.entity.Product;
import com.main.MainProject.product.mapper.ProductMapper;
import com.main.MainProject.product.service.ProductService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.io.IOException;
import java.util.List;

import static com.main.MainProject.product.dto.ProductDto.*;

@RestController
@RequestMapping("/products")
@Validated
public class ProductController {

    private final ProductService productService;
    private final CategoryService categoryService;
    private final ProductMapper mapper;

    public ProductController(ProductService productService, CategoryService categoryService, ProductMapper mapper) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity<?> postProduct(@Valid @RequestBody ProductPostDto requestBody) {
        Category category = categoryService.findVerifiedCategory(requestBody.getCategoryId());
        Product product = productService.createProduct(mapper.productPostDtoToProduct(requestBody), category);

        return new ResponseEntity<>(mapper.productToProductResponseDto(product), HttpStatus.CREATED);
    }

    @PatchMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<?> patchProduct(@Positive @RequestParam long productId,
                                          @Valid @RequestPart ProductPatchDto requestBody,
                                          @RequestPart MultipartFile image) throws IOException {
        requestBody.setProductId(productId);
        Category category = categoryService.findVerifiedCategory(requestBody.getCategoryId());
        Product product = productService.updateProduct(mapper.productPatchDtoToProduct(requestBody), category, image);

        return new ResponseEntity<>(mapper.productToProductResponseDto(product), HttpStatus.OK);
    }

    @GetMapping("/{product-id}")
    public ResponseEntity<?> getProduct(@PathVariable("product-id") @Positive long productId) {
        Product product = productService.findProduct(productId);

        return new ResponseEntity<>(mapper.productToProductResponseDto(product), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getProducts(@Positive @RequestParam int page,
                                      @Positive @RequestParam int size) {
        Page<Product> products = productService.findProducts(page - 1, size);
        List<Product> content = products.getContent();

        return new ResponseEntity<>(mapper.productsToProductResponseDtos(content),HttpStatus.OK);
    }

    @DeleteMapping("/{product-id}")
    public ResponseEntity<?> deleteProduct(@PathVariable("product-id") @Positive long productId) {
        productService.deleteProduct(productId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

//    @GetMapping("/category")
//    public ResponseEntity<?> getProductsByCategory(@PathVariable long categoryId) {
//        Category category = categoryService.findVerifiedCategory(categoryId);
//
//        return new ResponseEntity<>(mapper.productToProductResponseDto(productByCategory), HttpStatus.OK);
//    }

    @GetMapping("/search")
    public ResponseEntity<?> searchProduct(@RequestParam String keyword) {

        return null;
    }
}
