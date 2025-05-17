import React from 'react';
import { Project } from '../../../../../interface/types';
import TitleComponent from '../texts/TitleComponent';
import CardsItem from './CardsItem';

interface CardsProps {
  projects: Project[];
  title: string;
}

const Cards: React.FC<CardsProps> = ({ projects, title }: CardsProps) => {
  return (
    <div className="p-6">
      <TitleComponent title={title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {projects.map((project: Project, index: number) => (
          <CardsItem
            key={index}
            project={project}
            objectImage={'object-cover'}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
