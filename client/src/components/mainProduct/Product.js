import {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductInfo,
} from "./Styles/ProductStyles";

const Product = ({ imageSrc, name, price }) => {
  return (
    <div>
      <ProductContainer>
        {/* a속성으로 감싸 링크 전달하기  */}
        <ProductImage src={imageSrc} alt="Product Image" />
        <ProductInfo>
          <ProductName>{name}</ProductName>
        </ProductInfo>
        <ProductInfo>
          <ProductPrice>{price}</ProductPrice>
        </ProductInfo>
      </ProductContainer>
    </div>
  );
};
export default Product;
