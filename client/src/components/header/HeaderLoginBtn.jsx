import { useRecoilState, useSetRecoilState } from "recoil";
import { auth } from "../../atoms/auth";
import { Link } from "react-router-dom";
import { HeaderWriteStyle } from "./styles/HeaderWriteStyle.styled";
import { user } from "../../atoms/user";

function HeaderLoginBtn() {
  const [authState, setAuthState] = useRecoilState(auth);
  const setUserData = useSetRecoilState(user);

  const handleLogout = () => {
    setAuthState(prevAuthState => ({
      ...prevAuthState,
      isLogin: false,
    }));
    setAuthState(prevAuthState => ({
      ...prevAuthState,
      token: null,
    }));
    setUserData(null);
  };

  return (
    <>
      {authState.isLogin ? (
        <Link to="/">
          <HeaderWriteStyle onClick={handleLogout}>로그아웃</HeaderWriteStyle>
        </Link>
      ) : (
        <Link to="/login">
          <HeaderWriteStyle>로그인</HeaderWriteStyle>
        </Link>
      )}
    </>
  );
}

export default HeaderLoginBtn;
