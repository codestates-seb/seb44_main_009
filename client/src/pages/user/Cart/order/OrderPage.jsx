import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header_back from "../../../../components/header/Header_back";
import Footer_oneBtn from "../../../../components/footer/Footer_oneBtn";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import OrderProductList from "../../../../components/attribute/OrderPay/OrderProductList";
import Delivery from "../../../../components/attribute/OrderPay/Delivery";
import PaymentMethod from "../../../../components/attribute/OrderPay/PaymentMethod";
import Payment from "../../../../components/attribute/OrderPay/Payment";
import { DropIcon } from "./styles/DropIcon.styled";
import { OrderContainer } from "./styles/OrderContainer.styled";
import { OrderProductContainer } from "./styles/OrderProductContainer.styled";
import { OrderWrapper } from "./styles/OrderWrapper.styled";
import { Title } from "./styles/Title.styled";
import { fetchOrder, patchAddress } from "../../../../api/orderAPIs";
import { useRecoilValue } from "recoil";
import { auth } from "../../../../atoms/auth";

function OrderPage() {
  const authData = useRecoilValue(auth);
  const { orderId } = useParams();

  const [orderData, setOrderData] = useState({});
  const [showOrderProduct, setShowOrderProduct] = useState(false);
  const [editAddress, setEditAddress] = useState(false);

  const toggleOrderProduct = () => {
    setShowOrderProduct(!showOrderProduct);
  };

  const toggleEditAddress = () => {
    setEditAddress(!editAddress);
  };

  // 주문 전체 조회
  useEffect(() => {
    const { token } = authData;
    const orderData = async () => {
      try {
        const data = await fetchOrder(token, orderId);
        setOrderData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    orderData();
  }, []);

  useEffect(() => {
    localStorage.setItem("orderData", JSON.stringify(orderData));
  }, [orderData]);

  if (!orderData.data) {
    return <div>Loading...</div>;
  }

  const {
    totalPrice,
    productTotalPrice,
    shippingCost,
    address,
    cartProductList,
  } = orderData.data;

  const paymentMethods = ["간편결제", "카드결제", "현금결제", "휴대폰결제"];

  // 배송지 정보 변경
  const updateAddress = async () => {
    const { token } = authData;
    try {
      const response = await patchAddress(token, orderId);
      const updatedOrderData = await fetchOrder(token, orderId);
      setOrderData(updatedOrderData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
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
    updateAddress();
  };

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
          <OrderProductList products={cartProductList}></OrderProductList>
        </OrderProductContainer>
        <Delivery
          address={address}
          editAddress={editAddress}
          handleChangeAddress={handleChangeAddress}
          toggleEditAddress={toggleEditAddress}
          updateAddress={updateAddress}
        />
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
