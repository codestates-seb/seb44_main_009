import Header_back from "../../../components/header/Header_back";
import Footer from "../../../components/footer/Footer";
import { styled } from "styled-components";

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

const PicksItemCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #ccc;
  font-weight: 600;
`;

const PicksItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  font-size: 32px;
  font-weight: 600;
  color: #383838;
  :nth-child(2) {
    font-size: 24px;
    color: #ccc;
  }
`;
function PicksPage() {
  return (
    <PicksPageContainer>
      <Header_back />
      <PicksPageWrapper>
        <Button>기본 폴더</Button>
        <PicksItemWrapper>
          <PicksItemCount>
            <div>찜한 아이템</div>
            <div>0</div>
          </PicksItemCount>
          <PicksItem>
            <div>찜한 상품이 없어요</div>
            <div>하트를 눌러 마음에 드는 상품을 찜해보세요.</div>
          </PicksItem>
        </PicksItemWrapper>
      </PicksPageWrapper>
      <Footer />
    </PicksPageContainer>
  );
}

export default PicksPage;
