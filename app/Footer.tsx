import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content py-4 sm:py-6">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-3 sm:mb-4">
          
          <a
            href="https://www.linkedin.com/in/shashanx/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transform hover:scale-110 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
          </a>
          
          <a
            href="mailto:shashankjha.0052@gmail.com"
            className="hover:text-primary transform hover:scale-110 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={20} className="sm:w-6 sm:h-6" />
          </a>
          
          <a
            href="https://github.com/shashanx52"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transform hover:scale-110 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={20} className="sm:w-6 sm:h-6" />
          </a>
          
          <a
            href="https://leetcode.com/u/shashanx/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transform hover:scale-110 transition duration-300"
            aria-label="LeetCode"
          >
            <SiLeetcode size={20} className="sm:w-6 sm:h-6" />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-center">
          Made by 😊 Shashank Jha
        </p>
      </div>
    </footer>
  );
};

export default Footer;
