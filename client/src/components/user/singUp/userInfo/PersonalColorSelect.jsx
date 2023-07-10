import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PersonalColorSelectContainer } from "./styels/PersonalColorSelectContainer.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { PersonalColorCoolWrapper } from "./styels/PersonalColorCoolWrapper.styled";
import { PersonalColorWarmWrapper } from "./styels/PersonalColorWarmWrapper.styled";

export default function PersonalColorSelect() {
  return (
    <>
      <SignUpInputTitle>퍼스널 컬러</SignUpInputTitle>
      <PersonalColorSelectContainer>
        <PersonalColorWarmWrapper>
          <FontAwesomeIcon icon={faPalette} fontSize={50} />
          <div>Warm</div>
        </PersonalColorWarmWrapper>
        <PersonalColorCoolWrapper>
          <FontAwesomeIcon icon={faPalette} fontSize={50} />
          <div>Cool</div>
        </PersonalColorCoolWrapper>
      </PersonalColorSelectContainer>
    </>
  );
}
