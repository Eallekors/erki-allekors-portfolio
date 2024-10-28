import React from 'react';
import { motion } from 'framer-motion';

const SlideInSection = ({ children, direction }) => {
  const variants = {
    hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Trigger the animation when 20% of the element is in view
      variants={variants}
      transition={{ duration: 0.5 }} // Duration of the animation
      className="slide-in-section" // Add custom class for additional styling if needed
    >
      {children}
    </motion.div>
  );
};

export default SlideInSection;