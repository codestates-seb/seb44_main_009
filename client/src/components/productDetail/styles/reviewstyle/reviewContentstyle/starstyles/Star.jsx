import { styled } from "styled-components";

export const Star = styled.span`
  cursor: ${props => (props.readOnly ? "default" : "pointer")};
  color: ${props => (props.filled === "true" ? "gold" : "gray")};
`;
