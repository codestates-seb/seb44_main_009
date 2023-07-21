import { styled } from "styled-components";

export const Checkbox = styled.input`
  transform: scale(1.7);
  margin-right: 12px;
  appearance: none;
  width: 14px;
  height: 14px;
  border: 2px solid #c4c4c4;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  &:checked {
    background-color: #ff5160;
    border-color: #ff5160;
  }
  &::after {
    content: "";
    position: absolute;
    left: 3px;
    width: 4px;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
