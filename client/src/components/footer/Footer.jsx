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

function Footer() {
  const { isLogin } = useRecoilValue(auth);

  return (
    <FooterContainer>
      <Link to="/">
        <FooterWrapper>
          <FontAwesomeIcon icon={faHouse} />
        </FooterWrapper>
      </Link>
      <Link to="/category">
        <FooterWrapper>
          <FontAwesomeIcon icon={faBars} />
        </FooterWrapper>
      </Link>
      <Link to="/picks">
        <FooterWrapper>
          <FontAwesomeIcon icon={faHeart} />
        </FooterWrapper>
      </Link>
      {isLogin ? (
        <Link to="/mypage">
          <FooterWrapper>
            <FontAwesomeIcon icon={faUser} />
          </FooterWrapper>
        </Link>
      ) : (
        <Link to="/login">
          <FooterWrapper>
            <FontAwesomeIcon icon={faUser} />
          </FooterWrapper>
        </Link>
      )}
    </FooterContainer>
  );
}

export default Footer;
