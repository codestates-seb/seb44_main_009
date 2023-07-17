import { Link, useNavigate } from "react-router-dom";
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
import { CartBadge } from "./styles/CartBadge.styled";
import CartItemsAdd from "../attribute/CartItemsAdd";

function Header_back() {
  const navigate = useNavigate();

  const cartItemsCount = CartItemsAdd();

  const onClickBtn = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer>
      <IconWrapper onClick={onClickBtn}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </IconWrapper>
      <HeaderWrapper>
        <Link to="/">
          <LogoImage src={logo} alt="logo" />
        </Link>
      </HeaderWrapper>
      <ButtonContainer>
        <Link to="/cart">
          <IconStyle>
            <FontAwesomeIcon icon={faBasketShopping} />
          </IconStyle>
          {cartItemsCount > 0 && <CartBadge>{cartItemsCount}</CartBadge>}
        </Link>
        <LoginBtn />
      </ButtonContainer>
    </HeaderContainer>
  );
}

export default Header_back;
