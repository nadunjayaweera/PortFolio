
import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects" bgColor="bg-white dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              <a href={project.link} className="text-indigo-600 dark:text-indigo-400 hover:underline">View Project</a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
