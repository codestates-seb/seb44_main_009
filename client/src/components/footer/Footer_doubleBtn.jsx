import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const FooterContainer = styled.footer`
  position: relative;
  width: 834px;
  height: 100px;
  border: 1px solid #383838;
  border-radius: 0 0 30px 30px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(255, 81, 96);
  cursor: pointer;
  font-size: 24px;
  width: 65px;
  height: 65px;
`;

const CountWrapper = styled.div`
  margin-top: 4px;
  font-size: 12px;
  font-weight: bold;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #383838;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  font-size: 18px;
  width: 592px;
  height: 65px;
`;

function Footer_doubleBtn() {
  return (
    <FooterContainer>
      <IconWrapper>
        <FontAwesomeIcon icon={regularHeart} />
        <CountWrapper>1</CountWrapper>
      </IconWrapper>
      <Button>구매하기</Button>
    </FooterContainer>
  );
}

export default Footer_doubleBtn;
