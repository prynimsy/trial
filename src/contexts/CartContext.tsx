import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: Date;
}

interface CartContextType {
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  addToCart: (product: Product, quantity?: number, selectedSize?: string) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  isInCart: (productId: number) => boolean;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
  getWishlistCount: () => number;
  clearCart: () => void;
  moveToWishlist: (productId: number) => void;
  moveToCart: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  const getProductPrice = (priceString: string): number => {
    return parseInt(priceString.replace('₹', '').replace(',', ''));
  };

  const addToCart = (product: Product, quantity = 1, selectedSize?: string) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => 
        item.product.id === product.id && item.selectedSize === selectedSize
      );
      
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prev, { product, quantity, selectedSize }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const addToWishlist = (product: Product) => {
    setWishlistItems(prev => {
      const exists = prev.find(item => item.product.id === product.id);
      if (exists) return prev;
      
      return [...prev, { product, addedAt: new Date() }];
    });
  };

  const removeFromWishlist = (productId: number) => {
    setWishlistItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const isInWishlist = (productId: number): boolean => {
    return wishlistItems.some(item => item.product.id === productId);
  };

  const isInCart = (productId: number): boolean => {
    return cartItems.some(item => item.product.id === productId);
  };

  const getCartTotal = (): number => {
    return cartItems.reduce((total, item) => {
      return total + (getProductPrice(item.product.price) * item.quantity);
    }, 0);
  };

  const getCartItemsCount = (): number => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getWishlistCount = (): number => {
    return wishlistItems.length;
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const moveToWishlist = (productId: number) => {
    const cartItem = cartItems.find(item => item.product.id === productId);
    if (cartItem) {
      addToWishlist(cartItem.product);
      removeFromCart(productId);
    }
  };

  const moveToCart = (productId: number) => {
    const wishlistItem = wishlistItems.find(item => item.product.id === productId);
    if (wishlistItem) {
      addToCart(wishlistItem.product);
      removeFromWishlist(productId);
    }
  };

  const value: CartContextType = {
    cartItems,
    wishlistItems,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    isInCart,
    getCartTotal,
    getCartItemsCount,
    getWishlistCount,
    clearCart,
    moveToWishlist,
    moveToCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};