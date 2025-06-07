import manticoreImage from '../../../assets/jobs/manticorelabs.png';
import madjsImage from '../../../assets/jobs/madjs.png';
import jetmindImage from '../../../assets/jobs/jetmind.png';
import { Translations } from '../../../interface/translations/translations.interface';
import { WorkExperienceInterface } from '../../../interface/workExperience/workExperience.interface';

export const WorkExperience = (translate: Translations) => {
  const experiences: WorkExperienceInterface[] = [
    {
      title: translate.manticoreLabs.title,
      description: translate.manticoreLabs.description,
      image: manticoreImage,
      website: 'https://manticore-labs.com/',
    },
    {
      title: translate.madJs.title,
      description: translate.madJs.description,
      image: madjsImage,
      website: 'https://www.ejemplo.com',
      github: 'https://github.com/mi-perfil',
    },
    {
      title: translate.jetmind.title,
      description: translate.jetmind.description,
      image: jetmindImage,
      website: 'https://corporacionjetmind.com/',
    },
  ];
  return experiences;
};
