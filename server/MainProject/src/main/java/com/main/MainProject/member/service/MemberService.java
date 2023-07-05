package com.main.MainProject.member.service;

import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.exception.LogicalException;
import com.main.MainProject.member.entity.Member;
import com.main.MainProject.member.repository.MemberRepository;
import org.springframework.stereotype.Service;

import javax.validation.constraints.Positive;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }


    public Member findVerifiedMember (Long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        return optionalMember
                .orElseThrow(() -> new LogicalException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    public Member createMember(Member member) {
        verifyEmailExists(member.getEmail());
        return memberRepository.save(member);
    }

    private void verifyEmailExists(String email) {
        Optional<Member> user = memberRepository.findByEmail(email);
        if (user.isPresent())
            throw new LogicalException(ExceptionCode.MEMBER_EXISTS);
    }

    // update implemented

    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    public void deleteMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);
        memberRepository.delete(findMember);
    }

    public Member updateMember(Member member, @Positive long memberId) {
        Member findMember = findVerifiedMember(memberId);

        return memberRepository.save(findMember);
    }
}
