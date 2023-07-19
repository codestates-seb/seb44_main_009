import axios from "axios";

// 장바구니 전체 조회
export const fetchCart = async (cartId = 1) => {
  const response = await axios.get(`/carts/${cartId}`);
  return response.data;
};

// 장바구니 추가 요청
export const addToCart = async productId => {
  const response = await axios.post(`carts/${productId}/items`);
  return response.data;
};

// 장바구니 상품 주문 요청
// export const postAfterPayment = async data => {
//   await axios.post(`/order/buy/${cartId}/${memberId}`, data);
// };
