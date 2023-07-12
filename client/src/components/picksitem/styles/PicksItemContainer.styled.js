import { styled } from "styled-components";

export const PicksItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  font-size: 32px;
  font-weight: 600;
  color: #383838;
  :nth-child(2) {
    font-size: 24px;
    color: #ccc;
  }
`;
