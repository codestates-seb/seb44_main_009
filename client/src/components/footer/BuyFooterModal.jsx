import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

//import { dummyproducts } from "../../dummyDate/dummyProducts";
import { fetchProducts } from "../../api/product";

import { useRecoilValue, useRecoilState } from "recoil";
import { auth } from "../../atoms/auth";
import { productsState } from "../../atoms/product";
import { addToCart, postPayment } from "../../api/orderAPIs";
import { getUser } from "../../api/userAPI";

import {
  DropText,
  DropOptionText,
  DropdownOptions,
  DropdownButton,
  DropContainer,
  DropAllContainer,
  CloseButton,
  CloseBtnBox,
  CartButton,
  BuyContainer,
  BuyButton,
  BottomMargin,
  ModalContainer,
} from "./footerModalstyles/index";

const ModalContent = styled.div``;

export const BuyFooterModal = ({ closeModal }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const { isLogin, token } = useRecoilValue(auth);
  const [cartItems, setCartItems] = useRecoilState(productsState);
  const navigate = useNavigate();

  const { productId } = useParams();
  // 더미데이터 - product
  // const product = dummyproducts.find(p => p.productId === parseInt(productId));

  const [dropPersonalOpen, setDropPersonalOpen] = useState(false);
  const [dropColorOpen, setDropColorOpen] = useState(false);
  const [dropSizeOpen, setDropSizeOpen] = useState(false);
  const [dropQuantityOpen, setDropQuantityOpen] = useState(false);

  const [selectedPersonalColor, setSelectedPersonalColor] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);

  // API 데이터  - products
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productsData = await fetchProducts();
        const foundProduct = productsData.find(
          p => p.productId === parseInt(productId),
        );

        setProducts(foundProduct);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  const handleDropPersonalToggle = () => {
    setDropPersonalOpen(prevState => !prevState);
  };
  const handleDropColorToggle = () => {
    setDropColorOpen(prevState => !prevState);
  };
  const handleDropSizeToggle = () => {
    setDropSizeOpen(prevState => !prevState);
  };

  const handleDropQuantityToggle = () => {
    setDropQuantityOpen(prevState => !prevState);
  };

  const handleSelectedPersonalColor = personalColor => {
    setSelectedPersonalColor(personalColor);
    setDropPersonalOpen(false);
  };

  const handleSelectedColorClick = color => {
    setSelectedColor(color);
    setDropColorOpen(false);
  };

  const handleSelectedQuantityClick = quantity => {
    setSelectedQuantity(quantity);
    setDropQuantityOpen(false);
  };

  const handleSelectedSizeClick = size => {
    setSelectedSize(size.size);
    setDropSizeOpen(false);
  };

  // 장바구니 post api
  const handleCartButtonClick = async () => {
    try {
      if (isLogin && token) {
        const itemData = {
          productId: products.productId,
          quantity: selectedQuantity,
          size: selectedSize,
          color: selectedColor,
        };

        const addItem = await addToCart(token, itemData);
        const updatedCart = [...cartItems, addItem];
        setCartItems(updatedCart);
        navigate("/cart");
      } else {
        alert("로그인이 필요합니다.");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 구매하기 post api
  const handlePaymentButtonClick = async () => {
    const user = await getUser(token);
    const data = {
      receiverName: user.korName,
      zipcode: 12345,
      addressName: user.address,
      addressDetails: user.address,
      telNum: user.phoneNumber,
      request: "Leave at doorstep",
      productId: products.productId,
      quantity: selectedQuantity,
    };

    try {
      const response = await postPayment(token, data);
      const orderId = response.data.orderId;
      navigate(`/order/${orderId}`);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <ModalContainer>
      <ModalContent>
        <CloseBtnBox>
          <CloseButton onClick={closeModal}>X</CloseButton>
        </CloseBtnBox>
        {/* 퍼스널컬러 선택하기 드롭 */}
        <DropAllContainer>
          <DropContainer>
            <DropText>
              {selectedPersonalColor
                ? selectedPersonalColor + " 톤"
                : "퍼스널 컬러 선택하기"}
            </DropText>
            <DropdownButton onClick={handleDropPersonalToggle}>
              <FontAwesomeIcon icon={faAngleDown} />
            </DropdownButton>
          </DropContainer>

          <DropdownOptions open={dropPersonalOpen}>
            <DropContainer
              onClick={() =>
                handleSelectedPersonalColor(products.personalColor)
              }
            >
              <DropOptionText>{products.personalColor}</DropOptionText>
            </DropContainer>
          </DropdownOptions>

          <BottomMargin />

          {/* 색상 선택하기 드롭 */}
          <DropContainer>
            <DropText>
              {selectedColor ? selectedColor + " 색" : "색상 선택하기"}
            </DropText>
            <DropdownButton onClick={handleDropColorToggle}>
              <FontAwesomeIcon icon={faAngleDown} />
            </DropdownButton>
          </DropContainer>
          <DropdownOptions open={dropColorOpen}>
            {products.colors.map((color, index) => (
              <DropContainer
                key={index}
                onClick={() => handleSelectedColorClick(color.name)}
              >
                <DropOptionText>{color.name}</DropOptionText>
              </DropContainer>
            ))}
          </DropdownOptions>
          <BottomMargin />

          {/* 사이즈 선택하기 드롭 */}
          <DropContainer>
            <DropText>
              {selectedSize ? selectedSize + " 사이즈" : "사이즈 선택하기"}
            </DropText>
            <DropdownButton onClick={handleDropSizeToggle}>
              <FontAwesomeIcon icon={faAngleDown} />
            </DropdownButton>
          </DropContainer>
          <DropdownOptions open={dropSizeOpen}>
            {products.sizes.map((sizeObj, index) => (
              <DropContainer
                key={index}
                onClick={() => handleSelectedSizeClick(sizeObj)}
              >
                <DropOptionText>{sizeObj.size}</DropOptionText>{" "}
                {/* Access the 'size' property */}
              </DropContainer>
            ))}
          </DropdownOptions>
          <BottomMargin />

          {/* 수량 선택하기 드롭 */}
          <DropContainer>
            <DropText>
              {selectedQuantity ? selectedQuantity + " 수량" : "수량 선택하기"}
            </DropText>
            <DropdownButton onClick={handleDropQuantityToggle}>
              <FontAwesomeIcon icon={faAngleDown} />
            </DropdownButton>
          </DropContainer>
          <DropdownOptions open={dropQuantityOpen}>
            {Array.from(
              { length: products.count },
              (_, index) => index + 1,
            ).map(quantity => (
              <DropContainer
                key={quantity}
                onClick={() => handleSelectedQuantityClick(quantity)}
              >
                <DropOptionText>{quantity}</DropOptionText>
              </DropContainer>
            ))}
          </DropdownOptions>
          <BottomMargin />
        </DropAllContainer>

        {/* 장바구니, 구매하기 버튼 */}
        <BuyContainer>
          <CartButton onClick={handleCartButtonClick}>장바구니</CartButton>
          <BuyButton onClick={handlePaymentButtonClick}>구매하기</BuyButton>
        </BuyContainer>
        <BottomMargin />
      </ModalContent>
    </ModalContainer>
  );
};
