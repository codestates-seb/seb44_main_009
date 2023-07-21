import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ReviewButton = styled(Link)`
  font-size: 18px;
  text-align: center;
  line-height: 32px;
  color: white;
  background-color: #383838;
  text-decoration: none;

  width: 125px;
  height: 32px;
  border-style: none;
  border-radius: 25px;

  &:hover {
    background-color: #808080;
  }
`;
