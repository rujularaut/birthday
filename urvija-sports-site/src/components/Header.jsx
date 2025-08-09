import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70 }}
    >
      <h1>🏏 Urvija — The All-Rounder!</h1>
      <p>Celebrating 18 Years of Awesomeness</p>
    </motion.header>
  );
}

export default Header;
