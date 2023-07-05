package com.main.MainProject.order.service;

import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.cart.repository.CartRepository;
import com.main.MainProject.cart.service.CartService;
import com.main.MainProject.exception.BusinessLogicException;
import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.order.dto.OrderDto;
import com.main.MainProject.order.entity.Order;
import com.main.MainProject.order.repository.OrderRepository;
import com.main.MainProject.temporary.Address;
import com.main.MainProject.temporary.AddressRepository;
import com.main.MainProject.temporary.CartProduct;
import org.springframework.stereotype.Service;

import javax.persistence.Id;
import java.util.Optional;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final CartService cartService;

    private AddressRepository addressRepository;

    public OrderService(OrderRepository orderRepository, CartService cartService, AddressRepository addressRepository) {
        this.orderRepository = orderRepository;
        this.cartService = cartService;
        this.addressRepository = addressRepository;
    }

    public Order createOrder(long cartId, Address address){
        Cart cart = cartService.findVerifiedCart(cartId);
        //TODO: 상품 수량 확인
        //TODO: 상품 수량 반영
        //TODO: 멤버 불어오기와 주소지 가져오기 혹은 저장하기
        addressRepository.save(address);

        Order order = new Order();
        order.setAddress(address);
        cart.getCartProductList().stream().forEach(cartProduct -> order.addCartProduct(cartProduct));

        System.out.println("주문 상품 갯수: " + order.getCartProductList().size());
        //카트 비우기
        cart.getCartProductList().stream().forEach(cartProduct -> cartProduct.setCart(null));

        return orderRepository.save(order);
    }

    public Order updateOrder(long orderId, Address address){
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

        orderRepository.save(findOrder);
    }

    public Order verficatedOrder(long orderId){
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        Order findOrder = optionalOrder.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));
        return findOrder;
    }
}
