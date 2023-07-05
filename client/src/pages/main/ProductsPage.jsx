import { styled } from "styled-components";
import ProductList from "../../components/mainProduct/ProductList";
import { dummyproducts } from "../../dummy";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

/* Filter 기능 추가 해야 함 ! */
// 1. 각 카테고리와 ColorCategory 클릭 시, ProductsPage로 넘어가야하는 기능.
// 2. 어떤 걸 눌렀느냐에 따라 Filter 되어 넘어가야 하는 기능.

const MainContainer = styled.div`
  height: 1000px;
  width: 834px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 30px;
`;
const Borderdiv = styled.div`
  width: 834px;
  height: 80%;
  overflow: hidden;
  padding: 24px;
  margin-top: 90px;
`;

function ProductsPage() {
  return (
    <div>
      <MainContainer>
        <Header></Header>

        <Borderdiv>
          <ProductList products={dummyproducts}></ProductList>
        </Borderdiv>

        <Footer></Footer>
      </MainContainer>
    </div>
  );
}

export default ProductsPage;

// 빈 파일이 아니기 때문에 1치 머지 시, 충돌이 발생할 수 밖에 없음
// 작업 시작 시, 해당 주석 삭제해주세요.
