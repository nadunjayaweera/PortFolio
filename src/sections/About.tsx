
import React from 'react';
import Section from '../components/Section';
import { portfolioData } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" bgColor="bg-white dark:bg-gray-800">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          {portfolioData.about.paragraph1}
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {portfolioData.about.paragraph2}
        </p>
      </div>
    </Section>
  );
};

export default About;
