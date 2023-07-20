import { styled, keyframes } from "styled-components";

export const slideUpAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 834px;
  height: 85%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  animation: ${slideUpAnimation} 0.3s ease-in-out;
  z-index: 3;
`;
