import { createContext } from "react";
import MyPersonalColorEdit from "./myPersonalColorEdit/MyPersonalColorEdit";
import MyProfileEdit from "./myProfileEdit/MyProfileEdit";
import MyProfileEditBtn from "./myProfileEditBtn/MyProfileEditBtn";
import { ProfileEditWrapper } from "./styles/ProfileEditWrapper.styled";
import { user } from "../../../../atoms/user";
import { useRecoilState } from "recoil";

// Context >> 생성
export const MyProfileEditsContext = createContext();

export default function MyProfileEditsProvider({ children }) {
  // recoil
  const [userData, setUserData] = useRecoilState(user);

  // 유효성 검사 정규식 >> 이메일
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  // 유효성 검사 정규식 >> 전화번호
  const phoneNumberRegEx = /^(010)-[0-9]{3,4}-[0-9]{4}$/;

  // handleEvent >> 회원 정보 변경
  const handleChange = e =>
    setUserData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <>
      {userData ? (
        <MyProfileEditsContext.Provider
          value={{
            userData,
            setUserData,
            handleChange,
            emailRegEx,
            phoneNumberRegEx,
          }}
        >
          <ProfileEditWrapper>{children}</ProfileEditWrapper>
        </MyProfileEditsContext.Provider>
      ) : null}
    </>
  );
}

export const MyProfileEdits = Object.assign(MyProfileEditsProvider, {
  MyPersonalColorEdit: MyPersonalColorEdit,
  MyProfileEdit: MyProfileEdit,
  MyProfileEditBtn: MyProfileEditBtn,
});
