import { UdemyImage, UnibeImage, UnirImage, YaviracImage } from "@/assets";

import type { IBannerItem } from "@/app/domain";

/**
 * @description Lista de elementos que representan los banners de educación.
 * Cada elemento contiene información sobre el título, imagen, enlace, descripción
 * y estado de finalización de cada curso o institución.
 * @property title - Clave de traducción del título del curso o institución
 * @property image - Imagen representativa de la institución o curso
 * @property link - URL al sitio oficial o certificado
 * @property description - Clave de traducción de la descripción
 * @property finalized - Clave de traducción que indica si el curso está finalizado
 */
export const BANNER_ITEM: IBannerItem[] = [
  {
    title: "my_education.unibe.ing.title",
    image: UnibeImage,
    link: "https://unibe.edu.ec/",
    description: "my_education.unibe.ing.description",
    finalized: "my_education.unibe.ing.finalized",
  },
  {
    title: "my_education.unibe.maestria.title",
    image: UnibeImage,
    link: "https://unibe.edu.ec/",
    description: "my_education.unibe.maestria.description",
    finalized: "my_education.unibe.maestria.finalized",
  },
  {
    title: "my_education.unir.maestria_devops.title",
    image: UnirImage,
    link: "https://usa.unir.net/",
    description: "my_education.unir.maestria_devops.description",
    finalized: "my_education.unir.maestria_devops.finalized",
  },
  {
    title: "my_education.yavirac.tec.title",
    image: YaviracImage,
    link: "https://yavirac.edu.ec/carreras-vigentes/",
    description: "my_education.yavirac.tec.description",
    finalized: "my_education.yavirac.tec.finalized",
  },
  {
    title: "my_education.udemy.angular_complete.title",
    image: UdemyImage,
    link: "https://www.udemy.com/certificate/UC-f31d1b76-f1e8-4414-8065-fab15e694282/",
    description: "my_education.udemy.angular_complete.description",
    finalized: "my_education.udemy.angular_complete.finalized",
  },
  {
    title: "my_education.udemy.csharp_oop.title",
    image: UdemyImage,
    link: "https://www.udemy.com/certificate/UC-26b68d2c-7052-4dde-a635-59a6c9f3cc69/",
    description: "my_education.udemy.csharp_oop.description",
    finalized: "my_education.udemy.csharp_oop.finalized",
  },
  {
    title: "my_education.udemy.angular_basics.title",
    image: UdemyImage,
    link: "https://www.udemy.com/certificate/UC-c319a8c8-fa76-42f7-bffc-1294b527b841/",
    description: "my_education.udemy.angular_basics.description",
    finalized: "my_education.udemy.angular_basics.finalized",
  },
  {
    title: "my_education.udemy.aws_solutions.title",
    image: UdemyImage,
    link: "https://www.udemy.com/certificate/UC-a4378285-58d7-4719-985d-290244bbf224/",
    description: "my_education.udemy.aws_solutions.description",
    finalized: "my_education.udemy.aws_solutions.finalized",
  },
];
