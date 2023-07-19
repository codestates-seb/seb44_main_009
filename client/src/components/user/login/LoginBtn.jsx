import { useContext, useEffect } from "react";
import { LoginButton } from "./styles/LoginButton.styled";
import { LogInContext } from "./Login";
import { getUser, postLogIn } from "../../../api/userAPI";
import { auth } from "../../../atoms/auth";
import { useRecoilState, useSetRecoilState } from "recoil";
import { user } from "../../../atoms/user";

export default function LoginBtn() {
  // Context >> 사용
  const { setShowModal, setValidation, emailRegEx, passworedRegEx, logInData } =
    useContext(LogInContext);

  // recoil
  const [authState, setAuthState] = useRecoilState(auth);
  const setUserState = useSetRecoilState(user);

  const formCheck = () => {
    setValidation("형식에 맞춰 입력해주세요");
    setShowModal(true);
  };

  // handleEvent >> 유효성 검사 및 showModal(state) 변경
  const handleOpenModal = () => {
    if (Object.values(logInData).some(data => data.length === 0)) {
      setValidation("미입력한 부분이 없는지 확인해주세요.");
      return setShowModal(true);
    }

    if (logInData.username.match(emailRegEx) === null) {
      return formCheck();
    }

    if (logInData.password.match(passworedRegEx) === null) {
      return formCheck();
    }

    // 유효성 검사 통과 시, api 요청
    (async () => {
      try {
        const accessToken = await postLogIn(logInData);

        setAuthState(prev => ({ ...prev, isLogin: true }));
        setAuthState(prev => ({ ...prev, token: accessToken }));

        setValidation("로그인에 성공하였습니다");
      } catch (error) {
        setValidation(error.message);
      }
    })();
    setShowModal(true);
  };

  useEffect(() => {
    if (authState.token) {
      (async () => {
        setUserState(await getUser(authState.token));
      })();
    }
  }, [authState]);

  return <LoginButton onClick={handleOpenModal}>로그인</LoginButton>;
}
