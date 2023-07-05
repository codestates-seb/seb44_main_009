package com.main.MainProject.order.repository;

import com.main.MainProject.order.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
public interface OrderRepository extends JpaRepository<Order, Long> {
}
