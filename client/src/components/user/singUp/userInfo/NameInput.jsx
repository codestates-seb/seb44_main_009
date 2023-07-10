import { useContext } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { SingUpContext } from "../SignUp";

export default function NameInput() {
  const handleChange = useContext(SingUpContext);

  return (
    <>
      <SignUpInputTitle>이름</SignUpInputTitle>
      <SignUpInput
        type="text"
        placeholder="이름 입력"
        onChange={handleChange}
        name="korName"
      />
    </>
  );
}
