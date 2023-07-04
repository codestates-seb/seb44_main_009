//import React from "react";
import { styled } from "styled-components";
import Product from "./Product";

const Container = styled.div`
  max-width: 800px;
  margin-left: 50px;
`;
const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

const ProductList = () => {
  //   const isWarmTone = products => {
  //     return products.color === "warm";
  //   };

  return (
    <Container>
      <ProductListContainer>
        <Product></Product>
      </ProductListContainer>
    </Container>
  );
};
export default ProductList;
