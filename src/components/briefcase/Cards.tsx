import React from 'react';
import { Project } from '../../interface/types';

interface CarruselProps {
  projects: Project[];
  title: string;
}

const Cards: React.FC<CarruselProps> = ({ projects, title }) => {
  const tagColors = [
    'from-red-400 to-yellow-500',
    'from-green-400 to-blue-500',
    'from-purple-400 to-pink-500',
    'from-teal-400 to-indigo-500',
    'from-blue-400 to-cyan-500',
  ];

  return (
    <div className="">
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
            {title}
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col"
          >
            <img
              className="w-full h-48 object-cover"
              src={project.image}
              alt={project.title}
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-base mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 flex-grow">
                {project.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`bg-gradient-to-r ${tagColors[idx % tagColors.length]} text-white text-sm py-1 px-3 rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center p-4 mt-auto">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all duration-300"
                >
                  <i className="fas fa-external-link-alt mr-2"></i> Visitar
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-all duration-300"
                >
                  <i className="fab fa-github mr-2"></i> Código
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
