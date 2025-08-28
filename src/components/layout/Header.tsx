import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchIcon, ShoppingBag, Menu, X, Heart } from "lucide-react";
import { useCart } from "../../contexts/CartContext";
import { Button } from "../ui/button";
import { SearchModal } from "../SearchModal";
import { motion, AnimatePresence } from "framer-motion";

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const location = useLocation();
  const { getCartItemsCount, getWishlistCount } = useCart();

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Shop", href: "/shop" },
    { text: "Donate", href: "/donate" },
    { text: "About", href: "/about" },
    { text: "Impact", href: "/impact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="relative w-full bg-[#fdf9f9] z-50">
      {/* Promotional banner */}
      <AnimatePresence>
        {isBannerVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 63 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-[#ffdff9] flex items-center justify-center relative overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <p className="font-['Kameron'] font-normal text-[#2e3155] text-lg md:text-xl">
                🌱 Join the sustainable fashion revolution - Get 20% off your first purchase
              </p>
            </motion.div>
            <button 
              onClick={() => setIsBannerVisible(false)}
              className="absolute right-4 p-2 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Close promotional banner"
            >
              <X className="w-4 h-4 text-[#2e3155]" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo and Actions Section */}
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-6 border-b border-[#2e3155]/10">
        {/* Mobile menu button - Left side */}
        <div className="lg:hidden w-12">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-[#ffdff9]/50 rounded-full transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#2e3155]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2e3155]" />
            )}
          </button>
        </div>

        {/* Centered Logo */}
        <div className="flex-1 flex justify-center lg:flex-none">
          <Link to="/" className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              {/* SVG Logo */}
              <img
                src="/navarupa-logo.svg"
                alt="NavaRupa"
                className="h-10 md:h-12 lg:h-14 w-auto group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Flower icon positioned slightly up and to the right */}
              <div className="relative ml-2">
                <img
                  src="/flower-icon.svg"
                  alt="Flower decoration"
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 -translate-y-1 group-hover:rotate-12 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </Link>
        </div>
          
          <button className="p-2 hover:bg-[#ffdff9]/50 rounded-full transition-colors relative">
            <Heart className="w-5 h-5 text-[#2e3155]" />
            {getWishlistCount() > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff6b6b] text-white text-xs rounded-full flex items-center justify-center">
                {getWishlistCount()}
              </span>
            )}
          </button>

          <Link to="/wishlist">
            <button className="p-2 hover:bg-[#ffdff9]/50 rounded-full transition-colors relative">
              <Heart className="w-5 h-5 text-[#2e3155]" />
              {getWishlistCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff6b6b] text-white text-xs rounded-full flex items-center justify-center">
                  {getWishlistCount()}
                </span>
              )}
            </button>
          </Link>

          <Link to="/cart">
            <button className="p-2 hover:bg-[#ffdff9]/50 rounded-full transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-[#2e3155]" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#2e3155] text-white text-xs rounded-full flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </button>
          </Link>
          <Button
            variant="outline"
            className="hidden md:flex h-[40px] px-6 rounded-full border-2 border-[#2e3155] hover:bg-[#2e3155] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link to="/login">
              <span className="font-['Kameron'] font-medium text-sm">
                Login
              </span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="hidden lg:flex justify-center px-4 md:px-8 lg:px-16 py-4">
        <nav className="flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={`font-['Kameron'] font-normal text-lg transition-all duration-300 relative group ${
                isActive(link.href)
                  ? "text-[#2e3155] font-semibold"
                  : "text-[#2e3155]/70 hover:text-[#2e3155]"
              }`}
            >
              {link.text}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#2e3155] transition-all duration-300 ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#fdf9f9] border-b border-[#2e3155]/10 shadow-lg"
          >
            <nav className="flex flex-col p-4 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-['Kameron'] font-normal text-lg py-2 px-4 rounded-lg transition-all duration-300 ${
                    isActive(link.href)
                      ? "text-[#2e3155] bg-[#ffdff9]/50 font-semibold"
                      : "text-[#2e3155]/70 hover:text-[#2e3155] hover:bg-[#ffdff9]/30"
                  }`}
                >
                  {link.text}
                </Link>
              ))}
              <Button asChild className="mt-4 w-full h-[40px] bg-[#2e3155] hover:bg-[#2e3155]/90 text-white rounded-full">
                <Link to="/login">
                  Login
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};