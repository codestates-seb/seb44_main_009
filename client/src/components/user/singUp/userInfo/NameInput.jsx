import { useContext } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { SingUpContext } from "../SignUp";

export default function NameInput() {
  const setSignUpData = useContext(SingUpContext);

  const handleChange = e =>
    setSignUpData(prev => ({ ...prev, korname: e.target.value }));

  return (
    <>
      <SignUpInputTitle>이름</SignUpInputTitle>
      <SignUpInput
        type="text"
        placeholder="이름 입력"
        onChange={handleChange}
      />
    </>
  );
}
