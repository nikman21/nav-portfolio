'use client';
import React from 'react';
import { FaTools } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: 'PID-Controlled Motor System for Precision Control Applications',
      date: 'Fall 2023',
      bullets: [
        'Developed and implemented a PID controller algorithm on Arduino IDE, showcasing familiarity with embedded systems and control theory.',
        'Collaborated with team members to fine-tune PID parameters, optimizing system stability, precision, and responsiveness.',
        'Conducted rigorous testing and evaluation, analyzing performance metrics to ensure robust system performance.'
      ]
    },
    {
      title: 'Table Tennis Ball Launcher for Duchenne Muscular Dystrophy Children',
      date: 'Spring 2022',
      bullets: [
        'Engineered a mobile, lightweight propulsion machine with a team of 4 engineers.',
        'Designed a user-friendly trigger mechanism for safe and controlled object propulsion.',
        'Programmed Arduino logic for precise control over multiple electrical components.'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-red-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Pushing the Boundaries of Innovation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-black/50 p-8 rounded-lg hover:bg-red-700/20 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col"
            >
              <div className="flex items-center mb-4">
                <FaTools size={32} className="text-white mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.date}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 mt-4 text-gray-100">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
