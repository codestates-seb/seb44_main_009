import { useRecoilState } from "recoil";
import { auth } from "../../atoms/auth";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const WriteStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #383838;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  font-size: 12px;
  margin-right: 24px;
  width: 45px;
  height: 45px;
`;

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
          <WriteStyle onClick={handleLogout}>로그아웃</WriteStyle>
        </Link>
      ) : (
        <Link to="/login">
          <WriteStyle>로그인</WriteStyle>
        </Link>
      )}
    </>
  );
}

export default HeaderLoginBtn;
