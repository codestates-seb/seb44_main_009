import { FooterContainer } from "./styles/FooterContainer.styled";
import { FooterWrapper } from "./styles/FooterWrapper.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBars,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
