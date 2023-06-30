package com.main.MainProject.order.mapper;

import com.main.MainProject.order.dto.OrderDto;
import com.main.MainProject.order.entity.Order;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface OrderMapper {
    Order postDtoToOrder(OrderDto.post postDto);
    Order patchDtoToOrder(OrderDto.patch patchDto);

    OrderDto.response orderToResponse(Order order);

    List<OrderDto.response> ordersToResponses(List<Order> orders);
}
