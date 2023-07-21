import { styled } from "styled-components";

export const MyToneTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  color: white;
  text-align: center;

  background-color: ${props =>
    props.personalColor === "웜톤" ? "orange" : "skyblue"};

  width: 100px;
  height: 100px;
  border: 1px solid #383838;
  border-radius: 30px;
`;
