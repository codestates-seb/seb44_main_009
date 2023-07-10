import { ProductImage } from "../styles/ProdcutImage.styled";
import { ProductWrapper } from "../styles/ProdcutWrapper.styled";
import { ProductDetail } from "../styles/ProductDetail.styled";
import { ProductView } from "../styles/ProductView.styled";
import { OrderProductInfo } from "./styles/OrderProductInfo.styled";

const OrderProductItem = ({ url, name, price, color, count, size }) => {
  return (
    <>
      <ProductWrapper>
        <ProductDetail>
          <ProductImage src={url} alt={name} />
          <ProductView>
            <p>상품명: {name}</p>
            <p>가격: {price}원</p>
            <p>수량: {count}</p>
          </ProductView>
        </ProductDetail>
      </ProductWrapper>
      <OrderProductInfo>
        {color && <p> {color.join(", ")}</p>}/{" "}
        {size && <p> {size.join(", ")}</p>}
      </OrderProductInfo>
    </>
  );
};

export default OrderProductItem;
