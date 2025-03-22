import React from 'react';

export interface Experience {
  title: string;
  description: string;
  image: string;
  website?: string;
  github?: string;
}

interface CardsProps {
  title: string;
  experiences: Experience[];
}

const Cards: React.FC<CardsProps> = ({ experiences, title }) => {
  return (
    <section className="py-12">
      <h1 className="text-center text-white text-4xl mb-8">{title}</h1>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="card bg-dark-secondary rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-auto overflow-hidden group p-2 flex items-center justify-center">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-80 h-80 object-cover transform transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {experience.title}
                </h2>
                <p className="mt-4 text-gray-600">{experience.description}</p>
                <div className="mt-6 flex justify-start space-x-4">
                  {experience.website && (
                    <a
                      href={experience.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="text-blue-500 hover:text-blue-700 fa fa-globe"
                        aria-hidden="true"
                      ></i>
                    </a>
                  )}
                  {experience.github && (
                    <a
                      href={experience.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="text-gray-800 hover:text-gray-600 fa fa-github"
                        aria-hidden="true"
                      ></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
