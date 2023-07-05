import { useState } from "react";
import Header_back from "../../../components/header/Header_back";
import Footer_oneBtn from "../../../components/footer/Footer_oneBtn";
import { styled } from "styled-components";
import { Accessary } from "../../../image/index";

const BackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
`;

const StickyStyle = styled.div`
  top: 0;
  position: sticky;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  z-index: 1;
`;
const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 834px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const Checkbox = styled.input`
  transform: scale(1.7);
  margin-right: 12px;
  appearance: none;
  width: 14px;
  height: 14px;
  border: 2px solid #c4c4c4;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  &:checked {
    background-color: #ff5160;
    border-color: #ff5160;
  }
`;

const Title = styled.div`
  padding: 24px 0 24px 0;
  display: flex;
  font-size: 18px;
  font-weight: 600;
`;

const DeleteSection = styled.div`
  cursor: pointer;
  &:active {
    color: black;
    font-weight: bold;
  }
`;

const SideTitle = styled.div`
  text-align: left;
`;

const ProductContainer = styled.div`
  margin-top: 8px;
  padding: 16px;
  border: 1px solid #ccc;
`;

const CartWrapper = styled.div`
  width: 834px;
  justify-content: flex-start;
`;

const PaymentContainer = styled.div`
  margin-top: 8px;
  padding: 16px;
  border: 1px solid #ccc;
  width: 834px;
`;

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ProductWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
const ProductView = styled.div`
  width: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 14px 14px;
  height: 48px;
  background-color: #ececec;
  color: gray;
  border-radius: 3px;
`;

const OptionContainer = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 18px;
  height: 30px;
  & > * {
    flex: 1;
  }
`;

const ColumnStyle = styled.div`
  flex-direction: column;
  width: 100%;
`;
const PaymentBackColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #383838;
  color: #fff;
  border-radius: 20px;
  height: 30px;
  padding: 0 12px 0 12px;
`;

const PaymentWrapper = styled.div`
  padding-top: 24px;
  display: grid;
  gap: 16px;
`;

const PaymentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 12px 0 12px;
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
`;

const QuantityDropdown = styled.select`
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #ccc;
`;

function CartPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = e => {
    setQuantity(e.target.value);
  };
  const handleCheckboxChange = e => {
    setIsChecked(e.target.checked);
  };
  return (
    <BackContainer>
      <StickyStyle>
        <Header_back />
        <CheckboxContainer>
          <CheckboxWrapper>
            <Checkbox
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p>{isChecked ? "전체선택(1/1)" : "전체선택(0/1)"}</p>
          </CheckboxWrapper>
          <DeleteSection>선택삭제</DeleteSection>
        </CheckboxContainer>
      </StickyStyle>
      <CartWrapper>
        <Title>장바구니</Title>
        <ProductContainer>
          <SideTitle>배송상품</SideTitle>
          <ProductWrapper>
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </CheckboxContainer>
            <ColumnStyle>
              <ProductDetail>
                <ProductImage src={Accessary} alt="Product" />
                <ProductView>
                  <div>상품이름</div>
                  <div>
                    <p>가격</p>
                  </div>
                </ProductView>
                <RemoveButton>x</RemoveButton>
              </ProductDetail>
              <ProductInfo>
                <div>색상/사이즈</div>
              </ProductInfo>
              <OptionContainer>
                <Button>옵션변경</Button>
                <QuantityDropdown
                  value={quantity}
                  onChange={handleQuantityChange}
                >
                  {Array.from({ length: 100 }, (_, index) => {
                    const value = index + 1;
                    if (value < 100) {
                      return (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      );
                    }
                    return null;
                  })}
                </QuantityDropdown>
              </OptionContainer>
            </ColumnStyle>
          </ProductWrapper>
        </ProductContainer>
      </CartWrapper>
      <PaymentContainer>
        <SideTitle>예상결제금액</SideTitle>
        <PaymentWrapper>
          <PaymentInfo>
            <div>총 상품금액</div>
            <div>가격</div>
          </PaymentInfo>
          <PaymentInfo>
            <div>배송비</div>
            <div>가격</div>
          </PaymentInfo>
          <PaymentBackColor>
            <div>총 결제 금액</div>
            <div>가격</div>
          </PaymentBackColor>
        </PaymentWrapper>
      </PaymentContainer>
      <FooterContainer>
        <Footer_oneBtn text="가격 주문하기" />
      </FooterContainer>
    </BackContainer>
  );
}

export default CartPage;
