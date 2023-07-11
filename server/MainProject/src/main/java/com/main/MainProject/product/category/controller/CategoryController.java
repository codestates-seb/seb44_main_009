package com.main.MainProject.product.category.controller;

import com.main.MainProject.product.category.dto.CategoryDto;
import com.main.MainProject.product.category.entity.Category;
import com.main.MainProject.product.category.mapper.CategoryMapper;
import com.main.MainProject.product.category.service.CategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import static com.main.MainProject.product.category.dto.CategoryDto.*;

@RestController
@RequestMapping("/category")
@Validated
public class CategoryController {
    private final CategoryService categoryService;
    private final CategoryMapper mapper;

    public CategoryController(CategoryService categoryService, CategoryMapper mapper) {
        this.categoryService = categoryService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity<?> postCategory(@Valid @RequestBody CategoryPostDto categoryPostDto) {
        Category category = mapper.categoryPostDtoToCategory(categoryPostDto);
        Category createdCategory = categoryService.createCategory(category);

        return new ResponseEntity<>(mapper.categoryToCategoryResponseDto(createdCategory), HttpStatus.CREATED);
    }

    @PatchMapping("/{category-id}")
    public ResponseEntity<?> patchCategory(@PathVariable("category-id") long categoryId,
                                           @Valid @RequestBody CategoryPatchDto categoryPatchDto) {
        categoryPatchDto.setCategoryId(categoryId);
        Category category = mapper.categoryPatchDtoToCategory(categoryPatchDto);
        Category updatedCategory = categoryService.updateCategory(category);

        return new ResponseEntity<>(mapper.categoryToCategoryResponseDto(updatedCategory), HttpStatus.OK);
    }

    @GetMapping("/{category-id}")
    public ResponseEntity<?> getCategory(@PathVariable("category-id") long categoryId) {
        Category category = categoryService.findCategory(categoryId);

        return new ResponseEntity<>(mapper.categoryToCategoryListResponseDto(category), HttpStatus.OK);
    }

    @DeleteMapping("/{category-id}")
    public ResponseEntity<?> deleteCategory(@PathVariable("category-id") long categoryId) {
        categoryService.deleteCategory(categoryId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
