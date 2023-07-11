package com.main.MainProject.qna.service;


import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.exception.LogicalException;
import com.main.MainProject.member.entity.Member;
import com.main.MainProject.member.service.MemberService;
import com.main.MainProject.product.entity.Product;
import com.main.MainProject.product.service.ProductService;
import com.main.MainProject.qna.entity.Qna;
import com.main.MainProject.qna.repository.QnaRepository;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class QnaService {
    private final QnaRepository qnaRepository;
    private final MemberService memberService;
    private final ProductService productService;

    public QnaService(QnaRepository qnaRepository, MemberService memberService, ProductService productService) {
        this.qnaRepository = qnaRepository;
        this.memberService = memberService;
        this.productService = productService;
    }

    public Qna createQna (Qna qna) {
        memberService.findVerifiedMember(qna.getMember().getMemberId());
        productService.findVerifiedProduct(qna.getProduct().getProductId());
        return qnaRepository.save(qna);
    }

    public void deleteQna(long qnaId) {
        Qna findQna = findVerifiedQna(qnaId);
        qnaRepository.delete(findQna);
    }

    public Qna updateQna(Qna qna, Long qnaId) {
        Qna findQna = findVerifiedQna(qnaId);
        Optional.ofNullable(qna.getContent())
                .ifPresent(contents -> findQna.setContent(contents));
        Optional.ofNullable(qna.getTitle())
                .ifPresent(title -> findQna.setTitle(title));
        findQna.setModifiedAt(LocalDateTime.now()); // 최종 수정시간 현재 시간으로 변경

        return qnaRepository.save(findQna);
    }

    public Qna findQna(Long qnaId) {
        return findVerifiedQna(qnaId);
    }

    public List<Qna> findMemberQna(Long memberId) {
        Member member = memberService.findVerifiedMember(memberId);
        return qnaRepository.findAllByMember(member);
    }

    public List<Qna> findProductQna(Long productId) {
        Product product = productService.findVerifiedProduct(productId);
        return qnaRepository.findAllByProduct(product);
    }

    public List<Qna> getAllQnas() {
        return qnaRepository.findAll();
    }

    private Qna findVerifiedQna(long qnaId) {
        Optional<Qna> optionalQna = qnaRepository.findById(qnaId);

        return optionalQna
                .orElseThrow(() -> new LogicalException(ExceptionCode.QNA_NOT_FOUND));
    }

}
