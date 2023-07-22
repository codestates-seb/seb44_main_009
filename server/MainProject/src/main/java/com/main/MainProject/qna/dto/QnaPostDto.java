package com.main.MainProject.qna.dto;

import com.main.MainProject.member.entity.Member;
import com.main.MainProject.product.entity.Product;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Positive;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class QnaPostDto {
    @Positive
    private Long productId;

    @NotBlank(message="제목을 입력하세요")
    private String title;

    @NotBlank(message="질문을 입력하세요")
    private String content;

    public Product getProduct() {
        Product product = new Product();
        product.setProductId(productId);
        return product;
    }
}
