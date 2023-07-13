import { dummyproducts } from "../../../dummyDate/dummyProducts";
import { fetchProducts } from "../../../api/product";
//import { productsState } from "../../../atoms/product";
//import axios from "axios";
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

// const fetchProducts = async () => {
//   try {
//     const response = await axios.get("/products", {
//       params: { page: 1, size: 10 },
//     });
//     const data = response.data;
//     console.log("data", data);
//   } catch (error) {
//     console.error(error);
//   }
// };

const HomePage = () => {
  //const [products, setProducts] = useRecoilState(productsState);
  console.log(fetchProducts());
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
