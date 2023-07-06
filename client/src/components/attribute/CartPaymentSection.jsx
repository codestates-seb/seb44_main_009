import { PaymentWrapper } from "./styles/PaymentWrapper.styled";
import { PaymentInfo } from "./styles/PaymentInfo.styled";
import { PaymentBackColor } from "./styles/PaymentBackcolor.styled";

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
