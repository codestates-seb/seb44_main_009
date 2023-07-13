import { atom } from "recoil";

export const productsState = atom({
  key: "productsState",
  default: [],
}); // 장바구니 상태 관리
