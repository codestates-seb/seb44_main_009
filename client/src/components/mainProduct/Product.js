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
    <div>
      <ProductContainer>
        {/* a속성으로 감싸 링크 전달하기  */}
        <ProductImage src={imageSrc} alt="Product Image" />
        <ProductNameInfo>
          <ProductName>{name}</ProductName>
          <ProductColor>{color}</ProductColor>
        </ProductNameInfo>
        <ProductPriceInfo>
          <ProductPrice>{price}</ProductPrice>
        </ProductPriceInfo>
      </ProductContainer>
    </div>
  );
};
export default Product;
