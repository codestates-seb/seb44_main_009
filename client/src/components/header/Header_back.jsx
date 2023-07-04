import { Link } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../../image/logo.png";
import LoginBtn from "./HeaderLoginBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.header`
  position: relative;
  width: 834px;
  height: 100px;
  border: 1px solid #383838;
  border-radius: 30px 30px 0 0;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  font-size: 32px;
  cursor: pointer;
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    margin-left: 12px;
    width: 100px;
    height: 92px;
    border-radius: 50%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #383838;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  font-size: 18px;
  margin-right: 24px;
  width: 45px;
  height: 45px;
`;

function Header_back() {
  return (
    <HeaderContainer>
      <IconWrapper>
        <FontAwesomeIcon icon={faAngleLeft} />
      </IconWrapper>
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="logo" />
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
