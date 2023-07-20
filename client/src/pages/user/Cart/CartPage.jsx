import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCart, updateCart } from "../../../api/orderAPIs";
import Header_back from "../../../components/header/Header_back";
import Footer_oneBtn from "../../../components/footer/Footer_oneBtn";
import CartProductList from "../../../components/attribute/CartProductList";
import CartPaymentSection from "../../../components/attribute/CartPaymentSection";
import { BackContainer } from "./styles/BackContainer.styled";
import { StickyStyle } from "./styles/StickyStyle.styled";
import { Title } from "./styles/Title.styled";
import { SideTitle } from "./styles/SideTitle.styled";
import { ProductContainer } from "./styles/ProductContainer.styled";
import { CartWrapper } from "./styles/CartWrapper.styled";
import { PaymentContainer } from "./styles/PaymentContainer.styled";
import { CartBackContainer } from "./styles/CartBackContainer.styled";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  CartIcon,
  CartTitle,
  Subtitle,
  EmptyCartContainer,
} from "./styles/EmptyCart/EmptyCartStyles";
import { useRecoilValue } from "recoil";
import { auth } from "../../../atoms/auth";

function CartPage() {
  const { token } = useRecoilValue(auth);
  const [isChecked, setIsChecked] = useState(false);
  const [cart, setCart] = useState({ cartProductList: [] });

  // 장바구니 전체 조회
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCart(token);
        setCart(data);
        localStorage.setItem("cartLength", cart.cartProductList.length);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // 장바구니 수량 변경
  const updateCartItemQuantity = async (cartProductId, newQuantity) => {
    try {
      const response = await updateCart(token, cartProductId, newQuantity);
      console.log(response.data);
      const updatedCartData = await fetchCart(token);
      setCart(updatedCartData);
    } catch (error) {
      console.log("Token:", token);
      console.error(error);
    }
  };

  const handleCheckboxChange = e => {
    setIsChecked(e.target.checked);
  };

  return (
    <BackContainer>
      <StickyStyle>
        <Header_back cartItemsCount={cart.cartProductList.length} />
      </StickyStyle>
      {cart.cartProductList.length === 0 ? (
        <EmptyCartContainer>
          <CartIcon icon={faBasketShopping} />
          <CartTitle>장바구니에 담긴 상품이 없어요</CartTitle>
          <Subtitle>원하는 상품을 담아보세요</Subtitle>
          <Link to="/">
            <Button>상품 보러가기</Button>
          </Link>
        </EmptyCartContainer>
      ) : (
        <CartBackContainer>
          <CartWrapper>
            <Title>장바구니</Title>
            <ProductContainer>
              <SideTitle>배송상품</SideTitle>
              <CartProductList
                cart={cart}
                isChecked={isChecked}
                handleCheckboxChange={handleCheckboxChange}
                updateCartItemQuantity={updateCartItemQuantity}
              />
            </ProductContainer>
          </CartWrapper>
          <PaymentContainer>
            <SideTitle>예상결제금액</SideTitle>
            <CartPaymentSection
              shippingCost={cart.shippingCost}
              totalProductPrice={cart.totalProductPrice}
              totalOrderPrice={cart.totalOrderPrice}
            />
          </PaymentContainer>
        </CartBackContainer>
      )}
      {/* 확인용 지울것 */}
      <Link to="/review">
        <button>리뷰</button>
      </Link>
      <Link to="/order">
        <Footer_oneBtn text="상품 주문하기" />
      </Link>
    </BackContainer>
  );
}

export default CartPage;
