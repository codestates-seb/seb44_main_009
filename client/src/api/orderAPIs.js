import axios from "axios";

axios.defaults.baseURL =
  "http://ec2-43-201-65-189.ap-northeast-2.compute.amazonaws.com:8080";

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

// 장바구니 수량 변경
export const updateCart = async (token, cartProductId, newQuantity, data) => {
  const response = await axios.patch(
    `/carts/items/${cartProductId}?quantity=${newQuantity}`,
    data,
    {
      headers: { Authorization: `${token}` },
    },
  );
  return response;
};

// 주문 상품 상세조회
export const fetchOrder = async (token, orderId) => {
  const response = await axios.get(`/orders/${orderId}`, {
    headers: { Authorization: `${token}` },
  });
  return response.data;
};

// 장바구니 상품 전체 구매
export const postAfterPayment = async (token, data) => {
  const response = await axios.post("/orders/buy/cart", data, {
    headers: { Authorization: `${token}` },
  });
  return response.data;
};

// 장바구니 상품 개별 구매
export const postPayment = async (token, data) => {
  const { productId, quantity } = data;
  const response = await axios.post(
    `/orders/buy?productId=${productId}&quantity=${quantity}`,
    data,
    {
      headers: { Authorization: `${token}` },
    },
  );
  return response.data;
};

// 주문 배송지 변경
export const patchAddress = async (token, orderId, data) => {
  const response = await axios.patch(`/orders/request/${orderId}`, data, {
    headers: { Authorization: `${token}` },
  });
  return response;
};

// 리뷰 등록 (orderId,productId->undefined)
export const updateReview = async (token, data) => {
  const response = await axios.post(`/reviews?orderId=6&productId=33`, data, {
    headers: { Authorization: `${token}` },
  });
  return response.data;
};

// 주문 배송 완료
export const patchDelivery = async (token, orderId, data) => {
  const response = await axios.patch(`/orders/update/${orderId}`, data, {
    headers: { Authorization: `${token}` },
  });
  return response;
};
