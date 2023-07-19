import { styled } from "styled-components";

export const ToggleButton = styled.button`
  padding: 10px 15px;
  background-color: ${({ active }) => (active ? "green" : "gray")};
  color: white;
  border: none;
  border-radius: 50px;
  margin-right: 5px;
`;
