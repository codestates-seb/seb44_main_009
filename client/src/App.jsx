import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/main/HomePage";
import ProductsPage from "./pages/main/ProductsPage";
import LoginPage from "./pages/user/sign/login/LoginPage";
import SignUpPage from "./pages/user/sign/signUp/SignUpPage";
import GlobalStyle from "./GlobalStyle";
import MyPage from "./pages/user/myPage/myPage/MyPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
