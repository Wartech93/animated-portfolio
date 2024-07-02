import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Socials = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, rotate: 0 });

  useEffect(() => {
    const generateRandomPosition = () => {
      const randomX = (Math.random() - 0.5) * 300; // Random x position between -100 and 100
      const randomY = (Math.random() - 0.5) * 300; // Random y position between -100 and 100
      const randomRotate = (Math.random() - 0.5) * 30; // Random rotation between -10 and 10

      setPosition({
        x: randomX,
        y: randomY,
        rotate: randomRotate,
      });
    };

    const interval = setInterval(generateRandomPosition, 3000); // Change position every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <motion.div
      className='facebook'
        style={styles.box}
        animate={{
          x: position.x,
          y: position.y,
          rotate: position.rotate,
        }}
        transition={{
          duration: 2,
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
    justifyContent: 'start',
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

export default Socials;