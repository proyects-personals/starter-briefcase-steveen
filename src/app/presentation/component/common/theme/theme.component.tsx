import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import { useTheme } from "@application";

interface Props {
  className?: string;
}

const ThemeSwitcherComponent: React.FC<Props> = ({ className }) => {
  const { themeName, setTheme, theme } = useTheme();

  const isDark = themeName === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg backdrop-blur-md transition-all ${className ?? ""}`}
      style={{
        backgroundColor:
          theme.name === "dark"
            ? `color-mix(in oklch, ${theme.colors.surface} 70%, transparent)`
            : `color-mix(in oklch, ${theme.colors.background} 85%, transparent)`,
        border: `1px solid ${theme.colors.border}`,
        color: theme.colors.text,
      }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaMoon style={{ color: theme.colors.primary }} />
      ) : (
        <FaSun style={{ color: theme.colors.primary }} />
      )}
      <span className="text-sm font-medium capitalize">{themeName}</span>
    </button>
  );
};

export default ThemeSwitcherComponent;
