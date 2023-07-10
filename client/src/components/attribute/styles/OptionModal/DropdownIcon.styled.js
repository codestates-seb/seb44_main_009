import { styled } from "styled-components";

export const DropdownIcon = styled.span`
  display: inline-block;
  margin-left: auto;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;
