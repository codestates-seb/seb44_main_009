//import React from "react";

import Product from "./Product";
import {
  MainContainer,
  MainProductListContainer,
} from "./Styles/MainProductList/MainProductList";

const MainProductList = ({ products }) => {
  const isWarmTone = products => {
    return products.color === "warm";
  };
  const slicedProducts = products.slice(0, 4);
  return (
    <MainContainer>
      <MainProductListContainer>
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
      </MainProductListContainer>
    </MainContainer>
  );
};
export default MainProductList;
