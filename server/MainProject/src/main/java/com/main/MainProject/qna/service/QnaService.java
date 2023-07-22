package com.main.MainProject.qna.service;


import com.main.MainProject.exception.BusinessLogicException;
import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.exception.LogicalException;
import com.main.MainProject.member.entity.Member;
import com.main.MainProject.member.service.MemberService;
import com.main.MainProject.product.entity.Product;
import com.main.MainProject.product.service.ProductService;
import com.main.MainProject.qna.entity.Qna;
import com.main.MainProject.qna.repository.QnaRepository;
import org.springframework.stereotype.Service;

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

    public Qna createQna (Qna qna, long memberId) {
        Member findMember = memberService.findVerifiedMember(memberId);
        qna.setMember(findMember);
        productService.findVerifiedProduct(qna.getProduct().getProductId());
        Qna qnaex = qnaRepository.save(qna);

        System.out.println(qna.getQnaId() + "new qna id");
        return qnaex;
    }

    public void deleteQna(long qnaId, long memberId) {
        Member findMember = memberService.findVerifiedMember(memberId);
        Qna findQna = findVerifiedQna(qnaId);

        if (findMember != findQna.getMember()){
            new BusinessLogicException(ExceptionCode.YOU_ARE_NOT_WRITER);
        }
        qnaRepository.delete(findQna);
    }

    public Qna updateQna(Qna qna, Long qnaId, long memberId) {
        Qna findQna = findVerifiedQna(qnaId);

        Member findMember = memberService.findVerifiedMember(memberId);
        qna.setMember(findMember);

        if (findMember != findQna.getMember()){
            new BusinessLogicException(ExceptionCode.YOU_ARE_NOT_WRITER);
        }

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
        Member findMember = memberService.findVerifiedMember(memberId);
        return qnaRepository.findAllByMember(findMember);
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

        Qna findQna = optionalQna.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.QNA_NOT_FOUND));

        return optionalQna
                .orElseThrow(() -> new LogicalException(ExceptionCode.QNA_NOT_FOUND));
    }


    public void isQnaByMember(Qna qna, Member member){
        if(!qna.getMember().equals(member)){
            throw new BusinessLogicException(ExceptionCode.QNA_NOT_FOUND);
        }
    }
    
}
