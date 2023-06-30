package com.main.MainProject.product.controller;

import com.main.MainProject.product.dto.ProductDto;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.awt.print.Pageable;

@RestController
@RequestMapping("/products")
public class ProductController {

    @PostMapping
    public ResponseEntity postProduct(@Valid @RequestBody ProductDto.ProductPostDto requestBody) {

        return null;
    }

    @PatchMapping("/{product-id}")
    public ResponseEntity patchProduct(@PathVariable("product-id") @Positive long productId,
                                       @Valid @RequestBody ProductDto.ProductPatchDto requestBody) {

        return null;
    }

    @GetMapping("/{product-id}")
    public ResponseEntity getProduct(@PathVariable("product-id") @Positive long productId) {

        return null;
    }

    @GetMapping
    public ResponseEntity getProducts(@PageableDefault Pageable pageable) {

        return null;
    }

    @DeleteMapping("/{product-id}")
    public ResponseEntity deleteProduct(@PathVariable("product-id") @Positive long productId) {

        return null;
    }

    @GetMapping("/search")
    public ResponseEntity searchProduct(@RequestParam String keyword) {

        return null;
    }
}
