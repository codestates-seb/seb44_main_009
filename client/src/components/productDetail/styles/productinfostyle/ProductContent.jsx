import { styled } from "styled-components";

// 상품 상세 설명

export const ProductContentContainer = styled.div`
  border: 2px solid black;
  width: 100%;
`;
export const ProductContent = styled.div`
  width: 80%;
  margin-top: 50px;
  margin-bottom: 150px;
  margin-left: 50px;

  font-size: 24px;
  font-weight: 600;
  //  border: 2px solid black;
  white-space: pre-wrap;
  word-break: keep-all;
  line-break: after-white-space;

  &::after {
    content: " ";
    white-space: pre-wrap;
  }

  transition: margin-top 2s ease;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`;
