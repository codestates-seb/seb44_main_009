package com.main.MainProject.wishlist.service;

import com.main.MainProject.exception.BusinessLogicException;
import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.member.entity.Member;
import com.main.MainProject.member.repository.MemberRepository;
import com.main.MainProject.product.entity.Product;
import com.main.MainProject.product.service.ProductService;
import com.main.MainProject.wishlist.dto.WishListDto;
import com.main.MainProject.wishlist.entity.WishList;
import com.main.MainProject.wishlist.repository.WishListRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WishListService {

    private final WishListRepository wishListRepository;
    private final ProductService productService;
    private final MemberRepository memberRepository;

    public WishListService(WishListRepository wishListRepository,
                           ProductService productService,
                           MemberRepository memberRepository) {
        this.wishListRepository = wishListRepository;
        this.productService = productService;
        this.memberRepository = memberRepository;
    }

    public WishList addWish(WishListDto.PostDto requestBody, long memberId) {

        WishList findWishList = findVerifiedWish(memberId);

        Product product = productService.findVerifiedProduct(requestBody.getProductId());

        if(findWishList.getProducts().contains(product)){
            findWishList.getProducts().remove(product);
        }else {
            findWishList.getProducts().add(product);
        }

        return wishListRepository.save(findWishList);
    }

    private WishList findVerifiedWish(Long wishId) {
        Optional<WishList> optionalWishList = wishListRepository.findById(wishId);
        if (optionalWishList.isPresent()) {
            return optionalWishList.get();
        } else {
            return additionalCreateWishList(wishId);
        }
    }

    public List<Product> findWishList(long memberId) {
        WishList wishList = findVerifiedWish(memberId);

        List<Product> products = wishList.getProducts();

        return products;
    }

    public void deleteWish(WishList wishList, long memberId) {
        Product findProduct = productService.findProduct(wishList.getProductId());
        WishList findWish = findVerifiedWish(memberId);
        List<Product> products = findWish.getProducts();
        for (int i = products.size()-1; i >= 0; i--) {
            Product product = products.get(i);
            if (product.equals(findProduct)) {
                products.remove(product);
        }
        }
        wishListRepository.save(findWish);
    }

    public void createWishList(Member member){
        WishList wishList = new WishList();
        wishList.setMember(member);
        wishListRepository.save(wishList);
    }

    public WishList additionalCreateWishList(long memberId){
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(()->new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        WishList wishList = new WishList();
        wishList.setMember(findMember);
        return wishListRepository.save(wishList);
    }
}
