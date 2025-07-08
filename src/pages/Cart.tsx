import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, Heart, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const Cart = (): JSX.Element => {
  const { 
    cartItems, 
    removeFromCart, 
    updateCartQuantity, 
    getCartTotal, 
    moveToWishlist,
    clearCart 
  } = useCart();

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString()}`;
  };

  const getProductPrice = (priceString: string): number => {
    return parseInt(priceString.replace('₹', '').replace(',', ''));
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#fdf9f9] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="font-['Bebas_Neue'] text-4xl text-[#2e3155] mb-4">
              Your Cart is Empty
            </h1>
            <p className="font-['Kameron'] text-gray-600 mb-8">
              Discover our sustainable fashion collection and add some beautiful pieces to your cart.
            </p>
            <Button
              asChild
              className="h-[50px] px-8 bg-[#2e3155] hover:bg-[#2e3155]/90 rounded-full"
            >
              <Link to="/shop">
                Start Shopping
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdf9f9]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
            <Link
              to="/shop"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#2e3155] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-['Kameron']">Continue Shopping</span>
            </Link>
          </div>
          
          <h1 className="font-['Bebas_Neue'] text-4xl text-[#2e3155]">
            Shopping Cart ({cartItems.length})
          </h1>
          
          <Button
            onClick={clearCart}
            variant="outline"
            className="text-red-600 border-red-600 hover:bg-red-50"
          >
            Clear Cart
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <motion.div
                key={`${item.product.id}-${item.selectedSize}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="shadow-lg border-0 rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-['Kameron'] font-semibold text-[#2e3155] text-lg">
                              {item.product.name}
                            </h3>
                            <p className="font-['Kameron'] text-sm text-gray-600">
                              By {item.product.artisan}
                            </p>
                            {item.selectedSize && (
                              <p className="font-['Kameron'] text-sm text-gray-600">
                                Size: {item.selectedSize}
                              </p>
                            )}
                          </div>
                          
                          <div className="text-right">
                            <div className="font-['Kameron'] font-bold text-[#2e3155] text-lg">
                              {formatPrice(getProductPrice(item.product.price) * item.quantity)}
                            </div>
                            <div className="font-['Kameron'] text-sm text-gray-500">
                              {item.product.price} each
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                              className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            
                            <span className="font-['Kameron'] font-medium text-lg w-8 text-center">
                              {item.quantity}
                            </span>
                            
                            <button
                              onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                              className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button
                              onClick={() => moveToWishlist(item.product.id)}
                              variant="outline"
                              size="sm"
                              className="text-red-600 border-red-600 hover:bg-red-50"
                            >
                              <Heart className="w-4 h-4 mr-1" />
                              Move to Wishlist
                            </Button>
                            
                            <Button
                              onClick={() => removeFromCart(item.product.id)}
                              variant="outline"
                              size="sm"
                              className="text-red-600 border-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-8"
            >
              <Card className="shadow-2xl border-0 rounded-3xl overflow-hidden">
                <div className="bg-[#ffdff9] p-6">
                  <h2 className="font-['Bebas_Neue'] text-2xl text-[#2e3155]">
                    Order Summary
                  </h2>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-['Kameron'] text-gray-600">
                      Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
                    </span>
                    <span className="font-['Kameron'] font-semibold">
                      {formatPrice(getCartTotal())}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-['Kameron'] text-gray-600">Shipping</span>
                    <span className="font-['Kameron'] font-semibold text-green-600">
                      Free
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-['Kameron'] text-gray-600">Tax</span>
                    <span className="font-['Kameron'] font-semibold">
                      {formatPrice(Math.round(getCartTotal() * 0.18))}
                    </span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-['Bebas_Neue'] text-xl text-[#2e3155]">
                        Total
                      </span>
                      <span className="font-['Bebas_Neue'] text-2xl text-[#2e3155]">
                        {formatPrice(getCartTotal() + Math.round(getCartTotal() * 0.18))}
                      </span>
                    </div>
                  </div>
                  
                  <Button
                    asChild
                    className="w-full h-[50px] bg-[#2e3155] hover:bg-[#2e3155]/90 text-white rounded-full font-['Bebas_Neue'] text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link to="/checkout">
                      Proceed to Checkout
                    </Link>
                  </Button>
                  
                  <div className="text-center">
                    <Link
                      to="/shop"
                      className="font-['Kameron'] text-[#2e3155] hover:underline"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};