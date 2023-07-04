import { styled } from "styled-components";
import ProductList from "../../components/mainProduct/ProductList";
import { dummyproducts } from "../../dummy";

const Borderdiv = styled.div`
  border: 2px solid black;
  max-width: 834px;
  padding: 24px;
`;
function ProductsPage() {
  return (
    <Borderdiv>
      <ProductList products={dummyproducts}></ProductList>
    </Borderdiv>
  );
}

export default ProductsPage;

// 빈 파일이 아니기 때문에 1치 머지 시, 충돌이 발생할 수 밖에 없음
// 작업 시작 시, 해당 주석 삭제해주세요.
