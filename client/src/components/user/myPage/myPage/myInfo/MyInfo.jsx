import MyInfoEditBtn from "./myInfoEditBtn/MyInfoEditBtn";
import MyInfoImg from "./myInfoImg/MyInfoImg";
import MyInformation from "./myInformation/MyInformation";
import { MyInfoContainer } from "./styles/MyInfoContainer.styles";
import { createContext } from "react";

// Context >> 생성
export const MyInfoContext = createContext();

export default function MyInfoProvider({ children }) {
  return (
    <MyInfoContext.Provider value={{}}>
      <MyInfoContainer>{children}</MyInfoContainer>
    </MyInfoContext.Provider>
  );
}

// !!:
export const MyInfo = Object.assign(MyInfoProvider, {
  Img: MyInfoImg,
  Info: MyInformation,
  EditBtn: MyInfoEditBtn,
});
