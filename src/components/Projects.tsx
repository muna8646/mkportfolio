import React from 'react';
import { FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product catalog, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
  },
  {
    title: "Task Management App",
    description: "A responsive web application for managing tasks and projects. Includes features like drag-and-drop, team collaboration, and real-time updates.",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"]
  },
  {
    title: "Weather Forecast Dashboard",
    description: "An interactive weather dashboard that provides real-time weather information and forecasts for multiple locations.",
    technologies: ["React", "Redux", "OpenWeatherMap API", "Chart.js"]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-20">
      <h2 className="text-3xl font-bold mb-8 flex items-center text-indigo-700">
        <FolderGit2 className="mr-2" /> Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">{project.title}</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;