import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mb-20">
      <h2 className="text-3xl font-bold mb-8 flex items-center text-indigo-700">
        <Mail className="mr-2" /> Contact Me
      </h2>
      <div className="bg-white rounded-lg shadow-lg p-8 transition duration-300 hover:shadow-xl">
        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
          I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="mailto:munasirkorei@gmail.com" className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300">
            <Mail className="mr-2" /> munasirkorei@gmail.com
          </a>
          <a href="tel:+254768594683" className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300">
            <Phone className="mr-2" /> +254 768 594 683
          </a>
          <a href="https://www.linkedin.com/in/munasirkorei" target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300">
            <Linkedin className="mr-2" /> LinkedIn Profile
          </a>
          <a href="https://github.com/munasirkorei" target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300">
            <Github className="mr-2" /> GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;