import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <motion.h1
        className="hero-title"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        🎉 18 Not Out! 🎂
      </motion.h1>

      <motion.p
        className="hero-subtext"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Celebrating the ultimate all-rounder — cricket queen, skating champ, and a sports star in the making 💪
      </motion.p>

      <motion.button
        className="hero-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        View Her Journey 🚀
      </motion.button>
    </section>
  );
};

export default Hero;
