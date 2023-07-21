import { PaymentWrapper } from "./styles/PaymentWrapper.styled";
import { PaymentInfo } from "./styles/PaymentInfo.styled";
import { PaymentBackColor } from "./styles/PaymentBackcolor.styled";

function CartPaymentSection({
  shippingCost,
  totalProductPrice,
  totalOrderPrice,
}) {
  return (
    <PaymentWrapper>
      <PaymentInfo>
        <div>총 상품금액</div>
        <div>{totalProductPrice}원</div>
      </PaymentInfo>
      <PaymentInfo>
        <div>배송비</div>
        <div>{shippingCost}원</div>
      </PaymentInfo>
      <PaymentBackColor>
        <div>총 결제 금액</div>
        <div>{totalOrderPrice}원</div>
      </PaymentBackColor>
    </PaymentWrapper>
  );
}

export default CartPaymentSection;
