import axios from "axios";

axios.defaults.baseURL = "";
axios.defaults.withCredentials = true;

export const postSignUp = async data => {
  await axios.post("/", data);
};

export const postLogIn = async data => {
  await axios.post("/", data);
};
