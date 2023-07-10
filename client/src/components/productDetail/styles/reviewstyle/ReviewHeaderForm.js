import { styled } from "styled-components";

import { ReviewDrop } from "./ReviewDrop";
import { ReviewImg } from "./ReviewImg";

const ReviewFormDiv = styled.div`
  width: 100%;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ReviewHeaderForm = () => {
  return (
    <ReviewFormDiv>
      <ReviewImg></ReviewImg>
      <ReviewDrop></ReviewDrop>
    </ReviewFormDiv>
  );
};
