package com.main.MainProject.qna.mapper;


import com.main.MainProject.qna.dto.QnaPatchDto;
import com.main.MainProject.qna.dto.QnaPostDto;
import com.main.MainProject.qna.dto.QnaResponseDto;
import com.main.MainProject.qna.entity.Qna;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import javax.validation.Valid;
import java.util.List;

@Mapper(componentModel = "spring")
public interface QnaMapper {
    Qna qnaPostDtoToQna(@Valid QnaPostDto qnaPostDto);

    Qna qnaPatchDtoToQna(@Valid QnaPatchDto qnaPostDto);

    QnaResponseDto qnaToQnaResponseDto(Qna qna);

    List<QnaResponseDto> qnasToQnaResponses(List<Qna> allQna);

}
