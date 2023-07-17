import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { productsState } from "../../atoms/product";
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
import { styled } from "styled-components";

const CartBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 90px;
  background-color: #ff5160;
  color: white;
  font-size: 12px;
  font-weight: bold;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header() {
  const products = useRecoilValue(productsState);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const count = products.reduce(
      (total, product) => total + product.quantity,
      0,
    );
    setCartItemsCount(count);
  }, [products]);

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
