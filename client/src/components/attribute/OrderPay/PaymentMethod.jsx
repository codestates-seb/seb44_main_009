import { styled } from "styled-components";

const ContainerBox = styled.div`
  border: 1px solid #383838;
  border-radius: 12px;
  padding: 24px;
  margin-top: 24px;
`;

const Button = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 24px;
  margin-right: 8px;
  border: 1px solid #383838;
  background-color: ${({ selected }) => (selected ? "#383838" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#383838")};
  font-size: 18px;
  cursor: pointer;

  &:first-child {
    border-radius: 12px 0 0 12px;
  }

  &:last-child {
    border-radius: 0 12px 12px 0;
  }

  &:hover {
    background-color: #383838;
    color: #fff;
    transition: 0.6s;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
`;

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
