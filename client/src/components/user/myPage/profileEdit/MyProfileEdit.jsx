import { createContext, useState, useEffect } from "react";
import MyPersonalColorEdit from "./myPersonalColorEdit/MyPersonalColorEdit";
import MyProfileEdit from "./myProfileEdit/MyProfileEdit";
import MyProfileEditBtn from "./myProfileEditBtn/MyProfileEditBtn";
import { ProfileEditWrapper } from "./styles/ProfileEditWrapper.styled";
import { getUser } from "../../../../api/userAPI";

// Context >> 생성
export const MyProfileEditsContext = createContext();

export default function MyProfileEdits({ children }) {
  // State >> API로 불러온 회원 정보
  const [userInfo, setUserInfo] = useState({});

  // 유효성 검사 정규식 >> 이메일
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  // 유효성 검사 정규식 >> 전화번호
  const phoneNumberRegEx = /^(010)-[0-9]{3,4}-[0-9]{4}$/;

  // handleEvent >> 회원 정보 변경
  const handleChange = e =>
    setUserInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));

  // Effect >> API로 회원 정보 불러오기
  useEffect(() => {
    (async () => {
      setUserInfo(await getUser());
    })();
  }, []);

  return (
    <>
      {userInfo ? (
        <MyProfileEditsContext.Provider
          value={{
            userInfo,
            setUserInfo,
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

MyProfileEdits.MyPersonalColorEdit = MyPersonalColorEdit;
MyProfileEdits.MyProfileEdit = MyProfileEdit;
MyProfileEdits.MyProfileEditBtn = MyProfileEditBtn;
