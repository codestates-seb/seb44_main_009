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
import { useRecoilValue } from "recoil";
import { auth } from "../../atoms/auth";

function Header_back({ cartItemsCount }) {
  const { isLogin } = useRecoilValue(auth);
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate(-1);
  };

  const handleBasketClick = () => {
    if (isLogin) {
      navigate("/cart");
    } else {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
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
          <IconStyle onClick={handleBasketClick}>
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
