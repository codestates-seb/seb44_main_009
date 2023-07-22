package com.main.MainProject.qna.repository;

import com.main.MainProject.member.entity.Member;
import com.main.MainProject.product.entity.Product;
import com.main.MainProject.qna.entity.Qna;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface QnaRepository extends JpaRepository<Qna, Long> {
    Optional<Qna> findById(long qnaId);
    List<Qna> findAllByMember(Member member);

    List<Qna> findAllByProduct(Product product);
}
