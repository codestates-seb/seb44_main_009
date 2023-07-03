package com.main.MainProject.order.mapper;

import com.main.MainProject.order.dto.OrderDto;
import com.main.MainProject.order.entity.Order;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface OrderMapper {
    Order postDtoToOrder(OrderDto.Post postDto);
    Order patchDtoToOrder(OrderDto.Patch patchDto);

    OrderDto.Response orderToResponse(Order order);

    List<OrderDto.Response> ordersToResponses(List<Order> orders);
}
