import { styled } from "styled-components";

// 상품 상세보기 버튼
const fontSize24 = "24px";

export const ProductInfoButton = styled.button`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #c4c4c2;

  font-size: ${fontSize24};
  font-weight: 600;

  border: 2px solid black;
  border-radius: 5px;
  margin-bottom: ${props => (props.isExpanded ? "0" : "20px")};
  position: absolute;
  bottom: 0;
`;
