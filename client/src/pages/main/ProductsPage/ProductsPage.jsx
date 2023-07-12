import ProductList from "../../../components/mainProduct/ProductList";
import { dummyproducts } from "../../../dummyDate/dummyProducts";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
//import { useState } from "react";

import { MainContainer, Borderdiv } from "./styles/ProductPageStyle";

/* Filter 기능 추가 해야 함 ! */
// 2. 어떤 걸 눌렀느냐에 따라 Filter 되어 넘어가야 하는 기능.

function ProductsPage() {
  // const [products] = useState(dummyproducts);
  // const [filteredProducts, setFilteredProducts] = useState(products);

  // const handleFilterProducts = filter => {
  //   if (filter === "Warm") {
  //     const warmToneProducts = products.filter(
  //       product => product.personalColor === "Warm",
  //     );
  //     setFilteredProducts(warmToneProducts);
  //   } else if (filter === "Cool") {
  //     const coolToneProducts = products.filter(
  //       product => product.personalColor === "Cool",
  //     );
  //     setFilteredProducts(coolToneProducts);
  //   } else {
  //     setFilteredProducts(products);
  //   }
  // };
  return (
    <div>
      <MainContainer>
        <Header></Header>

        <Borderdiv>
          <ProductList products={dummyproducts}></ProductList>
        </Borderdiv>

        <Footer></Footer>
      </MainContainer>
    </div>
  );
}

export default ProductsPage;
