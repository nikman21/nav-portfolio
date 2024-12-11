'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-red-700/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'}`}>
              Maanav Talla
            </h1>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {['About', 'Projects', 'Contact'].map((item) => (
              <Link key={item} href={`/#${item.toLowerCase()}`}>
                <span className={`px-3 py-2 rounded-full text-sm font-medium text-white hover:bg-red-700/20 transition-all duration-300`}>
                  {item}
                </span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full text-white hover:bg-red-700/20 transition-all duration-300 focus:outline-none`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-red-700/80 backdrop-blur-md">
            {['About', 'Projects', 'Contact'].map((item) => (
              <Link key={item} href={`/#${item.toLowerCase()}`}>
                <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-700/20 transition-all duration-300">
                  {item}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
