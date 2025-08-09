import React from 'react';
import { motion } from 'framer-motion';

function SportsList() {
  const sports = ['🏏 Cricket', '🛼 Roll Ball', '🏃 Running', '🚴 Cycling', '🏊 Swimming'];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="sports-section"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h2>Featured Sports</h2>
      <ul>
        {sports.map((sport, idx) => (
          <motion.li key={idx} variants={item}>
            {sport}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}

export default SportsList;
