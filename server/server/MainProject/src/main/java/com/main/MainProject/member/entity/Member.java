package com.main.MainProject.member.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Entity(name = "members")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(nullable = false, unique = true)
    private String korName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String phoneNumber;

    @Column(nullable = false, unique = true)
    private String nickName;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String personalColor;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, name = "CREATED_AT")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private MemberStatus memberStatus = MemberStatus.MEMBER_ACTIVE;

    public Member(String email) {
        this.email = email;
    }

    public Member(String email, String korName, String nickName, String password, String address, String personalColor, String phoneNumber) {
        this.email = email;
        this.korName = korName;
        this.nickName = nickName;
        this.password = password;
        this.address = address;
        this.personalColor = personalColor;
        this.phoneNumber = phoneNumber;
    }

    public enum MemberStatus {
        MEMBER_ACTIVE("활동중"),
        MEMBER_SLEEP("휴면 상태"),
        MEMBER_QUIT("탈퇴 상태");

        @Getter
        private String status;

        MemberStatus(String status) {
            this.status = status;
        }
    }

}
