package com.main.MainProject.order.controller;

import com.main.MainProject.auth.interceptor.JwtInterceptor;
import com.main.MainProject.dto.ListResponseDto;
import com.main.MainProject.dto.SingleResponseDto;
import com.main.MainProject.order.dto.OrderDto;
import com.main.MainProject.order.entity.Order;
import com.main.MainProject.order.mapper.OrderMapper;
import com.main.MainProject.order.service.OrderService;
import com.main.MainProject.address.Address;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/orders")
@Slf4j
@Validated
public class OrderController {
    private final static String ORDER_DEFAULT_URL = "/orders";
    private final OrderMapper mapper;

    private final OrderService orderService;

    public OrderController(OrderMapper mapper,
                           OrderService orderService) {
        this.mapper = mapper;
        this.orderService = orderService;
    }

    //TODO: {member-id}부분은 모두 로그인 확인용으로 jwt적용시 수정필요
    
    //주문하기
    @PostMapping("/buy")
    public ResponseEntity createOrder(@Valid @RequestBody OrderDto.Address requestBody){
        long memberId = JwtInterceptor.getAuthenticatedMemberId();
        long cartId = memberId;

        Order order =  orderService.createOrder(cartId, mapper.addressDtoToAddress(requestBody), memberId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.orderToResponse(order)), HttpStatus.CREATED);
    }

    //배송지변경(배송출발 이전만 가능)
    @PatchMapping("/request/{order-id}")
    public ResponseEntity updateAddressOrder(@PathVariable("order-id")long orderId,
                                             @Valid @RequestBody OrderDto.Address requestBody){
        long memberId = JwtInterceptor.getAuthenticatedMemberId();

        Address address = mapper.addressDtoToAddress(requestBody);
        Order order = orderService.updateOrder(orderId, address, memberId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.orderToResponse(order)), HttpStatus.OK);
    }

    //배송완료
    @PatchMapping("update/{order-id}")
    public ResponseEntity updateShippingStatus(@PathVariable("order-id")long orderId){
        Order order = orderService.shippingCompleted(orderId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.orderToResponse(order)), HttpStatus.OK);
    }

    //회원의 모든 정보 불러오기
    @GetMapping("/list")
    public ResponseEntity getOrderList(){
        long memberId = JwtInterceptor.getAuthenticatedMemberId();

        List<Order> orderList = orderService.getOrderList(memberId);

        return new ResponseEntity<>(new ListResponseDto<>(mapper.orderListToOrderResponseList(orderList)), HttpStatus.OK);
    }

    //주문상세 불러오기
    @GetMapping("/{order-id}")
    public ResponseEntity getOrder(@PathVariable("order-id")long orderId){
        long memberId = JwtInterceptor.getAuthenticatedMemberId();

        Order order = orderService.findOrder(memberId, orderId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.orderToResponse(order)), HttpStatus.OK);
    }

    //주문취소
    @DeleteMapping("/delete/{order-id}")
    public ResponseEntity cancleOrder(@PathVariable("order-id")long orderId){
        long memberId = JwtInterceptor.getAuthenticatedMemberId();

        orderService.cancelOrder(memberId, orderId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
