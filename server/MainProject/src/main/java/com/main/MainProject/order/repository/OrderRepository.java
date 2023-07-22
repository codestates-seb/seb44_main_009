package com.main.MainProject.order.repository;

import com.main.MainProject.member.entity.Member;
import com.main.MainProject.order.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findAllByMember(Member member);
}
