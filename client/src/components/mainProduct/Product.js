import { styled } from "styled-components";
import { Link } from "react-router-dom";

import {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductPriceInfo,
  ProductNameInfo,
  ProductColor,
  ProductImageContainer,
} from "./Styles/Product/ProductStyles";

const ProductColorContainer = styled.div`
  display: flex; // 가로 정렬을 위한 flex 설정
  max-width: 100%;
  max-height: 100%;
  justify-content: flex-end;
`;

const Product = ({ productId, productImageName, name, price, color }) => {
  // const Product = ({ productId, name, price, color }) => {
  return (
    <span>
      <ProductContainer>
        <Link
          to={{
            pathname: `/product-detail/${productId}`,
          }}
        >
          <ProductImageContainer>
            <ProductImage src={productImageName} alt="Product Image" />
          </ProductImageContainer>
        </Link>
        <ProductNameInfo>
          <ProductName>{name}</ProductName>
        </ProductNameInfo>
        <ProductColorContainer>
          {color.map((c, index) => (
            <ProductColor key={index} color={c.name} />
          ))}
        </ProductColorContainer>
        <ProductPriceInfo>
          <ProductPrice>{price}원</ProductPrice>
        </ProductPriceInfo>
      </ProductContainer>
    </span>
  );
};
export default Product;
