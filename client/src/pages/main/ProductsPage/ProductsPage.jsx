import { useState } from "react";
import { useParams } from "react-router-dom";

import ProductList from "../../../components/mainProduct/ProductList";
import { dummyproducts } from "../../../dummyDate/dummyProducts";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

import { MainContainer, Borderdiv } from "./styles/ProductPageStyle";

function ProductsPage() {
  const [products] = useState(dummyproducts);
  const { category } = useParams();

  const filteredCategoryProducts = category
    ? products.filter(product => product.categoryName === category)
    : products;

  const filteredPersonalProducts = category
    ? products.filter(product => product.personalColor === category)
    : products;
  // console.log("cate", category);

  let filteredProducts;
  if (category === "Warm") {
    filteredProducts = filteredPersonalProducts.filter(
      product => product.personalColor === "Warm",
    );
  } else if (category === "Cool") {
    filteredProducts = filteredPersonalProducts.filter(
      product => product.personalColor === "Cool",
    );
  } else {
    filteredProducts = filteredCategoryProducts;
  }

  return (
    <div>
      <MainContainer>
        <Header></Header>

        <Borderdiv>
          <ProductList products={filteredProducts}></ProductList>
        </Borderdiv>

        <Footer></Footer>
      </MainContainer>
    </div>
  );
}

export default ProductsPage;