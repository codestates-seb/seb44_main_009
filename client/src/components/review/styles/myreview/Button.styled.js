import { styled } from "styled-components";

export const Button = styled.button`
  margin-top: 12px;
  width: 80px;
  height: 30px;
  background-color: #383838;
  color: #fff;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  a {
    color: #fff;
    text-decoration-line: none;
    font-size: 16px;
  }
  &:hover {
    background-color: gray;
    transition: 0.6s;
  }
`;
