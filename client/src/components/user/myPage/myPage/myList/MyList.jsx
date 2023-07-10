import MyOrders from "./myOrders/MyOrders";
import MyQuestions from "./myQuestions/MyQuestions";
import MyReviews from "./myReviews/MyReviews";
import { MyListContaier } from "./styles/MyListContaier";

export default function MyList({ children }) {
  return <MyListContaier>{children}</MyListContaier>;
}

MyList.Orders = MyOrders;
MyList.Reviews = MyReviews;
MyList.Questions = MyQuestions;
