import { styled } from "styled-components";

export const ChangeButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${({ editAddress }) => (editAddress ? "gray" : "#383838")};
  color: ${({ editAddress }) => (editAddress ? "#383838" : "#fff")};
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: gray;
    color: #fff;
  }
`;
