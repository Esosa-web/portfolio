import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiDjango, SiExpress, SiJavascript, SiMapbox } from 'react-icons/si';

const FloatingGradient = () => (
  <motion.div
    className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-pink-500/5 to-blue-500/5"
    animate={{
      background: [
        "radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)",
        "radial-gradient(circle at 100% 100%, rgba(219, 39, 119, 0.05) 0%, transparent 50%)",
        "radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)",
      ],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

const ParticlesBackground = () => (
  <div className="absolute inset-0 opacity-30">
    {[...Array(30)].map((_, i) => (
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
          width: `${Math.random() * 30 + 5}px`,
          height: `${Math.random() * 30 + 5}px`,
          backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
          filter: 'blur(3px)',
        }}
      />
    ))}
  </div>
);

function Projects() {
  const techIcons = {
    React: <FaReact className="text-[#61DAFB]" />,
    TypeScript: <SiTypescript className="text-[#3178C6]" />,
    Python: <FaPython className="text-[#3776AB]" />,
    Django: <SiDjango className="text-[#092E20]" />,
    Express: <SiExpress className="text-white" />,
    JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
    HTML: <FaHtml5 className="text-[#E34F26]" />,
    CSS: <FaCss3Alt className="text-[#1572B6]" />,
    "Node.js": <FaNode className="text-[#339933]" />,
    "Mapbox API": <SiMapbox className="text-[#4264FB]" />
  };

  const projects = [
    {
      title: "Battleships",
      description: "A classic naval combat game reimagined for the web. This interactive Battleships implementation features both single-player and two-player modes, allowing users to either challenge an AI opponent or engage in tactical warfare with friends. Built with pure JavaScript, it delivers an engaging gaming experience with intuitive controls and strategic gameplay.",
      image: "/projects/game-project.png",
      techStack: ["JavaScript", "HTML", "CSS"],
      liveDemo: "https://your-game-url.com",
      github: "https://github.com/Esosa-web/battleships",
      highlights: [
        "Implemented both single-player AI and two-player modes",
        "Built with vanilla JavaScript for optimal performance",
        "Created responsive design for cross-device gameplay"
      ],
      startDate: "Aug 2023",
      endDate: "Aug 2023",
      status: "Completed"
    },
    {
      title: "BrewBuddy",
      description: "A React-powered brewery discovery platform that connects users with breweries worldwide. Leveraging the Open Brewery DB API and Mapbox integration, BrewBuddy offers an interactive experience for exploring and tracking favorite breweries with precise location mapping.",
      image: "/projects/BrewBuddy.png",
      techStack: ["React", "JavaScript", "Mapbox API", "Open Brewery DB API", "CSS"],
      liveDemo: "https://your-brewbuddy-url.com",
      github: "https://github.com/Esosa-web/brewbuddy",
      highlights: [
        "Integrated Open Brewery DB API for comprehensive brewery data",
        "Implemented interactive maps using Mapbox for location visualization",
        "Built favorites system for personalized brewery tracking",
        "Created responsive design for seamless mobile and desktop use"
      ],
      startDate: "Aug 2023",
      endDate: "Sep 2023",
      status: "Completed"
    },
    {
      title: "ElevenSim",
      description: "A TypeScript-powered football simulation game inspired by Inazuma Eleven. This unique simulator allows users to pick from a curated selection of teams and simulate matches with custom game logic. The highlight feature is the tournament mode, where users can organize and simulate entire competitions.",
      image: "/projects/ElevenSim.png",
      techStack: ["TypeScript", "React", "Express", "Node.js", "CSS"],
      liveDemo: "https://your-elevensim-url.com",
      github: "https://github.com/Esosa-web/elevensim",
      highlights: [
        "Developed comprehensive tournament system with bracket progression",
        "Implemented custom game logic for realistic match simulations",
        "Built with TypeScript for enhanced code reliability",
        "Created interactive team selection and match visualization"
      ],
      startDate: "Sep 2023",
      endDate: "Oct 2023",
      status: "In Development"
    },
    {
      title: "TaskMaster",
      description: "A streamlined task management application that helps users organize their workflow efficiently. Built with Django and React, TaskMaster offers intuitive task creation and category-based organization, making project and personal task management seamless and effective.",
      image: "/projects/Taskmaster.png",
      techStack: ["React", "Python", "Django", "JavaScript", "CSS"],
      liveDemo: "https://your-taskmaster-url.com",
      github: "https://github.com/Esosa-web/taskmaster",
      highlights: [
        "Implemented category-based task organization system",
        "Built RESTful API with Django for robust backend functionality",
        "Created intuitive UI with React for smooth user experience",
        "Designed responsive interface for cross-device task management"
      ],
      startDate: "Oct 2023",
      endDate: "Oct 2023",
      status: "Completed"
    }
  ];

  // Add scroll animation to project cards
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariant = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.25,
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-20 px-4 
                    overflow-hidden relative">
      <ParticlesBackground />
      <FloatingGradient />
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                       bg-clip-text text-transparent inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            My Projects
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and learning experience.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariant}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden group 
                         hover:bg-white/10 transition-all duration-300 
                         hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Project Image - enhanced gradient */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 
                             transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                                opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute -top-2 -right-2 rotate-12 transform hover:rotate-0 
                                transition-all duration-300 hover:scale-110 z-10">
                  <div className={`
                    relative flex items-center gap-2 
                    before:absolute before:inset-0 before:bg-black/60 before:blur-md before:-z-10
                  `}>
                    <div className={`
                      px-4 py-1.5 
                      bg-gradient-to-r 
                      ${project.status === "Completed" 
                        ? "from-green-500/20 to-green-500/10 text-green-300" 
                        : project.status === "In Development"
                        ? "from-yellow-500/20 to-yellow-500/10 text-yellow-300"
                        : "from-blue-500/20 to-blue-500/10 text-blue-300"}
                      backdrop-blur-sm
                      shadow-lg
                      flex items-center gap-2
                      text-xs font-medium
                      rounded-full
                      border border-white/5
                      hover:border-white/20
                      transition-all duration-300
                    `}>
                      <span className={`
                        w-1.5 h-1.5 rounded-full
                        ${project.status === "Completed" 
                          ? "bg-green-400 animate-pulse" 
                          : project.status === "In Development"
                          ? "bg-yellow-400 animate-pulse"
                          : "bg-blue-400 animate-pulse"}
                      `}/>
                      {project.status}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 
                              bg-clip-text text-transparent">{project.title}</h3>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-3 text-sm mb-4 
                             bg-gradient-to-r from-white/5 via-white/10 to-white/5 
                             bg-[length:200%_100%] animate-shimmer
                             rounded-full px-4 py-2 hover:bg-white/10 
                             transition-all duration-300 group/timeline w-fit
                             hover:shadow-lg hover:shadow-purple-500/10"
                >
                  {/* Start Date */}
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full 
                                    group-hover/timeline:animate-ping duration-300"></span>
                    <span className="text-gray-400 group-hover/timeline:text-white transition-colors">
                      {project.startDate}
                    </span>
                  </div>

                  {/* Arrow Animation */}
                  <div className="flex space-x-0.5">
                    {[...Array(3)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-purple-500"
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: i * 0.2
                        }}
                      >
                        →
                      </motion.span>
                    ))}
                  </div>

                  {/* End Date */}
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 group-hover/timeline:text-white transition-colors">
                      {project.endDate}
                    </span>
                    {project.endDate === "Present" && (
                      <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                    )}
                  </div>
                </motion.div>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tech Stack - enhanced badges */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="p-2 bg-white/5 rounded-lg hover:bg-white/10 
                                 transform hover:scale-110 transition-all duration-300 
                                 group cursor-pointer relative flex items-center gap-2"
                    >
                      {techIcons[tech]}
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {tech}
                      </span>
                    </span>
                  ))}
                </div>

                {/* Key Highlights - enhanced bullets */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start space-x-2 group/item">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 
                                      group-hover/item:scale-125 transition-transform duration-300"></span>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Links - enhanced buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-white/80 hover:text-white 
                               px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 
                               transition-all duration-300 relative group"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-purple-500/20 opacity-0 
                                 group-hover:opacity-100 blur transition-all duration-300"
                    />
                    <FaGithub className="text-xl relative z-10" />
                    <span className="relative z-10">View Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-white/80 hover:text-white 
                               px-4 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 
                               transition-all duration-300 relative group"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-blue-500/20 opacity-0 
                                 group-hover:opacity-100 blur transition-all duration-300"
                    />
                    <FaExternalLinkAlt className="text-lg relative z-10" />
                    <span className="relative z-10">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;