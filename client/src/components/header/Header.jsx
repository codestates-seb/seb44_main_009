import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
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
import { useRecoilValue } from "recoil";
import { auth } from "../../atoms/auth";
import Modal from "../attribute/Modaldev/Modaldev";

function Header() {
  const { isLogin } = useRecoilValue(auth);
  const navigate = useNavigate();
  const cartLength = parseInt(localStorage.getItem("cartLength"));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBasketClick = () => {
    if (isLogin) {
      navigate("/cart");
    } else {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  };

  const handleSearchInputClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <LogoImage src={logo} alt="logo" />
      </Link>
      <InputContainer>
        <input type="text" onClick={handleSearchInputClick} />
        <SearchIconContainer>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          {isModalOpen && <Modal onClose={handleCloseModal} />}
        </SearchIconContainer>
      </InputContainer>
      <ButtonContainer>
        <IconStyle onClick={handleBasketClick}>
          <FontAwesomeIcon icon={faBasketShopping} />
        </IconStyle>
        {cartLength > 0 && <CartBadge>{cartLength}</CartBadge>}
        <LoginBtn />
      </ButtonContainer>
    </HeaderContainer>
  );
}

export default Header;
