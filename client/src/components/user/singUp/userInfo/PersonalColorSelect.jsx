import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PersonalColorSelectContainer } from "./styels/PersonalColorSelectContainer.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { PersonalColorCoolWrapper } from "./styels/PersonalColorCoolWrapper.styled";
import { PersonalColorWarmWrapper } from "./styels/PersonalColorWarmWrapper.styled";
import { useContext } from "react";
import { SingUpContext } from "../SignUp";

export default function PersonalColorSelect() {
  const setSignUpData = useContext(SingUpContext);
  return (
    <>
      <SignUpInputTitle>퍼스널 컬러</SignUpInputTitle>
      <PersonalColorSelectContainer>
        <PersonalColorWarmWrapper
          onClick={() => {
            setSignUpData(prev => ({ ...prev, personalColor: "웜톤" }));
          }}
        >
          <FontAwesomeIcon icon={faPalette} fontSize={50} />
          <div>Warm</div>
        </PersonalColorWarmWrapper>
        <PersonalColorCoolWrapper
          onClick={() => {
            setSignUpData(prev => ({ ...prev, personalColor: "쿨톤" }));
          }}
        >
          <FontAwesomeIcon icon={faPalette} fontSize={50} />
          <div>Cool</div>
        </PersonalColorCoolWrapper>
      </PersonalColorSelectContainer>
    </>
  );
}
