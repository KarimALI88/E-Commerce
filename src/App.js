import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { CountProvider } from "./context/ItemCountContext";
import "./css/sidebar.css";
import Cart from "./pages/Cart";
import Confirm from "./pages/Confirm";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Offers from "./pages/Offers";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
import Footer from "./shared/Footer";
import NavBar from "./shared/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <CountProvider>
      <AuthProvider>
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="products/:prodId" element={<ProductDetails />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/offers" element={<Offers />} />
          </Routes>
          <Footer />
        </>
      </AuthProvider>
    </CountProvider>
  );
}

export default App;
