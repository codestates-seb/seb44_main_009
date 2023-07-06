import { styled } from "styled-components";

import {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductPriceInfo,
  ProductNameInfo,
  ProductColor,
} from "./Styles/Product/ProductStyles";
const ProductColorContainer = styled.div`
  display: flex; // 가로 정렬을 위한 flex 설정
  max-width: 100%;
  max-height: 100%;
  justify-content: flex-end;
`;
const Product = ({ url, name, price, color }) => {
  return (
    <span>
      <ProductContainer>
        {/* a속성으로 감싸 링크 전달하기  */}
        <ProductImage src={url} alt="Product Image" />
        <ProductNameInfo>
          <ProductName>{name}</ProductName>
        </ProductNameInfo>
        <ProductColorContainer>
          {color.map((c, index) => (
            <ProductColor key={index} color={c} />
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
