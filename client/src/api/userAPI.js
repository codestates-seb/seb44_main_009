import axios from "axios";

// :: 배포 PR 시, 주석 해제
// axios.defaults.baseURL = "";

// :: 로그인 기능 구현 시, 주석 해제
// axios.defaults.withCredentials = true;

export const postSignUp = async data => {
  await axios.post("/", data);
};

export const postLogIn = async data => {
  await axios.post("/", data);
};
