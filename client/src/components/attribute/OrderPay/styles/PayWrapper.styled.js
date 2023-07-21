import { styled } from "styled-components";

export const PayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #383838;
  color: #fff;
  border-radius: 24px;
  padding: 12px;
  &:nth-child(n + 2) {
    background-color: #fff;
    color: #383838;
    font-size: 14px;
  }
`;
