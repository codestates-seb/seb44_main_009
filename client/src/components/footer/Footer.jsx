import { Link } from "react-router-dom";
import {
  faBars,
  faHeart,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FooterContainer } from "./styles/FooterContainer.styled";
import { FooterWrapper } from "./styles/FooterWrapper.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue } from "recoil";
import { auth } from "../../atoms/auth";
import { HomeFont } from "./styles/HomeFont.styled";

function Footer() {
  const { isLogin } = useRecoilValue(auth);

  return (
    <FooterContainer>
      <Link to="/">
        <FooterWrapper>
          <FontAwesomeIcon icon={faHouse} />
          <HomeFont>홈</HomeFont>
        </FooterWrapper>
      </Link>
      <Link to="/category">
        <FooterWrapper>
          <FontAwesomeIcon icon={faBars} />
          <HomeFont>카테고리</HomeFont>
        </FooterWrapper>
      </Link>
      <Link to="/picks">
        <FooterWrapper>
          <FontAwesomeIcon icon={faHeart} />
          <HomeFont>찜</HomeFont>
        </FooterWrapper>
      </Link>
      {isLogin ? (
        <Link to="/mypage">
          <FooterWrapper>
            <FontAwesomeIcon icon={faUser} />
            <HomeFont>마이페이지</HomeFont>
          </FooterWrapper>
        </Link>
      ) : (
        <Link to="/login">
          <FooterWrapper>
            <FontAwesomeIcon icon={faUser} />
            <HomeFont>로그인</HomeFont>
          </FooterWrapper>
        </Link>
      )}
    </FooterContainer>
  );
}

export default Footer;
