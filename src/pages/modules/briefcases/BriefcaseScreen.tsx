import AnimatedBackground from '../../../components/briefcase/AnimatedBackground';
import AnimatedText from '../../../components/briefcase/AnimatedText';
import { useLanguage } from '../../../hook/lenguage';
import { useTheme } from '../../../hook/theme';
import Carrusel from '../../../components/briefcase/Carrusel';
import Cards from '../../../components/briefcase/Cards';
import ImageCarousel from '../../../components/briefcase/ImageCarousel';
import unibeImage from '../../../assets/education/unibe.png';
import yaviracImage from '../../../assets/education/yavirac.png';
<<<<<<< HEAD
import { WorkExperience } from './workExperience';
import { WorkExperienceInterface } from '../../../interface/workExperience/workExperience.interface';
import { personalProjects } from './personalProjects';
import React from 'react';
=======
import briefcaseImage from '../../../assets/projects/briefcase.jpeg';
import neuroniandoImage from '../../../assets/projects/neuroniando.webp';
import neuroniandoWebImage from '../../../assets/projects/neuroniandoWeb.jpeg';
import pichinchaImage from '../../../assets/projects/pichincha.jpg';
import travelEcuadorImage from '../../../assets/projects/travelEcuador.jpeg';
>>>>>>> de403db2941a35ae7df7e93ee1a6b9bf3eff3f3b

const BriefcaseScreen: React.FC = () => {
  const { translations, languageState } = useLanguage();
  const { isDarkTheme } = useTheme();
<<<<<<< HEAD
  const experiences: WorkExperienceInterface[] = WorkExperience(translations);
  const projects = personalProjects(translations);
=======

  const experiences: Project[] = [
    {
      title: 'Manticore Labs',
      description:
        'En Manticore Labs, desempeñé el rol de desarrollador de software en las áreas de frontend y backend durante un año, participando activamente en proyectos innovadores. Durante esta experiencia, trabajé con tecnologías como Angular y NestJS, y tuve la oportunidad de trabajar con arquitecturas basadas en microservicios. Además, formé parte de equipos ágiles, lo que me permitió colaborar en entornos dinámicos y con prácticas de desarrollo modernas. También asumí responsabilidades como QA, especialmente en proyectos clave como Bago y Mundo Venus, donde contribuí en el desarrollo y pruebas de calidad como desarrollador junior.',
      image: manticoreImage,
      website: 'https://manticore-labs.com/',
    },
    {
      title: 'MADJS',
      description:
        'MADJS es una empresa de desarrollo de software que fundé junto con un equipo de expertos en el área. Nos especializamos en la creación de aplicaciones web y móviles, brindando soluciones innovadoras y personalizadas para cada cliente. Como fundador, he asumido múltiples roles dentro de la empresa, abarcando tanto el desarrollo de frontend como backend para aplicaciones web y móviles. Además, he liderado iniciativas en DevOps, garantizando procesos de integración continua eficientes y un ciclo de desarrollo ágil que optimiza el tiempo y la calidad en cada proyecto.',
      image: madjsImage,
      website: 'https://www.ejemplo.com',
      github: 'https://github.com/mi-perfil',
    },
    {
      title: 'Corporacion Jetmind',
      description:
        'En la corporación Jetmind, he desempeñado el rol de ingeniero de software durante más de un año y medio, donde he tenido la oportunidad de desarrollar aplicaciones web y móviles, llevándolas a producción de manera exitosa. En este tiempo, he trabajado con diversas tecnologías, como React, React Native, Angular, Laravel y AWS, entre otras. Mi experiencia en Jetmind me ha permitido aplicar un enfoque ágil y colaborativo, contribuyendo al éxito de proyectos y optimizando el rendimiento de las aplicaciones a través de soluciones innovadoras y escalables.',
      image: jetmindImage,
      website: 'https://corporacionjetmind.com/',
    },
  ];

  const projects = [
    {
      title: 'Portfolio',
      description:
        'Mi portafolio personal fue realizado con varias tecnologias para mostrar mi experiencia con las mismas ademas que cuenta con un diseño responsive',
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
      title: 'Neuroniando',
      description:
        'Neuroniando es una aplicacion movil educativa con juegos educativos, en este proyecto realice el frontend, devops y el despliegue en la play store',
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
      title: 'Neuroniando web',
      description:
        'En esta landing page participe desplegando y realizando correciones en la misma para el despliegue se utilizo aws amplify y cloudflare ademas de tecnologias como react y tailwind',
      image: neuroniandoWebImage,
      website: 'https://www.neuroniando.com/',
      tags: ['React', 'Tailwind Css', 'GitHub', 'AWS Amplify', 'Cloudflare'],
    },
    {
      title: 'App Test Banco Pichincha',
      description:
        'Esta app esta realizad para pruebas en el banco de pichincha usando apis de pruebas proporcionadas por la entidad, en la misma se realizaron pruebas unitarias y validaciones del sistema',
      image: pichinchaImage,
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
      title: 'Travel Ecuador',
      description:
        'Para la creacion de esta pagina utilice react con librerias de estilos como tailwind y para su despliegue en pruebas Netlify, y en produccion aws amplify comprando el dominio en router 53',
      image: travelEcuadorImage,
      website: 'https://feriaecuadortravel.com/home',
      tags: [
        'React',
        'Tailwind Css',
        'GitHub',
        'AWS Amplify',
        'AWS Router 53',
        'Netlify',
      ],
    },
    {
      title: 'Veterinaria',
      description:
        'A veterinary app for managing appointments and patient information.',
      image: 'https://via.placeholder.com/300x200',
      website: 'https://myvetapp.com',
      github: 'https://github.com/myusername/vet-app',
      tags: ['Laravel', 'AWS EC2', 'AWS S3', 'AWS Cognito', 'Docker'],
    },
    {
      title: 'Plantilla Banco Sudamericano',
      description:
        'A banking template designed to manage customer transactions.',
      image: 'https://via.placeholder.com/300x200',
      website: 'https://mybanktemplate.com',
      github: 'https://github.com/myusername/bank-template',
      tags: [
        'HTML',
        'CSS',
        'Figma',
        'AWS Cognito', // Para gestión de usuarios
        'AWS S3', // Almacenamiento de datos estáticos
      ],
    },
    {
      title: 'Vinculación con la Sociedad',
      description:
        'A community engagement platform with user interaction features.',
      image: 'https://via.placeholder.com/300x200',
      website: 'https://communityengagement.com',
      github: 'https://github.com/myusername/community-engagement',
      tags: [
        'Angular',
        'Laravel',
        'Tailwind CSS',
        'API Integration',
        'Firebase', // Para gestión de usuarios en tiempo real
        'AWS DynamoDB', // Base de datos no relacional para almacenamiento de usuarios
        'AWS S3', // Almacenamiento de archivos
      ],
    },
  ];

>>>>>>> de403db2941a35ae7df7e93ee1a6b9bf3eff3f3b
  const imagesEducacion = [unibeImage, yaviracImage];

  const downloadCv = () => {
    const fileName =
      languageState === 'en'
        ? 'Steveen-Ordoñez-en.pdf'
        : 'Steveen-Ordoñez-es.pdf';
    const filePath = `/cv/${fileName}`;

    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid grid-cols-1 space-y-8 p-2">
      <section className="relative p-12 h-96 overflow-hidden font-sans">
        <AnimatedBackground isDarkTheme={isDarkTheme} />

        {/* Contenido en Grid */}
        <div className="grid grid-cols-1 h-full relative z-10 text-center">
          <div className="space-y-8">
            <AnimatedText
              text={translations.briefcase.welcome}
              className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-500"
            />
            <p
              className={`text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-black'}`}
            >
              {translations.briefcase.hello}, {translations.briefcase.name}
            </p>
            <p className="text-gray-400 leading-relaxed text-justify">
              {translations.briefcase.presentation}
            </p>
            <button
              onClick={downloadCv}
              className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {languageState === 'en' ? 'Download CV' : 'Descargar CV'}
            </button>
          </div>
        </div>
      </section>
      <Carrusel
        projects={experiences}
        title={translations.workExperience.title}
        translate={translations}
      />
      <ImageCarousel images={imagesEducacion} title="Educación" />
      <div className="container">
        <Cards projects={projects} title="My Projects" />
      </div>
    </div>
  );
};

export default BriefcaseScreen;
