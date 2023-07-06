import { useState } from "react";
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
import { FooterContainer } from "./styles/FooterContainer.styled";
import { CartBackContainer } from "./styles/CartBackContainer.styled";

function CartPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <CartSelector
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      </StickyStyle>
      <CartBackContainer>
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
            />
          </ProductContainer>
        </CartWrapper>
        <PaymentContainer>
          <SideTitle>예상결제금액</SideTitle>
          <CartPaymentSection />
        </PaymentContainer>
      </CartBackContainer>
      <FooterContainer>
        <Footer_oneBtn text="가격 주문하기" />
      </FooterContainer>
    </BackContainer>
  );
}

export default CartPage;
