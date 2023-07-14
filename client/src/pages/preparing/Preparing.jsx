import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { MyPageContainer } from "../user/myPage/myPage/styles/MyPageContainer.styled";
import { MyPageWrapper } from "../user/myPage/myPage/styles/MyPageWrapper.styled";

export default function Preparing() {
  return (
    <MyPageContainer>
      <Header />
      <MyPageWrapper>준비중...</MyPageWrapper>
      <Footer />
    </MyPageContainer>
  );
}
