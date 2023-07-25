//Api데이터;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../../api/product";
import ProductList from "../../../components/mainProduct/ProductList";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { MainContainer, Borderdiv } from "./styles/ProductPageStyle";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    fetchData();
  }, []);

  const filteredCategoryProducts = category
    ? products.filter(product => product.categoryName === category)
    : products;

  const filteredPersonalProducts = category
    ? products.filter(product => product.personalColor === category)
    : products;

  let filteredProducts;
  if (category === "WARM_TONE") {
    filteredProducts = filteredPersonalProducts.filter(
      product => product.personalColor === "WARM_TONE",
    );
  } else if (category === "COOL_TONE") {
    filteredProducts = filteredPersonalProducts.filter(
      product => product.personalColor === "COOL_TONE",
    );
  } else {
    filteredProducts = filteredCategoryProducts;
  }

  return (
    <div>
      <MainContainer>
        <Header />
        <Borderdiv>
          <ProductList products={filteredProducts} />
        </Borderdiv>
        <Footer />
      </MainContainer>
    </div>
  );
}

export default ProductsPage;

// 더미데이터 - 서버가 만료될 시 테스트용

// import { useState } from "react";
// import { useParams } from "react-router-dom";

// import ProductList from "../../../components/mainProduct/ProductList";
// import { dummyproducts } from "../../../dummyDate/dummyProducts";
// import Header from "../../../components/header/Header";
// import Footer from "../../../components/footer/Footer";

// import { MainContainer, Borderdiv } from "./styles/ProductPageStyle";

// function ProductsPage() {
//   const [products] = useState(dummyproducts);
//   const { category } = useParams();

//   const filteredCategoryProducts = category
//     ? products.filter(product => product.categoryName === category)
//     : products;

//   const filteredPersonalProducts = category
//     ? products.filter(product => product.personalColor === category)
//     : products;

//   let filteredProducts;
//   if (category === "Warm") {
//     filteredProducts = filteredPersonalProducts.filter(
//       product => product.personalColor === "Warm",
//     );
//   } else if (category === "Cool") {
//     filteredProducts = filteredPersonalProducts.filter(
//       product => product.personalColor === "Cool",
//     );
//   } else {
//     filteredProducts = filteredCategoryProducts;
//   }

//   return (
//     <div>
//       <MainContainer>
//         <Header></Header>

//         <Borderdiv>
//           <ProductList products={filteredProducts}></ProductList>
//         </Borderdiv>

//         <Footer></Footer>
//       </MainContainer>
//     </div>
//   );
// }

// export default ProductsPage;
