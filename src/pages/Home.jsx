import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Education from '../Components/Education';
import Project from '../Components/Project';
import Skill from '../Components/Skill';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />

      <section id="navbar">
        <Hero />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;