import { styled } from "styled-components";

export const DropdownOptions = styled.div`
  display: ${props => (props.open ? "block" : "none")};
`;
