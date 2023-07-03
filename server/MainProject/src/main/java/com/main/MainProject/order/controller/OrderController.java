package com.main.MainProject.order.controller;

import com.main.MainProject.order.mapper.OrderMapper;
import com.main.MainProject.order.service.OrderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public ResponseEntity createOrder(){
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping
    public ResponseEntity updateOrder(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getorders(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getOrder(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity postOrder(){
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
