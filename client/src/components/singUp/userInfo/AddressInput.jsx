import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";

export default function AddressInput() {
  return (
    <>
      <SignUpInputTitle>주소</SignUpInputTitle>
      <SignUpInput type="text" placeholder="주소 입력" />
    </>
  );
}
