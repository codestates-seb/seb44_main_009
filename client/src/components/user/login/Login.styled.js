import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const LoginButton = styled.button`
  font-size: 24px;
  color: white;

  background-color: #383838;

  border: 1px solid #383838;
  border-radius: 30px;
  margin-top: 32px;

  &:hover {
    background-color: #808080;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  width: 450px;
  height: 300px;
`;

export const LoginInput = styled.input`
  font-size: 18px;

  height: 32px;
  outline: none;
  border: none;
  border-bottom: 2px solid #383838;
  padding: 12px;
  margin-bottom: 8px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

export const LoginInputTitle = styled.div`
  font-size: 12px;
  font-weight: 600;

  width: 100px;
`;

export const ValidationMessage = styled.span`
  font-size: 12px;
  color: red;
`;

export const LoginModalMessage = styled.div`
  font-size: 24px;
`;

export const LoginModalContainer = styled.div`
  position: fixed;
  top: 50%;
  transform: translate(0, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  background-color: white;

  border: 1px solid #383838;
  border-radius: 30px;
  padding: 24px;
`;

export const LoginModalBtn = styled.button`
  font-size: 24px;
  color: white;

  background-color: #383838;

  width: 125px;
  height: 40px;
  border: 1px solid #383838;
  border-radius: 30px;
  margin-top: 32px;

  &:hover {
    background-color: #808080;
    border: 1px solid #808080;
  }
`;

export const LoginLinkBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginLinkBtn = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  color: gray;
  text-decoration: none;
`;

export const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;

export const LogInInputTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
