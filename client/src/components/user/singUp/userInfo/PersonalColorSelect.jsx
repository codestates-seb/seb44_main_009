import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PersonalColorSelectContainer } from "./styels/PersonalColorSelectContainer.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { PersonalColorCoolWrapper } from "./styels/PersonalColorCoolWrapper.styled";
import { PersonalColorWarmWrapper } from "./styels/PersonalColorWarmWrapper.styled";
import { useContext, useEffect, useState } from "react";
import { SingUpContext } from "../SignUp";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";

export default function PersonalColorSelect() {
  const { setSignUpData, signUpData } = useContext(SingUpContext);

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (signUpData.personalColor.length === 0) {
      setMessage("퍼스널 컬러를 선택해주세요");
      return;
    }

    setMessage("");
  }, [signUpData.personalColor]);

  return (
    <>
      <SignUpInputTitleWrapper>
        <SignUpInputTitle>퍼스널 컬러</SignUpInputTitle>
        <ValidationMessage>{message}</ValidationMessage>
      </SignUpInputTitleWrapper>
      <PersonalColorSelectContainer>
        <PersonalColorWarmWrapper
          onClick={() => {
            setSignUpData(prev => ({ ...prev, personalColor: "웜톤" }));
          }}
          personalColor={signUpData.personalColor}
        >
          <FontAwesomeIcon icon={faPalette} fontSize={50} />
          <div>Warm</div>
        </PersonalColorWarmWrapper>
        <PersonalColorCoolWrapper
          onClick={() => {
            setSignUpData(prev => ({ ...prev, personalColor: "쿨톤" }));
          }}
          personalColor={signUpData.personalColor}
        >
          <FontAwesomeIcon icon={faPalette} fontSize={50} />
          <div>Cool</div>
        </PersonalColorCoolWrapper>
      </PersonalColorSelectContainer>
    </>
  );
}
