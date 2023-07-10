import { useState } from "react";
import Header_back from "../../../../components/header/Header_back";
import Footer_oneBtn from "../../../../components/footer/Footer_oneBtn";
import { styled } from "styled-components";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderProductList from "../../../../components/attribute/OrderPay/OrderProductList";
import { dummyproducts } from "../../../../dummyDate/dummyProducts";
import DeliveryInfo from "../../../../components/attribute/OrderPay/DeliveryInfo";

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 1000px;
`;

const OrderWrapper = styled.div`
  width: 834px;
  height: 100%;
  padding: 32px;
  border: 1px solid #383838;
  flex: 1;
  overflow-y: auto;
`;

const Title = styled.div`
  padding: 24px 0 24px 0;
  display: flex;
  font-size: 24px;
  font-weight: 600;
`;

const DropIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: ${props => (props.show ? "rotate(180deg)" : "rotate(0)")};
`;

const OrderProductContainer = styled.div`
  border: 1px solid #383838;
  border-radius: 12px;
  padding: 24px;
  max-height: ${props => (props.show ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? "visible" : "hidden")};
`;

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
`;

const ButtonWrapper = styled.div`
  display: flex;
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
function OrderPage() {
  const [showOrderProduct, setShowOrderProduct] = useState(false);
  const [editAddress, setEditAddress] = useState(false);

  const toggleOrderProduct = () => {
    setShowOrderProduct(!showOrderProduct);
  };

  const toggleEditAddress = () => {
    setEditAddress(!editAddress);
  };

  const orderData = {
    data: {
      cartProductList: [
        {
          productName: "product1",
          quantity: 3,
          totalProductPrice: 300,
        },
        {
          productName: "product2",
          quantity: 1,
          totalProductPrice: 150,
        },
        {
          productName: "product3",
          quantity: 2,
          totalProductPrice: 400,
        },
        {
          productName: "product4",
          quantity: 5,
          totalProductPrice: 1250,
        },
      ],
      totalPrice: 2100,
      address: {
        reciverName: "John Doe",
        zipcode: 12345,
        addressName: "123 Main St",
        addressDetails: "Apt 4B",
        telNum: "123-456-7890",
        request: "Leave at doorstep",
      },
      shippingStatus: "BEFORE_PAYMENT",
      reviewStatus: "IMPOSSIBLE_REVIEW",
    },
  };

  const { totalPrice, address } = orderData.data;

  const paymentMethods = ["간편결제", "카드결제", "현금결제", "휴대폰결제"];

  return (
    <OrderContainer>
      <Header_back />
      <OrderWrapper>
        <Title>
          주문/결제
          <DropIcon
            icon={faChevronDown}
            show={showOrderProduct}
            onClick={toggleOrderProduct}
          />
        </Title>
        <OrderProductContainer show={showOrderProduct}>
          <h3>배송 상품</h3>
          <OrderProductList products={dummyproducts}></OrderProductList>
        </OrderProductContainer>
        <ContainerBox>
          {editAddress ? (
            <DeliveryInfo />
          ) : (
            <div>
              <h3>배송지 정보</h3>
              <p>이름 {address.reciverName}</p>
              <p>우편번호 {address.zipcode}</p>
              <p>주소 {address.addressName}</p>
              <p>상세 주소 {address.addressDetails}</p>
              <p>전화번호 {address.telNum}</p>
              <p>요청사항: {address.request}</p>
            </div>
          )}
          <button onClick={toggleEditAddress}>
            {editAddress ? "완료" : "변경"}{" "}
          </button>
        </ContainerBox>
        <ContainerBox>
          <PayWrapper>
            <div>총 결제 금액</div>
            <div> {totalPrice}</div>
          </PayWrapper>
        </ContainerBox>
        <ContainerBox>
          <h3>배송 상품</h3>
          <ButtonWrapper>
            {paymentMethods.map((method, index) => (
              <Button key={index}>{method}</Button>
            ))}
          </ButtonWrapper>
        </ContainerBox>
      </OrderWrapper>
      <Footer_oneBtn text="상품 결제하기" />
    </OrderContainer>
  );
}

export default OrderPage;
