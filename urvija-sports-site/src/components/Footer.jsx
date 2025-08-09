import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <p>Made with 💙 for Urvija's 18th</p>
    </motion.footer>
  );
}

export default Footer;
