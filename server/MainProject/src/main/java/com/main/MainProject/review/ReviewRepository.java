package com.main.MainProject.review;

import com.main.MainProject.member.entity.Member;
import com.main.MainProject.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findAllByProduct(Product product);
    List<Review> findAllByMember(Member member);
}
