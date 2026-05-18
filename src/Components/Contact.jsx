import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [message, setMessage] = useState('');

  const handleChatMe = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const emailTo = "anikadatta2000@gmail.com";
    const subject = encodeURIComponent("Portfolio Message from Live Chat");
    const body = encodeURIComponent(message);

    // Triggers native mail client configuration
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative overflow-hidden w-full bg-gray-500 font-sans text-neutral-900 py-20 px-4 m-0">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="w-full flex flex-col items-center mb-16">
          <h2 className="text-xl font-bold uppercase tracking-[0.5em] text-neutral-900 border-b-2 border-neutral-900/30 pb-1">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="space-y-6">
            <h3 className="text-3xl font-extrabold tracking-tight text-neutral-900 mb-4 uppercase">
              Let's Connect
            </h3>
            <p className="text-neutral-100 font-medium max-w-sm mb-8">
              I'm always open to discussing new web development projects, creative opportunities, or code collaborations.
            </p>

            {/* Phone Info Card */}
            <div className="flex items-center gap-5 p-5 bg-neutral-900 rounded-xl shadow-lg border border-neutral-900/20 transform -skew-x-3 transition-transform hover:scale-[1.02]">
              <div className="bg-gray-500 text-neutral-900 p-4 rounded-lg text-xl transform skew-x-3 shadow-inner">
                <FaPhoneAlt />
              </div>
              <div className="transform skew-x-3">
                <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Call Me</p>
                <a href="tel:01312381809" className="text-white font-black tracking-wide text-lg hover:underline">
                  01312381809
                </a>
              </div>
            </div>

            {/* Email Info Card */}
            <div className="flex items-center gap-5 p-5 bg-neutral-900 rounded-xl shadow-lg border border-neutral-900/20 transform -skew-x-3 transition-transform hover:scale-[1.02]">
              <div className="bg-gray-500 text-neutral-900 p-4 rounded-lg text-xl transform skew-x-3 shadow-inner">
                <FaEnvelope />
              </div>
              <div className="transform skew-x-3">
                <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Email Me</p>
                <a href="mailto:anikadatta2000@gmail.com" className="text-white font-black tracking-wide text-md sm:text-lg hover:underline break-all">
                  anikadatta2000@gmail.com
                </a>
              </div>
            </div>

            {/* Linkedin Info Card */}
            <div className="flex items-center gap-5 p-5 bg-neutral-900 rounded-xl shadow-lg border border-neutral-900/20 transform -skew-x-3 transition-transform hover:scale-[1.02]">
              <div className="bg-gray-500 text-neutral-900 p-4 rounded-lg text-xl transform skew-x-3 shadow-inner">
                <FaLinkedinIn />
              </div>
              <div className="transform skew-x-3">
                <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Linkedin Profile</p>
                <a 
                  href="https://www.linkedin.com/in/anika-datta-bithi-63a18a284/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white font-black tracking-wide text-lg hover:underline"
                >
                  Anika Datta Bithi ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Chat Form Panel */}
          <div className="bg-neutral-900/20 border border-neutral-900/30 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
            <h4 className="text-xl font-black text-neutral-900 mb-6 uppercase tracking-wide">
              Quick Chat Box
            </h4>
            
            <form onSubmit={handleChatMe} className="space-y-4">
              <div className="flex flex-col">
                <label className="text-xs font-extrabold uppercase text-neutral-900 tracking-wider mb-2">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here and click Chat Me..."
                  className="w-full p-4 rounded-lg bg-neutral-900 text-white placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-neutral-900/50 resize-none shadow-inner"
                ></textarea>
              </div>

              {/* Chat Me Action Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-neutral-900 hover:bg-neutral-950 text-white font-black uppercase tracking-widest py-4 px-6 rounded-lg shadow-xl transform -skew-x-12 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Chat Me</span>
                <FaPaperPlane className="text-sm text-gray-400" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}