import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DropIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin-left: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: ${props => (props.show ? "rotate(180deg)" : "rotate(0)")};
`;
