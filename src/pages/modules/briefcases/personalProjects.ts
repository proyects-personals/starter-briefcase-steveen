import { Translations } from '../../../interface/translations/translations.interface';
import briefcaseImage from '../../../assets/projects/briefcase.jpeg';
import neuroniandoImage from '../../../assets/projects/neuroniando.webp';
import neuroniandoWeb from '../../../assets/projects/neuroniando-web.jpg';
import bancoPichincha from '../../../assets/projects/pichincha.jpg';
import travelEcuador from '../../../assets/projects/travel.jpg';
import bancoSudamericano from '../../../assets/projects/bancoSudamericano.jpg';
import vinculacion from '../../../assets/projects/vinculacion.jpg';
import unibeDocs from '../../../assets/projects/unibeDocs.jpeg';
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
        'AWS Services',
        'DynamoDB',
        'React Paper',
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
      github: 'https://github.com/vinculacion-yavirac/frontend',
      tags: [
        'Angular',
        'PrimeNg',
        'Typescript',
        'Digitalocean',
        'Docker',
        'GitHub',
        'Api',
        'Figma',
        'Scrum',
        'Postgresql',
      ],
    },
    {
      title: translate.docsUnibe.name,
      description: translate.docsUnibe.description,
      image: unibeDocs,
      website: 'https://unibe-docs.netlify.app/login',
      github: 'https://github.com/unibe-projects/starter-unibe-docs',
      tags: [
        'React',
        'AWS Amplify',
        'Imagga API',
        'Docker',
        'GitHub',
        'AWS Services',
        'Tailwind css',
      ],
    },
  ];
  return projects;
};
