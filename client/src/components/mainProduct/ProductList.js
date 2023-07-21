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
      {productGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <ProductListContainer>
            {group.map(product => (
              <Product
                key={product.productId}
                productId={product.productId}
                // url={product.url}
                url="https://img.freepik.com/free-vector/background-of-coming-soon-with-a-clock_1017-5059.jpg?w=826&t=st=1688544622~exp=1688545222~hmac=9340ba92730b0d3c10f8db2ad9d60b2f564990234e283bac6fb44d2159e6aee0"
                name={product.name}
                price={product.price}
                color={product.colors}
                isWarmTone={isWarmTone(product)}
              />
            ))}
          </ProductListContainer>
          <Margin />
        </div>
      ))}
    </ContainerBox>
  );
};
export default ProductList;
