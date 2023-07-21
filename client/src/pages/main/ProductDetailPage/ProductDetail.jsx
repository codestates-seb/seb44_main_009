import ProductDetailStyles from "../../../components/productDetail/styles/productDetailStyles";

import Footer from "../../../components/footer/Footer_doubleBtn";
import Header from "../../../components/header/Header";

import { MainContainer, Borderdiv } from "../HomePage/styles/HomePageStyles";

const ProductDetailPage = () => {
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
export default ProductDetailPage;
