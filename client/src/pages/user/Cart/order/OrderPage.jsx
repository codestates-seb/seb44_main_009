import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import {
  fetchOrder,
  patchAddress,
  patchDelivery,
} from "../../../../api/orderAPIs";
import { useRecoilValue } from "recoil";
import { auth } from "../../../../atoms/auth";

function OrderPage() {
  const authData = useRecoilValue(auth);
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [orderData, setOrderData] = useState({});
  const [showOrderProduct, setShowOrderProduct] = useState(false);
  const [editAddress, setEditAddress] = useState(false);

  const toggleOrderProduct = () => {
    setShowOrderProduct(!showOrderProduct);
  };

  const toggleEditAddress = () => {
    setEditAddress(!editAddress);
    if (!editAddress) {
      updateAddress();
    }
  };

  // 주문 전체 조회
  useEffect(() => {
    const { token } = authData;
    const orderData = async () => {
      try {
        const response = await fetchOrder(token, orderId);
        localStorage.setItem(
          "orderResponseData",
          JSON.stringify(response.data),
        );
        setOrderData(response);
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
    const data = {
      receiverName: "",
      zipcode: 111,
      addressName: "",
      addressDetails: "",
      telNum: "",
      request: "Leave at doorstep",
    };
    try {
      const response = await patchAddress(token, orderId, data);
      console.log(response.data);
    } catch (error) {
      console.log(data);
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

  // 배송 완료
  const updateDeliveryState = async () => {
    const { token } = authData;
    const data = {
      orderId: orderId,
    };
    try {
      const response = await patchDelivery(token, data);
      localStorage.setItem(
        "deliveryResponseData",
        JSON.stringify(response.data),
      );
      navigate("/");
    } catch (error) {
      navigate("/mypage");
    }
  };
  const orderResponseData = localStorage.getItem("orderResponseData");

  if (orderResponseData) {
    JSON.parse(orderResponseData);
  }
  // const deliveryResponseData = localStorage.getItem("deliveryResponseData");

  // if (deliveryResponseData) {
  //   JSON.parse(deliveryResponseData);
  // }
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
      <Footer_oneBtn text="상품 결제하기" onClick={updateDeliveryState} />
    </OrderContainer>
  );
}

export default OrderPage;
