package com.main.MainProject.order.mapper;

import com.main.MainProject.order.dto.OrderDto;
import com.main.MainProject.order.entity.Order;
import com.main.MainProject.temporary.Address;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface OrderMapper {
    Order orderPostDtoToOrder(OrderDto.Post postDto);
    Address orderPatchDtoToAddress(OrderDto.Patch patchDto);

    OrderDto.Response orderToResponse(Order order);

    List<OrderDto.Response> ordersToResponses(List<Order> orders);
}
