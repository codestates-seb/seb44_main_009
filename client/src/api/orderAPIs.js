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

// 리뷰 등록
export const updateReview = async (token, data) => {
  const { orderId, productId } = data;
  const response = await axios.post(
    `/reviews?orderId=${orderId}&productId=${productId}`,
    data,
    {
      headers: { Authorization: `${token}` },
    },
  );
  return response.data;
};

// 리뷰 삭제
export const deleteReview = async (token, reviewId) => {
  const response = await axios.delete(`/reviews/delete/${reviewId}`, {
    headers: { Authorization: `${token}` },
  });
  return response;
};

// 리뷰 수정
export const editReview = async (token, reviewId, data) => {
  const response = await axios.patch(`/reviews?reviewId=${reviewId}`, data, {
    headers: { Authorization: `${token}` },
  });
  return response;
};

// 개별 리뷰 조회
export const findReview = async (token, reviewId) => {
  const response = await axios.get(`/reviews/find/${reviewId}`, {
    headers: { Authorization: `${token}` },
  });
  return response.data;
};

// 주문 배송 완료
export const patchDelivery = async (token, data) => {
  const { orderId } = data;
  const response = await axios.patch(`/orders/update/${orderId}`, data, {
    headers: { Authorization: `${token}` },
  });
  return response;
};

// 찜 생성
export const updateLike = async (token, data) => {
  const response = await axios.post(`/wishlist`, data, {
    headers: { Authorization: `${token}` },
  });
  return response.data;
};

// 찜 조회
export const fetchLike = async token => {
  const response = await axios.get(`/wishlist`, {
    headers: { Authorization: `${token}` },
  });
  return response.data;
};

//찜 삭제
export const deleteLike = async (token, productData) => {
  const response = await axios.delete(`/wishlist`, {
    headers: { Authorization: `${token}` },
    data: productData,
  });
  return response;
};
