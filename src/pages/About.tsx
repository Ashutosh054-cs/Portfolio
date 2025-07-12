import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Award, Calendar, MapPin } from 'lucide-react';
import CProgramCert from '../assets/c program_page-0001.jpg';
import htmlcert from '../assets/html_page-0001.jpg';
import csscert from '../assets/css certificate_page-0001.jpg';

const About: React.FC = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState<string | null>(null);

  const skills = [
    'C ', 'Python', 'Html', 'Css', 'JS', 'Bootstrap',
    'GSAP', 'Tailwind CSS', 'DBMS', 'React'
  ];

  const education = [
    {
      id: '10th',
      level: '10th Class',
      school: 'ST.Xavier International School',
      year: '2020-2021',
      percentage: '88%',
      location: 'Bhubaneswar'
    },
    {
      id: '12th',
      level: '12th Class',
      school: 'BJB Secondary higher education school',
      year: '2022-2024',
      percentage: '78%',
      location: 'Bhubaneswar'
    },
    {
      id: 'plus3',
      level: '+3 (Pursuing)',
      school: 'LIT',
      year: '2022-Present',
      percentage: 'Ongoing',
      location: 'Bhubaneswar'
    }
  ];

  const achievements = [
    {
      title: 'C Programming Certificate',
      issuer: 'Simple Learn',
      year: '2025',
      image: CProgramCert
    },
    {
      title: 'HTML',
      issuer: 'Lumos Learning',
      year: '2025',
      image: htmlcert
    },
    {
      title: 'Css Basics',
      issuer: 'HackerRank',
      year: '2025',
      image: csscert
    },
    {
      title: 'UI/UX Design',
      issuer: 'Google',
      year: '2023',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const handleEducationClick = () => {
    setSelectedEducation(selectedEducation ? null : 'all');
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-white pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-light mb-8 tracking-wider"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed mb-6 max-w-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I’m a developer who loves building stuff that not only works but looks good too. I’ve spent time in both design and development, so I like to think I bring a little extra something to every project. Just a regular person trying to make the web a nicer place, one line of code at a time.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            I like to keep my code clean, make interfaces easy to use, and make sure everything runs smoothly. I’m a big fan of minimalism—every pixel and interaction matters to me.
          </motion.p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <h2 className="text-3xl font-light mb-12 tracking-wider">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="p-4 border border-gray-800 text-center cursor-hover hover:border-white transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <span className="text-sm tracking-wider">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Bar */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="relative cursor-hover"
            onHoverStart={() => setShowEducation(true)}
            onHoverEnd={() => setShowEducation(false)}
            onClick={handleEducationClick}
          >
            <motion.div
              className="w-full h-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg flex items-center justify-between px-6 border border-gray-700 hover:border-white transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xl font-light tracking-wider">Education</span>
              <motion.div
                animate={{ rotate: showEducation || selectedEducation ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>

            {/* Hover Preview */}
            <AnimatePresence>
              {showEducation && !selectedEducation && (
                <motion.div
                  className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg p-4 z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-300 text-sm">Click to view my educational background</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Expanded Education Details */}
          <AnimatePresence>
            {selectedEducation && (
              <motion.div
                className="mt-6 space-y-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    className="bg-gray-900 border border-gray-700 rounded-lg p-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-light mb-2 tracking-wider">{edu.level}</h3>
                        <p className="text-gray-300 mb-1">{edu.school}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="text-2xl font-light text-white">{edu.percentage}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Achievements/Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Award className="w-8 h-8 text-white" />
            <h2 className="text-3xl font-light tracking-wider">Achievements & Certificates</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="group cursor-hover"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.9 + index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-light mb-2 tracking-wider">{achievement.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{achievement.issuer}</p>
                <p className="text-gray-500 text-xs">{achievement.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;