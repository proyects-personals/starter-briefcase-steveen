import { Translations } from '../../../interface/translations/translations.interface';
import briefcaseImage from '../../../assets/projects/briefcase.jpeg';
import neuroniandoImage from '../../../assets/projects/neuroniando.webp';
import neuroniandoWeb from '../../../assets/projects/neuroniando-web.jpg';
import bancoPichincha from '../../../assets/projects/pichincha.jpg';
import travelEcuador from '../../../assets/projects/travel.jpg';
import bancoSudamericano from '../../../assets/projects/bancoSudamericano.jpg';
import vinculacion from '../../../assets/projects/vinculacion.jpg';
import { ProjectsInterface } from '../../../interface/projects/projects.interface';

export const personalProjects = (translate: Translations) => {
  const projects: ProjectsInterface[] = [
    {
      title: translate.portfolio.name,
      description: translate.portfolio.description,
      image: briefcaseImage,
      website: 'https://myportfolio.com',
      github:
        'https://github.com/proyects-personals/starter-briefcase-steveen.git',
      tags: [
        'React',
        'Tailwind CSS',
        'Typescript',
        'Netlify',
        'GitHub',
        'Figma',
      ],
    },
    {
      title: translate.neuroniando.name,
      description: translate.neuroniando.description,
      image: neuroniandoImage,
      website:
        'https://play.google.com/store/apps/details?id=com.neuroniando.mobile',
      tags: [
        'React Native',
        'AWS Amplify',
        'AWS S3',
        'AWS Cognito',
        'AWS SES',
        'AWS Lambda',
        'AWS Route 53',
        'AWS IAM',
        'DynamoDB',
        'React Paper',
        'Unity',
        'Firebase',
        'GitHub',
        'Jira',
        'Typescript',
        'GraphQL',
        'Figma',
        'Java',
      ],
    },
    {
      title: translate.neuroniandoWeb.name,
      description: translate.neuroniandoWeb.description,
      image: neuroniandoWeb,
      website: 'https://www.neuroniando.com/',
      tags: [
        'React',
        'GitHub',
        'Typescript',
        'Tailwind',
        'AWS Router 53',
        'Cloudfire',
      ],
    },
    {
      title: translate.pichinchaBank.name,
      description: translate.pichinchaBank.description,
      image: bancoPichincha,
      github:
        'https://github.com/proyects-personals/starter-pichincha-test.git',
      tags: [
        'React Native',
        'Typescript',
        'CSS',
        'Unit Tests with Jest',
        'GitHub',
      ],
    },
    {
      title: translate.travelEcuador.name,
      description: translate.travelEcuador.description,
      image: travelEcuador,
      website: 'https://feriaecuadortravel.com/home',
      tags: [
        'React',
        'Tailwind CSS',
        'Typescript',
        'Figma',
        'AWS  Router 53',
        'Netfify',
        'Github',
      ],
    },
    {
      title: translate.southAmericanBank.name,
      description: translate.southAmericanBank.description,
      image: bancoSudamericano,
      github: 'https://github.com/proyects-personals/banco-sudamericano.git',
      tags: ['HTML', 'CSS', 'Figma', 'Github'],
    },
    {
      title: translate.linkage.name,
      description: translate.linkage.description,
      image: vinculacion,
      website: 'https://myweatherapp.com',
      github: 'https://github.com/myusername/weather-app',
      tags: [
        'Python',
        'AWS S3',
        'Imagga API',
        'Docker',
        'GitHub',
        'AWS Lambda',
      ],
    },
    {
      title: translate.docsUnibe.name,
      description: translate.docsUnibe.description,
      image: vinculacion,
      website: 'https://myweatherapp.com',
      github: 'https://github.com/myusername/weather-app',
      tags: [
        'Python',
        'AWS S3',
        'Imagga API',
        'Docker',
        'GitHub',
        'AWS Lambda',
      ],
    },
  ];
  return projects;
};
