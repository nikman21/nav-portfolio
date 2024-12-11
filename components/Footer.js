import React from 'react';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

function Footer() {

  return (
    <footer className="bg-gradient-to-r from-black to-red-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4 space-x-6">
          <a 
            href="https://www.linkedin.com/in/maanavtalla" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-transform duration-300 hover:translate-y-[-2px]"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a 
            href="mailto:mstalla@asu.edu"
            className="transition-transform duration-300 hover:translate-y-[-2px]"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-sm">
          Maanav Talla © 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;


