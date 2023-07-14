import { useState } from "react";
import { styled } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const ModalContainer = styled.div`
  width: 100%;
  max-width: 700px;
  max-height: 800px;
  height: 70%;
  border: 5px solid black;
  border-radius: 20px;
  position: absolute;
  background-color: white;

  overflow: hidden;
  overflow-y: scroll;

  /* Firefox용 스크롤바 스타일 */
  scrollbar-width: none;

  /* WebKit용 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

const ModalContent = styled.div``;

const CloseBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`;

const CloseButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: white;
  font-size: 36px;
  font-weight: 600;

  border: 0px;
  display: flex;
  justify-content: flex-end;
`;
const DropAllContainer = styled.div`
  width: 100%;
  height: 100%;

  //border: 1px solid gray;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
  padding: 24px;
`;
const DropContainer = styled.div`
  width: 500px;
  height: 100px;

  border: 2px solid gray;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const DropdownButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: white;
  font-size: 36px;
  font-weight: 600;

  border: 0px;
`;
const DropText = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-left: 5px;
`;

const DropOptionText = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-left: 15px;
`;

const DropdownOptions = styled.div`
  display: ${props => (props.open ? "block" : "none")};
`;

const BottomMargin = styled.div`
  margin-bottom: 50px;
`;

const BuyContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const BuyButton = styled.button`
  width: 250px;
  height: 50px;

  border: 2px solid black;
  border-radius: 30px;
  background-color: #3d3d3d;
  margin-right: 50px;

  color: white;

  font-size: 18px;
  font-weight: 600;
`;

const CartButton = styled.button`
  width: 250px;
  height: 50px;

  border: 2px solid black;
  border-radius: 30px;
  background-color: white;
  margin-left: 50px;

  font-size: 18px;
  font-weight: 600;
`;

export const BuyFooterModal = ({ closeModal }) => {
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

        <DropAllContainer>
          <DropContainer>
            <DropText>퍼스널 컬러 선택하기</DropText>
            <DropdownButton onClick={handleDropPersonalToggle}>
              <FontAwesomeIcon icon={faAngleDown} />
            </DropdownButton>
          </DropContainer>
          <DropdownOptions open={dropPersonalOpen}>
            <DropContainer>
              <DropOptionText>Warm</DropOptionText>
            </DropContainer>
            <DropContainer>
              <DropOptionText>Cool</DropOptionText>
            </DropContainer>
          </DropdownOptions>
          <BottomMargin />
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
        <BuyContainer>
          <CartButton>장바구니</CartButton>
          <BuyButton>구매하기</BuyButton>
        </BuyContainer>
        <BottomMargin />
      </ModalContent>
    </ModalContainer>
  );
};
