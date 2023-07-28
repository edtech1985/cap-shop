<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import CapsMale from "../pages/Caps/CapsMale";
import CapsFemale from "../pages/Caps/CapsFemale";
import { Main } from "./Routes";
import { CartProvider } from "../components/CartContext";

export default function AppRouter() {
  return (
    <Main>
      <Router>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/caps/male" element={<CapsMale />} />
            <Route path="/caps/female" element={<CapsFemale />} />
          </Routes>
          <Footer />
        </CartProvider>
      </Router>
    </Main>
  );
}
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import CapsMale from "../pages/Caps/CapsMale";
import CapsFemale from "../pages/Caps/CapsFemale";
import { Main } from "./Routes";
import { CartProvider } from "../components/CartContext";

export default function AppRouter() {
  return (
    <Main>
      <Router>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/caps/male" element={<CapsMale />} />
            <Route path="/caps/female" element={<CapsFemale />} />
          </Routes>
          <Footer />
        </CartProvider>
      </Router>
    </Main>
  );
}
>>>>>>> 4b68a1092258c410e9a8e8767c0325f0786973e0
