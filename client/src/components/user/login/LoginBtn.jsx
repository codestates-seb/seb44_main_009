import { useContext } from "react";
import { LoginButton } from "./styles/LoginButton.styled";
import { LogInContext } from "./Login";
import { postLogIn } from "../../../api/userAPI";
import { useNavigate } from "react-router-dom";

export default function LoginBtn() {
  // Context >> 사용
  const { setShowModal, setValidation, emailRegEx, passworedRegEx, logInData } =
    useContext(LogInContext);

  // Navigate
  const nav = useNavigate();

  const checkedForm = () => {
    setValidation("형식에 맞춰 입력해주세요");
    setShowModal(true);
  };

  // handleEvent >> 유효성 검사 및 showModal(state) 변경
  const handleOpenModal = () => {
    for (let i in logInData) {
      if (logInData[i].length === 0) {
        setValidation("미입력한 부분이 없는지 확인해주세요.");
        return setShowModal(true);
      }
    }

    if (logInData.email.match(emailRegEx) === null) {
      return checkedForm();
    }

    if (logInData.password.match(passworedRegEx) === null) {
      return checkedForm();
    }

    // 유효성 검사 통과 시, api 요청
    (async () => {
      try {
        await postLogIn(logInData);
        setValidation("로그인에 성공하였습니다");
        nav("/");
      } catch (error) {
        setValidation(error.message);
      }
    })();
    setShowModal(true);
  };

  return <LoginButton onClick={handleOpenModal}>로그인</LoginButton>;
}
