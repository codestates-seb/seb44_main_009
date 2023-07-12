import { styled } from "styled-components";

export const CategoryListItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px;
  width: 200px;
  height: 70px;
  text-decoration: none;
  color: #383838;
  font-weight: 600;
  font-size: 20px;

  &.selected {
    background-color: #fff;
  }
`;
