import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import { MyPageContainer } from "./styles/MyPageContainer.styled";
import { MyPageWrapper } from "./styles/MyPageWrapper.styled";
import { MyPageTitle } from "./styles/MyPageTitle.styled";
import MyInfo from "../../../../components/user/myPage/myPage/myInfo/MyInfo";
import MyList from "../../../../components/user/myPage/myPage/myList/MyList";
import MyReceipt from "../../../../components/user/myPage/myPage/myReceipt/MyReceipt";

export default function MyPage() {
  return (
    <MyPageContainer>
      <Header />
      <MyPageWrapper>
        <MyPageTitle>마이 페이지</MyPageTitle>
        <MyInfo>
          <MyInfo.Img />
          <MyInfo.Info />
          <MyInfo.EditBtn />
        </MyInfo>
        <MyList>
          <MyList.Orders />
          <MyList.Reviews />
          <MyList.Questions />
        </MyList>
        <MyReceipt>
          <MyReceipt.Title />
          <MyReceipt.Purchased />
        </MyReceipt>
      </MyPageWrapper>

      <Footer />
    </MyPageContainer>
  );
}
