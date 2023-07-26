import PicksItem from "./PicksItem";
import {
  ContainerBox,
  ProductListContainer,
  Margin,
} from "../mainProduct/Styles/ProductList/ProductListStyles";

const PicksList = ({ products }) => {
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
              <PicksItem
                key={product.productId}
                productId={product.productId}
                name={product.name}
                price={product.price}
                content={product.content}
                count={product.count}
                image={product.productImageName}
                color={product.colors}
              />
            ))}
          </ProductListContainer>
          <Margin />
        </div>
      ))}
    </ContainerBox>
  );
};
export default PicksList;
