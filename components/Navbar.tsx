"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl md:text-3xl font-display font-bold text-warm-brown">
              Delight Bakery
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-gray-700 hover:text-warm-brown transition-colors duration-200 font-medium">
                {link.name}
              </Link>
            ))}
            <Link
              href="/menu"
              className="bg-pastel-pink text-warm-brown px-6 py-2.5 rounded-full hover:bg-pink-200 transition-colors duration-200 font-semibold">
              Order Online
            </Link>
            <a
              href="tel:+919928370227"
              className="flex items-center space-x-2 bg-warm-brown text-white px-6 py-2.5 rounded-full hover:bg-dark-brown transition-colors duration-200 font-semibold">
              <FaPhone className="text-sm" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-warm-brown focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-warm-brown transition-colors duration-200 font-medium py-2">
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+919928370227"
              className="flex items-center justify-center space-x-2 bg-warm-brown text-white px-6 py-3 rounded-full hover:bg-dark-brown transition-colors duration-200 mt-4">
              <FaPhone className="text-sm" />
              <span>Call Now</span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
