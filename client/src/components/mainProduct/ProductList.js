//import React from "react";
import { styled } from "styled-components";
import Product from "./Product";

const Container = styled.div`
  max-width: 800px;
`;
const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

// const products = [
//   { id: 1, imageSrc: Coat, name: "웜1", price: "1000원", color: "warm" },
//   { id: 2, imageSrc: Coat, name: "웜2", price: "2000원", color: "warm" },
//   { id: 3, imageSrc: Coat, name: "웜3", price: "3000원", color: "warm" },
//   { id: 4, imageSrc: Coat, name: "웜4", price: "4000원", color: "warm" },
//   { id: 5, imageSrc: Skirt, name: "쿨1", price: "100원", color: "cool" },
//   { id: 6, imageSrc: Skirt, name: "쿨2", price: "200원", color: "cool" },
//   { id: 7, imageSrc: Skirt, name: "쿨3", price: "300원", color: "cool" },
//   { id: 8, imageSrc: Skirt, name: "쿨4", price: "400원", color: "cool" },
// ];

const ProductList = ({ products }) => {
  const isWarmTone = products => {
    return products.color === "warm";
  };

  return (
    <Container>
      <ProductListContainer>
        {products.map(product => (
          <Product
            key={product.id}
            imageSrc={product.imageSrc}
            name={product.name}
            price={product.price}
            isWarmTone={isWarmTone(product)}
          />
        ))}
      </ProductListContainer>
    </Container>
  );
};
export default ProductList;
