import React from "react";
import { useNavigate } from "react-router-dom";

import { useTheme } from "@application";
import { APP_ROUTES } from "@domain";

interface HeaderLogoProps {
  isAutentificated: boolean;
}

const HeaderLogoComponent: React.FC<HeaderLogoProps> = ({
  isAutentificated,
}) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div
      className="cursor-pointer font-bold text-xl md:text-2xl"
      style={{ color: theme.colors.primary }}
      onClick={() =>
        navigate(isAutentificated ? APP_ROUTES.HOME : APP_ROUTES.LOGIN)
      }
    >
      LOGO
    </div>
  );
};

export default HeaderLogoComponent;
