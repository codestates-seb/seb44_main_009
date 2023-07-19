import axios from "axios";

// :: 배포 PR 시, 주석 해제
// axios.defaults.baseURL = "";

// :: 로그인 기능 구현 시, 주석 해제
axios.defaults.withCredentials = true;

// 회원가입 요청
export const postSignUp = async data => {
  await axios.post("/members/signup", data);
};

// 로그인 요청
export const postLogIn = async data => {
  const response = await axios.post("/auth/login", data);
  return response.headers.authorization;
};

//
// 유저 정보 불러오기
export const getUser = async token => {
  const response = await axios.get("/members", {
    headers: { Authorization: `${token}` },
  });
  return response.data.data;
};

//
// 유저 주문 내역 불러오기
export const getUserBuyList = async token => {
  const response = await axios.get("/orders/list", {
    headers: { Authorization: `${token}` },
  });
  return response.data;
};

//
// 유저 리뷰 내역 불러오기
export const getUserReviewList = async token => {
  const response = await axios.get("/reviews/findByMember", {
    headers: { Authorization: `${token}` },
  });
  return response.data.data;
};

// 유저 질문 내역 불러오기
export const getUserQuestionList = async (memberId = 3) => {
  const response = await axios.get(`/qnas/qnabymember/${memberId}`);
  return response.data;
};

// FIXME 지속적인 404 error
// 유저 주문 상세 내역 불러오기
export const getUserBuyProdutList = async (orderId, token) => {
  const response = await axios.get(`/orders/${orderId}`, {
    headers: { Authorization: `${token}` },
  });
  return response.data.data;
};

// 유저 정보 수정하기
export const patchUser = async (data, token) => {
  const response = await axios.patch("/members", data, {
    headers: { Authorization: `${token}` },
  });
  return response;
};
