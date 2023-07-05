import { styled } from "styled-components";
import MainProductList from "../../components/mainProduct/MainProductList";
import MainCategory from "../../components/Category/MainCategory";
import {
  WarmToneCategory,
  CoolToneCategory,
} from "../../components/Category/Styles/ColorCategoryStyles";
import { Coat, Skirt } from "../../image/index"; // 예시로 넣은것

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
  padding: 24px;
`;

const HomePage = () => {
  const products = [
    {
      id: 1,
      imageSrc: Coat,
      name: "웜1",
      price: "1000원",
      personalcolor: "warm",
      cartegory: "상의",
      color: "yellow",
    },
    {
      id: 2,
      imageSrc: Coat,
      name: "웜2",
      price: "2000원",
      personalcolor: "warm",
      cartegory: "상의",
      color: "pink",
    },
    {
      id: 3,
      imageSrc: Coat,
      name: "웜3",
      price: "3000원",
      personalcolor: "warm",
      cartegory: "상의",
      color: "black",
    },
    {
      id: 4,
      imageSrc: Coat,
      name: "웜4",
      price: "4000원",
      personalcolor: "warm",
      cartegory: "상의",
      color: "blue",
    },
    {
      id: 5,
      imageSrc: Skirt,
      name: "쿨1",
      price: "100원",
      personalcolor: "cool",
      cartegory: "상의",
    },
    {
      id: 6,
      imageSrc: Skirt,
      name: "쿨2",
      price: "200원",
      personalcolor: "cool",
      cartegory: "상의",
      color: "purpple",
    },
    {
      id: 7,
      imageSrc: Skirt,
      name: "쿨3",
      price: "300원",
      personalcolor: "cool",
      cartegory: "상의",
      color: "orange",
    },
    {
      id: 8,
      imageSrc: Skirt,
      name: "쿨4",
      price: "400원",
      personalcolor: "cool",
      cartegory: "상의",
      color: "gray",
    },
    {
      id: 9,
      imageSrc: Skirt,
      name: "쿨5",
      price: "400원",
      personalcolor: "cool",
      cartegory: "상의",
      color: "skyblue",
    },
    {
      id: 10,
      imageSrc: Coat,
      name: "웜5",
      price: "400원",
      personalcolor: "warm",
      cartegory: "상의",
      color: "black",
    },
    {
      id: 11,
      imageSrc: Skirt,
      name: "쿨6",
      price: "400원",
      personalcolor: "cool",
      cartegory: "상의",
      color: "white",
    },
    {
      id: 12,
      imageSrc: Coat,
      name: "웜6",
      price: "400원",
      personalcolor: "warm",
      cartegory: "상의",
      color: "yellow",
    },
  ];
  const WarmfilteredProducts = products.filter(
    product => product.personalcolor === "warm",
  );
  const CoolfilteredProducts = products.filter(
    product => product.personalcolor === "cool",
  );
  return (
    <div>
      <Borderdiv>
        <CategoryContainer>
          <MainCategory />
        </CategoryContainer>

        <WarmToneCategory />

        <MainProductList products={WarmfilteredProducts} />

        <MarginBottomTom />

        <CoolToneCategory />

        <MainProductList products={CoolfilteredProducts} />

        <MarginBottomTom />
      </Borderdiv>
    </div>
  );
};

export default HomePage;
