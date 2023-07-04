package com.main.MainProject.order.service;

import com.main.MainProject.exception.BusinessLogicException;
import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.order.entity.Order;
import com.main.MainProject.order.repository.OrderRepository;
import com.main.MainProject.temporary.Address;
import org.springframework.stereotype.Service;

import javax.persistence.Id;
import java.util.Optional;

@Service
public class OrderService {
    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order createOrder(Order order){
        //TODO: 상품 수량 확인
        //TODO: 상품 수량 반영
        return orderRepository.save(order);
    }

    public Order updateOrder(long memberId, long orderId, Address address){
        //TODO: memebrId 회원인지 확인 추가
        Order order = verficatedOrder(orderId);

        Address findAddress = order.getAddress();

        Optional.ofNullable(address.getReciverName())
                .ifPresent(reciverName->findAddress.setReciverName(reciverName));
        Optional.ofNullable(address.getZipcode())
                .ifPresent(zipCode->findAddress.setZipcode(zipCode));
        Optional.ofNullable(address.getAddressDetails())
                .ifPresent(details->findAddress.setAddressDetails(details));
        Optional.ofNullable(address.getTelNum())
                .ifPresent(telNum->findAddress.setTelNum(telNum));
        Optional.ofNullable(address.getRequest())
                .ifPresent(request->findAddress.setRequest(request));

        return orderRepository.save(order);
    }

//    public Order getOrderList(/*memberId*/){
//        //TODO: 존재하는회원인지 확인
//        //TODO: 회원정보 불러오기
//    }

    public Order getOrder(long memberId, long orderId){
        //TODO: 존재하는회원인지 확인
        //TODO: 회원정보 불러오기

        Order order = verficatedOrder(orderId);
        return order;
    }

    public void cancelOrder(long memberId, long orderId){
        //TODO: 존재하는회원인지 확인
        //TODO: 회원정보 불러오기
        Order findOrder = verficatedOrder(orderId);
        int step = findOrder.getOrderStatus().getStepNumber();

        if(step < 4){
            findOrder.setOrderStatus(Order.OrderStatus.ORDER_CANCEL);
        }else {
            throw new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND);
        }

    }

    public Order verficatedOrder(long orderId){
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        Order findOrder = optionalOrder.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));
        return findOrder;
    }
}
