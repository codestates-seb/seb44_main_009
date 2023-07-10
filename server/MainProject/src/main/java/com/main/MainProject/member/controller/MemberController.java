package com.main.MainProject.member.controller;


import com.main.MainProject.dto.SingleResponseDto;
import com.main.MainProject.member.dto.MemberPatchDto;
import com.main.MainProject.member.dto.MemberSignUpDto;
import com.main.MainProject.member.entity.Member;
import com.main.MainProject.member.mapper.MemberMapper;
import com.main.MainProject.member.service.MemberService;
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

@RestController
@RequestMapping("/members")
@Validated
@Slf4j
public class MemberController {
    private final static String MEMBER_DEFAULT_URL = "/members";

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    private MemberService memberService;
    private MemberMapper mapper;

    @PostMapping("/signup")
    public ResponseEntity signupMember(@Valid @RequestBody MemberSignUpDto memberSignUpDto){
        Member member = memberService
                .createMember(mapper.memberSignUpToMember(memberSignUpDto));

        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, member.getMemberId());

        return ResponseEntity.created(location).build();
    }

    @GetMapping("/login")
    public String loginForm(){
        return "Login";
    }

    @PostMapping("/logout")
    public ResponseEntity logoutMember(){
        return null;
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
                                    @Valid @RequestBody MemberPatchDto memberPatchDto){
        Member member = memberService.updateMember(
                mapper.memberPatchDtoToMember(memberPatchDto),
                memberId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponseDto(member)), HttpStatus.ACCEPTED);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId){
        Member member = memberService.findVerifiedMember(memberId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponseDto(member))
                , HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMembers(){
        List<Member> members = memberService.findMembers();
        return new ResponseEntity<>(
                new ListResponseDto<>(
                        mapper.memberToMemberResponses(members)),
                HttpStatus.OK
        );
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId){
        memberService.deleteMember(memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
