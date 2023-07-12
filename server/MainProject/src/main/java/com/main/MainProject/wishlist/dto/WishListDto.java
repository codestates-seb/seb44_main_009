package com.main.MainProject.wishlist.dto;

import lombok.Getter;

public class WishListDto {
    @Getter
    public static class PostDto {
        private long memberId;
        private long productId;
    }
}
