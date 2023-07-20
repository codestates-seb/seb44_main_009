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

// 장바구니 삭제 요청
export const deleteCart = async (token, cartProductId) => {
  const response = await axios.delete(`/carts/items/${cartProductId}`, {
    headers: { Authorization: `${token}` },
  });
  return response;
};

// 장바구니 수량 변경 (401error??)
export const updateCart = async (token, cartProductId, newQuantity) => {
  const response = await axios.patch(
    `/carts/items/${cartProductId}?quantity=${newQuantity}`,
    {
      headers: { Authorization: `${token}` },
    },
  );
  return response;
};

// 장바구니 상품 주문 요청
// export const postAfterPayment = async data => {
//   await axios.post(`/order/buy/${cartId}/${memberId}`, data);
// };

// 리뷰 등록 (orderId,productId->undefined)
export const updateReview = async (token, data, orderId, productId) => {
  const response = await axios.post(
    `/reviews/create/${orderId}/${productId}`,
    data,
    {
      headers: { Authorization: `${token}` },
    },
  );
  return response.data;
};
