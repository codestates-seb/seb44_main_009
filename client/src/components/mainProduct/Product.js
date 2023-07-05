import {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductPriceInfo,
  ProductNameInfo,
  ProductColor,
} from "./Styles/Product/ProductStyles";

const Product = ({ imageSrc, name, price, color }) => {
  return (
    <span>
      <ProductContainer>
        {/* a속성으로 감싸 링크 전달하기  */}
        <ProductImage src={imageSrc} alt="Product Image" />
        <ProductNameInfo>
          <ProductName>{name}</ProductName>
        </ProductNameInfo>

        <ProductPriceInfo>
          <ProductColor color={color} />
          <ProductPrice>{price}</ProductPrice>
        </ProductPriceInfo>
      </ProductContainer>
    </span>
  );
};
export default Product;
