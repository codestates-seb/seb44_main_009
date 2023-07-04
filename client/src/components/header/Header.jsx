import { Link } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../../image/logo.png";
import LoginBtn from "./HeaderLoginBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
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

  img {
    margin-left: 12px;
    width: 90px;
    height: 85px;
    border-radius: 50%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #383838;
  border-radius: 30px;
  width: 561px;
  height: 45px;
  padding-left: 12px;
  margin-right: 24px;

  input {
    border: none;
    outline: none;
    width: 90%;
    font-size: 16px;
  }
`;

const SearchIconContainer = styled.div`
  background-color: #383838;
  border-radius: 30px;
  width: 49px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
  margin-right: 12px;
  cursor: pointer;
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

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <InputContainer>
        <input type="text" />
        <SearchIconContainer>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchIconContainer>
      </InputContainer>
      <ButtonContainer>
        <IconStyle>
          <FontAwesomeIcon icon={faBasketShopping} />
        </IconStyle>
        <LoginBtn />
      </ButtonContainer>
    </HeaderContainer>
  );
}

export default Header;
