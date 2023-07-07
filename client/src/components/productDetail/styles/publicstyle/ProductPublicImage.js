import { ProductImageContainer, ProductImage } from "./ProductImageContainer";
/*  공통 제품 이미지 */

export const ProductPublicImage = () => {
  return (
    <div>
      <ProductImageContainer>
        <ProductImage src="product_image.jpg" alt="Product.url" />
      </ProductImageContainer>
    </div>
  );
};
