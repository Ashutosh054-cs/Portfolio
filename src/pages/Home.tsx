import React from 'react';
import { motion } from 'framer-motion';

const AnimatedName: React.FC = () => {
  const firstName = "Ashutosh";
  const lastName = "Pradhan";

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.08,
        type: "spring",
        stiffness: 500,
        damping: 20,
        bounce: 0.4
      }
    }),
    hover: {
      y: -8,
      scale: 1.1,
      textShadow: "0 0 25px rgba(255, 255, 255, 0.9), 0 0 50px rgba(255, 255, 255, 0.6)",
      filter: "brightness(1.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <div className="name-hover">
      <motion.h1 
        className="text-6xl md:text-9xl font-light mb-8 tracking-wider leading-none text-center"
        style={{ 
          fontFamily: '"Sora", sans-serif'
        }}
      >
        <div className="block">
          {firstName.split('').map((letter, index) => (
            <motion.span
              key={`first-${index}`}
              className="inline-block name-hover cursor-pointer"
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={index}
              style={{
                transformOrigin: "center bottom"
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <div className="block">
          {lastName.split('').map((letter, index) => (
            <motion.span
              key={`last-${index}`}
              className="inline-block name-hover cursor-pointer"
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={firstName.length + index}
              style={{
                transformOrigin: "center bottom"
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.h1>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      {/* Google Fonts Import */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" 
        rel="stylesheet" 
      />
      
      <motion.div
        className="min-h-screen bg-black text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Background gradient animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <section className="relative min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedName />

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <motion.a
                href="https://github.com/Ashutosh054-cs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/ashutosh-pradhan-38a71731a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.75-2.2 3.6-2.2 3.85 0 4.55 2.53 4.55 5.82V24h-4v-8.2c0-1.95-.03-4.45-2.7-4.45-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://t.me/kingnox99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.999 15.999l-.4 4.001c.6 0 .9-.3 1.2-.6l2.4-2.4 5 3.6c.9.6 1.5.3 1.8-.9l3.3-15.6c.3-1.2-.4-1.7-1.3-1.4L1.5 9.599c-1.2.3-1.2 1.2-.2 1.5l5.4 1.7 12.6-7.8-9.3 10.8z" />
                </svg>
              </motion.a>
            </motion.div>

            
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Home;