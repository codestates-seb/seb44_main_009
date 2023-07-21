import { atom } from "recoil";

export const auth = atom({
  key: "auth",
  default: { isLogin: false, token: null },
});
