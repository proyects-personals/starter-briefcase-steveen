import React, { useState } from 'react';
import { Project } from '../../../../../interface/types';
import ProjectLinksComponent from '../../../../briefcase/ProjectLinksComponent';
import ExpandableTextComponent from '../texts/ExpandableTextComponent';
import { tagColors } from '../../../../../utils/tagColors';
import { useLanguage } from '../../../../../hook/lenguage';
import { useTheme } from '../../../../../hook/theme';

interface CarouselItemProps {
  project: Project;
  expandImageOnExpandText?: boolean;
  objectImage: string;
}

const CardsItem: React.FC<CarouselItemProps> = ({
  project,
  expandImageOnExpandText = false,
  objectImage,
}: CarouselItemProps) => {
  const { translations } = useLanguage();
  const { isDarkTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`w-full h-[500px]  rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col ${isDarkTheme ? ' bg-dark-primary' : 'bg-white'}`}
    >
      <img
        className={`${
          expandImageOnExpandText && isExpanded ? 'w-32' : 'w-full'
        } h-48 ${objectImage} transition-all duration-300 mx-auto`}
        src={project.image}
        alt={project.title}
      />
      <div className="p-4 flex flex-col flex-grow gap-2 overflow-hidden">
        <h3
          className={`text-xl font-bold ${isDarkTheme ? ' text-white' : 'text-dark'}`}
        >
          {project.title}
        </h3>
        <div className="flex-grow overflow-auto">
          <ExpandableTextComponent
            text={project.description}
            maxLength={100}
            onToggleExpand={(expanded) => setIsExpanded(expanded)}
            translations={translations}
            isDarkTheme={isDarkTheme}
          />
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags?.map((tag, idx) => (
            <span
              key={idx}
              className={`bg-gradient-to-r ${tagColors[idx % tagColors.length]} text-white text-sm py-1 px-2 rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <ProjectLinksComponent
        website={project.website}
        github={project.github}
        translations={translations}
      />
    </div>
  );
};

export default CardsItem;
