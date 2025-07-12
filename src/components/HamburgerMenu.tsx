import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center cursor-hover"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <Menu className="w-8 h-8 text-white" />
          )}
        </motion.div>
      </motion.button>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Logo */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.h1
                className="text-2xl font-light tracking-[0.3em] text-white cursor-hover overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 0 }}
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  ASHUZ
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <nav className="space-y-8 mb-16">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`block text-4xl md:text-6xl font-light tracking-wider transition-colors cursor-hover ${
                        location.pathname === item.path
                          ? 'text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.button
                onClick={closeMenu}
                className="px-8 py-3 border border-gray-600 text-gray-400 hover:border-white hover:text-white transition-all duration-300 cursor-hover tracking-wider"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;