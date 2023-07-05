import { useState } from "react";
import Header_back from "../../../components/header/Header_back";
import Footer_oneBtn from "../../../components/footer/Footer_oneBtn";
import CartSelector from "../../../components/attribute/CartSelector";
import CartProductItem from "../../../components/attribute/CartProductItem";
import CartPaymentSection from "../../../components/attribute/CartPaymentSection";
import { styled } from "styled-components";

const BackContainer = styled.div`
  height: 1000px;
`;

const StickyStyle = styled.div`
  top: 0;
  position: sticky;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  max-width: 834px;
  z-index: 1;
`;

const Title = styled.div`
  padding: 24px 0 24px 0;
  display: flex;
  font-size: 18px;
  font-weight: 600;
`;

const SideTitle = styled.div`
  text-align: left;
`;

const ProductContainer = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
`;

const CartWrapper = styled.div`
  width: 834px;
  justify-content: flex-start;
`;

const PaymentContainer = styled.div`
  margin-top: 24px;
  padding: 16px;
  border: 1px solid #ccc;
  width: 834px;
`;

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: #fff;
`;

const CartBackContainer = styled.div`
  overflow: auto;
`;

function CartPage() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = e => {
    setIsChecked(e.target.checked);
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
