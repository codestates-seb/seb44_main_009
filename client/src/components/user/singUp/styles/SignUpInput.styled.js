import { styled } from "styled-components";

export const SignUpInput = styled.input`
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
