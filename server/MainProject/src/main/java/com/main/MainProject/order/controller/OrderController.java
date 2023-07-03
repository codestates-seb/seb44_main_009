package com.main.MainProject.order.controller;

import com.main.MainProject.dto.MultiResponseDto;
import com.main.MainProject.dto.SingleResponseDto;
import com.main.MainProject.order.dto.OrderDto;
import com.main.MainProject.order.entity.Order;
import com.main.MainProject.order.mapper.OrderMapper;
import com.main.MainProject.order.service.OrderService;
import com.main.MainProject.temporary.Address;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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

    //주문하기
    @PostMapping("/{member-id}")
    public ResponseEntity createOrder(@PathVariable("member-id")long memberId,
                                      @Valid @RequestBody OrderDto.Post post){
        Order order =  orderService.createOrder(mapper.orderPostDtoToOrder(post));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.orderToResponse(order)), HttpStatus.CREATED);
    }

    //배송지변경(배송출발 이전만 가능)
    @PatchMapping("/{member-id}/{order-id}")
    public ResponseEntity updateAddressOrder(@PathVariable("member-id")long memberId,
                                             @PathVariable("order-id")long orderId,
                                             @Valid @RequestBody OrderDto.Patch patch){
        Address address = mapper.orderPatchDtoToAddress(patch);
        Order order = orderService.updateOrder(memberId, orderId, address);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.orderToResponse(order)), HttpStatus.OK);
    }

    //회원의 모든 정보 불러오기
    @GetMapping("/{member-id}")
    public ResponseEntity getorders(){

        return new ResponseEntity<>(HttpStatus.OK);
    }

    //주문상세 불러오기
    @GetMapping("/{member-id}/{order-id}")
    public ResponseEntity getOrder(@PathVariable("member-id")long memberId,
                                   @PathVariable("order-id")long orderId){
        Order order = orderService.getOrder(memberId, orderId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.orderToResponse(order)), HttpStatus.OK);
    }

    //주문취소
    @DeleteMapping("/{member-id}/{order-id}")
    public ResponseEntity cancleOrder(@PathVariable("member-id")long memberId,
                                      @PathVariable("order-id")long orderId){
        orderService.cancelOrder(memberId, orderId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
