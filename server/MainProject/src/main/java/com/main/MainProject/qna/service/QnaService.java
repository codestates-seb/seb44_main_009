package com.main.MainProject.qna.service;


import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.exception.LogicalException;
import com.main.MainProject.member.service.MemberService;
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

    public QnaService(QnaRepository qnaRepository, MemberService memberService) {
        this.qnaRepository = qnaRepository;
        this.memberService = memberService;
    }

    public Qna createQna (Qna qna) {
        memberService.findVerifiedMember(qna.getMember().getMemberId());
        return qnaRepository.save(qna);
    }

    public void deleteQna(long qnaId) {
        Qna findQna = findVerifiedQna(qnaId);
        qnaRepository.delete(findQna);
    }

    public Qna updateQna(Qna qna, Long qnaId, @NotBlank(message = "내용을 입력하세요") String content) {
        Qna findQna = findVerifiedQna(qnaId);
        Optional.ofNullable(qna.getContent())
                .ifPresent(contents -> findQna.setContent(content));
        findQna.setModifiedAt(LocalDateTime.now()); // 최종 수정시간 현재 시간으로 변경

        return qnaRepository.save(findQna);
    }

    public Qna findQna(Long qnaId) {
        return findVerifiedQna(qnaId);
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
