import { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { dummyproducts } from "../../dummyDate/dummyProducts";

import axios from "axios";
import { useRecoilState } from "recoil";
import { productsState } from "../../atoms/product";

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
  const { productId } = useParams();
  const product = dummyproducts.find(p => p.productId === parseInt(productId));

  const [dropPersonalOpen, setDropPersonalOpen] = useState(false);
  const [dropColorOpen, setDropColorOpen] = useState(false);
  const [dropSizeOpen, setDropSizeOpen] = useState(false);

  const [selectedPersonalColor, setSelectedPersonalColor] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  //const [cartItems, setCartItems] = useRecoilState(productsState);
  // >>>>>>> d774bc7a621b7d97b9cb3c2ef25e06f91adc9e0f

  const handleDropPersonalToggle = () => {
    setDropPersonalOpen(prevState => !prevState);
  };
  const handleDropColorToggle = () => {
    setDropColorOpen(prevState => !prevState);
  };
  const handleDropSizeToggle = () => {
    setDropSizeOpen(prevState => !prevState);
  };

  const handleSelectedPersonalColor = personalColor => {
    setSelectedPersonalColor(personalColor);
    setDropPersonalOpen(false);
  };

  const handleSelectedColorClick = color => {
    setSelectedColor(color);
    setDropColorOpen(false);
  };

  const handleSelectedSizeClick = size => {
    setSelectedSize(size);
    setDropSizeOpen(false);
    //=======
    // const handleAddToCart = async () => {
    //   const newCartItem = {
    //     cartId: "1",
    //     productId: "123",
    //     quantity: "5",
    //   };

    //   try {
    //     const response = await axios.post("cart/", newCartItem);
    //     const updatedCartItems = [...cartItems, response.data];
    //     setCartItems(updatedCartItems);
    //   } catch (error) {
    //     console.error(error);
    //   }
    //>>>>>>> d774bc7a621b7d97b9cb3c2ef25e06f91adc9e0f
  };

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
              onClick={() => handleSelectedPersonalColor(product.personalColor)}
            >
              <DropOptionText>{product.personalColor}</DropOptionText>
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
            {product.colors.map((color, index) => (
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
            {product.size.map((size, index) => (
              <DropContainer
                key={index}
                onClick={() => handleSelectedSizeClick(size)}
              >
                <DropOptionText>{size} </DropOptionText>
              </DropContainer>
            ))}
          </DropdownOptions>
          <BottomMargin />
        </DropAllContainer>

        {/* 장바구니, 구매하기 버튼 */}
        <BuyContainer>
          <CartButton onClick={handleAddToCart}>장바구니</CartButton>
          <BuyButton>구매하기</BuyButton>
        </BuyContainer>
        <BottomMargin />
      </ModalContent>
    </ModalContainer>
  );
};
