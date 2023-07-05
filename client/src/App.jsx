import { BrowserRouter, Route, Routes } from "react-router-dom";
//import HomePage from "./pages/main/HomePage";
import ProductsPage from "./pages/main/ProductsPage";
import LoginPage from "./pages/user/sign/login/LoginPage";
import SignUpPage from "./pages/user/sign/signUp/SignUpPage";
import CartPage from "./pages/user/Cart/CartPage";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<ProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
