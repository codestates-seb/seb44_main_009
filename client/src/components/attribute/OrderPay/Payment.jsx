import { ContainerBox } from "./styles/ContainerBox.styled";
import { PayWrapper } from "./styles/PayWrapper.styled";

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
