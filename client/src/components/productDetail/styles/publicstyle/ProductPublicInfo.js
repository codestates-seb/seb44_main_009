import {
  ProductNameContainer,
  ProductName,
  ProductPrice,
  ProductCount,
  ProductDiv,
} from "./ProductInfo";
/*  공통 제품 정보 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

export const ProductPublicInfo = ({ name, price, color, count }) => {
  return (
    <ProductNameContainer>
      <ProductDiv>
        <ProductName>
          <FontAwesomeIcon icon={faPalette} color={color} /> 상품명 : {name}
        </ProductName>
        <ProductCount>잔량: 총 {count} 개</ProductCount>
      </ProductDiv>
      <ProductPrice>가격 : {price} 원</ProductPrice>
    </ProductNameContainer>
  );
};
