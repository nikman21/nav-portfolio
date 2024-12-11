'use client';
import React from 'react';
import { SiDassaultsystemes, SiAutodesk, SiPython, SiCplusplus, SiAutocad } from 'react-icons/si';
import { FaLinkedinIn, FaCalculator, FaEnvelope } from 'react-icons/fa';


function About() {
  const skills = ['SOLIDWORKS', 'MATLAB', 'Fusion 360', 'AutoCAD', 'Python', 'C++'];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-red-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Driving Innovation in Automotive Engineering</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* About Me */}
          <div className="about-me">
            <p className="text-lg mb-6">
              With a background in Automotive Systems Engineering and a passion for electric vehicles, sustainability, 
              and advanced vehicle design, I am dedicated to shaping the future of mobility. My work focuses on 
              optimizing drivetrains, improving thermal management systems, and contributing to the evolution of 
              cleaner, more efficient transportation solutions.
            </p>
            <p className="text-lg mb-6">
              Leveraging hands-on experience from Formula SAE projects and diverse coursework in EV technology, 
              I bring a problem-solving mindset and technical rigor to every challenge. My goal is to fuel 
              innovation in the automotive sector, driving towards a sustainable and electrified future on the road.
            </p>
            <div className="flex items-center space-x-4 mt-8">
              <a 
                href="https://www.linkedin.com/in/maanavtalla" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-red-300 transition-colors"
              >
                <FaLinkedinIn size={28} />
              </a>
              <a 
            href="mailto:mstalla@asu.edu"
            className="transition-transform duration-300 hover:translate-y-[-2px]"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
            </div>
          </div>

          {/* Skills */}
          <div className="skills">
            <h3 className="text-2xl font-semibold mb-6">Key Skills &amp; Tools</h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div 
                  key={skill} 
                  className="flex items-center space-x-3 bg-black/50 p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-red-700/20"
                >
                  <div className="text-white">
                    {getSkillIcon(skill)}
                  </div>
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getSkillIcon(skill) {
    switch (skill) {
      case 'SOLIDWORKS':
        return <SiDassaultsystemes size={24} />;
      case 'MATLAB':
        return <FaCalculator size={24} />;
      case 'Fusion 360':
        return <SiAutodesk size={24} />;
      case 'AutoCAD':
        return <SiAutocad size={24} />;
      case 'Python':
        return <SiPython size={24} />;
      case 'C++':
        return <SiCplusplus size={24} />;
      default:
        return null;
    }
  }
  

export default About;
