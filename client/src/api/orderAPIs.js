import axios from "axios";

// 장바구니 전체 조회
export const fetchCart = async token => {
  const response = await axios.get(`/carts`, {
    headers: { Authorization: `${token}` },
  });
  return response.data;
};

// 장바구니 추가 요청
export const addToCart = async (token, data) => {
  const response = await axios.post("/carts/items", data, {
    headers: { Authorization: `${token}` },
  });
  return response.data;
};

// 장바구니 상품 주문 요청
// export const postAfterPayment = async data => {
//   await axios.post(`/order/buy/${cartId}/${memberId}`, data);
// };
