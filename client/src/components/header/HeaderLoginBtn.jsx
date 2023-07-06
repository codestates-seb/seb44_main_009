import { useRecoilState } from "recoil";
import { auth } from "../../atoms/auth";
import { Link } from "react-router-dom";
import { HeaderWriteStyle } from "./styles/HeaderWriteStyle.styled";

function HeaderLoginBtn() {
  const [authState, setAuthState] = useRecoilState(auth);

  const handleLogout = () => {
    setAuthState(prevAuthState => ({
      ...prevAuthState,
      isLogin: false,
    }));
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
