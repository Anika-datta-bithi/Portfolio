import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("navbar");

  // Navigation items (BEST PRACTICE)
  const navItems = [
    { id: "navbar", label: "Home" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    setIsOpen(false);
  };

  // Scroll spy (active link tracking)
  useEffect(() => {
    const handleScrollSpy = () => {
      let current = "navbar";

      navItems.forEach((item) => {
        const el = document.getElementById(item.id);

        if (el) {
          const top = el.offsetTop - 100;

          if (window.scrollY >= top) {
            current = item.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">

        {/* Logo */}
        <a
          href="#navbar"
          onClick={(e) => handleScroll(e, "navbar")}
          className="font-bold text-blue-600 text-lg"
        >
          Anika
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className={`cursor-pointer transition ${
                activeSection === item.id
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-center py-4 space-y-3 border-t">

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className={`block ${
                activeSection === item.id
                  ? "text-blue-600"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </a>
          ))}

        </div>
      )}
    </nav>
  );
}