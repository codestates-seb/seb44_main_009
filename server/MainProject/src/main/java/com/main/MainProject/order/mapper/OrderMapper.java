package com.main.MainProject.order.mapper;

import com.main.MainProject.order.dto.OrderDto;
import com.main.MainProject.order.entity.Order;
import com.main.MainProject.address.Address;
import com.main.MainProject.order.entity.OrderProduct;
import com.main.MainProject.product.cartProduct.CartProduct;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface OrderMapper {
    Address addressDtoToAddress(OrderDto.Address addressDto);

    OrderDto.Address addressToAddressDto(Address address);

    List<OrderDto.OrderResponse> orderListToOrderResponseList(List<Order> orderList);

    @Mapping(source = "order.orderStatus", target = "shippingStatus")
    OrderDto.OrderResponse orderToOrderResponse(Order order);

    default OrderDto.ResponseDetail orderToResponse(Order order){
        if ( order == null ) {
            return null;
        }

        List<OrderDto.orderProductResponse> cartProductList = order.getOrderProductList().stream()
                .filter(orderProduct -> orderProduct != null && orderProduct.getProduct() != null)
                .map(orderProduct -> orderProductToCartProductResponse(orderProduct))
                .collect(Collectors.toList());

        Address address = null;

        address = order.getAddress();

        int productTotalPrice = order.getOrderProductList().stream()
                .filter(cartProduct -> cartProduct != null && cartProduct.getProduct() != null)
                .mapToInt(cartProduct -> cartProduct.getProduct().getPrice() * cartProduct.getQuantity())
                .sum();
        int shippingCost = 3000;
        int totalPrice = productTotalPrice + shippingCost;

        Order.OrderStatus shippingStatus = order.getOrderStatus();

        LocalDateTime createdAt = order.getCreatedAt();

        LocalDateTime lastModifiedAt = order.getLastModifiedAt();

        OrderDto.ResponseDetail responseDetail =
                new OrderDto.ResponseDetail(order.getOrderId(), cartProductList, shippingCost, productTotalPrice, totalPrice,
                        addressToAddressDto(address), shippingStatus, createdAt, lastModifiedAt );

        return responseDetail;
    }

    default OrderDto.orderProductResponse orderProductToCartProductResponse(OrderProduct orderProduct){
        if ( orderProduct == null ) {
            return null;
        }
        int quantity = 0;

        quantity = orderProduct.getQuantity();

        long productId = orderProduct.getProduct().getProductId();
        String productName =  orderProduct.getProduct().getName();
        int productPrice = orderProduct.getProduct().getPrice();
        int totalProductPrice = orderProduct.getProduct().getPrice() * quantity;
        OrderProduct.Reviewstatus reviewStatus = orderProduct.getReviewstatus();

        OrderDto.orderProductResponse orderProductResponse =
                new OrderDto.orderProductResponse( productId, productName, productPrice, quantity, totalProductPrice, reviewStatus);

        return orderProductResponse;
    }
}
