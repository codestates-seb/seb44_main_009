import Header_back from "../../../components/header/Header_back";
import Footer from "../../../components/footer/Footer";
import { styled } from "styled-components";
import PicksItemCount from "../../../components/picksitem/PicksItemCount";
import PicksItem from "../../../components/picksitem/PicksItem";

const PicksPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
`;

export const PicksPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 834px;
  height: 100%;
  border: 1px solid #383838;
  padding: 24px;
  position: relative;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 120px;
  background-color: #383838;
  border: 1px solid #383838;
  border-radius: 50px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const PicksItemWrapper = styled.div`
  padding: 36px 12px;
`;

function PicksPage() {
  return (
    <PicksPageContainer>
      <Header_back />
      <PicksPageWrapper>
        <Button>기본 폴더</Button>
        <PicksItemWrapper>
          <PicksItemCount />
          <PicksItem />
        </PicksItemWrapper>
      </PicksPageWrapper>
      <Footer />
    </PicksPageContainer>
  );
}

export default PicksPage;
