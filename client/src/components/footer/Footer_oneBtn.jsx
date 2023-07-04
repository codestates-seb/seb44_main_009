import { styled } from "styled-components";

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
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #383838;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  font-size: 24px;
  width: 639px;
  height: 65px;
`;

// 각 페이지마다 텍스트 달라질 경우, <Footer_oneBtn text="주문하기" />; 텍스트 넣기
function Footer_oneBtn({ text }) {
  return (
    <FooterContainer>
      <Button>{text}</Button>
    </FooterContainer>
  );
}

export default Footer_oneBtn;
