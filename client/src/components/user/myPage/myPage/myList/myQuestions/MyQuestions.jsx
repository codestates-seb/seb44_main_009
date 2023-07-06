import { ListAmount } from "../styles/ListAmount";
import { ListTitle } from "../styles/ListTitle";
import { MyListWrapper } from "../styles/MyListWrapper";

export default function MyQuestions() {
  return (
    <MyListWrapper>
      <ListTitle>나의 질문</ListTitle>
      <ListAmount>0</ListAmount>
    </MyListWrapper>
  );
}
