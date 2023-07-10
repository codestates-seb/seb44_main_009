import { useContext } from "react";
import { SingUpContext } from "../SignUp";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";

export default function AddressInput() {
  const handleChange = useContext(SingUpContext);

  return (
    <>
      <SignUpInputTitle>주소</SignUpInputTitle>
      <SignUpInput
        type="text"
        placeholder="주소 입력"
        onChange={handleChange}
        name="address"
      />
    </>
  );
}
