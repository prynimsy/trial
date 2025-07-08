import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = (): JSX.Element => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Impact", href: "/impact" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Size Guide", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#2e3155] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="font-['Samarkan-Regular'] text-3xl text-[#ffdff9] mb-4">
                NavaRupa
              </h3>
              <p className="font-['Kameron'] text-gray-300 text-sm leading-relaxed">
                Reviving style, redefining you. Join us in creating a sustainable future through upcycled fashion and empowered artisans.
              </p>
            </motion.div>
            
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-[#ffdff9]/10 rounded-full flex items-center justify-center hover:bg-[#ffdff9]/20 transition-colors"
                >
                  <Icon className="w-5 h-5 text-[#ffdff9]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-['Kameron'] font-semibold text-lg mb-6 text-[#ffdff9]">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="font-['Kameron'] text-gray-300 hover:text-[#ffdff9] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-['Kameron'] font-semibold text-lg mb-6 text-[#ffdff9]">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="font-['Kameron'] text-gray-300 hover:text-[#ffdff9] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['Kameron'] font-semibold text-lg mb-6 text-[#ffdff9]">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#ffdff9]" />
                <span className="font-['Kameron'] text-gray-300 text-sm">
                  hello@navarupa.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#ffdff9]" />
                <span className="font-['Kameron'] text-gray-300 text-sm">
                  +91 98765 43210
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#ffdff9] mt-0.5" />
                <span className="font-['Kameron'] text-gray-300 text-sm">
                  Mumbai, Maharashtra<br />India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-['Kameron'] text-gray-400 text-sm">
              © 2025 NavaRupa. All rights reserved. Made with ♻️ for a sustainable future.
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="font-['Kameron'] text-gray-400 hover:text-[#ffdff9] transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};