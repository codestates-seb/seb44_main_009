import ProductList from "../../../components/mainProduct/ProductList";
import { dummyproducts } from "../../../dummyDate/dummyProducts";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

import { MainContainer, Borderdiv } from "./styles/ProductPageStyle";

/* Filter 기능 추가 해야 함 ! */
// 1. 각 카테고리와 ColorCategory 클릭 시, ProductsPage로 넘어가야하는 기능.
// 2. 어떤 걸 눌렀느냐에 따라 Filter 되어 넘어가야 하는 기능.

function ProductsPage() {
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
