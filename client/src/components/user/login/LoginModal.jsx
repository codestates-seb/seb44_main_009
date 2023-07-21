import { useContext } from "react";
import { LoginModalContainer } from "./styles/LoginModalContainer.styled";
import { LoginModalMessage } from "./styles/LoginModalMessage.styled";
import { LoginModalBtn } from "./styles/LoginModalBtn.styled";
import { LogInContext } from "./Login";
import { useRecoilValue } from "recoil";
import { auth } from "../../../atoms/auth";
import { useNavigate } from "react-router-dom";

export default function LoginModal() {
  // Context >> 사용
  const { setShowModal, validation } = useContext(LogInContext);

  // recoil >> auth.isLogin
  const { isLogin } = useRecoilValue(auth);

  const nav = useNavigate();

  // handleEvent >> showModal(state) 변경
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNavHome = () => {
    setShowModal(false);
    nav("/");
  };

  return (
    <LoginModalContainer>
      {isLogin ? (
        <>
          <LoginModalMessage>{validation}</LoginModalMessage>
          <LoginModalBtn onClick={handleNavHome}>닫기</LoginModalBtn>
        </>
      ) : (
        <>
          <LoginModalMessage>{validation}</LoginModalMessage>
          <LoginModalBtn onClick={handleCloseModal}>닫기</LoginModalBtn>
        </>
      )}
    </LoginModalContainer>
  );
}
