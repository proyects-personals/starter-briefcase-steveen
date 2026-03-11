import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";

import { useLanguage, useTheme } from "@application";

import type { ILanguageSwitcher, LanguageType } from "@domain";

/**
 * Selector de idioma con soporte para temas dinámicos.
 * * @description
 * Permite al usuario alternar entre los idiomas disponibles ("es", "en").
 * - **Estética:** Utiliza `backdrop-blur` y `color-mix` de CSS para lograr un efecto
 * de cristal translúcido que se adapta al fondo tanto en modo claro como oscuro.
 * - **UX:** Cierra automáticamente el menú desplegable tras seleccionar una opción.
 * * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} [props.className] - Clases adicionales de Tailwind para posicionamiento.
 * * @version 1.0.0
 * @returns {JSX.Element} Un botón con menú desplegable posicionado de forma absoluta.
 */
const LanguageSwitcherComponent: React.FC<ILanguageSwitcher> = ({
  className,
}) => {
  const { language, changeTranslate } = useLanguage();
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  const languages: LanguageType[] = ["es", "en"];

  return (
    <div className={`relative ${className ?? ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg backdrop-blur-md transition"
        style={{
          backgroundColor:
            theme.name === "dark"
              ? `color-mix(in oklch, ${theme.colors.surface} 70%, transparent)`
              : `color-mix(in oklch, ${theme.colors.background} 85%, transparent)`,
          border: `1px solid ${theme.colors.border}`,
          color: theme.colors.text,
        }}
      >
        <FaGlobe className="opacity-80" />
        <span className="text-sm font-medium uppercase">{language}</span>
      </button>

      {open && (
        <ul
          className="absolute right-0 mt-2 w-24 rounded-lg overflow-hidden backdrop-blur-xl z-50"
          style={{
            backgroundColor:
              theme.name === "dark"
                ? `color-mix(in oklch, ${theme.colors.surface} 80%, transparent)`
                : theme.colors.background,
            border: `1px solid ${theme.colors.border}`,
            boxShadow: theme.shadow.md,
          }}
        >
          {languages.map((lang) => (
            <li key={lang}>
              <button
                onClick={() => {
                  changeTranslate(lang);
                  setOpen(false);
                }}
                className="w-full px-3 py-2 text-left text-sm transition"
                style={{
                  backgroundColor:
                    language === lang ? theme.colors.muted : "transparent",
                  color: theme.colors.text,
                }}
              >
                {lang.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcherComponent;
