import { styled } from "styled-components";

export const ProfileEditModalContainer = styled.div`
  position: fixed;
  top: 50%;
  transform: translate(0, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  background-color: white;

  border: 1px solid #383838;
  border-radius: 30px;
  padding: 24px;
`;
