import React from 'react';
import { motion } from 'framer-motion';

type AnimatedBackgroundProp = {
  isDarkTheme: boolean;
};

const AnimatedBackground: React.FC<AnimatedBackgroundProp> = ({
  isDarkTheme,
}) => {
  const CIRCLE_COUNT = 50;
  const MIN_SIZE = 2;
  const MAX_SIZE_VARIATION = 3;
  const MAX_POSITION = 100;
  const MIN_DURATION = 1;
  const MAX_DURATION_VARIATION = 2;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(CIRCLE_COUNT)].map((_, i) => {
        const size: number = Math.random() * MAX_SIZE_VARIATION + MIN_SIZE;
        const top = `${Math.random() * MAX_POSITION}%`;
        const left = `${Math.random() * MAX_POSITION}%`;
        const duration: number =
          Math.random() * MAX_DURATION_VARIATION + MIN_DURATION;

        const circleColor = isDarkTheme
          ? 'bg-white opacity-80'
          : 'bg-sky-400 opacity-50';

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${circleColor}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top,
              left,
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration, repeat: Infinity }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedBackground;
