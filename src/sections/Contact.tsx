
import React from 'react';
import Section from '../components/Section';
import { portfolioData } from '../data/portfolioData';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get in Touch" bgColor="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-6">
          <a href={`mailto:${portfolioData.contact.email}`} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          </a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
          </a>
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.757-1.334-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.49.997.108-.775.418-1.305.762-1.605-2.665-.3-5.464-1.332-5.464-5.93 0-1.31.465-2.38 1.235-3.22-.12-.3-.53-1.52.11-3.17 0 0 1-.32 3.3-.12.95-.26 1.95-.39 2.95-.39 1 0 2.005.13 2.95.39 2.3-.2 3.3.12 3.3.12.64 1.65.23 2.87.12 3.17.77.84 1.235 1.91 1.235 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.82 1.1.82 2.22 0 1.606-.015 2.89-.015 3.28 0 .318.22.69.82.575C20.562 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
