import { useContext } from "react";
import { ListAmount } from "../styles/ListAmount";
import { ListTitle } from "../styles/ListTitle";
import { MyListWrapper } from "../styles/MyListWrapper";
import { MyListContext } from "../MyList";

export default function MyQuestions() {
  const { userQuestionList } = useContext(MyListContext);

  return (
    <MyListWrapper>
      <ListTitle>나의 질문</ListTitle>
      <ListAmount>{userQuestionList.length}</ListAmount>
    </MyListWrapper>
  );
}
