import axios from "axios";

const cartId = 1;

// 장바구니 전체 조회
export const fetchCart = async () => {
  const response = await axios.get(`/carts/${cartId}`);
  return response.data;
};

// 장바구니 상품 주문 요청
// export const postAfterPayment = async data => {
//   await axios.post(`/order/buy/${cartId}/${memberId}`, data);
// };
