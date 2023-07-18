import { Link } from "react-router-dom";
import logo from "../../image/logo.png";
import LoginBtn from "./HeaderLoginBtn";
import { HeaderContainer } from "./styles/HeaderContainer.styled";
import { LogoImage } from "./styles/LogoImage.styled";
import { InputContainer } from "./styles/InputContainer.styled";
import { SearchIconContainer } from "./styles/SearchIconContainer.styled";
import { ButtonContainer } from "./styles/ButtonContainer.styled";
import { IconStyle } from "./styles/IconStyle.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { CartBadge } from "./styles/CartBadge.styled";

function Header({ cartItemsCount }) {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoImage src={logo} alt="logo" />
      </Link>
      <InputContainer>
        <input type="text" />
        <SearchIconContainer>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchIconContainer>
      </InputContainer>
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

export default Header;
