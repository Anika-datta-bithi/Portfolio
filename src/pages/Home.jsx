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
            <Navbar/>
            <Hero/>
            <Education/>
            <Project/>
            <Skill/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;