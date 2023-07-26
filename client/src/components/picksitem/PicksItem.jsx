import { styled } from "styled-components";
import {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductPriceInfo,
  ProductNameInfo,
  ProductColor,
  ProductImageContainer,
} from "../mainProduct/Styles/Product/ProductStyles";

const ProductColorContainer = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  justify-content: flex-end;
`;
function PicksItem({ image, name, price, color }) {
  return (
    <span>
      <ProductContainer>
        <ProductImageContainer>
          <ProductImage src={image} alt="Product Image" />
        </ProductImageContainer>
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
}

export default PicksItem;
