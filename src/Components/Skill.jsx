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
    icon: (
      <svg className="w-12 h-12 text-green-500" viewBox="0 0 100 100" fill="currentColor">
        <path d="M10 20h20v10H10zm0 25h35v10H10zm0 25h50v10H10z" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
      </svg>
    ) 
  }
];

export default function Skill() {
  // Split the skills into two rows
  const firstRow = skills.slice(0, 5);
  const secondRow = skills.slice(5, 10);

  // Reusable configuration for infinite linear animation
  const marqueeTransition = {
    ease: "linear",
    duration: 20, // Adjust this number to make it faster (lower) or slower (higher)
    repeat: Infinity,
  };

  // Reusable card component to clean up the code
  const SkillCard = ({ skill }) => (
    <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 cursor-default group transition-all duration-200 min-w-[160px] sm:min-w-[200px] flex-shrink-0">
      <div className="text-5xl mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {skill.icon}
      </div>
      <span className="font-bold text-sm text-gray-700 dark:text-gray-300 tracking-wide text-center">
        {skill.name}
      </span>
    </div>
  );

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

        {/* Endless Track Container */}
        <div className="flex flex-col gap-8 overflow-hidden relative">
          
          {/* Row 1: Left to Right Marquee */}
          <div className="flex w-full overflow-hidden mask-gradient">
            <motion.div 
              className="flex gap-6 pr-6"
              animate={{ x: [ "-100%", "0%" ] }} // Moves rightward continuously
              transition={marqueeTransition}
            >
              {/* Render original list + duplicated list for seamless looping */}
              {[...firstRow, ...firstRow, ...firstRow].map((skill, index) => (
                <SkillCard key={`row1-${index}`} skill={skill} />
              ))}
            </motion.div>
          </div>

          {/* Row 2: Right to Left Marquee */}
          <div className="flex w-full overflow-hidden mask-gradient">
            <motion.div 
              className="flex gap-6 pr-6"
              animate={{ x: [ "0%", "-100%" ] }} // Moves leftward continuously
              transition={marqueeTransition}
            >
              {/* Render original list + duplicated list for seamless looping */}
              {[...secondRow, ...secondRow, ...secondRow].map((skill, index) => (
                <SkillCard key={`row2-${index}`} skill={skill} />
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}