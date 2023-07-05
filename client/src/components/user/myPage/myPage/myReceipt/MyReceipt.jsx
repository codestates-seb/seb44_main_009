import MyReceiptTitle from "./myReceiptTitle/MyReceiptTitle";
import Purchased from "./purchased/Purchased";
import { MyReceiptContainer } from "./styles/MyReceiptContainer.styled";

export default function MyReceipt({ children }) {
  return <MyReceiptContainer>{children}</MyReceiptContainer>;
}

MyReceipt.Title = MyReceiptTitle;
MyReceipt.Purchased = Purchased;
