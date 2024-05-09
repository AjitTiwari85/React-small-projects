import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./component/LoginForm";
import SignUp from "./component/SignUp";
import Explore from "./component/Explore";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/*" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
