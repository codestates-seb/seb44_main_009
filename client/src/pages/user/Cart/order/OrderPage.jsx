import { useState, useEffect } from "react";
import Header_back from "../../../../components/header/Header_back";
import Footer_oneBtn from "../../../../components/footer/Footer_oneBtn";
import { styled } from "styled-components";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderProductList from "../../../../components/attribute/OrderPay/OrderProductList";
import { dummyproducts } from "../../../../dummyDate/dummyProducts";
import DeliveryInfo from "../../../../components/attribute/OrderPay/DeliveryInfo";
import PaymentMethod from "../../../../components/attribute/OrderPay/PaymentMethod";
import Payment from "../../../../components/attribute/OrderPay/Payment";

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 1000px;
  align-items: center;
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
  cursor: pointer;
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
const DeliveryContainerBox = styled.div`
  border: 1px solid #383838;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  > div {
    flex: 1;
  }
`;

const ChangeButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${({ editAddress }) => (editAddress ? "gray" : "#383838")};
  color: ${({ editAddress }) => (editAddress ? "#383838" : "#fff")};
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: gray;
    color: #fff;
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

  const [orderData, setOrderData] = useState(() => {
    const storedOrderData = localStorage.getItem("orderData");
    return storedOrderData
      ? JSON.parse(storedOrderData)
      : {
          data: {
            orderId: 1,
            cartProductList: [
              {
                productId: 1,
                productName: "Product1",
                productPrice: 200,
                quantity: 5,
                totalProductPrice: 1000,
                reviewStatus: "IMPOSSIBLE_REVIEW",
              },
              {
                productId: 2,
                productName: "Product2",
                productPrice: 100,
                quantity: 5,
                totalProductPrice: 500,
                reviewStatus: "IMPOSSIBLE_REVIEW",
              },
            ],
            shippingCost: 3000,
            productTotalPrice: 1500,
            totalPrice: 4500,
            address: {
              receiverName: "JohnDoe",
              zipcode: 12345,
              addressName: "123_Main_St",
              addressDetails: "Apt_4B",
              telNum: "010-456-7890",
              request: "Leave_at_doorstep",
            },
            shippingStatus: "BEFORE_PAYMENT",
            createdAt: "2023-07-10T16:33:38.518034",
            lastModifiedAt: "2023-07-10T16:33:38.518034",
          },
        };
  });

  const { totalPrice, productTotalPrice, shippingCost, address } =
    orderData.data;

  const paymentMethods = ["간편결제", "카드결제", "현금결제", "휴대폰결제"];

  const handleChangeAddress = newAddress => {
    setOrderData(prevOrderData => ({
      ...prevOrderData,
      data: {
        ...prevOrderData.data,
        address: {
          ...prevOrderData.data.address,
          ...newAddress,
        },
      },
    }));
  };

  useEffect(() => {
    localStorage.setItem("orderData", JSON.stringify(orderData));
  }, [orderData]);

  return (
    <OrderContainer>
      <Header_back />
      <OrderWrapper>
        <Title>
          주문/결제
          <DropIcon
            icon={faChevronDown}
            show={showOrderProduct ? 1 : 0}
            onClick={toggleOrderProduct}
          />
        </Title>
        <OrderProductContainer show={showOrderProduct ? 1 : 0}>
          <h3>배송 상품</h3>
          <OrderProductList products={dummyproducts}></OrderProductList>
        </OrderProductContainer>
        <DeliveryContainerBox>
          {editAddress ? (
            <DeliveryInfo
              address={orderData.data.address}
              handleChangeAddress={handleChangeAddress}
            />
          ) : (
            <div>
              <h3>배송지 정보</h3>
              <p>이름 {address.receiverName}</p>
              <p>우편번호 {address.zipcode}</p>
              <p>주소 {address.addressName}</p>
              <p>상세 주소 {address.addressDetails}</p>
              <p>전화번호 {address.telNum}</p>
              <p>요청사항 {address.request}</p>
            </div>
          )}
          <ChangeButton onClick={toggleEditAddress}>
            {editAddress ? "완료" : "변경"}{" "}
          </ChangeButton>
        </DeliveryContainerBox>
        <Payment
          totalPrice={totalPrice}
          productTotalPrice={productTotalPrice}
          shippingCost={shippingCost}
        />
        <PaymentMethod paymentMethods={paymentMethods} />
      </OrderWrapper>
      <Footer_oneBtn text="상품 결제하기" />
    </OrderContainer>
  );
}

export default OrderPage;
