const url = "";

import axios from "axios";

export const postSignUp = async data => {
  await axios.post(`${url}/`, data);
};
