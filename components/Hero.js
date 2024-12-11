'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Me from '../public/me.jpg';
import FormulaOne from '../public/white-fang.png';

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden py-20 text-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${FormulaOne.src})`,
        backgroundColor: 'rgba(0,0,0,0.6)',
        backgroundBlendMode: 'darken'
      }}
    >
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white mx-auto shadow-xl relative mb-8">
          <Image 
            src={Me} 
            alt="Maanav Talla" 
            layout="fill" 
            objectFit="cover" 
            className="transition-transform duration-700 ease-out hover:scale-110"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Engineering the Future of Mobility
        </h1>
        <p className="text-xl text-white mb-8 max-w-xl mx-auto">
          I’m <span className="font-semibold">Maanav Talla</span>, a Junior Automotive Systems Engineering student 
          passionate about electric vehicles, sustainability, and driving innovation in automotive design.
        </p>    

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            href="/#contact"
            className="bg-white text-red-600 py-3 px-8 rounded-full font-semibold transition-all duration-300 hover:bg-red-100 hover:shadow-lg"
          >
            Let's Connect
          </Link>
          <a 
            href="/Maanav-Talla-Resume.pdf" 
            download 
            className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-red-600"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
