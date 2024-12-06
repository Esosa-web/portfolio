import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const generateColors = (index) => {
  const colorSchemes = [
    // Cyberpunk Purple/Blue
    {
      text: "text-white drop-shadow-[0_0_10px_rgba(147,51,234,0.3)]",
      particle: "bg-gradient-to-r from-purple-400 to-blue-500",
      glow: "bg-purple-500/30",
      ring: "border-purple-500/20",
      orb: "bg-gradient-to-r from-purple-400 to-blue-500"
    },
    // Tech Green/Cyan
    {
      text: "text-white drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]",
      particle: "bg-gradient-to-r from-emerald-400 to-cyan-500",
      glow: "bg-emerald-500/30",
      ring: "border-emerald-500/20",
      orb: "bg-gradient-to-r from-emerald-400 to-cyan-500"
    },
    // Future Pink/Purple
    {
      text: "text-white drop-shadow-[0_0_10px_rgba(236,72,153,0.3)]",
      particle: "bg-gradient-to-r from-pink-400 to-purple-500",
      glow: "bg-pink-500/30",
      ring: "border-pink-500/20",
      orb: "bg-gradient-to-r from-pink-400 to-purple-500"
    }
  ];
  return colorSchemes[index % colorSchemes.length];
};

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

// Add this component outside the Home function
const BackgroundParticles = React.memo(() => (
  <div className="absolute inset-0 opacity-30">
    {[...Array(50)].map((_, i) => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const size = Math.random() * 50 + 10;
      const hue = Math.random() * 360;
      
      return (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-screen"
          style={{
            width: size,
            height: size,
            backgroundColor: `hsl(${hue}, 70%, 50%)`,
            filter: 'blur(3px)',
            transform: `translateZ(${Math.random() * -10}px)`,
          }}
          initial={{ 
            x: `${startX}vw`, 
            y: `${startY}vh` 
          }}
          animate={{ 
            x: [`${startX}vw`, `${(startX + 50) % 100}vw`, `${startX}vw`],
            y: [`${startY}vh`, `${(startY + 50) % 100}vh`, `${startY}vh`],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.5, 1]
          }}
        />
      );
    })}
  </div>
));

function Home() {
  const containerRef = useRef(null);

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
  const roles = useMemo(() => [
    "Full Stack Developer",
    "Creative Problem Solver",
    "Tech Enthusiast"
  ], []);
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div ref={containerRef} className="min-h-screen w-full flex items-center justify-center relative overflow-hidden 
                                     bg-gradient-to-br from-gray-900 to-black">
      {/* Enhanced animated background with more interactive particles */}
      <BackgroundParticles />

      <FloatingGradient />

      {/* Main content with enhanced animations */}
      <div className="relative z-10 text-white w-full max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
          className="mb-8 relative group"
        >
          {/* Container for the image and effects */}
          <div className="relative w-36 h-36 mx-auto">
            {/* Rotating gradient border */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
                         rounded-full -z-10"
              animate={{
                rotate: 360,
                scale: [1.05, 1.15, 1.05]
              }}
              transition={{
                rotate: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{ padding: "3px" }}
            />

            {/* Image container - synchronized with outer pulse */}
            <motion.div
              className="w-full h-full rounded-full overflow-hidden relative bg-gray-900
                         border-2 border-white/10 p-1"
              animate={{ 
                scale: [1, 1.05, 1]  // Subtle scale to match outer pulse
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.1 }}  // Increased hover scale for better interaction
            >
              <img
                src="/images/profile.png"
                alt="Esosa"
                className="w-full h-full rounded-full object-cover object-[95%_center]"
              />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0"
                animate={{
                  opacity: [0, 0.3, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Particle effects */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-400 rounded-full"
                initial={{ 
                  x: 0, 
                  y: 0, 
                  scale: 0,
                  opacity: 0 
                }}
                animate={{
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}
          </div>
        </motion.div>

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
          <div className="text-xl text-gray-300 mb-8 leading-relaxed h-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                className="absolute w-full flex justify-center"
                initial={{ 
                  y: 40,
                  opacity: 0,
                  scale: 0.8,
                  filter: "blur(10px)"
                }}
                animate={{ 
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)"
                }}
                exit={{ 
                  y: -40,
                  opacity: 0,
                  scale: 1.2,
                  filter: "blur(10px)"
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <motion.span className={`relative ${generateColors(currentRole).text}`}>
                  {roles[currentRole]}
                  
                  {/* Energy field effect with dynamic colors */}
                  <motion.div
                    className={`absolute -inset-x-8 -inset-y-4 ${generateColors(currentRole).glow} rounded-lg -z-10`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{ 
                      duration: 1.5,
                      ease: "easeOut",
                    }}
                  />
                  
                  {/* Particle burst effect with dynamic colors */}
                  {[...Array(8)].map((_, i) => (
                    <motion.span
                      key={i}
                      className={`absolute w-1 h-1 ${generateColors(currentRole).particle} rounded-full`}
                      initial={{ 
                        opacity: 0,
                        scale: 0,
                        x: 0,
                        y: 0
                      }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: [0, Math.cos(i * (Math.PI / 4)) * 50],
                        y: [0, Math.sin(i * (Math.PI / 4)) * 50]
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                  
                  {/* Energy lines with dynamic colors */}
                  {[...Array(4)].map((_, i) => (
                    <motion.span
                      key={`line-${i}`}
                      className={`absolute inset-0 border ${generateColors(currentRole).ring} rounded-lg`}
                      initial={{ 
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{ 
                        opacity: [0, 0.5, 0],
                        scale: [0.8, 1.2, 1.8],
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                  
                  {/* Glowing orbs with dynamic colors */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`orb-${i}`}
                      className={`absolute w-2 h-2 ${generateColors(currentRole).orb} rounded-full blur-sm`}
                      initial={{ 
                        opacity: 0,
                        x: 0,
                        y: 0,
                      }}
                      animate={{ 
                        opacity: [0, 0.5, 0],
                        x: [0, (i - 1) * 40],
                        y: [0, (Math.random() - 0.5) * 30],
                        scale: [1, 1.5, 0.8],
                      }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.15,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </motion.span>
              </motion.div>
            </AnimatePresence>
            
            {/* Enhanced cursor with dynamic colors */}
            <motion.div
              className="absolute -right-4 top-1/2 -translate-y-1/2"
              animate={{
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <motion.span
                className={`block w-[2px] h-5 ${generateColors(currentRole).particle}`}
                animate={{
                  scaleY: [1, 1.5, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
              />
              <motion.span
                className={`absolute top-0 left-0 w-[2px] h-5 ${generateColors(currentRole).particle} blur-sm`}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </div>

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
              { Icon: FaGithub, url: "https://github.com/Esosa-web", color: "hover:text-purple-400" },
              { Icon: FaLinkedin, url: "https://www.linkedin.com/in/esosa-emwionkpa-0ab5b3326/", color: "hover:text-blue-400" }
            ].map(({ Icon, url, color }, index) => (
              <motion.a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl relative group"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className={`text-white ${color} transition-all duration-300`} />
                <motion.div
                  className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 
                             blur-md transition-all duration-300 -z-10 bg-current"
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