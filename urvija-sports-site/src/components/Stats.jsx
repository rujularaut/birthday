import React from 'react';
import { motion } from 'framer-motion';

function Stats() {
  return (
    <motion.section
      className="stats-section"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', duration: 0.6 }}
    >
      <h2>Stats</h2>
      <p>6s hit: 2,035</p>
      <p>Speed: ⚡ Flash level</p>
    </motion.section>
  );
}

export default Stats;
