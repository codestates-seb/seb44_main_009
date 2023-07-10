import ProductDetailStyles from "../../components/productDetail/styles/productDetailStyles";
//import { styled } from "styled-components";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import { MainContainer, Borderdiv } from "./HomePage/styles/HomePageStyles";

// export const Borderdiv = styled.div`
//   width: 100%;
//   height: 80%;
//   overflow: hidden;
//   //padding: 24px;

//   overflow-y: scroll;

//   /* Firefox용 스크롤바 스타일 */
//   scrollbar-width: none;

//   /* WebKit용 스크롤바 스타일 */
//   &::-webkit-scrollbar {
//     width: 0px;
//     background: transparent;
//   }
// `;

//import { ReviewForm } from "../../components/productDetail/styles/reviewstyle/ReviewForm";
const ProductDetail = () => {
  return (
    <MainContainer>
      <Header />
      <Borderdiv>
        <ProductDetailStyles />
      </Borderdiv>
      <Footer />
    </MainContainer>
  );
};
export default ProductDetail;
