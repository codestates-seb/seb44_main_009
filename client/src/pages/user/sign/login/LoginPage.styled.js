import { styled } from "styled-components";
import LogoImg from "../../../../image/logo.png";

export const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 834px;
  height: 100%;
  border: 1px solid #383838;
  border-radius: 0 0 30px 30px;
  padding: 24px;
`;

export const LoginPageTitle = styled.div`
  font-size: 32px;
  line-height: 150px;

  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-size: 350px;
  background-position-x: 200px;
  background-position-y: -105px;

  width: 450px;
`;

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 1000px;
`;
