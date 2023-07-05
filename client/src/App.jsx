import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/main/HomePage";
import ProductsPage from "./pages/main/ProductsPage";
import LoginPage from "./pages/user/sign/login/LoginPage";
import SignUpPage from "./pages/user/sign/signUp/SignUpPage";
import CartPage from "./pages/user/Cart/CartPage";
import GlobalStyle from "./GlobalStyle";

// Header, Footer 구현하기 쉽도록 넣어 둠 >> 1차 머지 후, 삭제 예정
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
          <Route path="/cart" element={<CartPage />} />
          {/* Header, Footer 구현하기 쉽도록 넣어 둠 >> 1치 머지 후, 삭제 예정 */}
          <Route path="/header" element={<Header />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
