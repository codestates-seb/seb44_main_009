package com.main.MainProject.wishlist.mapper;

import com.main.MainProject.wishlist.dto.WishListDto;
import com.main.MainProject.wishlist.entity.WishList;
import org.mapstruct.Mapper;

import static com.main.MainProject.wishlist.dto.WishListDto.*;

@Mapper(componentModel = "spring")
public interface WishListMapper {
    WishList wishPostDtoToWish(PostDto postDto);
}
