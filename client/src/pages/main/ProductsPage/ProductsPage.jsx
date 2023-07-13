import { useState } from "react";
import { useParams } from "react-router-dom";

import ProductList from "../../../components/mainProduct/ProductList";
import { dummyproducts } from "../../../dummyDate/dummyProducts";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

import { MainContainer, Borderdiv } from "./styles/ProductPageStyle";

import { categories } from "../../../components/Category/MainCategory";

function ProductsPage() {
  const [products] = useState(dummyproducts);
  const { category } = useParams();
  console.log("category", category);
  const filteredProducts = category
    ? products.filter(product => product.categoryName === category)
    : products;
  console.log("filter", filteredProducts);
  return (
    <div>
      <MainContainer>
        <Header></Header>

        <Borderdiv>
          <ProductList
            products={filteredProducts}
            categories={categories}
          ></ProductList>
        </Borderdiv>

        <Footer></Footer>
      </MainContainer>
    </div>
  );
}

export default ProductsPage;
