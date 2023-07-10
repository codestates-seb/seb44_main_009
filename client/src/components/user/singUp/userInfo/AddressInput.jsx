import { useContext } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { UserInfoContext } from "../UserInfo";

export default function AddressInput() {
  const handleChange = useContext(UserInfoContext);

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
