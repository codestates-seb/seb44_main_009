import { styled } from "styled-components";

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
function CartPaymentSection() {
  return (
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
  );
}

export default CartPaymentSection;
