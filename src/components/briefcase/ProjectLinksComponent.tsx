import React from 'react';

interface ProjectLinksProps {
  website?: string;
  github?: string;
}

const ProjectLinksComponent: React.FC<ProjectLinksProps> = ({
  website,
  github,
}) => {
  if (!website && !github) return null;

  return (
    <div className="flex justify-between items-center p-4">
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all duration-300"
        >
          <i className="fas fa-external-link-alt mr-2"></i> Visitar
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-all duration-300"
        >
          <i className="fab fa-github mr-2"></i> Código
        </a>
      )}
    </div>
  );
};

export default ProjectLinksComponent;
