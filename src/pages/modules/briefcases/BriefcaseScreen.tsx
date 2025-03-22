import AnimatedBackground from '../../../components/briefcase/AnimatedBackground';
import AnimatedText from '../../../components/briefcase/AnimatedText';
import Cards, { Experience } from '../../../components/briefcase/Cards';
import { useLanguage } from '../../../hook/lenguage';
import { useTheme } from '../../../hook/theme';
import manticoreImage from '../../../assets/jobs/manticorelabs.png';
import madjsImage from '../../../assets/jobs/madjs.png';
import jetmindImage from '../../../assets/jobs/jetmind.png';

const BriefcaseScreen: React.FC = () => {
  const { translations } = useLanguage();
  const { isDarkTheme } = useTheme();

  const experiences: Experience[] = [
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
      // website: 'https://www.ejemplo.com',
      // github: 'https://github.com/mi-perfil',
    },
    {
      title: 'Corporacion Jetmind',
      description:
        'En la corporación Jetmind, he desempeñado el rol de ingeniero de software durante más de un año y medio, donde he tenido la oportunidad de desarrollar aplicaciones web y móviles, llevándolas a producción de manera exitosa. En este tiempo, he trabajado con diversas tecnologías, como React, React Native, Angular, Laravel y AWS, entre otras. Mi experiencia en Jetmind me ha permitido aplicar un enfoque ágil y colaborativo, contribuyendo al éxito de proyectos y optimizando el rendimiento de las aplicaciones a través de soluciones innovadoras y escalables.',
      image: jetmindImage,
      website: 'https://corporacionjetmind.com/',
    },
  ];

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
      <Cards experiences={experiences} title="Mi Experiencia Laboral" />
    </div>
  );
};

export default BriefcaseScreen;
