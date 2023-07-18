import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCart } from "../../../api/orderAPIs";
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
import axios from "axios";

function CartPage() {
  const [isChecked, setIsChecked] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState({ cartProductList: [] });

  // 장바구니 전체 조회
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCart();
        setCart(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // 장바구니 수량 변경
  const updateCartItemQuantity = async (cartItemId, newQuantity) => {
    try {
      const response = await axios.patch(
        `carts/1/items/${cartItemId}?quantity=${newQuantity}`,
      );
      console.log(response.data);

      const updatedCartData = await fetchCart();
      setCart(updatedCartData);
    } catch (error) {
      console.error(error);
    }
  };

  // 장바구니 추가
  // const addToCart = async (cartId, productId, quantity) => {
  //   try {
  //     const response = await axios.post(`/carts/${cartId}/items`, {
  //       cartId: cartId,
  //       productId: productId,
  //       quantity: quantity,
  //     });
  //     console.log(response.data);
  //     fetchCart();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleCheckboxChange = e => {
    setIsChecked(e.target.checked);
  };

  // const handleCartToggle = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  //장바구니 아이템 갯수
  const cartItemsCount = cart.cartProductList.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  return (
    <BackContainer>
      <StickyStyle>
        <Header_back cartItemsCount={cartItemsCount} />
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
      <Link to="/order">
        <Footer_oneBtn text="상품 주문하기" />
      </Link>
    </BackContainer>
  );
}

export default CartPage;
