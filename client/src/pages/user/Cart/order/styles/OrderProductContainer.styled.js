import { styled } from "styled-components";

export const OrderProductContainer = styled.div`
  border: 1px solid #383838;
  border-radius: 12px;
  padding: 24px;
  max-height: ${props => (props.show ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? "visible" : "hidden")};
`;
