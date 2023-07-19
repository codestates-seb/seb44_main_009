import { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { dummyproducts } from "../../dummyDate/dummyProducts";

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

  const handleDropPersonalToggle = () => {
    setDropPersonalOpen(prevState => !prevState);
  };
  const handleDropColorToggle = () => {
    setDropColorOpen(prevState => !prevState);
  };
  const handleDropSizeToggle = () => {
    setDropSizeOpen(prevState => !prevState);
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
            <DropText>퍼스널 컬러 선택하기</DropText>
            <DropdownButton onClick={handleDropPersonalToggle}>
              <FontAwesomeIcon icon={faAngleDown} />
            </DropdownButton>
          </DropContainer>

          <DropdownOptions open={dropPersonalOpen}>
            <DropContainer>
              <DropOptionText>{product.name}</DropOptionText>
            </DropContainer>
            <DropContainer>
              <DropOptionText>Cool</DropOptionText>
            </DropContainer>
          </DropdownOptions>
          <BottomMargin />

          {/* 색상 선택하기 드롭 */}
          <DropContainer>
            <DropText>색상 선택하기</DropText>
            <DropdownButton onClick={handleDropColorToggle}>
              <FontAwesomeIcon icon={faAngleDown} />
            </DropdownButton>
          </DropContainer>
          <DropdownOptions open={dropColorOpen}>
            <DropContainer>
              <DropOptionText>dummy.colors[0].name</DropOptionText>
            </DropContainer>
            <DropContainer>
              <DropOptionText>dummy.colors[1].name</DropOptionText>
            </DropContainer>
            {/* {dummy.colors.map((color, index) => (
            <DropContainer key={index}>{color.name}</DropContainer>
          ))} */}
          </DropdownOptions>
          <BottomMargin />

          {/* 사이즈 선택하기 드롭 */}
          <DropContainer>
            <DropText>사이즈 선택하기</DropText>
            <DropdownButton onClick={handleDropSizeToggle}>
              <FontAwesomeIcon icon={faAngleDown} />
            </DropdownButton>
          </DropContainer>
          <DropdownOptions open={dropSizeOpen}>
            <DropContainer>
              <DropOptionText>Free</DropOptionText>
            </DropContainer>
            <DropContainer>
              <DropOptionText>S</DropOptionText>
            </DropContainer>
            <DropContainer>
              <DropOptionText>M</DropOptionText>
            </DropContainer>
            <DropContainer>
              <DropOptionText>L</DropOptionText>
            </DropContainer>
            <DropContainer>
              <DropOptionText>XL</DropOptionText>
            </DropContainer>
          </DropdownOptions>
          <BottomMargin />
        </DropAllContainer>

        {/* 장바구니, 구매하기 버튼 */}
        <BuyContainer>
          <CartButton>장바구니</CartButton>
          <BuyButton>구매하기</BuyButton>
        </BuyContainer>
        <BottomMargin />
      </ModalContent>
    </ModalContainer>
  );
};
