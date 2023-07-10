import { useContext } from "react";
import { SingUpContext } from "../SignUp";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";

export default function AddressInput() {
  const setSignUpData = useContext(SingUpContext);

  const handleChange = e =>
    setSignUpData(prev => ({ ...prev, address: e.target.value }));

  return (
    <>
      <SignUpInputTitle>주소</SignUpInputTitle>
      <SignUpInput
        type="text"
        placeholder="주소 입력"
        onChange={handleChange}
      />
    </>
  );
}
