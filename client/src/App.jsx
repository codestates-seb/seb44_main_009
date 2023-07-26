import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/main/HomePage/HomePage";
import ProductsPage from "./pages/main/ProductsPage/ProductsPage";
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
import ProductDetailPage from "./pages/main/ProductDetailPage/ProductDetail";
import OrderPage from "./pages/user/Cart/order/OrderPage";
import CategoryPage from "./pages/main/CategoryPage/CategoryPage";
import PicksPage from "./pages/user/Picks/PicksPage";
import Preparing from "./pages/preparing/Preparing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/product-detail/:productId"
            element={<ProductDetailPage />}
          />
          <Route
            path="/review/:orderId/:productId"
            element={<ReviewUpdatePage />}
          />
          <Route path="/review/edit" element={<ReviewEditPage />} />
          <Route path="/review/management" element={<MyReviewPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
          <Route path="/order/:orderId" element={<OrderPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/picks" element={<PicksPage />} />
          <Route path="/preparing" element={<Preparing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
