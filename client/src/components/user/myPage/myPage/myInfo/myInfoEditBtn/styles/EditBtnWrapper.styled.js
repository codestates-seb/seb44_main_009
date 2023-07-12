import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const EditBtnWrapper = styled(Link)`
  font-size: 24px;
  line-height: 45px;
  color: white;
  text-align: center;

  background-color: #383838;

  width: 65px;
  height: 45px;
  border-radius: 30px;

  &:hover {
    background-color: #808080;
  }
`;
