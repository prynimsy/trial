import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, MapPin, Calendar, Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const Donate = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    clothingTypes: [] as string[],
    quantity: "",
    pickupDate: "",
    specialInstructions: ""
  });

  const clothingOptions = [
    "Shirts & Tops",
    "Pants & Jeans",
    "Dresses & Skirts",
    "Traditional Wear",
    "Jackets & Coats",
    "Accessories",
    "Home Textiles",
    "Others"
  ];

  const handleClothingTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      clothingTypes: prev.clothingTypes.includes(type)
        ? prev.clothingTypes.filter(t => t !== type)
        : [...prev.clothingTypes, type]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Donation request submitted:", formData);
  };

  const impactStats = [
    { value: "50,000+", label: "Items Donated", icon: "👕" },
    { value: "2,500+", label: "Artisans Supported", icon: "👥" },
    { value: "25 Tons", label: "Waste Diverted", icon: "♻️" },
    { value: "15,000+", label: "New Products Created", icon: "✨" }
  ];

  return (
    <div className="min-h-screen bg-[#fdf9f9]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#2e3155] to-[#4a4d7a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-['Bebas_Neue'] text-5xl md:text-6xl mb-4"
          >
            Give Your Clothes A New Life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Kameron'] text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Transform your unused clothing into beautiful, sustainable fashion while supporting skilled artisans across India
          </motion.p>
          
          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="font-['Bebas_Neue'] text-3xl text-[#ffdff9]">
                  {stat.value}
                </div>
                <div className="font-['Kameron'] text-sm text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="shadow-2xl border-0 rounded-3xl overflow-hidden">
              <div className="bg-[#ffdff9] p-6">
                <h2 className="font-['Bebas_Neue'] text-3xl text-[#2e3155] mb-2">
                  Schedule Your Donation Pickup
                </h2>
                <p className="font-['Kameron'] text-gray-700">
                  Fill out the form below and we'll arrange a convenient pickup time
                </p>
              </div>
              
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['Kameron'] font-medium text-[#2e3155] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-['Kameron'] font-medium text-[#2e3155] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-['Kameron'] font-medium text-[#2e3155] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Address Information */}
                  <div>
                    <label className="block font-['Kameron'] font-medium text-[#2e3155] mb-2">
                      Pickup Address *
                    </label>
                    <textarea
                      required
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors"
                      rows={3}
                      placeholder="Enter your complete address"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['Kameron'] font-medium text-[#2e3155] mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors"
                        placeholder="Mumbai"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-['Kameron'] font-medium text-[#2e3155] mb-2">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.pincode}
                        onChange={(e) => setFormData(prev => ({ ...prev, pincode: e.target.value }))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors"
                        placeholder="400001"
                      />
                    </div>
                  </div>

                  {/* Clothing Types */}
                  <div>
                    <label className="block font-['Kameron'] font-medium text-[#2e3155] mb-3">
                      Types of Clothing to Donate *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {clothingOptions.map((option) => (
                        <label key={option} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.clothingTypes.includes(option)}
                            onChange={() => handleClothingTypeChange(option)}
                            className="rounded border-gray-300 text-[#2e3155] focus:ring-[#ffdff9]"
                          />
                          <span className="font-['Kameron'] text-sm text-gray-700">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['Kameron'] font-medium text-[#2e3155] mb-2">
                        Approximate Quantity
                      </label>
                      <select
                        value={formData.quantity}
                        onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors"
                      >
                        <option value="">Select quantity</option>
                        <option value="1-5">1-5 items</option>
                        <option value="6-15">6-15 items</option>
                        <option value="16-30">16-30 items</option>
                        <option value="30+">30+ items</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block font-['Kameron'] font-medium text-[#2e3155] mb-2">
                        Preferred Pickup Date
                      </label>
                      <input
                        type="date"
                        value={formData.pickupDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, pickupDate: e.target.value }))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-['Kameron'] font-medium text-[#2e3155] mb-2">
                      Special Instructions
                    </label>
                    <textarea
                      value={formData.specialInstructions}
                      onChange={(e) => setFormData(prev => ({ ...prev, specialInstructions: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155] transition-colors"
                      rows={3}
                      placeholder="Any specific instructions for pickup or special items to mention..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-[50px] bg-[#2e3155] hover:bg-[#2e3155]/90 text-white rounded-full font-['Bebas_Neue'] text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Schedule Pickup
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            {/* What We Accept */}
            <Card className="shadow-lg border-0 rounded-2xl overflow-hidden">
              <div className="bg-green-500 p-6">
                <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-2">
                  What We Accept
                </h3>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Clean clothing items",
                    "Fabric scraps & remnants",
                    "Old bed sheets & curtains",
                    "Damaged clothes (for fabric)",
                    "Traditional wear",
                    "Accessories & bags",
                    "Home textiles",
                    "Yarn & threads"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="font-['Kameron'] text-sm text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="shadow-lg border-0 rounded-2xl overflow-hidden">
              <div className="bg-[#ffdff9] p-6">
                <h3 className="font-['Bebas_Neue'] text-2xl text-[#2e3155] mb-2">
                  How It Works
                </h3>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Submit Request",
                      description: "Fill out the donation form with your details and preferred pickup time."
                    },
                    {
                      step: "2",
                      title: "Confirmation Call",
                      description: "Our team will call you within 24 hours to confirm pickup details."
                    },
                    {
                      step: "3",
                      title: "Free Pickup",
                      description: "We'll collect your donations from your doorstep at no cost to you."
                    },
                    {
                      step: "4",
                      title: "Transformation",
                      description: "Skilled artisans will upcycle your donations into beautiful new products."
                    },
                    {
                      step: "5",
                      title: "Track Impact",
                      description: "Receive updates on how your donation is making a difference."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="w-8 h-8 bg-[#2e3155] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-['Kameron'] font-semibold text-[#2e3155] mb-1">
                          {item.title}
                        </h4>
                        <p className="font-['Kameron'] text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-lg border-0 rounded-2xl overflow-hidden">
              <div className="bg-[#2e3155] p-6">
                <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-2">
                  Need Help?
                </h3>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#2e3155]" />
                    <div>
                      <p className="font-['Kameron'] font-medium text-[#2e3155]">
                        Call Us
                      </p>
                      <p className="font-['Kameron'] text-sm text-gray-600">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#2e3155]" />
                    <div>
                      <p className="font-['Kameron'] font-medium text-[#2e3155]">
                        Email Us
                      </p>
                      <p className="font-['Kameron'] text-sm text-gray-600">
                        donate@navarupa.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#2e3155] mt-0.5" />
                    <div>
                      <p className="font-['Kameron'] font-medium text-[#2e3155]">
                        Service Areas
                      </p>
                      <p className="font-['Kameron'] text-sm text-gray-600">
                        Mumbai, Delhi, Bangalore, Chennai, Pune, Hyderabad
                      </p>
                    </div>
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