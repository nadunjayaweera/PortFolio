
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import ThemeToggleButton from './ThemeToggleButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 md:p-6 fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{portfolioData.domain}</a>
        <div className="hidden md:flex space-x-6 items-center">
          <motion.a
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
          >About</motion.a>
          <motion.a
            href="#skills"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
          >Skills</motion.a>
          <motion.a
            href="#projects"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
          >Projects</motion.a>
          <motion.a
            href="#contact"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
          >Contact</motion.a>
          <ThemeToggleButton />
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggleButton />
          <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none ml-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-900 py-4 shadow-lg"
        >
          <div className="flex flex-col items-center space-y-4">
            <a href="#about" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300">About</a>
            <a href="#skills" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300">Skills</a>
            <a href="#projects" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300">Projects</a>
            <a href="#contact" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300">Contact</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
