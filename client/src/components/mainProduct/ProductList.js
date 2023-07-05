import Product from "./Product";
import {
  ContainerBox,
  ProductListContainer,
} from "./Styles/ProductList/ProductListStyles";

const ProductList = ({ products }) => {
  const isWarmTone = products => {
    return products.color === "warm";
  };

  return (
    <ContainerBox>
      <ProductListContainer>
        {products.map(product => (
          <Product
            key={product.id}
            imageSrc={product.imageSrc}
            name={product.name}
            price={product.price}
            isWarmTone={isWarmTone(product)}
          />
        ))}
      </ProductListContainer>
    </ContainerBox>
  );
};
export default ProductList;
