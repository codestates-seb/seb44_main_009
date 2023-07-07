package com.main.MainProject.member.service;

import com.main.MainProject.cart.service.CartService;
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
    private final CartService cartService;

    public MemberService(MemberRepository memberRepository, CartService cartService) {
        this.memberRepository = memberRepository;
        this.cartService = cartService;
    }

    public Member findVerifiedMember (Long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        return optionalMember
                .orElseThrow(() -> new LogicalException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    public Member createMember(Member member) {
        verifyEmailExists(member.getEmail());
        Member findMember = memberRepository.save(member);
        cartService.createCart(findMember);
        return findMember;
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

        Optional.ofNullable(member.getKorName())
                        .ifPresent(korName -> findMember.setKorName(korName));

        Optional.ofNullable(member.getEmail())
                .ifPresent(email -> findMember.setEmail(email));

        Optional.ofNullable(member.getPhoneNumber())
                .ifPresent(phoneNumber -> findMember.setPhoneNumber(phoneNumber));

        Optional.ofNullable(member.getNickName())
                .ifPresent(nickName -> findMember.setNickName(nickName));

        Optional.ofNullable(member.getAddress())
                .ifPresent(address -> findMember.setAddress(address));

        Optional.ofNullable(member.getPersonalColor())
                .ifPresent(personalColor -> findMember.setPersonalColor(personalColor));

        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> findMember.setPassword(password));

         return memberRepository.save(findMember);
    }
}
