package com.main.MainProject.order.service;

import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.cart.service.CartService;
import com.main.MainProject.exception.BusinessLogicException;
import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.member.entity.Member;
import com.main.MainProject.member.service.MemberService;
import com.main.MainProject.order.entity.Order;
import com.main.MainProject.order.entity.OrderProduct;
import com.main.MainProject.order.repository.OrderRepository;
import com.main.MainProject.address.Address;
import com.main.MainProject.address.AddressRepository;
import com.main.MainProject.product.cartProduct.CartProduct;
import com.main.MainProject.product.entity.Product;
import com.main.MainProject.product.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final CartService cartService;

    private  final AddressRepository addressRepository;

    private final MemberService memberService;
    private final ProductService productService;

    public OrderService(OrderRepository orderRepository,
                        CartService cartService,
                        AddressRepository addressRepository,
                        MemberService memberService,
                        ProductService productService) {
        this.orderRepository = orderRepository;
        this.cartService = cartService;
        this.addressRepository = addressRepository;
        this.memberService = memberService;
        this.productService = productService;
    }

    public Order createOrder(long cartId, Address address){
        Cart findCart = cartService.findVerifiedCart(cartId);
//        //TODO: 상품 수량 확인
//        //TODO: 상품 수량 반영
//        //TODO: 멤버 불어오기와 주소지 가져오기 혹은 저장하기
        addressRepository.save(address);
//
        Order order = new Order();
        order.setAddress(address);
        List<OrderProduct> orderProductList = new ArrayList<>();
        findCart.getCartProductList().stream()
                .forEach(cartProduct -> orderProductList.add(cartProductToOrderProduct(order, cartProduct)));

        cartService.cartClear(findCart);

        return orderRepository.save(order);
    }

    private OrderProduct cartProductToOrderProduct(Order order, CartProduct cartProduct){
        return new OrderProduct(cartProduct.getQuantity(), cartProduct.getProduct(), order);
    }

    public Order updateOrder(long orderId, Address address){
        //TODO: memebrId 회원인지 확인 추가
        Order order = findVerficatedOrder(orderId);

        Address findAddress = order.getAddress();

        Optional.ofNullable(address.getReceiverName())
                .ifPresent(reciverName->findAddress.setReceiverName(reciverName));
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

    public List<Order> getOrderList(/*memberId*/){
        //TODO: 존재하는회원인지 확인
        //TODO: 회원정보 불러오기
        List<Order> orderList = orderRepository.findAll();
        return orderList;
    }

    public Order getOrder(long memberId, long orderId){
        //TODO: 존재하는회원인지 확인
        //TODO: 회원정보 불러오기

        Order order = findVerficatedOrder(orderId);
        return order;
    }

    public void cancelOrder(long memberId, long orderId){
        //TODO: 존재하는회원인지 확인
        //TODO: 회원정보 불러오기
        Order findOrder = findVerficatedOrder(orderId);

        if(getShippingStatus(orderId) < 4){
            findOrder.setOrderStatus(Order.OrderStatus.ORDER_CANCEL);
        }else {
            throw new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND);
        }

        orderRepository.save(findOrder);
    }

    //주문상품 찾기
    public OrderProduct findOrderProduct(Order order, Product product) {
        Optional<OrderProduct> optionalOrderProduct = order.getOrderProductList()
                .stream()
                .filter(orderProduct -> orderProduct.getProduct().equals(product))
                .findAny();

        return optionalOrderProduct.orElseThrow( () -> new BusinessLogicException(ExceptionCode.PRODUCT_IS_NOT_MATCH_ORDER));
    }

    //배송완료
    public Order shippingCompleted(long orderId){
        Order findOrder = findVerficatedOrder(orderId);
        findOrder.setOrderStatus(Order.OrderStatus.SHIPPING_COMPLETED);
        findOrder.getOrderProductList().stream().forEach(orderProduct -> orderProduct.setReviewstatus(OrderProduct.Reviewstatus.POSSIBLE_REVIEW));
        return orderRepository.save(findOrder);
    }

    //존재하는 주문인지 확인
    public Order findVerficatedOrder(long orderId){
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        Order findOrder = optionalOrder.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));
        return findOrder;
    }

    //해당 회원이 주문한 회원인지 확인
    public void isOrderByMember(Order order, Member member){
        if(!order.getMember().equals(member)){
            new BusinessLogicException(ExceptionCode.MEMBER_IS_NOT_MATCH_ORDER);
        }
    }

    //해당물건의 배송상태 확인
    public int getShippingStatus(long orderId){
        Order findOrder = findVerficatedOrder(orderId);
        return findOrder.getOrderStatus().getStepNumber();
    }

}
