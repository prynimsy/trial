import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Trash2, Star, ArrowLeft } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const Wishlist = (): JSX.Element => {
  const { 
    wishlistItems, 
    removeFromWishlist, 
    moveToCart,
    isInCart 
  } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#fdf9f9] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Heart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="font-['Bebas_Neue'] text-4xl text-[#2e3155] mb-4">
              Your Wishlist is Empty
            </h1>
            <p className="font-['Kameron'] text-gray-600 mb-8">
              Save your favorite sustainable fashion pieces here for later.
            </p>
            <Button
              asChild
              className="h-[50px] px-8 bg-[#2e3155] hover:bg-[#2e3155]/90 rounded-full"
            >
              <Link to="/shop">
                Explore Products
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
          <Link
            to="/shop"
            className="flex items-center space-x-2 text-gray-600 hover:text-[#2e3155] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-['Kameron']">Continue Shopping</span>
          </Link>
          
          <h1 className="font-['Bebas_Neue'] text-4xl text-[#2e3155]">
            My Wishlist ({wishlistItems.length})
          </h1>
          
          <div></div>
        </motion.div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((item, index) => (
            <motion.div
              key={item.product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Upcycled
                    </div>
                    {item.product.isNew && (
                      <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        New
                      </div>
                    )}
                  </div>

                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => removeFromWishlist(item.product.id)}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-['Kameron'] font-semibold text-[#2e3155] text-lg mb-2">
                    {item.product.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    {item.product.story} • By {item.product.artisan}
                  </p>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(item.product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {item.product.rating} ({item.product.reviews} reviews)
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-[#2e3155] text-xl">
                        {item.product.price}
                      </span>
                      <span className="text-gray-500 text-sm line-through">
                        {item.product.originalPrice}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button
                      onClick={() => moveToCart(item.product.id)}
                      disabled={isInCart(item.product.id)}
                      className="w-full h-[45px] bg-[#2e3155] hover:bg-[#2e3155]/90 rounded-full disabled:opacity-50"
                    >
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      {isInCart(item.product.id) ? "Already in Cart" : "Move to Cart"}
                    </Button>
                    
                    <Button
                      asChild
                      variant="outline"
                      className="w-full h-[40px] border-2 border-[#2e3155] hover:bg-[#2e3155] hover:text-white rounded-full"
                    >
                      <Link to={`/product/${item.product.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-500 text-center">
                    Added on {item.addedAt.toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="h-[50px] px-8 rounded-full border-2 border-[#2e3155] hover:bg-[#2e3155] hover:text-white transition-all duration-300"
          >
            <Link to="/shop">
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};