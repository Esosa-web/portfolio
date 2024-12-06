import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNode, FaPython, FaGitAlt, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaCode } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiDjango, SiTypescript } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import { BsKanban } from 'react-icons/bs';
import { TbBrandVscode } from 'react-icons/tb';
import { IoMdPeople } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const SkillCard = ({ skill, index, category }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-3 rounded-xl hover:bg-white/10 
                 transition-all duration-300 cursor-pointer"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 
                    opacity-0 group-hover:opacity-100 rounded-xl blur-xl transition-opacity duration-500" />
      
      {/* Skill content */}
      <div className="relative flex items-center gap-3 z-10">
        <div className="relative">
          <span className="text-2xl transform transition-all duration-300 
                         group-hover:scale-110 inline-block">
            {skill.icon}
          </span>
          {/* Glowing dot */}
          <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full
                         bg-gradient-to-r from-current to-purple-500
                         opacity-0 group-hover:opacity-100 transition-all duration-300
                         animate-pulse" />
        </div>
        
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-300 
                         group-hover:text-white transition-colors">
            {skill.name}
          </span>
          
          {/* Skill proficiency bar */}
          <div className="h-1 w-24 bg-white/10 rounded-full mt-1 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.proficiency || 70}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const JourneyCard = ({ title, content, gradient, icon, delay }) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="bg-gradient-to-br from-white/5 via-white/10 to-white/5 
                 backdrop-blur-lg rounded-2xl p-8 
                 hover:bg-white/10 group
                 transition-all duration-300 transform hover:-translate-y-2
                 hover:shadow-xl hover:shadow-purple-500/10
                 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient}
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
      
      {/* Floating icons background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5"
            initial={{ 
              scale: 0.5, 
              x: Math.random() * 100, 
              y: Math.random() * 100,
              rotate: Math.random() * 360 
            }}
            animate={{ 
              scale: [0.5, 0.8, 0.5],
              x: [null, Math.random() * 200, Math.random() * 100],
              y: [null, Math.random() * 200, Math.random() * 100],
              rotate: 360
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.5
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4 group/title">
          {/* Glowing background effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
                          blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Icon with enhanced animation */}
          <span className="text-2xl relative transform transition-all duration-300 
                         group-hover:scale-110 group-hover:rotate-12">
            {icon}
            <span className="absolute -inset-1 bg-white/20 rounded-full blur-sm 
                           opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>

          {/* Title with multiple effects */}
          <h2 className="text-2xl font-bold relative
                         bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                         bg-clip-text text-transparent
                         transition-all duration-500
                         group-hover:tracking-wider
                         after:absolute after:bottom-0 after:left-0 
                         after:h-[2px] after:w-full
                         after:bg-gradient-to-r after:from-blue-400 after:via-purple-500 after:to-pink-500
                         after:origin-left after:scale-x-0 
                         group-hover:after:scale-x-100
                         after:transition-transform after:duration-500">
            {title}
            
            {/* Floating particles effect */}
            <div className="absolute -inset-2 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * -50 - 20]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </h2>
        </div>
        
        <p className="text-gray-300 leading-relaxed relative z-10 
                     group-hover:text-white transition-colors">
          {content}
        </p>
      </div>
    </motion.div>
  );
};

const InterestCard = ({ title, content, icon, gradient, delay }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 
                 hover:bg-white/10 transition-all duration-300 
                 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10
                 relative overflow-hidden"
    >
      {/* Enhanced gradient background with animation */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0,
          backgroundPosition: "0% 0%"
        }}
        transition={{ duration: 3, repeat: 0 }}
      />
      
      {/* Animated accent lines */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ x: "100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Enhanced floating icons with better positioning */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5"
            initial={{ 
              scale: 0.5, 
              x: Math.random() * 100, 
              y: Math.random() * 100,
              rotate: Math.random() * 360 
            }}
            animate={{ 
              scale: [0.5, 0.8, 0.5],
              x: [null, Math.random() * 200, Math.random() * 100],
              y: [null, Math.random() * 200, Math.random() * 100],
              rotate: 360,
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.5
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Content with enhanced animations */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <motion.span 
            className="text-3xl relative"
            animate={{
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {icon}
            {/* Icon glow effect */}
            <motion.div
              className="absolute inset-0 bg-current rounded-full blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.span>
          
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                       bg-clip-text text-transparent
                       transition-all duration-300
                       group-hover:tracking-wider">
            {title}
          </h3>
        </div>
        
        <div className="space-y-4">
          {content.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0.8 }}
              animate={{ 
                opacity: 1,
                x: 0
              }}
              transition={{ duration: 0.3 }}
              className="text-gray-300 leading-relaxed group-hover:text-white"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const SectionDivider = () => {
  return (
    <motion.div 
      className="relative h-24 my-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 w-px h-full
                   bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-3 h-3 rounded-full bg-purple-500"
        initial={{ scale: 0 }}
        whileInView={{ scale: [0, 1.2, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="absolute inset-0 rounded-full bg-purple-500/50 animate-ping" />
      </motion.div>
    </motion.div>
  );
};

function About() {
  const navigate = useNavigate();
  const skills = [
    { 
      category: "Frontend",
      icon: <FaCode className="text-purple-400" />,
      description: "Building beautiful, responsive user interfaces",
      items: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" />, proficiency: 90 },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, proficiency: 85 },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, proficiency: 80 },
        { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" />, proficiency: 95 },
        { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" />, proficiency: 90 },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#38B2AC]" />, proficiency: 85 }
      ]
    },
    {
      category: "Backend",
      icon: <FaNode className="text-[#339933]" />,
      description: "Building robust, scalable backend systems",
      items: [
        { name: "Node.js", icon: <FaNode className="text-[#339933]" />, proficiency: 90 },
        { name: "Express", icon: <SiExpress className="text-white" />, proficiency: 85 },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" />, proficiency: 95 },
        { name: "Django", icon: <SiDjango className="text-[#092E20]" />, proficiency: 80 },
        { name: "SQL", icon: <SiMysql className="text-[#4479A1]" />, proficiency: 90 },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, proficiency: 85 }
      ]
    },
    {
      category: "Tools",
      icon: <FaGitAlt className="text-[#F05032]" />,
      description: "Utilizing the right tools for the job",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, proficiency: 95 },
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" />, proficiency: 90 },
        { name: "AWS", icon: <FaAws className="text-[#FF9900]" />, proficiency: 85 },
        { name: "VS Code", icon: <TbBrandVscode className="text-[#007ACC]" />, proficiency: 90 }
      ]
    },
    {
      category: "Soft Skills",
      icon: <BiCodeAlt className="text-purple-400" />,
      description: "Essential skills for effective teamwork and communication",
      items: [
        { name: "Problem Solving", icon: <BiCodeAlt className="text-purple-400" />, proficiency: 90 },
        { name: "Team Leadership", icon: <IoMdPeople className="text-blue-400" />, proficiency: 85 },
        { name: "Communication", icon: <IoMdPeople className="text-green-400" />, proficiency: 95 },
        { name: "Agile", icon: <BsKanban className="text-pink-400" />, proficiency: 80 }
      ]
    }
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                       bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            About Me
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Journey & Drive Section */}
        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <JourneyCard
              title="My Journey"
              content="My path into coding started with a simple YouTube tutorial - a six-hour Python crash course that completely hooked me! This spark led me to an internship at Arup, where I got to blend Python with structural and mechanical engineering. After diving deeper into Computer Science during my A-Levels, something just clicked - I knew software development was my calling. It's amazing how a single tutorial can set you on a path that feels so right!"
              gradient="from-purple-500/20 via-pink-500/20 to-transparent"
              icon={<FaCode className="text-purple-400" />}
              delay={0.2}
            />
            
            <JourneyCard
              title="What Drives Me"
              content="What gets me excited about coding is how it combines problem-solving with creativity. Whether I'm building a responsive website or debugging a tricky issue, I love that moment when everything falls into place. My engineering background taught me to approach problems systematically, but it's the creative freedom of coding that really makes me lose track of time. I'm constantly amazed by how a few lines of code can turn an idea into something real and impactful!"
              gradient="from-blue-500/20 via-purple-500/20 to-transparent"
              icon={<BiCodeAlt className="text-blue-400" />}
              delay={0.4}
            />
          </div>
        </AnimatedSection>

        <SectionDivider />

        {/* Skills Section Header */}
        <AnimatedSection delay={0.3}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                         bg-clip-text text-transparent inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Skills & Expertise
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid gap-8 mb-16">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    transition: { delay: index * 0.2 }
                  }
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl">{skillGroup.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 
                                   bg-clip-text text-transparent">
                      {skillGroup.category}
                    </h3>
                    <p className="text-sm text-gray-400">{skillGroup.description}</p>
                  </div>
                </div>

                {/* Skills grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skillGroup.items.map((skill, i) => (
                    <SkillCard 
                      key={skill.name} 
                      skill={skill} 
                      index={i} 
                      category={skillGroup.category}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <SectionDivider />

        {/* Beyond the Code Section */}
        <AnimatedSection delay={0.4}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-16"
          >
            <motion.h2 
              className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                         bg-clip-text text-transparent"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              Beyond the Code
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <InterestCard
                title="Life Beyond Tech"
                content={[
                  "When I'm not crafting code, you'll likely find me on the basketball court! Being tall, I've heard \"You must play basketball, right?\" more times than I can count - and eventually, I decided to embrace it. Turns out, they were onto something - I absolutely love the game now!",
                  "Music is another big part of my life. I find peace at the piano keys, where I can express myself in a completely different way than I do through code. There's something magical about creating melodies that can move people, just like creating applications that can help them."
                ]}
                icon="🏀"
                gradient="from-blue-500/20 via-purple-500/20 to-transparent"
                delay={0.2}
              />

              <InterestCard
                title="Creative Pursuits"
                content={[
                  "My creative outlet? Video editing! I run a social media page where I bring my favorite movies and TV shows to life in a whole new way. Armed with After Effects and Premiere Pro, I love crafting edits that tell stories and evoke emotions.",
                  "This blend of technical skill and creative expression perfectly mirrors my approach to development - it's not just about making things work, it's about making them memorable and meaningful."
                ]}
                icon="🎬"
                gradient="from-purple-500/20 via-pink-500/20 to-transparent"
                delay={0.4}
              />
            </div>
          </motion.div>
        </AnimatedSection>

        <SectionDivider />

        {/* Professional Timeline Section */}
        <AnimatedSection delay={0.5}>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-16"
          >
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 
                           bg-clip-text text-transparent">Professional Journey</h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-purple-500/30 group">
                <motion.div 
                  className="absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 
                             rounded-full -left-[9px] top-0
                             group-hover:scale-150 transition-transform duration-300"
                  whileHover={{ scale: 1.2 }}
                />
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-0 
                                animate-ping opacity-75" />
                <h3 className="text-lg font-semibold text-white group-hover:text-transparent 
                               group-hover:bg-gradient-to-r group-hover:from-blue-400 
                               group-hover:to-purple-500 group-hover:bg-clip-text 
                               transition-all duration-300">
                  Software Engineering Immersive
                </h3>
                <p className="text-gray-400">General Assembly • 2024</p>
                <p className="text-gray-300 mt-2">
                  Completed an intensive 12-week bootcamp focused on full-stack development, 
                  working with modern technologies and best practices in software engineering. 
                  Certificate of completion available on LinkedIn.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Future Goals Section */}
        <AnimatedSection delay={0.6}>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-16"
          >
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 
                           bg-clip-text text-transparent">Looking Forward</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                As I continue to grow in my development journey, I'm excited to expand my expertise 
                into new technologies. My immediate goals include:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Mastering Next.js for building scalable React applications</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Learning Angular to broaden my frontend framework expertise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Securing a position as a Software Engineer where I can contribute and grow</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center pb-16"
        >
          <p className="text-xl text-gray-300 mb-8">
            Want to work together? Let's create something amazing!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 
                     text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 
                     transition-all duration-300"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default About;