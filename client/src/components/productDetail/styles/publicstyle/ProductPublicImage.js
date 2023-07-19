import { ProductImageContainer, ProductImage } from "./ProductImageContainer";

export const ProductPublicImage = ({ url }) => {
  return (
    <div>
      <ProductImageContainer>
        <ProductImage src={url} alt="Product.url" />
      </ProductImageContainer>
    </div>
  );
};
