import { styled } from "styled-components";
import MainProductList from "../../components/mainProduct/MainProductList";
import MainCategory from "../../components/Category/MainCategory";
import {
  WarmToneCategory,
  CoolToneCategory,
} from "../../components/Category/Styles/ColorCategoryStyles/ColorCategoryStyles";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { dummyproducts } from "../../dummy";
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
  max-width: 834px;
  height: 1000px;
  padding: 24px;
`;

const HomePage = () => {
  const WarmfilteredProducts = dummyproducts.filter(
    product => product.personalcolor === "warm",
  );
  const CoolfilteredProducts = dummyproducts.filter(
    product => product.personalcolor === "cool",
  );
  const slicedWarmProducts = WarmfilteredProducts.slice(0, 4);
  const slicedCoolProducts = CoolfilteredProducts.slice(0, 4);
  return (
    <div>
      <Header></Header>
      <Borderdiv>
        <CategoryContainer>
          <MainCategory />
        </CategoryContainer>

        <WarmToneCategory />

        <MainProductList products={slicedWarmProducts} />

        <MarginBottomTom />

        <CoolToneCategory />

        <MainProductList products={slicedCoolProducts} />

        <MarginBottomTom />
      </Borderdiv>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
