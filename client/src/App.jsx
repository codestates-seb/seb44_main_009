import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/main/Home";
import Products from "./pages/main/Products";
import Login from "./pages/user/sign/Login";
import SignUp from "./pages/user/sign/SignUp";

// Header, Footer 구현하기 쉽도록 넣어 둠 >> 1차 머지 후, 삭제 예정
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Header, Footer 구현하기 쉽도록 넣어 둠 >> 1치 머지 후, 삭제 예정 */}
          <Route path="/header" element={<Header />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
