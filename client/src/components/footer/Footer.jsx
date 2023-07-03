import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBars,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.footer`
  position: relative;
  width: 834px;
  height: 100px;
  border: 1px solid #383838;
  border-radius: 0 0 30px 30px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #383838;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  font-size: 18px;
  width: 45px;
  height: 45px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FontAwesomeIcon icon={faHouse} />
      </FooterWrapper>
      <FooterWrapper>
        <FontAwesomeIcon icon={faBars} />
      </FooterWrapper>
      <FooterWrapper>
        <FontAwesomeIcon icon={faHeart} />
      </FooterWrapper>
      <FooterWrapper>
        <FontAwesomeIcon icon={faUser} />
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
