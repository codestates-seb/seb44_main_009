package com.main.MainProject.order.service;

import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.cart.service.CartService;
import com.main.MainProject.exception.BusinessLogicException;
import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.member.entity.Member;
import com.main.MainProject.member.service.MemberService;
import com.main.MainProject.order.entity.Order;
import com.main.MainProject.order.entity.OrderProduct;
import com.main.MainProject.order.repository.OrderProductRepository;
import com.main.MainProject.order.repository.OrderRepository;
import com.main.MainProject.address.Address;
import com.main.MainProject.address.AddressRepository;
import com.main.MainProject.product.cartProduct.CartProduct;
import com.main.MainProject.product.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final CartService cartService;

    private  final AddressRepository addressRepository;

    private final MemberService memberService;

    private final OrderProductRepository orderProductRepository;

    public OrderService(OrderRepository orderRepository, CartService cartService, AddressRepository addressRepository,
                        MemberService memberService, OrderProductRepository orderProductRepository) {
        this.orderRepository = orderRepository;
        this.cartService = cartService;
        this.addressRepository = addressRepository;
        this.memberService = memberService;
        this.orderProductRepository = orderProductRepository;
    }

    public Order createOrder(long cartId, Address address, long memberId){
        Cart findCart = cartService.findVerifiedCart(cartId);
        Member findMember = memberService.findVerifiedMember(memberId);

        Order order = new Order();
        order.setMember(findMember);
        order.setAddress(address);

        List<OrderProduct> orderProductList = findCart.getCartProductList().stream()
                        .map(cartProduct -> cartProductToOrderProduct(order, cartProduct))
                        .collect(Collectors.toList());

        order.setOrderProductList(orderProductList);

        cartService.cartClear(findCart);

        address.setOrder(order);
        return orderRepository.saveAndFlush(order);
    }

    private OrderProduct cartProductToOrderProduct(Order order, CartProduct cartProduct){
        OrderProduct orderProduct = new OrderProduct(cartProduct.getQuantity(), cartProduct.getProduct());
        if(orderProduct.getProduct().getCount() < orderProduct.getQuantity()){
            new BusinessLogicException(ExceptionCode.QUANTITY_IS_MORE_THAN_PRODUCT_COUNT);
        }else {
            orderProduct.getProduct().setCount(orderProduct.getProduct().getCount() - orderProduct.getQuantity());
        }
        orderProduct.setOrder(order);
        return orderProduct;
    }

    public Order updateOrder(long orderId, Address address, long memberId){
        Order order = findVerficatedOrder(orderId);
        isOrderByMember(order, memberService.findVerifiedMember(memberId));

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

    public List<Order> getOrderList(long memberId){
        memberService.findVerifiedMember(memberId);

        List<Order> orderList = orderRepository.findAll();
        return orderList;
    }

    public Order findOrder(long memberId, long orderId){
        Order order = findVerficatedOrder(orderId);
        isOrderByMember(order, memberService.findVerifiedMember(memberId));
        return order;
    }

    public void cancelOrder(long memberId, long orderId){
        memberService.findVerifiedMember(memberId);
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
