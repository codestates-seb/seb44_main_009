package com.main.MainProject.qna.repository;

import com.main.MainProject.qna.entity.Qna;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QnaRepository extends JpaRepository<Qna, Long> {
    Optional<Qna> findById(long qnaId);
}
