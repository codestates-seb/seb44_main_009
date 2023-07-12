import axios from "axios";

// :: 배포 PR 시, 주석 해제
// axios.defaults.baseURL = "";

// :: 로그인 기능 구현 시, 주석 해제
// axios.defaults.withCredentials = true;

// :: 로그인 기능 구현 시, 수정
const memberId = 1;
const orderId = 1;

export const postSignUp = async data => {
  await axios.post("/members/signup", data);
};

export const postLogIn = async data => {
  await axios.post("/", data);
};

// 유저 정보 불러오기

export const getUser = async () => {
  const response = await axios.get(`/members/${memberId}`);
  return response.data.data;
};

// 유저 주문 내역 불러오기
export const getUserBuyList = async () => {
  const response = await axios.get(`/order/buylist/${memberId}`);
  return response.data;
};

// 유저 리뷰 내역 불러오기
export const getUserReviewList = async () => {
  const response = await axios.get(`/review/findByMember/${memberId}`);
  return response.data.data;
};

// 유저 질문 내역 불러오기
export const getUserQuestionList = async () => {
  const response = await axios.get(`/qnas/qnabymember/${memberId}`);
  return response.data;
};

// 유저 주문 상세 내역 불러오기
export const getUserBuyProdutList = async () => {
  const response = await axios.get(`order/${orderId}/${memberId}`);
  return response;
};
