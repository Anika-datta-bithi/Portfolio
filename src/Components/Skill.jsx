import React from 'react';
import { motion } from 'framer-motion';
// Only importing completely stable, basic icons from FontAwesome
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaRoute,
  FaCode
} from 'react-icons/fa';
import { 
  SiSwiper, 
  SiPostman 
} from 'react-icons/si';

// Array containing all 10 of your exact skills
const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400 animate-[spin_10s_linear_infinite]" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Javascript", icon: <FaJsSquare className="text-yellow-500" /> },
  { 
    name: "Framer-motion", 
    // Pure inline SVG for Framer Motion — avoids any import errors!
    icon: (
      <svg className="w-12 h-12 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h12l6 6H6zM0 12h18l6 6H6zM0 12h12l6-6H6z" />
      </svg>
    ) 
  },
  { name: "Interactive API", icon: <SiPostman className="text-orange-400" /> },
  { name: "React-router", icon: <FaRoute className="text-red-500" /> },
  { name: "React-icons", icon: <FaCode className="text-pink-500" /> },
  { name: "Swiper", icon: <SiSwiper className="text-blue-400" /> },
  { 
    name: "GSAP", 
    // Pure inline SVG for GSAP Logo — avoids any import errors!
    icon: (
      <svg className="w-12 h-12 text-green-500" viewBox="0 0 100 100" fill="currentColor">
        <path d="M10 20h20v10H10zm0 25h35v10H10zm0 25h50v10H10z" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
      </svg>
    ) 
  }
];

// Animation setup for the entrance effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 14 }
  }
};

export default function Skill() {
  return (
    <section className="py-20 px-4 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white tracking-wide uppercase">
            My Skills
          </h2>
          <div className="h-1 w-16 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 10-Skill Uniform Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.06)"
              }}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 cursor-default group transition-all duration-200"
            >
              {/* Icon Window */}
              <div className="text-5xl mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              
              {/* Skill Name */}
              <span className="font-bold text-sm text-gray-700 dark:text-gray-300 tracking-wide text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}