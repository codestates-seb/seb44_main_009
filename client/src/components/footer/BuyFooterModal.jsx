import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { dummyproducts } from "../../dummyDate/dummyProducts";

import { useRecoilValue } from "recoil";
import { auth } from "../../atoms/auth";

// import axios from "axios";
// import { useRecoilState } from "recoil";
// import { productsState } from "../../atoms/product";

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
  const { isLogin } = useRecoilValue(auth);
  const navigate = useNavigate();

  const { productId } = useParams();
  const product = dummyproducts.find(p => p.productId === parseInt(productId));

  const [dropPersonalOpen, setDropPersonalOpen] = useState(false);
  const [dropColorOpen, setDropColorOpen] = useState(false);
  const [dropSizeOpen, setDropSizeOpen] = useState(false);

  const [selectedPersonalColor, setSelectedPersonalColor] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

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
  };

  const handleCartButtonClick = () => {
    if (isLogin) {
      navigate("/cart");
    } else {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
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
          <CartButton onClick={handleCartButtonClick}>장바구니</CartButton>
          <BuyButton>구매하기</BuyButton>
        </BuyContainer>
        <BottomMargin />
      </ModalContent>
    </ModalContainer>
  );
};
