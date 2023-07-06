package com.main.MainProject.order.mapper;

import com.main.MainProject.order.dto.OrderDto;
import com.main.MainProject.order.entity.Order;
import com.main.MainProject.address.Address;
import com.main.MainProject.order.entity.OrderProduct;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface OrderMapper {
    Address addressDtoToAddress(OrderDto.Address addressDto);

    OrderDto.Address addressToAddressDto(Address address);

    List<OrderDto.OrderResponse> orderToOderResponse(List<Order> orderList);

    default OrderDto.ResponseDetail orderToResponse(Order order){
        if ( order == null ) {
            return null;
        }

        List<OrderDto.cartProductResponse> cartProductList = order.getOrderProductList().stream()
                .filter(cartProduct -> cartProduct != null && cartProduct.getProduct() != null)
                .map(cartProduct -> cartProductToCartProductResponse(cartProduct))
                .collect(Collectors.toList());

        Address address = null;

        address = order.getAddress();

        int totalPrice = order.getOrderProductList().stream()
                .filter(cartProduct -> cartProduct != null && cartProduct.getProduct() != null)
                .mapToInt(cartProduct -> cartProduct.getProduct().getPrice() * cartProduct.getQuentity())
                .sum();

        Order.OrderStatus shippingStatus = order.getOrderStatus();
        Order.Reviewstatus reviewStatus = order.getReviewstatus();

        OrderDto.ResponseDetail responseDetail =
                new OrderDto.ResponseDetail(order.getOrderId(), cartProductList, totalPrice, addressToAddressDto(address), shippingStatus, reviewStatus );

        return responseDetail;
    }

    default OrderDto.cartProductResponse cartProductToCartProductResponse(OrderProduct orderProduct){
        if ( orderProduct == null ) {
            return null;
        }
        int quentity = 0;

        quentity = orderProduct.getQuentity();

        String productName =  orderProduct.getProduct().getName();
        int totalProductPrice = orderProduct.getProduct().getPrice() * quentity;

        OrderDto.cartProductResponse cartProductResponse =
                new OrderDto.cartProductResponse( productName, quentity, totalProductPrice );

        return cartProductResponse;
    }

    List<OrderDto.ResponseDetail> ordersToResponses(List<Order> orders);
}
