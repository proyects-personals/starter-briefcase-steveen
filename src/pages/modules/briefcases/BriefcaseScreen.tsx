import AnimatedBackground from '../../../components/briefcase/AnimatedBackground';
import AnimatedText from '../../../components/briefcase/AnimatedText';
import { useLanguage } from '../../../hook/lenguage';
import { useTheme } from '../../../hook/theme';
import manticoreImage from '../../../assets/jobs/manticorelabs.png';
import madjsImage from '../../../assets/jobs/madjs.png';
import jetmindImage from '../../../assets/jobs/jetmind.png';
import Carrusel from '../../../components/briefcase/Carrusel';
import { Project } from '../../../interface/types';
import Cards from '../../../components/briefcase/Cards';
import ImageCarousel from '../../../components/briefcase/ImageCarousel';
import reactImage from '../../../assets/technologies/React.png';
import awsImage from '../../../assets/technologies/aws.png';
import unibeImage from '../../../assets/education/unibe.png';
import yaviracImage from '../../../assets/education/yavirac.png';
import briefcaseImage from '../../../assets/projects/briefcase.jpeg';
import neuroniandoImage from '../../../assets/projects/neuroniando.webp';

const BriefcaseScreen: React.FC = () => {
  const { translations } = useLanguage();
  const { isDarkTheme } = useTheme();

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
      title: 'App Test Banco Pichincha',
      description:
        'Esta app esta realizad para pruebas en el banco de pichincha usando apis de pruebas proporcionadas por la entidad, en la misma se realizaron pruebas unitarias y validaciones del sistema',
      image: 'https://via.placeholder.com/300x200',
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
      description: 'A weather forecasting app using real-time data from APIs.',
      image: 'https://via.placeholder.com/300x200',
      website: 'https://myweatherapp.com',
      github: 'https://github.com/myusername/weather-app',
      tags: [
        'React',
        'Tailwind CSS',
        'Typescript',
        'Figma',
        'AWS API Gateway', // Para la API
        'AWS Lambda', // Funciones serverless para predicciones meteorológicas
      ],
    },
    {
      title: 'Imagenes for Travel',
      description:
        'An image-based weather forecasting app using real-time data from APIs.',
      image: 'https://via.placeholder.com/300x200',
      website: 'https://myweatherapp.com',
      github: 'https://github.com/myusername/weather-app',
      tags: [
        'Python',
        'AWS S3', // Almacenamiento de imágenes
        'Imagga API', // API de análisis de imágenes
        'Docker',
        'GitHub',
        'AWS Lambda', // Procesamiento de imágenes
      ],
    },
    {
      title: 'Veterinaria',
      description:
        'A veterinary app for managing appointments and patient information.',
      image: 'https://via.placeholder.com/300x200',
      website: 'https://myvetapp.com',
      github: 'https://github.com/myusername/vet-app',
      tags: [
        'Laravel',
        'AWS EC2', // Infraestructura en la nube
        'AWS S3', // Almacenamiento de imágenes y documentos
        'AWS Cognito', // Autenticación de usuarios
        'Docker',
      ],
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

  const imagesEducacion = [unibeImage, yaviracImage];

  return (
    <div className="grid grid-cols-1 space-y-8 p-2">
      <section className="relative p-12 h-96 overflow-hidden font-sans">
        <AnimatedBackground />

        {/* Contenido en Grid */}
        <div className="grid grid-cols-1 h-full relative z-10 text-center">
          <div className="space-y-8">
            <AnimatedText
              text="Bienvenido a mi Portafolio"
              className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-500"
            />
            <p
              className={`text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-black'}`}
            >
              {translations['briefcase.hello']},{' '}
              {translations['briefcase.name']}
            </p>
            <p className="text-gray-400 leading-relaxed text-justify">
              Soy un Ingeniero en Software con experiencia en múltiples
              tecnologías y herramientas. Mi formación profesional me ha
              permitido desarrollar soluciones eficientes para diversos desafíos
              en el ámbito del software. Me apasiona la tecnología, las ciencias
              y, sobre todo, el diseño y desarrollo de arquitecturas de
              software.
            </p>
          </div>
        </div>
      </section>
      <Carrusel projects={experiences} title="Mi Experiencia Laboral" />
      <ImageCarousel images={imagesEducacion} title="Educación" />
      <div className="container">
        <Cards projects={projects} title="My Projects" />
      </div>
    </div>
  );
};

export default BriefcaseScreen;
