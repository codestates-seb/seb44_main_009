import { useContext } from "react";
import { ProfileEditPageBtn } from "./styles/ProfileEditPageBtn.styled";
import { MyProfileEditsContext } from "../../MyProfileEdit";
import { patchUser } from "../../../../../../api/userAPI";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { auth } from "../../../../../../atoms/auth";

export default function ProfileEditButton() {
  // recoil >> auth.token
  const { token } = useRecoilValue(auth);

  // Context >> 사용
  const {
    setShowModal,
    userInfo,
    setUserData,
    emailRegEx,
    phoneNumberRegEx,
    setValidation,
  } = useContext(MyProfileEditsContext);

  // Navigate
  const nav = useNavigate();

  // handleEvent >> 유효성 검사 및 showModal(state) 변경
  const handleOpenModal = () => {
    // for (let i in userInfo) {
    //   if (userInfo[i].length === 0) {
    //     setValidation("미입력한 부분이 없는지 확인해주세요");
    //     setShowModal(true);
    //     return;
    //   }
    // }

    if (Object.values(userInfo).some(data => !data)) {
      setValidation("미입력한 부분이 없는지 확인해주세요.");
      return setShowModal(true);
    }

    if (userInfo.email.match(emailRegEx) === null) {
      setValidation("형식에 맞춰 입력해주세요");
      return setShowModal(true);
    }

    if (userInfo.phoneNumber.match(phoneNumberRegEx) === null) {
      setValidation("형식에 맞춰 입력해주세요");
      return setShowModal(true);
    }

    // 유효성 검사 통과 시, api 요청
    (async () => {
      try {
        await patchUser(userInfo, token);
        setUserData(userInfo);
        nav("/profile");
      } catch (error) {
        setValidation(error.message);
      }
    })();
  };

  return (
    <ProfileEditPageBtn onClick={handleOpenModal}>수정</ProfileEditPageBtn>
  );
}
