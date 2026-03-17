import { CardItemComponent } from "@/app";

import type { ICardComponent } from "@domain";
import type { JSX } from "react";

/**
 * Componente que renderiza una cuadrícula de tarjetas.
 * Cada elemento de la lista se transforma en una tarjeta individual
 * utilizando el componente CardItemComponent.
 *
 * @param {ICardComponent} props - Propiedades del componente.
 * @param {ICardItem[]} props.items - Lista de elementos a mostrar como tarjetas.
 * @param {IAppTheme} props.theme - Tema de la aplicación para estilos dinámicos.
 * @param {TFunction} props.translate - Función de traducción para textos.
 * @returns {JSX.Element} Cuadrícula responsive de tarjetas.
 */
const CardComponent = ({
  items,
  theme,
  translate,
}: ICardComponent): JSX.Element => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {items.map((item, index) => (
      <CardItemComponent
        key={item.name}
        item={item}
        index={index}
        theme={theme}
        translate={translate}
      />
    ))}
  </div>
);

export default CardComponent;
