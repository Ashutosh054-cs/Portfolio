import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <motion.div 
      className="min-h-screen bg-black text-white pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.h1
          className="text-5xl md:text-6xl font-light mb-16 tracking-wider text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Get In Touch
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-3xl font-light mb-8 tracking-wider">Let's Create Together</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
            I'm open to new projects and collaborations. If you have something in mind or just want to get in touch, please feel free to reach out.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">ashutoshcs054@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Bhubaneswar, Odisha</span>
              </div>
            </div>
          </motion.div>
          
          <motion.form
            action="https://formspree.io/f/mdkdgnkv"
            method="POST"
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 bg-transparent border border-gray-700 focus:border-white transition-colors outline-none cursor-hover tracking-wider"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 bg-transparent border border-gray-700 focus:border-white transition-colors outline-none cursor-hover tracking-wider"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                className="w-full p-4 bg-transparent border border-gray-700 focus:border-white transition-colors outline-none resize-none cursor-hover tracking-wider"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full p-4 bg-white text-black hover:bg-gray-200 transition-colors cursor-hover tracking-wider flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;