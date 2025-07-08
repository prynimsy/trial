import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Donate } from "./pages/Donate";
import { About } from "./pages/About";
import { Impact } from "./pages/Impact";
import { ProductDetail } from "./pages/ProductDetail";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { Checkout } from "./pages/Checkout";

export const App = (): JSX.Element => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#fdf9f9] flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<About />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};