import { ProductImage } from "../styles/ProdcutImage.styled";
import { ProductWrapper } from "../styles/ProdcutWrapper.styled";
import { ProductDetail } from "../styles/ProductDetail.styled";
import { ProductView } from "../styles/ProductView.styled";
import { Prepare } from "../../../image";

const OrderProductItem = ({ name, price, quantity }) => {
  return (
    <>
      <ProductWrapper>
        <ProductDetail>
          <ProductImage src={Prepare} alt={name} />
          <ProductView>
            <p>상품명: {name}</p>
            <p>가격: {price}원</p>
            <p>수량: {quantity}</p>
          </ProductView>
        </ProductDetail>
      </ProductWrapper>
    </>
  );
};

export default OrderProductItem;
