//API 데이터
import { useEffect, useState } from "react";
import { fetchProducts } from "../../../api/product";
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
  const [warmProducts, setWarmProducts] = useState([]);
  const [coolProducts, setCoolProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      const warmFilteredProducts = data.filter(
        product => product.personalColor === "WARM_TONE",
      );
      const coolFilteredProducts = data.filter(
        product => product.personalColor === "COOL_TONE",
      );

      setWarmProducts(warmFilteredProducts.slice(0, 4));
      setCoolProducts(coolFilteredProducts.slice(0, 4));
    };

    fetchData();
  }, []);

  return (
    <MainContainer>
      <Header />
      <Borderdiv>
        <CategoryContainer>
          <MainCategory />
        </CategoryContainer>

        <WarmToneCategory />

        <ProductList products={warmProducts} />

        <MarginBottomTom />

        <CoolToneCategory />

        <ProductList products={coolProducts} />

        <MarginBottomTom />
      </Borderdiv>
      <Footer />
    </MainContainer>
  );
};

export default HomePage;

// 더미데이터 - 서버 만료시 테스트용

// import { dummyproducts } from "../../../dummyDate/dummyProducts";

// import Header from "../../../components/header/Header";
// import Footer from "../../../components/footer/Footer";
// import ProductList from "../../../components/mainProduct/ProductList";
// import MainCategory from "../../../components/Category/MainCategory";
// import {
//   WarmToneCategory,
//   CoolToneCategory,
// } from "../../../components/Category/Styles/ColorCategoryStyles/ColorCategoryStyles";

// import {
//   Borderdiv,
//   MainContainer,
//   MarginBottomTom,
//   CategoryContainer,
// } from "./styles/HomePageStyles";

// const HomePage = () => {
//   const WarmfilteredProducts = dummyproducts.filter(
//     product => product.personalColor == "Warm",
//   );
//   const CoolfilteredProducts = dummyproducts.filter(
//     product => product.personalColor === "Cool",
//   );
//   const slicedWarmProducts = WarmfilteredProducts.slice(0, 4);
//   const slicedCoolProducts = CoolfilteredProducts.slice(0, 4);

//   return (
//     <MainContainer>
//       <Header></Header>
//       <Borderdiv>
//         <CategoryContainer>
//           <MainCategory />
//         </CategoryContainer>

//         <WarmToneCategory />

//         <ProductList products={slicedWarmProducts} />

//         <MarginBottomTom />

//         <CoolToneCategory />

//         <ProductList products={slicedCoolProducts} />

//         <MarginBottomTom />
//       </Borderdiv>
//       <Footer></Footer>
//     </MainContainer>
//   );
// };

// export default HomePage;
