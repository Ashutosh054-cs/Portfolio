import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import crud from '../assets/crud.png'; 
import typpic from '../assets/typing-test.png';
import protpic from '../assets/portfolio.png';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Typing Test App',
      description: 'A simple typing test application to improve typing speed and accuracy.',
      tech: ['React', 'JS', 'Framer motion'],
      image: typpic,
      github: 'https://github.com/Ashutosh054-cs/Typing-Test/tree/main/Typing-test',
      demo: 'https://notsure.com'
    },
    {
      title: 'CRUD Admin Panel',
      description: 'A fully functional CRUD admin panel for managing data with user authentication.',
      tech: ['React', 'Framer Motion', 'Refine', 'Ant Design'],
      image: crud,
      github: 'https://github.com/Ashutosh054-cs/Admin_panel_CRUD',
      demo: 'https://your-demo-link.com/portfolio'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website showcasing my projects and skills.',
      tech: ['React', 'Tailwind css', 'Framer Motion', 'React Router'],
      image: protpic,
      github: 'https://github.com/Ashutosh054-cs/Portfolio',
      demo: 'https://ashuzportfolio.vercel.app/'
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-black text-white pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-light mb-16 tracking-wider text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Projects
        </motion.h1>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group flex flex-col cursor-default"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 shadow-lg">
                <a
                  href={project.demo || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>

                {/* Hover overlay for desktop */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300"
                    >
                      <ExternalLink className="w-6 h-6 text-white cursor-pointer" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                  >
                    <Github className="w-6 h-6 text-white cursor-pointer" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-light mb-2 tracking-wide">{project.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs border border-gray-700 rounded-full tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <div className="mt-auto">
                <a
                  href={project.demo || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-4 py-2 text-sm rounded-full transition hover:bg-gray-200 font-medium"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
