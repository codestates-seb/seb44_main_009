import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/main/HomePage";
import ProductsPage from "./pages/main/ProductsPage";
import LoginPage from "./pages/user/sign/login/LoginPage";
import SignUpPage from "./pages/user/sign/signUp/SignUpPage";
import CartPage from "./pages/user/Cart/CartPage";
import GlobalStyle from "./GlobalStyle";
import MyPage from "./pages/user/myPage/myPage/MyPage";
import ReviewUpdatePage from "./pages/user/Review/ReviewUpdatePage";
import ReviewEditPage from "./pages/user/Review/ReviewEditPage";
import MyReviewPage from "./pages/user/Review/MyReview";
import ProfilePage from "./pages/user/profile/ProfilePage";
import ProfileEditPage from "./pages/user/myPage/profileEdit/ProfileEditPage";
import ProductDetailPage from "./pages/main/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Products" element={<ProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/ProductDetail" element={<ProductDetailPage />} />
          <Route path="/review" element={<ReviewUpdatePage />} />
          <Route path="/review/edit" element={<ReviewEditPage />} />
          <Route path="/review/management" element={<MyReviewPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
