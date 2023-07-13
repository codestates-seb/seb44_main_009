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

  // Effect >> API로 회원 정보 불러오기
  useEffect(() => {
    (async () => {
      setUserInfo(await getUser());
    })();
  }, []);

  // handleEvent >> 회원 정보 변경
  const handleChange = e =>
    setUserInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));

  console.log(userInfo);

  return (
    <>
      {userInfo ? (
        <MyProfileEditsContext.Provider
          value={{ userInfo, setUserInfo, handleChange }}
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
