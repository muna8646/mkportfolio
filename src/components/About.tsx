import React from 'react';
import { User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="mb-20">
      <h2 className="text-3xl font-bold mb-8 flex items-center text-indigo-700">
        <User className="mr-2" /> About Me
      </h2>
      <div className="bg-white rounded-lg shadow-lg p-8 transition duration-300 hover:shadow-xl">
        <img
          src="https://i.imgur.com/YourImageURL.jpg"
          alt="Muna Kinyamal Sirkorei"
          className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-indigo-600 shadow-md"
        />
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          Hello! I'm Muna Kinyamal Sirkorei, a passionate software and web developer with 3 years of experience. I specialize in creating robust and user-friendly applications using modern technologies.
        </p>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          My expertise includes front-end development with React, back-end development with Node.js, and database management with MongoDB and PostgreSQL. I'm always eager to learn new technologies and improve my skills.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          When I'm not coding, you can find me exploring new hiking trails, reading tech blogs, or contributing to open-source projects.
        </p>
      </div>
    </section>
  );
};

export default About;