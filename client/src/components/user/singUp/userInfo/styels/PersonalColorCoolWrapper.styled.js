import { styled } from "styled-components";

export const PersonalColorCoolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  color: white;
  text-align: center;

  background-color: pink;

  width: 100px;
  height: 100px;
  border: 1px solid #383838;
  border-radius: 30px;

  &:hover {
    background-color: #808080;
  }
`;
