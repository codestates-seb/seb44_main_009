import { useState, useEffect } from "react";
import Header_back from "../../../components/header/Header_back";
import Footer from "../../../components/footer/Footer";
import PicksItemCount from "../../../components/picksitem/PicksItemCount";
import PicksList from "../../../components/picksitem/PicksList";
import { PicksPageContainer } from "./styles/PicksPageContainer.styled";
import { PicksPageWrapper } from "./styles/PicksPageWrapper.styled";
import { Button } from "./styles/Button.styled";
import { PicksItemWrapper } from "./styles/PicksItemWrapper.styled";
import { fetchLike } from "../../../api/orderAPIs";
import { useRecoilValue } from "recoil";
import { auth } from "../../../atoms/auth";
import { styled } from "styled-components";

const PicksItemContainer = styled.div`
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
  const { token } = useRecoilValue(auth);
  const [products, setProducts] = useState([]);

  // 찜 전체 조회
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLike(token);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <PicksPageContainer>
      <Header_back />
      <PicksPageWrapper>
        <Button>기본 폴더</Button>
        <PicksItemWrapper>
          <PicksItemCount products={products.length} />
        </PicksItemWrapper>
        {products.length !== 0 ? (
          <PicksList products={products} />
        ) : (
          <PicksItemContainer>
            <div>찜한 상품이 없어요</div>
            <div>하트를 눌러 마음에 드는 상품을 찜해보세요.</div>
          </PicksItemContainer>
        )}
      </PicksPageWrapper>
      <Footer />
    </PicksPageContainer>
  );
}

export default PicksPage;
