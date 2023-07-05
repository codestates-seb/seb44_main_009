import Product from "./Product";
import {
  ContainerBox,
  ProductListContainer,
  Margin,
} from "./Styles/ProductList/ProductListStyles";

const ProductList = ({ products }) => {
  const isWarmTone = products => {
    return products.color === "warm";
  };
  const productGroups = Array.from(
    { length: Math.ceil(products.length / 4) },
    (_, index) => products.slice(index * 4, index * 4 + 4),
  );
  return (
    <ContainerBox>
      <ProductListContainer>
        {/* {products.map(product => (
          <Product
            key={product.id}
            imageSrc={product.imageSrc}
            name={product.name}
            price={product.price}
            isWarmTone={isWarmTone(product)}
          />
        ))} */}
        {productGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <ProductListContainer>
              {group.map(product => (
                <Product
                  key={product.id}
                  imageSrc={product.imageSrc}
                  name={product.name}
                  price={product.price}
                  color={product.color}
                  isWarmTone={isWarmTone(product)}
                />
              ))}
            </ProductListContainer>
            <Margin />
          </div>
        ))}
      </ProductListContainer>
    </ContainerBox>
  );
};
export default ProductList;
