import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, Truck, Shield, CheckCircle } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const Checkout = (): JSX.Element => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    paymentMethod: "card"
  });

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString()}`;
  };

  const getProductPrice = (priceString: string): number => {
    return parseInt(priceString.replace('₹', '').replace(',', ''));
  };

  const subtotal = getCartTotal();
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    setOrderPlaced(true);
    clearCart();
    
    // Redirect to success page after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-[#fdf9f9] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-['Bebas_Neue'] text-4xl text-[#2e3155] mb-4">
            Your cart is empty
          </h1>
          <p className="font-['Kameron'] text-gray-600 mb-8">
            Add some items to your cart before checking out.
          </p>
          <Button asChild className="bg-[#2e3155] hover:bg-[#2e3155]/90">
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#fdf9f9] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h1 className="font-['Bebas_Neue'] text-4xl text-[#2e3155] mb-4">
            Order Placed Successfully!
          </h1>
          <p className="font-['Kameron'] text-gray-600 mb-8">
            Thank you for your purchase! You'll receive a confirmation email shortly.
          </p>
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <p className="font-['Kameron'] text-sm text-green-700">
              🌱 Your purchase supports sustainable fashion and empowers artisans across India.
            </p>
          </div>
          <p className="font-['Kameron'] text-sm text-gray-500">
            Redirecting to homepage...
          </p>
        </motion.div>
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
            to="/cart"
            className="flex items-center space-x-2 text-gray-600 hover:text-[#2e3155] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-['Kameron']">Back to Cart</span>
          </Link>
          
          <h1 className="font-['Bebas_Neue'] text-4xl text-[#2e3155]">
            Checkout
          </h1>
          
          <div></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="shadow-2xl border-0 rounded-3xl overflow-hidden">
              <div className="bg-[#ffdff9] p-6">
                <h2 className="font-['Bebas_Neue'] text-2xl text-[#2e3155]">
                  Shipping & Payment
                </h2>
              </div>
              
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="font-['Kameron'] font-semibold text-[#2e3155] mb-4">
                      Contact Information
                    </h3>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors"
                      placeholder="Email address"
                    />
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <h3 className="font-['Kameron'] font-semibold text-[#2e3155] mb-4">
                      Shipping Address
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors"
                        placeholder="First name"
                      />
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors"
                        placeholder="Last name"
                      />
                    </div>
                    
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors mb-4"
                      placeholder="Address"
                    />
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors"
                        placeholder="City"
                      />
                      <input
                        type="text"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors"
                        placeholder="State"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="pincode"
                        required
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors"
                        placeholder="PIN code"
                      />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h3 className="font-['Kameron'] font-semibold text-[#2e3155] mb-4">
                      Payment Method
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === "card"}
                          onChange={handleInputChange}
                          className="text-[#2e3155]"
                        />
                        <CreditCard className="w-5 h-5 text-[#2e3155]" />
                        <span className="font-['Kameron']">Credit/Debit Card</span>
                      </label>
                      
                      <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="upi"
                          checked={formData.paymentMethod === "upi"}
                          onChange={handleInputChange}
                          className="text-[#2e3155]"
                        />
                        <div className="w-5 h-5 bg-[#2e3155] rounded text-white text-xs flex items-center justify-center font-bold">
                          U
                        </div>
                        <span className="font-['Kameron']">UPI Payment</span>
                      </label>
                      
                      <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.paymentMethod === "cod"}
                          onChange={handleInputChange}
                          className="text-[#2e3155]"
                        />
                        <Truck className="w-5 h-5 text-[#2e3155]" />
                        <span className="font-['Kameron']">Cash on Delivery</span>
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full h-[50px] bg-[#2e3155] hover:bg-[#2e3155]/90 text-white rounded-full font-['Bebas_Neue'] text-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing Order...</span>
                      </div>
                    ) : (
                      `Complete Order • ${formatPrice(total)}`
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Order Items */}
            <Card className="shadow-lg border-0 rounded-2xl overflow-hidden">
              <div className="bg-[#ffdff9] p-6">
                <h3 className="font-['Bebas_Neue'] text-2xl text-[#2e3155]">
                  Order Summary
                </h3>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={`${item.product.id}-${item.selectedSize}`} className="flex space-x-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-['Kameron'] font-semibold text-[#2e3155]">
                          {item.product.name}
                        </h4>
                        <p className="font-['Kameron'] text-sm text-gray-600">
                          Qty: {item.quantity} {item.selectedSize && `• Size: ${item.selectedSize}`}
                        </p>
                        <p className="font-['Kameron'] font-bold text-[#2e3155]">
                          {formatPrice(getProductPrice(item.product.price) * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3 border-t pt-4">
                  <div className="flex justify-between">
                    <span className="font-['Kameron'] text-gray-600">Subtotal</span>
                    <span className="font-['Kameron'] font-semibold">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-['Kameron'] text-gray-600">Shipping</span>
                    <span className="font-['Kameron'] font-semibold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-['Kameron'] text-gray-600">Tax (18%)</span>
                    <span className="font-['Kameron'] font-semibold">{formatPrice(tax)}</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-['Bebas_Neue'] text-xl text-[#2e3155]">Total</span>
                    <span className="font-['Bebas_Neue'] text-2xl text-[#2e3155]">{formatPrice(total)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card className="shadow-lg border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="font-['Kameron'] text-sm text-gray-700">
                      Secure 256-bit SSL encryption
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="w-5 h-5 text-blue-600" />
                    <span className="font-['Kameron'] text-sm text-gray-700">
                      Free shipping on all orders
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="font-['Kameron'] text-sm text-gray-700">
                      30-day return guarantee
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};