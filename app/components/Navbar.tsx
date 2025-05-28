'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Product", href: "/product" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      {/* Modern Floating Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4"
      >
        <div className="relative">
          {/* Main floating container */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl shadow-black/10 px-6 py-4">
            {/* Gradient overlay for extra depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl"></div>
            
            {/* Content */}
            <div className="relative flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center group cursor-pointer">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm border border-white/30"
                >
                  <Image
                    src="/paapi-logo.png"
                    alt="Paapi Logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                    priority
                  />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-emerald-400/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      className="relative text-gray-700 font-medium text-sm tracking-wide group cursor-pointer"
                      whileHover={{ y: -1 }}
                    >
                      <span className="relative z-10 group-hover:text-emerald-600 transition-colors duration-300">
                        {item.name}
                      </span>
                      
                      {/* Modern underline effect */}
                      <motion.div 
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                      />
                    </motion.div>
                  </Link>
                ))}
                
                {/* CTA Button */}
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2.5 rounded-xl font-medium text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 w-full h-full opacity-0 hover:opacity-100"
                      animate={{
                        background: [
                          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)"
                        ],
                        backgroundPosition: ["-200% 0", "200% 0"]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative z-10">Contact Us</span>
                  </motion.button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <motion.button 
                className="md:hidden relative w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="w-5 h-5 text-gray-700" />
                  ) : (
                    <Menu className="w-5 h-5 text-gray-700" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Floating shadow/glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/10 to-emerald-500/5 rounded-2xl blur-xl -z-10 opacity-60"></div>
        </div>
      </motion.nav>

      {/* Modern Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm mx-4 md:hidden"
            >
              <div className="bg-white/90 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl shadow-black/10 p-6">
                <div className="flex flex-col space-y-6">
                  {navigationItems.map((item, index) => (
                    <Link key={item.name} href={item.href}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                        className="text-lg text-gray-700 font-medium hover:text-emerald-600 transition-colors relative group py-2 cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                        />
                      </motion.div>
                    </Link>
                  ))}
                  
                  <Link href="/contact">
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-emerald-500/25 mt-4 w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 