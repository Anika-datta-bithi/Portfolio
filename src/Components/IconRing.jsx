import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { TbBrandFramerMotion } from 'react-icons/tb';

export default function IconRingLogo() {
  // Array of your icons/logos
  const icons = [
    { id: 'react', component: <FaReact className="text-cyan-400" title="React" /> },
    { id: 'framer', component: <TbBrandFramerMotion className="text-pink-500" title="Framer Motion" /> },
    { id: 'swiper', component: <span className="text-[10px] font-black text-blue-500 tracking-tighter" title="Swiper">SW</span> },
    { id: 'js', component: <FaJsSquare className="text-yellow-400 bg-black rounded-sm" title="JavaScript" /> },
    { id: 'git', component: <FaGitAlt className="text-orange-600" title="Git" /> },
    { id: 'gsap', component: <span className="text-[10px] font-black text-green-500 tracking-tighter" title="GSAP">G</span> }
  ];

  const totalIcons = icons.length;
  const radius = 28; // The size/radius of the ring circle (in pixels)

  return (
    <div className="relative flex items-center justify-center w-20 h-20 mr-4 select-none">
      
      {/* 1. THE ROTATING RING: Handles the continuous looping spin */}
      <motion.div
        className="absolute w-full h-full flex items-center justify-center origin-center cursor-pointer"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 10,   // Adjust this number to make the ring rotate faster or slower
          ease: "linear"
        }}
      >
        {icons.map((icon, index) => {
          // Calculate even angles around the 360-degree circle for each item
          const angle = (index / totalIcons) * 360;
          // Convert angles to radian coordinates for X and Y positioning
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={icon.id}
              className="absolute text-xl flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-sm border border-gray-100"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {/* 2. COUNTER-ROTATING WRAPPER: Keeps individual icons upright while the ring spins */}
              <motion.div
                className="flex items-center justify-center w-full h-full"
                animate={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10, // Must match the outer ring duration exactly
                  ease: "linear"
                }}
              >
                {icon.component}
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Optional: You can put a tiny initial "A" or a glowing dot right in the center of the ring */}
      <div className="text-xs font-black text-blue-900 pointer-events-none">
        A
      </div>

    </div>
  );
}