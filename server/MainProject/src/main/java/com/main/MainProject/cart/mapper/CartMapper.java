package com.main.MainProject.cart.mapper;


import com.main.MainProject.cart.dto.CartDto;
import com.main.MainProject.cart.entity.Cart;
import com.main.MainProject.temporary.CartProduct;
import com.main.MainProject.temporary.Product;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CartMapper {
    Cart cartPatchToCart(CartDto.Patch requestBody);
    CartDto.Response cartToResponse(Cart cart);
}
