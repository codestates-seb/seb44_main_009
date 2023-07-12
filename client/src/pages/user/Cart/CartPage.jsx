import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header_back from "../../../components/header/Header_back";
import Footer_oneBtn from "../../../components/footer/Footer_oneBtn";
import CartSelector from "../../../components/attribute/CartSelector";
import CartProductItem from "../../../components/attribute/CartProductItem";
import CartPaymentSection from "../../../components/attribute/CartPaymentSection";
import { BackContainer } from "./styles/BackContainer.styled";
import { StickyStyle } from "./styles/StickyStyle.styled";
import { Title } from "./styles/Title.styled";
import { SideTitle } from "./styles/SideTitle.styled";
import { ProductContainer } from "./styles/ProductContainer.styled";
import { CartWrapper } from "./styles/CartWrapper.styled";
import { PaymentContainer } from "./styles/PaymentContainer.styled";
import { CartBackContainer } from "./styles/CartBackContainer.styled";

function CartPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]);
  // 장바구니 전체 조회
  const fetchCart = async () => {
    try {
      const response = await fetch("/carts/1");
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleCheckboxChange = e => {
    setIsChecked(e.target.checked);
  };

  const handleCartToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <BackContainer>
      <StickyStyle>
        <Header_back />
      </StickyStyle>
      <CartBackContainer>
        <CartSelector
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
        <CartWrapper>
          <Title>장바구니</Title>
          <ProductContainer>
            <SideTitle>배송상품</SideTitle>
            <CartProductItem
              isChecked={isChecked}
              handleCheckboxChange={handleCheckboxChange}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              handleCartToggle={handleCartToggle}
              cart={cart}
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
      <Link to="/order">
        <Footer_oneBtn text="상품 주문하기" />
      </Link>
    </BackContainer>
  );
}

export default CartPage;
