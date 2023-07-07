import { styled } from "styled-components";
import ProductList from "../../components/mainProduct/ProductList";

import MainCategory from "../../components/Category/MainCategory";
import {
  WarmToneCategory,
  CoolToneCategory,
} from "../../components/Category/Styles/ColorCategoryStyles/ColorCategoryStyles";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { dummyproducts } from "../../dummyDate/dummyProducts";

const MarginBottomTom = styled.div`
  margin-bottom: 100px;
`;
const CategoryContainer = styled.div`
  width: 100%;
  max-width: 834px; // 가운데 정렬할 땐 빼버리기
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const Borderdiv = styled.div`
  border: 2px solid black;
  width: 834px;
  height: 100%;
  overflow: hidden;
  padding: 24px;
`;

const MainContainer = styled.div`
  height: 1000px;
  width: 834px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => {
  const WarmfilteredProducts = dummyproducts.filter(
    product => product.personalColor == "Warm",
  );
  const CoolfilteredProducts = dummyproducts.filter(
    product => product.personalColor === "Cool",
  );
  const slicedWarmProducts = WarmfilteredProducts.slice(0, 4);
  const slicedCoolProducts = CoolfilteredProducts.slice(0, 4);

  return (
    <MainContainer>
      <Header></Header>
      <Borderdiv>
        <CategoryContainer>
          <MainCategory />
        </CategoryContainer>

        <WarmToneCategory />

        <ProductList products={slicedWarmProducts} />

        <MarginBottomTom />

        <CoolToneCategory />

        <ProductList products={slicedCoolProducts} />

        <MarginBottomTom />
      </Borderdiv>
      <Footer></Footer>
    </MainContainer>
  );
};

export default HomePage;
