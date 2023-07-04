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

const MainProductList = ({ products }) => {
  const isWarmTone = products => {
    return products.color === "warm";
  };
  const slicedProducts = products.slice(0, 4);
  return (
    <Container>
      <ProductListContainer>
        {slicedProducts.map(product => (
          <Product
            key={product.id}
            imageSrc={product.imageSrc}
            name={product.name}
            price={product.price}
            isWarmTone={isWarmTone(product)}
            // color={product.color}
          />
        ))}
      </ProductListContainer>
    </Container>
  );
};
export default MainProductList;
