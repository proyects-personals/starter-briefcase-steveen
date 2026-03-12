import {
  JetmindImage,
  MadjsImage,
  ManticorelabsImage,
  TcsImage,
} from "@assets";

/**
 * @description Lista de experiencias laborales.
 * Cada elemento contiene información sobre la empresa, descripción de la experiencia
 * y la imagen representativa de la compañía.
 *
 * @property id - Identificador único de la experiencia laboral
 * @property title - Clave de traducción del título o nombre de la empresa
 * @property description - Clave de traducción de la descripción de la experiencia
 * @property image - Imagen representativa de la empresa
 */
export const WORK_EXPERIENCE = [
  {
    id: 1,
    title: "work_experience.jetmind.title",
    description: "work_experience.jetmind.description",
    image: JetmindImage,
  },
  {
    id: 2,
    title: "work_experience.madjs.title",
    description: "work_experience.madjs.description",
    image: MadjsImage,
  },
  {
    id: 3,
    title: "work_experience.manticorelabs.title",
    description: "work_experience.manticorelabs.description",
    image: ManticorelabsImage,
  },
  {
    id: 4,
    title: "work_experience.tcs.title",
    description: "work_experience.tcs.description",
    image: TcsImage,
  },
];
