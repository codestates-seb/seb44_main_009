import { styled } from "styled-components";

export const PersonalColorCoolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  color: white;
  text-align: center;

  background-color: ${props =>
    props.personalColor === "쿨톤" ? "pink" : "#808080"};

  width: 100px;
  height: 100px;
  border: 1px solid #383838;
  border-radius: 30px;

  &:hover {
    background-color: pink;
  }
`;
