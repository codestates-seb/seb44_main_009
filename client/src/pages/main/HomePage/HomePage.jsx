import { dummyproducts } from "../../../dummyDate/dummyProducts";

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import ProductList from "../../../components/mainProduct/ProductList";
import MainCategory from "../../../components/Category/MainCategory";
import {
  WarmToneCategory,
  CoolToneCategory,
} from "../../../components/Category/Styles/ColorCategoryStyles/ColorCategoryStyles";

import {
  Borderdiv,
  MainContainer,
  MarginBottomTom,
  CategoryContainer,
} from "./styles/HomePageStyles";

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
