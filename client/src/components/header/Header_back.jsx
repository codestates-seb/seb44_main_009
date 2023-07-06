import { Link } from "react-router-dom";
import logo from "../../image/logo.png";
import LoginBtn from "./HeaderLoginBtn";
import { HeaderContainer } from "./styles/HeaderContainer.styled";
import { LogoImage } from "./styles/LogoImage.styled";
import { IconWrapper } from "./styles/IconWrapper.styled";
import { HeaderWrapper } from "./styles/HeaderWrapper.styled";
import { ButtonContainer } from "./styles/ButtonContainer.styled";
import { IconStyle } from "./styles/IconStyle.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

function Header_back() {
  return (
    <HeaderContainer>
      <IconWrapper>
        <FontAwesomeIcon icon={faAngleLeft} />
      </IconWrapper>
      <HeaderWrapper>
        <Link to="/">
          <LogoImage src={logo} alt="logo" />
        </Link>
      </HeaderWrapper>
      <ButtonContainer>
        <IconStyle>
          <FontAwesomeIcon icon={faBasketShopping} />
        </IconStyle>
        <LoginBtn />
      </ButtonContainer>
    </HeaderContainer>
  );
}

export default Header_back;
