import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const Fifty = 50;
  const Three = 3;
  const One_Hundred = 100;
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(Fifty)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-80"
          style={{
            width: `${Math.random() * Three + 2}px`,
            height: `${Math.random() * Three + 2}px`,
            top: `${Math.random() * One_Hundred}%`,
            left: `${Math.random() * One_Hundred}%`,
          }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: Math.random() * 2 + 1, repeat: Infinity }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
