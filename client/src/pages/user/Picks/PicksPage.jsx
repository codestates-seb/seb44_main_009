import Header_back from "../../../components/header/Header_back";
import Footer from "../../../components/footer/Footer";
import PicksItemCount from "../../../components/picksitem/PicksItemCount";
import PicksItem from "../../../components/picksitem/PicksItem";
import { PicksPageContainer } from "./styles/PicksPageContainer.styled";
import { PicksPageWrapper } from "./styles/PicksPageWrapper.styled";
import { Button } from "./styles/Button.styled";
import { PicksItemWrapper } from "./styles/PicksItemWrapper.styled";

function PicksPage() {
  return (
    <PicksPageContainer>
      <Header_back />
      <PicksPageWrapper>
        <Button>기본 폴더</Button>
        <PicksItemWrapper>
          <PicksItemCount />
        </PicksItemWrapper>
        <PicksItem />
      </PicksPageWrapper>
      <Footer />
    </PicksPageContainer>
  );
}

export default PicksPage;
