import { styled, createGlobalStyle } from "styled-components";
import ProductList from "../../components/mainProduct/ProductList";
import MainCategory from "../../components/Category/MainCategory";
import {
  WarmToneCategory,
  CoolToneCategory,
} from "../../components/Category/Styles/ColorCategoryStyles";
import { Coat, Skirt } from "../../image/index"; // 예시로 넣은것

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const CategoryContainer = styled.div`
  width: 100%;
  // max-width: 834px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const ProductListContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0px 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MarginBottom = styled.div`
  margin-bottom: 70px;
`;

const mainPage = () => {
  const products = [
    { id: 1, imageSrc: Coat, name: "웜1", price: "1000원", color: "warm" },
    { id: 2, imageSrc: Coat, name: "웜2", price: "2000원", color: "warm" },
    { id: 3, imageSrc: Coat, name: "웜3", price: "3000원", color: "warm" },
    { id: 4, imageSrc: Coat, name: "웜4", price: "4000원", color: "warm" },
    { id: 5, imageSrc: Skirt, name: "쿨1", price: "100원", color: "cool" },
    { id: 6, imageSrc: Skirt, name: "쿨2", price: "200원", color: "cool" },
    { id: 7, imageSrc: Skirt, name: "쿨3", price: "300원", color: "cool" },
    { id: 8, imageSrc: Skirt, name: "쿨4", price: "400원", color: "cool" },
  ];
  const WarmfilteredProducts = products.filter(
    product => product.color === "warm",
  );
  const CoolfilteredProducts = products.filter(
    product => product.color === "cool",
  );
  return (
    <div>
      <GlobalStyle />
      <CategoryContainer>
        <MainCategory />
      </CategoryContainer>
      <ProductListContainer>
        <WarmToneCategory />
      </ProductListContainer>
      <ProductListContainer>
        <ProductList products={WarmfilteredProducts} />
      </ProductListContainer>
      <MarginBottom />
      <ProductListContainer>
        <CoolToneCategory />
      </ProductListContainer>

      <ProductListContainer>
        <ProductList products={CoolfilteredProducts} />
      </ProductListContainer>
    </div>
  );
};

export default mainPage;
