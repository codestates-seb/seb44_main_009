package com.main.MainProject.wishlist.controller;

import com.main.MainProject.product.entity.Product;
import com.main.MainProject.product.mapper.ProductMapper;
import com.main.MainProject.wishlist.entity.WishList;
import com.main.MainProject.wishlist.mapper.WishListMapper;
import com.main.MainProject.wishlist.service.WishListService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;

import java.util.List;

import static com.main.MainProject.wishlist.dto.WishListDto.*;

@RestController
@RequestMapping("/wishlist")
@Validated
public class WishListController {
    private final WishListService wishListService;
    private final WishListMapper mapper;
    private final ProductMapper productMapper;

    public WishListController(WishListService wishListService, WishListMapper mapper, ProductMapper productMapper) {
        this.wishListService = wishListService;
        this.mapper = mapper;
        this.productMapper = productMapper;
    }

    @PostMapping
    public ResponseEntity<?> postWish(@RequestBody PostDto requestBody) {
        WishList wishList = mapper.wishPostDtoToWish(requestBody);
        wishListService.addWish(wishList);

        return ResponseEntity.ok("찜목록에 추가되었습니다.");
    }

    @GetMapping("/{member-id}")
    public ResponseEntity<?> getWishlist(@PathVariable("member-id") @Positive long memberId) {
        List<Product> wishList = wishListService.findWishList(memberId);

        return new ResponseEntity<>(productMapper.productsToProductResponseDtos(wishList), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteWish(@RequestBody PostDto requestBody) {
        WishList wishList = mapper.wishPostDtoToWish(requestBody);
        wishListService.deleteWish(wishList);

        return ResponseEntity.ok("찜목록에서 삭제되었습니다.");
    }
}
