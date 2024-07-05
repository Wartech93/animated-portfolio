import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Youtube = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, rotate: 0 });

  useEffect(() => {
    const generateRandomPosition = () => {
      const randomX = (Math.random() - 0.5) * 300; // Random x position between -150 and 150
      const randomY = (Math.random() - 0.5) * 300; // Random y position between -150 and 150
      const randomRotate = (Math.random() - 0.5) * 30; // Random rotation between -15 and 15

      setPosition({
        x: randomX,
        y: randomY,
        rotate: randomRotate,
      });
    };

    const interval = setInterval(generateRandomPosition, 3000); // Change position every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <motion.div
        className='youtube'
        style={styles.box}
        animate={{
          x: position.x,
          y: position.y,
          rotate: position.rotate,
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'transparent',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 15,
    backgroundColor: 'white',
  },
};

export default Youtube;