import MyAddress from "./MyInfo/MyAddress";
import MyEmail from "./MyInfo/MyEmail";
import MyName from "./MyInfo/MyName";
import MyNickName from "./MyInfo/MyNickName";
import MyPhoneNumber from "./MyInfo/MyPhoneNumber";
import { MyProfileWrapper } from "./styles/MyProfileWrapper.styled";

export default function MyProfile({ children }) {
  return <MyProfileWrapper>{children}</MyProfileWrapper>;
}

MyProfile.MyName = MyName;
MyProfile.MyNickName = MyNickName;
MyProfile.MyEmail = MyEmail;
MyProfile.MyPhoneNumber = MyPhoneNumber;
MyProfile.MyAddress = MyAddress;
