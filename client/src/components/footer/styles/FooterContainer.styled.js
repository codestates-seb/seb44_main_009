import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  width: 834px;
  height: 100px;
  border: 1px solid #383838;
  border-radius: 0 0 30px 30px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
`;
