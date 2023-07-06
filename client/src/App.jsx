import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/main/HomePage";
import ProductsPage from "./pages/main/ProductsPage";
import LoginPage from "./pages/user/sign/login/LoginPage";
import SignUpPage from "./pages/user/sign/signUp/SignUpPage";
import CartPage from "./pages/user/Cart/CartPage";
import GlobalStyle from "./GlobalStyle";
import MyPage from "./pages/user/myPage/myPage/MyPage";
import ReviewUpdatePage from "./pages/user/Review/ReviewUpdatePage";
import ProfilePage from "./pages/user/profile/ProfilePage";
import ProfileEditPage from "./pages/user/myPage/profileEdit/ProfileEditPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/Review" element={<ReviewUpdatePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<ProfileEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
