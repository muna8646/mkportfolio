import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "TechInnovate Solutions",
    position: "Full Stack Developer",
    duration: "2021 - Present",
    description: "Develop and maintain web applications using React, Node.js, and MongoDB. Collaborate with cross-functional teams to deliver high-quality software solutions."
  },
  {
    company: "WebCraft Agency",
    position: "Front-end Developer",
    duration: "2020 - 2021",
    description: "Created responsive and interactive user interfaces using React and Vue.js. Implemented pixel-perfect designs and optimized website performance."
  },
  {
    company: "CodeLab Internship",
    position: "Junior Web Developer",
    duration: "2019 - 2020",
    description: "Assisted in the development of various web projects. Gained hands-on experience with HTML, CSS, JavaScript, and basic back-end technologies."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-20">
      <h2 className="text-3xl font-bold mb-8 flex items-center text-indigo-700">
        <Briefcase className="mr-2" /> Work Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-indigo-600">{exp.position}</h3>
            <p className="text-lg font-medium text-gray-700">{exp.company}</p>
            <p className="text-gray-600 mb-3">{exp.duration}</p>
            <p className="text-gray-700 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;