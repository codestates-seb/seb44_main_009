package com.main.MainProject.order.controller;

import com.main.MainProject.order.mapper.OrderMapper;
import com.main.MainProject.order.service.OrderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
@Slf4j
@Validated
public class OrderController {
    private final static String ORDER_DEFAULT_URL = "/order";
    private final OrderMapper mapper;

    private final OrderService orderService;

    public OrderController(OrderMapper mapper,
                           OrderService orderService) {
        this.mapper = mapper;
        this.orderService = orderService;
    }
}
