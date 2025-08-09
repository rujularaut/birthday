import React from 'react';
import { motion } from 'framer-motion';
import './AchievementsTimeline.css';

const achievements = [
  {
    year: "2015",
    title: "First Cricket Tournament 🏏",
    description: "Scored a boundary in her very first match.",
  },
  {
    year: "2017",
    title: "Roll Ball State Champion 🛼",
    description: "Dominated the rink and led the team to victory!",
  },
  {
    year: "2019",
    title: "100m Sprint Gold 🥇",
    description: "Finished in under 13 seconds — lightning speed!",
  },
  {
    year: "2022",
    title: "Half Marathon Runner 👟",
    description: "Completed 21km in record time — powered by Strava!",
  },
  {
    year: "2024",
    title: "Swimming Nationals 🏊‍♀️",
    description: "Top-3 finish in freestyle — no stopping her.",
  },
];

const AchievementsTimeline = () => {
  return (
    <section className="timeline">
      <h2 className="timeline-heading">🏅 Achievements</h2>
      <div className="timeline-container">
        {achievements.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{item.year} — {item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsTimeline;
