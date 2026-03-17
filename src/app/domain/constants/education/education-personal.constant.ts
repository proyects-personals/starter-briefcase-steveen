import { UdemyImage, UnibeImage, UnirImage, YaviracImage } from "@/assets";

import { UrlEnum, type IBannerItem } from "@domain";

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
    link: UrlEnum.UNIBE,
    description: "my_education.unibe.ing.description",
    finalized: "my_education.unibe.ing.finalized",
  },
  {
    title: "my_education.unibe.maestria.title",
    image: UnibeImage,
    link: UrlEnum.UNIBE,
    description: "my_education.unibe.maestria.description",
    finalized: "my_education.unibe.maestria.finalized",
  },
  {
    title: "my_education.unir.maestria_devops.title",
    image: UnirImage,
    link: UrlEnum.UNIR,
    description: "my_education.unir.maestria_devops.description",
    finalized: "my_education.unir.maestria_devops.finalized",
  },
  {
    title: "my_education.yavirac.tec.title",
    image: YaviracImage,
    link: UrlEnum.YAVIRAC,
    description: "my_education.yavirac.tec.description",
    finalized: "my_education.yavirac.tec.finalized",
  },
  {
    title: "my_education.udemy.angular_complete.title",
    image: UdemyImage,
    link: UrlEnum.ANGULAR_COMPLETE,
    description: "my_education.udemy.angular_complete.description",
    finalized: "my_education.udemy.angular_complete.finalized",
  },
  {
    title: "my_education.udemy.csharp_oop.title",
    image: UdemyImage,
    link: UrlEnum.CSHARP_OOP,
    description: "my_education.udemy.csharp_oop.description",
    finalized: "my_education.udemy.csharp_oop.finalized",
  },
  {
    title: "my_education.udemy.angular_basics.title",
    image: UdemyImage,
    link: UrlEnum.ANGULAR_BASICS,
    description: "my_education.udemy.angular_basics.description",
    finalized: "my_education.udemy.angular_basics.finalized",
  },
  {
    title: "my_education.udemy.aws_solutions.title",
    image: UdemyImage,
    link: UrlEnum.AWS_SOLUTIONS,
    description: "my_education.udemy.aws_solutions.description",
    finalized: "my_education.udemy.aws_solutions.finalized",
  },
];
