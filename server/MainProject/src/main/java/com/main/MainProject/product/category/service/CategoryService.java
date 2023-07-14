package com.main.MainProject.product.category.service;

import com.main.MainProject.product.category.entity.Category;
import com.main.MainProject.product.category.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public Category createCategory(Category category) {
        verifyExistCategory(category.getName());

        return categoryRepository.save(category);
    }

    public Category findCategory(long categoryId) {

        return findVerifiedCategory(categoryId);
    }

    

    public Category updateCategory(Category category) {
        Category findCategory = findVerifiedCategory(category.getCategoryId());

        Optional.of(category.getName())
                .ifPresent(findCategory::setName);
        Optional.of(category.getSlug())
                .ifPresent(findCategory::setSlug);

        return categoryRepository.save(findCategory);
    }

    public void deleteCategory(long categoryId) {
        Category findCategory = findVerifiedCategory(categoryId);

        categoryRepository.delete(findCategory);
    }

    public void verifyExistCategory(String name) {
        Optional<Category> optionalCategory = categoryRepository.findByName(name);

        if (optionalCategory.isPresent())
            throw new RuntimeException("이미 존재하는 카테고리 입니다.");
    }

    public Category findVerifiedCategory(long categoryId) {
        Optional<Category> optionalCategory = categoryRepository.findById(categoryId);

        return optionalCategory.orElseThrow(() -> new RuntimeException("존재하지 않는 카테고리 입니다."));
    }
}
