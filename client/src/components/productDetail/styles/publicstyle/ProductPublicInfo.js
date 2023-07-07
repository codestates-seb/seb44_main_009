import { ProductNameContainer, ProductName, ProductPrice } from "./ProductInfo";
/*  공통 제품 정보 */

export const ProductPublicInfo = () => {
  return (
    <ProductNameContainer>
      <ProductName>상품명 : Product.name </ProductName>
      <ProductPrice>가격: product.price 원</ProductPrice>
    </ProductNameContainer>
  );
};
