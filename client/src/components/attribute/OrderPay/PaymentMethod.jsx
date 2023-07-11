import { ContainerBox } from "./styles/ContainerBox.styled";
import { Button } from "./styles/Button.styled";
import { ButtonWrapper } from "./styles/ButtonWrapper.styled";

function PaymentMethod({ paymentMethods }) {
  return (
    <ContainerBox>
      <h3>결제방법</h3>
      <ButtonWrapper>
        {paymentMethods.map((method, index) => (
          <Button key={index}>{method}</Button>
        ))}
      </ButtonWrapper>
    </ContainerBox>
  );
}

export default PaymentMethod;
