import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMonitor } from 'react-icons/fi';


const Hero = () => {
  return (
    <section className="relative overflow-hidden w-full my-20 bg-[#FDFDFD] flex justify-center  pt-20 md:pt-0">
      <div className="container  grid grid-cols-1 md:grid-cols-2 gap-20 items-center h-full">

        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center order-2 md:order-1"
        >
          <div className="space-y-4">
            <h1 className="text-4xl text-left sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Hey, This is <br />
              <span className="text-gray-800">Anika </span>
              <span className="text-[#D97706]">Datta</span>
              <span className="text-gray-800"> Bithi</span>
            </h1>
            <p className="text-lg text-left md:text-xl text-gray-500 font-medium">
              an interactive Front-end Developer
            </p>
          </div>

          <div className="mt-10 text-left flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-all"
            >
              Let's Talk
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <div className="flex items-center gap-3 mt-12 opacity-70 hover:opacity-100 transition-opacity">

            <a
              href="https://dribbble.com/anikadatta"
              className="text-gray-600 font-medium hover:text-black transition-colors"
            >

            </a>
          </div>
        </motion.div>

        {/* Right Side: Desktop Website Mockup */}
        <div className="relative flex justify-center items-center order-1 md:order-2 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[550px] z-10"
          >
            {/* Browser Frame */}
            <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Browser Header/Toolbar */}
              <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto bg-white rounded text-[10px] text-gray-400 px-8 py-1 border border-gray-200">
                  anikadatta.dev
                </div>
              </div>

              {/* Website Content Preview */}
              <div className="aspect-video bg-gray-50 overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                  alt="Portfolio Preview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
            </div>

            {/* Desktop Stand Stem */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-6 bg-gray-300 -z-10" />
            {/* Desktop Base */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-2 bg-gray-400 rounded-full -z-10" />

            {/* Floating 'Skilled' Badge */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-4 z-20 bg-gradient-to-r from-[#B45309] to-[#D97706] text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-2"
            >
              <FiMonitor className="text-xl" />
              <span className="font-bold text-lg md:text-xl tracking-wide uppercase">
                Skilled
              </span>
            </motion.div>

            {/* Decorative Background Circles */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700" />
          </motion.div>
        </div>
      </div>

      {/* Subtle Background Gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-50/50 blur-[100px] -z-10" />
    </section>
  );
};

export default Hero;