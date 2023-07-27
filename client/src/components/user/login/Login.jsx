import { createContext, useContext, useEffect, useState } from "react";
import {
  LogInInputTitleWrapper,
  LoginButton,
  LoginContainer,
  LoginInput,
  LoginInputTitle,
  LoginLinkBtn,
  LoginLinkBtnWrapper,
  LoginModalBtn,
  LoginModalContainer,
  LoginModalMessage,
  ValidationMessage,
} from "./Login.styled";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { auth } from "../../../atoms/auth";
import { user } from "../../../atoms/user";
import { getUser, postLogIn } from "../../../api/userAPI";
import { useNavigate } from "react-router-dom";

// Context >> 생성
export const LogInContext = createContext();

// 로그인 컴포넌트
export default function LoginProvider({ children }) {
  // State >> HTTP body 부분
  const [logInData, setLogInData] = useState({ username: "", password: "" });

  // State >> 모달 오픈 여부
  const [showModal, setShowModal] = useState(false);

  // State >> 유효성 검사 메세지
  const [validation, setValidation] = useState("");

  // 유효성 검사 정규식 >> 이메일
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  // 유효성 검사 정규식 >> 비밀번호
  const passworedRegEx =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  // handleEvent >> signUpData(state) 변경
  const handleChange = e =>
    setLogInData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <LogInContext.Provider
      value={{
        handleChange,
        emailRegEx,
        passworedRegEx,
        logInData,
        setShowModal,
        setValidation,
        validation,
      }}
    >
      <LoginContainer>{children}</LoginContainer>
      {showModal && <LoginModal />}
    </LogInContext.Provider>
  );
}

// 개별 로그인 컴포넌트
export const Login = Object.assign(LoginProvider, {
  Email: EmailInput,
  Password: PasswordInput,
  LoginBtn: LoginBtn,
  LinkBtn: LinkBtn,
});

// 이메일 입력
function EmailInput() {
  // Context >> 사용
  const { handleChange, logInData, emailRegEx } = useContext(LogInContext);

  // State >> 유효성 검사에 따른 메세지
  const [message, setMessage] = useState("");

  // Effect >> 유효성 검사에 따른 message(state) 변경
  useEffect(() => {
    if (logInData.username.match(emailRegEx) === null) {
      setMessage("이메일 형식에 맞춰 입력해주세요");
      return;
    }

    setMessage("");
  }, [logInData.username]);

  return (
    <>
      <LogInInputTitleWrapper>
        <LoginInputTitle>이메일</LoginInputTitle>
        <ValidationMessage>{message}</ValidationMessage>
      </LogInInputTitleWrapper>
      <LoginInput
        type="email"
        placeholder="이메일 입력"
        name="username"
        onChange={handleChange}
      />
    </>
  );
}

// 비밀번호 입력
function PasswordInput() {
  // Context >> 사용
  const { handleChange, passworedRegEx, logInData } = useContext(LogInContext);

  // State >> 유효성 검사에 따른 메세지
  const [message, setMessage] = useState("");

  // Effect >> 유효성 검사에 따른 메세지 변경
  useEffect(() => {
    if (logInData.password.match(passworedRegEx) === null) {
      setMessage("특수문자, 영어, 숫자를 포함하여 8자 이상 입력해주세요.");
      return;
    }

    setMessage("");
  }, [logInData.password]);

  return (
    <>
      <LogInInputTitleWrapper>
        <LoginInputTitle>비밀번호</LoginInputTitle>
        <ValidationMessage>{message}</ValidationMessage>
      </LogInInputTitleWrapper>
      <LoginInput
        type="password"
        placeholder="비밀번호 입력"
        name="password"
        onChange={handleChange}
      />
    </>
  );
}

// 로그인 버튼
function LoginBtn() {
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
        setShowModal(true);
      } catch (error) {
        setValidation(error.message);
        setShowModal(true);
      }
    })();
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

// 회원가입 버튼
function LinkBtn() {
  return (
    <LoginLinkBtnWrapper>
      <LoginLinkBtn to="/signup">회원가입</LoginLinkBtn>
    </LoginLinkBtnWrapper>
  );
}

// 로그인 모달
function LoginModal() {
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
