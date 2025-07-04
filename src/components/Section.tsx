
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  bgColor = "bg-white dark:bg-gray-800",
  textColor = "text-indigo-600 dark:text-indigo-400",
}) => {
  return (
    <motion.section
      id={id}
      className={`py-16 md:py-24 ${bgColor}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 ${textColor}`}>{title}</h2>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
