import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FloatingGradient = () => (
  <motion.div
    className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-pink-500/10 to-blue-500/10"
    animate={{
      background: [
        "radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
        "radial-gradient(circle at 100% 100%, rgba(219, 39, 119, 0.1) 0%, transparent 50%)",
        "radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
      ],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

function Home() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Your existing mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { current: container } = containerRef;
      if (!container) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      container.style.setProperty('--mouse-x', x);
      container.style.setProperty('--mouse-y', y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing animation text
  const roles = ["Full Stack Developer", "Creative Problem Solver", "Tech Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, currentRole, isDeleting]);

  const tick = () => {
    let fullText = roles[currentRole];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(100);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      setDelta(200);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen w-full flex items-center justify-center relative overflow-hidden 
                                     bg-gradient-to-br from-gray-900 to-black">
      {/* Enhanced animated background with more interactive particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${Math.random() * 50 + 10}px`,
              height: `${Math.random() * 50 + 10}px`,
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
              filter: 'blur(3px)',
              transform: `translateZ(${Math.random() * -10}px)`,
            }}
          />
        ))}
      </div>

      <FloatingGradient />

      {/* Main content with enhanced animations */}
      <div className="relative z-10 text-white w-full max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Enhanced wave emoji */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              delay: 0.2 
            }}
            whileHover={{ 
              rotate: [0, -20, 20, -20, 20, 0],
              transition: { duration: 1.5, repeat: Infinity }
            }}
            className="mb-8 cursor-pointer"
          >
            <span className="text-7xl inline-block">👋</span>
          </motion.div>
          
          {/* Enhanced name title */}
          <motion.h1 
            className="text-6xl font-bold mb-6 relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                           bg-clip-text text-transparent relative z-10">
              Hi, I'm Esosa
            </span>
            {/* Sparkle effects */}
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute inline-flex h-2 w-2 rounded-full bg-purple-400"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${10 + i * 20}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
                         blur-xl -z-10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.h1>
          
          {/* Typing animation for roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed h-8"
          >
            <motion.span
              key={text}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="inline-block"
            >
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            </motion.span>
          </motion.div>

          {/* Enhanced description */}
          <motion.p 
            className="text-lg max-w-2xl mx-auto mb-12 relative group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.span
              className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                         rounded-lg blur-lg group-hover:opacity-100 opacity-0 transition-opacity duration-500"
            />
            <span className="relative bg-black/50 backdrop-blur-sm p-6 rounded-lg block">
              Transforming ideas into elegant, user-centric solutions through clean code and innovative design.
            </span>
          </motion.p>

          {/* Enhanced social links */}
          <motion.div 
            className="flex justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { Icon: FaGithub, url: "https://github.com/Esosa-web", gradient: "from-purple-500 to-pink-500" },
              { Icon: FaLinkedin, url: "https://www.linkedin.com/in/esosa-emwionkpa-0ab5b3326/", gradient: "from-blue-500 to-purple-500" }
            ].map(({ Icon, url, gradient }, index) => (
              <motion.a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl relative group"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className={`relative z-10 transition-colors duration-300 
                                 group-hover:bg-gradient-to-r group-hover:${gradient} 
                                 group-hover:bg-clip-text group-hover:text-transparent`} />
                <motion.div
                  className={`absolute -inset-2 bg-gradient-to-r ${gradient} 
                              rounded-full opacity-0 group-hover:opacity-20 blur-md 
                              transition-all duration-300 -z-10`}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex gap-6 justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {/* Your existing buttons with added effects */}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 0.7, 0.3],
          y: [0, 5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-5 h-8 border-2 border-white/20 rounded-full p-1">
          <motion.div
            className="w-1 h-1 bg-white/50 rounded-full mx-auto"
            animate={{
              y: [0, 15, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;