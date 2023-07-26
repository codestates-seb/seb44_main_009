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
import { Link } from "react-router-dom";

const Background = styled.div`
  a {
    text-decoration-line: none;
    color: #383838;
  }
`;
const ProductColorContainer = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  justify-content: flex-end;
`;
function PicksItem({ productId, image, name, price, color }) {
  return (
    <Background>
      <Link to={`/product-detail/${productId}`}>
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
      </Link>
    </Background>
  );
}

export default PicksItem;
