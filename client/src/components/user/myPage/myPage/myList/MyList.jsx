import { createContext, useEffect, useState } from "react";
import MyOrders from "./myOrders/MyOrders";
import MyQuestions from "./myQuestions/MyQuestions";
import MyReviews from "./myReviews/MyReviews";
import { MyListContaier } from "./styles/MyListContaier";
import {
  getUserBuyList,
  getUserQuestionList,
  getUserReviewList,
} from "../../../../../api/userAPI";

// Context >> 생성
export const MyListContext = createContext();

export default function MyList({ children }) {
  // State >> API로 불러온 회원 주문 내역
  const [userBuyList, setUserBuyList] = useState({});

  // State >> API로 불러온 회원 리뷰 내역
  const [userReviewList, setUserReviewList] = useState({});

  // State >> API로 불러온 회원 질문 내역
  const [userQuestionList, setUserQuestionList] = useState({});

  // Effet >> API 요청으로 회원 내역 불러오기
  useEffect(() => {
    (async () => {
      setUserBuyList(await getUserBuyList());
    })();

    (async () => {
      setUserReviewList(await getUserReviewList());
    })();

    (async () => {
      setUserQuestionList(await getUserQuestionList());
    })();
  }, []);

  return (
    <>
      {userBuyList && userReviewList && userQuestionList ? (
        <MyListContext.Provider
          value={{ userBuyList, userReviewList, userQuestionList }}
        >
          <MyListContaier>{children}</MyListContaier>
        </MyListContext.Provider>
      ) : null}
    </>
  );
}

MyList.Orders = MyOrders;
MyList.Reviews = MyReviews;
MyList.Questions = MyQuestions;
