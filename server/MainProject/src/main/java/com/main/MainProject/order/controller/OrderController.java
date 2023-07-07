package com.main.MainProject.order.controller;

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

    //TODO: {member-id}부분은 모두 로그인 확인용으로 jwt적용시 수정필요
    
    //주문하기
    @PostMapping("/buy/{cart-id}/{member-id}")
    public ResponseEntity createOrder(@PathVariable("cart-id")long cartId,
                                      @PathVariable("member-id")long memberId,
                                      @Valid @RequestBody OrderDto.Address requestBody){
        Order order =  orderService.createOrder(cartId, mapper.addressDtoToAddress(requestBody), memberId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.orderToResponse(order)), HttpStatus.CREATED);
    }

    //배송지변경(배송출발 이전만 가능)
    @PatchMapping("/request/{order-id}/{member-id}")
    public ResponseEntity updateAddressOrder(@PathVariable("order-id")long orderId,
                                             @PathVariable("member-id")long memberId,
                                             @Valid @RequestBody OrderDto.Address requestBody){
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
    @GetMapping("/buylist/{member-id}")
    public ResponseEntity getorders(@PathVariable("member-id")long memberId){
        List<Order> orderList = orderService.getOrderList(memberId);

        return new ResponseEntity<>(new ListResponseDto<>(mapper.orderListToOrderResponseList(orderList)), HttpStatus.OK);
    }

    //주문상세 불러오기
    @GetMapping("/{order-id}/{member-id}")
    public ResponseEntity getOrder(@PathVariable("member-id")long memberId,
                                   @PathVariable("order-id")long orderId){
        Order order = orderService.findOrder(memberId, orderId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.orderToResponse(order)), HttpStatus.OK);
    }

    //주문취소
    @DeleteMapping("/delete/{order-id}/{member-id}")
    public ResponseEntity cancleOrder(@PathVariable("member-id")long memberId,
                                      @PathVariable("order-id")long orderId){
        orderService.cancelOrder(memberId, orderId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
