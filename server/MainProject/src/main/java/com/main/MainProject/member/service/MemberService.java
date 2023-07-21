package com.main.MainProject.member.service;

import com.main.MainProject.s3upload.S3Uploader;
import com.main.MainProject.auth.utils.CustomAuthorityUtils;
import com.main.MainProject.cart.service.CartService;
import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.exception.LogicalException;
import com.main.MainProject.member.entity.Member;
import com.main.MainProject.member.repository.MemberRepository;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final CartService cartService;
    private final PasswordEncoder passwordEncoder;
    private final ApplicationEventPublisher publisher;
    private final CustomAuthorityUtils authorityUtils;
    private final S3Uploader s3Uploader;


    public MemberService(MemberRepository memberRepository, CartService cartService,
                         PasswordEncoder passwordEncoder, ApplicationEventPublisher publisher,
                         CustomAuthorityUtils authorityUtils, S3Uploader s3Uploader) {
        this.memberRepository = memberRepository;
        this.cartService = cartService;
        this.passwordEncoder = passwordEncoder;
        this.publisher = publisher;
        this.authorityUtils = authorityUtils;
        this.s3Uploader = s3Uploader;
    }

    public Member createMember(Member member) {
        verifyEmailExists(member.getEmail());
        verifyNickNameExists(member.getNickName());

        // 추가: Password 암호화
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        // 추가: DB에 User Role 저장
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        Member savedMember = memberRepository.save(member);
        cartService.createCart(savedMember);

        return savedMember;
    }

    public Member findVerifiedMember (Long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        return optionalMember
                .orElseThrow(() -> new LogicalException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    private void verifyEmailExists(String email) {
        Optional<Member> user = memberRepository.findByEmail(email);
        if (user.isPresent())
            throw new LogicalException(ExceptionCode.MEMBER_EXISTS);

    }

    private void verifyNickNameExists(String nickName) {
        Optional<Member> user = memberRepository.findByNickName(nickName);
        if (user.isPresent())
            throw new LogicalException(ExceptionCode.NICKNAME_EXISTS);
    }


    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    public void deleteMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);
        memberRepository.delete(findMember);
    }

    public Member findVerifiedByEmail(String email){
        Optional<Member> optionalMember = memberRepository.findByEmail(email);

        return optionalMember
                .orElseThrow(() -> new LogicalException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    public Member updateMember(Member member, long memberId, MultipartFile image) throws IOException {
        Member findMember = findVerifiedMember(memberId);

        if(!image.isEmpty()) {
            String storedFileName = s3Uploader.upload(image, "member", findMember.getMemberId());
            findMember.setMemberImageName(storedFileName);
        }

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
