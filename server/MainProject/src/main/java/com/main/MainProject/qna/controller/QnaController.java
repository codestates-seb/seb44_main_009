package com.main.MainProject.qna.controller;

import com.main.MainProject.dto.ListResponseDto;
import com.main.MainProject.dto.SingleResponseDto;
import com.main.MainProject.qna.dto.QnaPatchDto;
import com.main.MainProject.qna.dto.QnaPostDto;
import com.main.MainProject.qna.entity.Qna;
import com.main.MainProject.qna.mapper.QnaMapper;
import com.main.MainProject.qna.service.QnaService;
import com.main.MainProject.dto.ListResponseDto;
import com.main.MainProject.util.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/qnas")
@Validated
@Slf4j
public class QnaController {
    private final static String QNA_DEFAULT_URL = "/qnas";

    private final QnaService qnaService;
    private final QnaMapper mapper;

    public QnaController(QnaService qnaService, QnaMapper mapper) {
        this.qnaService = qnaService;
        this.mapper = mapper;
    }
    @PostMapping
    public ResponseEntity postQna(@Valid @RequestBody QnaPostDto qnaPostDto){
        Qna qna = qnaService.createQna(mapper.qnaPostDtoToQna(qnaPostDto));
        URI location = UriCreator.createUri(QNA_DEFAULT_URL, qna.getQnaId());
        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{qna-id}")
    public ResponseEntity patchQna(@PathVariable("qna-id") @Positive long qnaId,
                                        @Valid @RequestBody QnaPatchDto qnaPatchDto){
        Qna qna = qnaService
                .updateQna(mapper.qnaPatchDtoToQna(qnaPatchDto),
                        qnaId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.qnaToQnaResponseDto(qna)), HttpStatus.OK);
    }

    @GetMapping("/{qna-id}")
    public ResponseEntity getQna(@PathVariable("qna-id") @Positive long qnaId) {
        Qna qna = qnaService.findQna(qnaId);
        return new ResponseEntity(new SingleResponseDto<>(mapper.qnaToQnaResponseDto(qna)), HttpStatus.OK);
    }

    @GetMapping("/qnabymember/{member-id}")
    public ResponseEntity getMemberQna(@PathVariable("member-id") @Positive long memberId) {
        List<Qna> qnas = qnaService.findMemberQna(memberId);
        return new ResponseEntity(new ListResponseDto<>(mapper.qnasToQnaResponses(qnas)), HttpStatus.OK);
    }

    @GetMapping("/qnabyproduct/{product-id}")
    public ResponseEntity getProductQna(@PathVariable("product-id") @Positive long productId) {
        List<Qna> qnas = qnaService.findProductQna(productId);
        return new ResponseEntity(new ListResponseDto<>(mapper.qnasToQnaResponses(qnas)), HttpStatus.OK);
    }

    @DeleteMapping("/{qna-id}")
    public ResponseEntity deleteQna(@PathVariable("qna-id") @Positive long qnaId) {
        qnaService.deleteQna(qnaId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
