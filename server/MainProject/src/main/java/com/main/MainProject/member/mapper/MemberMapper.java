package com.main.MainProject.member.mapper;

import com.main.MainProject.auth.dto.LoginDto;
import com.main.MainProject.member.dto.MemberPatchDto;
import com.main.MainProject.member.dto.MemberResponseDto;
import com.main.MainProject.member.dto.MemberSignUpDto;
import com.main.MainProject.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member loginDtoToMember(LoginDto loginDto);

    Member memberSignUpToMember(MemberSignUpDto memberSignUpDto);
    Member memberPatchDtoToMember (MemberPatchDto memberPatchDto);

    MemberResponseDto memberToMemberResponseDto(Member member);

    List<MemberResponseDto> memberToMemberResponses(List<Member> members);

}
