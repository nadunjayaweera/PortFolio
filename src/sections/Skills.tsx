
import React from 'react';
import Section from '../components/Section';
import { portfolioData } from '../data/portfolioData';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills" bgColor="bg-gray-50 dark:bg-gray-800">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Frontend</h3>
          <ul className="list-none p-0">
            {portfolioData.skills.frontend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Backend</h3>
          <ul className="list-none p-0">
            {portfolioData.skills.backend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Databases</h3>
          <ul className="list-none p-0">
            {portfolioData.skills.databases.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
          <ul className="list-none p-0">
            {portfolioData.skills.tools.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
