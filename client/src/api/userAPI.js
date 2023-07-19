import axios from "axios";

// :: 배포 PR 시, 주석 해제
// axios.defaults.baseURL = "";

// :: 로그인 기능 구현 시, 주석 해제
axios.defaults.withCredentials = true;

// const headersAuth = {
//   headers: { Authorization: `Bearer ${accessToken}` },
// };

// 회원가입 요청
export const postSignUp = async data => {
  await axios.post("/members/signup", data);
};

// 로그인 요청
export const postLogIn = async data => {
  const response = await axios.post("/auth/login", data);
  return response.headers.authorization;
};

// 유저 정보 불러오기
export const getUser = async () => {
  const response = await axios.get("/members");
  return response.data.data;
};

// 유저 주문 내역 불러오기
export const getUserBuyList = async () => {
  const response = await axios.get("/orders/list");
  return response.data;
};

// 유저 리뷰 내역 불러오기
export const getUserReviewList = async () => {
  const response = await axios.get(`/reviews/findByMember`);
  return response.data.data;
};

// 유저 질문 내역 불러오기
export const getUserQuestionList = async memberId => {
  const response = await axios.get(`/qnas/qnabymember/${memberId}`);
  return response.data;
};

// 유저 주문 상세 내역 불러오기
export const getUserBuyProdutList = async orderId => {
  const response = await axios.get(`/orders/${orderId}`);
  return response.data.data;
};
