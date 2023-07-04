//import { styled } from "styled-components";
import ProductList from "../../components/mainProduct/ProductList";

// import {
//   WarmToneCategory,
//   CoolToneCategory,
// } from "../../components/Category/Styles/ColorCategoryStyles";

function ProductsPage() {
  return (
    <div>
      Products
      <ProductList></ProductList>
    </div>
  );
}

export default ProductsPage;

// 빈 파일이 아니기 때문에 1치 머지 시, 충돌이 발생할 수 밖에 없음
// 작업 시작 시, 해당 주석 삭제해주세요.
