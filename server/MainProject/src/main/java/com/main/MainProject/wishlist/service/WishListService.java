package com.main.MainProject.wishlist.service;

import com.main.MainProject.member.entity.Member;
import com.main.MainProject.member.repository.MemberRepository;
import com.main.MainProject.member.service.MemberService;
import com.main.MainProject.product.dto.ProductDto;
import com.main.MainProject.product.entity.Product;
import com.main.MainProject.product.repository.ProductRepository;
import com.main.MainProject.product.service.ProductService;
import com.main.MainProject.wishlist.entity.WishList;
import com.main.MainProject.wishlist.repository.WishListRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WishListService {

    private final WishListRepository wishListRepository;
    private final MemberService memberService;
    private final ProductService productService;

    public WishListService(WishListRepository wishListRepository, MemberService memberService, ProductService productService) {
        this.wishListRepository = wishListRepository;
        this.memberService = memberService;
        this.productService = productService;
    }

    public WishList addWish(WishList wishList) {
        Member member = memberService.findVerifiedMember(wishList.getMemberId());
        Product product = productService.findVerifiedProduct(wishList.getProductId());
        List<Product> products = wishList.getProducts();
        wishList.setMember(member);
        member.setWishList(wishList);
        products.add(product);

        return wishListRepository.save(wishList);
    }

    public List<Product> findWishList(long memberId) {
        Member member = memberService.findVerifiedMember(memberId);
        WishList wishList = member.getWishList();
        List<Product> products = wishList.getProducts();
        if (products.isEmpty()) {
            throw new RuntimeException("찜목록이 비어있습니다.");
        }
        return products;
    }

    public void deleteWish(WishList wishList) {
        Member member = memberService.findVerifiedMember(wishList.getMemberId());
        Product findProduct = productService.findProduct(wishList.getProductId());
        WishList findWish = member.getWishList();
        List<Product> products = findWish.getProducts();
        for (int i = products.size()-1; i >= 0; i--) {
            Product product = products.get(i);
            if (product.equals(findProduct)) {
                products.remove(product);
        }
        }
        wishListRepository.save(findWish);
    }
    public void createWishList(Member member) {
        WishList wishList = new WishList();
        wishList.setMember(member);
        wishListRepository.save(wishList);
    }
}
