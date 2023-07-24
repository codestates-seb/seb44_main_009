import { createContext, useState } from "react";
import MyPersonalColorEdit from "./myPersonalColorEdit/MyPersonalColorEdit";
import MyProfileEdit from "./myProfileEdit/MyProfileEdit";
import MyProfileEditBtn from "./myProfileEditBtn/MyProfileEditBtn";
import { ProfileEditWrapper } from "./styles/ProfileEditWrapper.styled";
import { user } from "../../../../atoms/user";
import { useRecoilState } from "recoil";
import ProfileEditModal from "./profileEditModal/ProfileEditModal";

// Context >> 생성
export const MyProfileEditsContext = createContext();

export default function MyProfileEditsProvider({ children }) {
  // recoil
  const [userData, setUserData] = useRecoilState(user);

  const [userInfo, setUserInfo] = useState(userData);

  // State >> 유효성 검사 불통과 시, 모달 오픈
  const [showModal, setShowModal] = useState(false);

  // State >> 유효성 검사 메세지
  const [validation, setValidation] = useState("");

  // 유효성 검사 정규식 >> 이메일
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  // 유효성 검사 정규식 >> 전화번호
  const phoneNumberRegEx = /^(010)-[0-9]{3,4}-[0-9]{4}$/;

  // handleEvent >> 회원 정보 변경
  const handleChange = e =>
    setUserInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <>
      {userData ? (
        <MyProfileEditsContext.Provider
          value={{
            userInfo,
            setUserInfo,
            setUserData,
            handleChange,
            emailRegEx,
            phoneNumberRegEx,
            validation,
            setValidation,
            setShowModal,
          }}
        >
          <ProfileEditWrapper>{children}</ProfileEditWrapper>
          {showModal && <ProfileEditModal />}
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
