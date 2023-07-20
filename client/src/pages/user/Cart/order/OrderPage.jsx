import { useState, useEffect } from "react";
import Header_back from "../../../../components/header/Header_back";
import Footer_oneBtn from "../../../../components/footer/Footer_oneBtn";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import OrderProductList from "../../../../components/attribute/OrderPay/OrderProductList";
import { dummyproducts } from "../../../../dummyDate/dummyProducts";
import Delivery from "../../../../components/attribute/OrderPay/Delivery";
import PaymentMethod from "../../../../components/attribute/OrderPay/PaymentMethod";
import Payment from "../../../../components/attribute/OrderPay/Payment";
import { DropIcon } from "./styles/DropIcon.styled";
import { OrderContainer } from "./styles/OrderContainer.styled";
import { OrderProductContainer } from "./styles/OrderProductContainer.styled";
import { OrderWrapper } from "./styles/OrderWrapper.styled";
import { Title } from "./styles/Title.styled";
import { fetchOrder } from "../../../../api/orderAPIs";
import { useRecoilValue } from "recoil";
import { auth } from "../../../../atoms/auth";

function OrderPage() {
  const authData = useRecoilValue(auth);

  // 주문 전체 조회
  useEffect(() => {
    const { token } = authData;
    const orderData = async () => {
      try {
        const data = await fetchOrder(token);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    orderData();
  }, []);

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
        <Delivery
          address={address}
          editAddress={editAddress}
          handleChangeAddress={handleChangeAddress}
          toggleEditAddress={toggleEditAddress}
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
