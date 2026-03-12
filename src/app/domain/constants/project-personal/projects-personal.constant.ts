import {
  DocsUnibeImage,
  LinkageImage,
  NeuroniandoImage,
  NeuroniandoWebImage,
  PichinchaBankImage,
  PortfolioImage,
  SouthAmericanBankImage,
  TravelEcuadorImage,
} from "@/assets";

/**
 * @description Lista de proyectos personales y profesionales.
 * Cada proyecto contiene información para mostrar en tarjetas o secciones,
 * incluyendo nombre, descripción, imagen representativa, tecnologías usadas (kills),
 * enlace al sitio web y enlace al código fuente (si aplica).
 *
 * @property name - Clave de traducción del nombre del proyecto
 * @property description - Clave de traducción de la descripción del proyecto
 * @property image - Imagen representativa del proyecto
 * @property kills - Lista de tecnologías o herramientas usadas en el proyecto
 * @property visitLink - URL para visitar el proyecto en producción (opcional)
 * @property codeLink - URL al repositorio del proyecto en GitHub u otra plataforma (opcional)
 */
export const PROJECTS_PERSONAL = [
  {
    name: "my_projects.portfolio.name",
    description: "my_projects.portfolio.description",
    image: PortfolioImage,
    kills: [
      "React",
      "Tailwind CSS",
      "Typescript",
      "Netlify",
      "GitHub",
      "Figma",
    ],
    visitLink: "https://steveencues.netlify.app/",
    codeLink:
      "https://github.com/proyects-personals/starter-briefcase-steveen.git",
  },
  {
    name: "my_projects.neuroniando.name",
    description: "my_projects.neuroniando.description",
    image: NeuroniandoImage,
    kills: [
      "React Native",
      "AWS Amplify",
      "AWS Services",
      "DynamoDB",
      "Firebase",
      "Jira",
      "Typescript",
      "Java",
    ],
    visitLink:
      "https://play.google.com/store/apps/details?id=com.neuroniando.mobile",
  },
  {
    name: "my_projects.neuroniandoWeb.name",
    description: "my_projects.neuroniandoWeb.description",
    image: NeuroniandoWebImage,
    kills: [
      "React",
      "GitHub",
      "Typescript",
      "Tailwind",
      "AWS Router 53",
      "Cloudfire",
    ],
    visitLink: "https://www.neuroniando.com/",
  },
  {
    name: "my_projects.pichinchaBank.name",
    description: "my_projects.pichinchaBank.description",
    image: PichinchaBankImage,
    kills: [
      "React Native",
      "Typescript",
      "CSS",
      "Unit Tests with Jest",
      "GitHub",
    ],
    codeLink:
      "https://github.com/proyects-personals/starter-pichincha-test.git",
  },
  {
    name: "my_projects.travelEcuador.name",
    description: "my_projects.travelEcuador.description",
    image: TravelEcuadorImage,
    kills: [
      "React",
      "Tailwind CSS",
      "Typescript",
      "Figma",
      "AWS  Router 53",
      "Netfify",
      "Github",
    ],
    visitLink: "https://feriaecuadortravel.com/home",
  },
  {
    name: "my_projects.southAmericanBank.name",
    description: "my_projects.southAmericanBank.description",
    image: SouthAmericanBankImage,
    kills: ["HTML", "CSS", "Figma", "Github"],
    codeLink: "https://github.com/proyects-personals/banco-sudamericano.git",
  },
  {
    name: "my_projects.linkage.name",
    description: "my_projects.linkage.description",
    image: LinkageImage,
    kills: [
      "Angular",
      "PrimeNg",
      "Typescript",
      "Digitalocean",
      "Docker",
      "GitHub",
      "Api",
      "Figma",
      "Scrum",
      "Postgresql",
    ],
    codeLink: "https://github.com/vinculacion-yavirac/frontend",
  },
  {
    name: "my_projects.docsUnibe.name",
    description: "my_projects.docsUnibe.description",
    image: DocsUnibeImage,
    kills: [
      "React",
      "AWS Amplify",
      "Imagga API",
      "Docker",
      "GitHub",
      "AWS Services",
      "Tailwind css",
    ],
    codeLink: "https://github.com/unibe-projects/starter-unibe-docs",
  },
];
