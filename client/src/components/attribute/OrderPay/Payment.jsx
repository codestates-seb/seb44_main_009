import { styled } from "styled-components";

const ContainerBox = styled.div`
  border: 1px solid #383838;
  border-radius: 12px;
  padding: 24px;
  margin-top: 24px;
`;

const PayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #383838;
  color: #fff;
  border-radius: 24px;
  padding: 12px;
  &:nth-child(n + 2) {
    background-color: #fff;
    color: #383838;
    font-size: 14px;
  }
`;

function Payment({ totalPrice, productTotalPrice, shippingCost }) {
  return (
    <ContainerBox>
      <PayWrapper>
        <div>총 결제 금액</div>
        <div> {totalPrice}</div>
      </PayWrapper>
      <PayWrapper>
        <div>총 상품 금액</div>
        <div> {productTotalPrice}</div>
      </PayWrapper>
      <PayWrapper>
        <div>배송비</div>
        <div> {shippingCost}</div>
      </PayWrapper>
    </ContainerBox>
  );
}

export default Payment;
