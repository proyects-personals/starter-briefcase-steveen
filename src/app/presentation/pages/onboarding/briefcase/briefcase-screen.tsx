import { motion } from "framer-motion";
import React from "react";

import { AnimatedBackgroundComponent, CarouselComponent } from "@/app";
import { useTheme, useLanguage } from "@/app/application";
import { WORKEXPERIENCE } from "@domain";

const WelcomePortfolio: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="col-span-full w-full relative flex flex-col items-center justify-center pt-0 md:pt-22">
      <AnimatedBackgroundComponent
        theme={theme}
        width="100%"
        height="100%"
        opacity={4}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ color: theme.colors.text }}
        >
          {t("welcome.title")}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ color: theme.colors.primary, lineHeight: 1.4 }}
        >
          {t("welcome.subtitle")}
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-justify mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{ color: theme.colors.textSecondary, lineHeight: 1.7 }}
        >
          {t("welcome.description")}
        </motion.p>

        <motion.button
          className="px-6 py-3 rounded-lg font-medium shadow-md transition-all mb-8"
          style={{
            backgroundColor: theme.colors.primary,
            color: theme.colors.white,
          }}
          whileHover={{
            backgroundColor: theme.colors.primaryHover,
            scale: 1.05,
            boxShadow: `0 8px 20px ${theme.shadow.md}`,
          }}
          whileTap={{ scale: 0.95 }}
        >
          {t("welcome.buttonDownloadCV")}
        </motion.button>
      </div>

      <div className="w-full h-px bg-gray-300 dark:bg-zinc-700 mb-8" />

      <div className="w-full py-16 bg-transparent text-center">
        <motion.h2
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ color: theme.colors.text }}
        >
          {t("welcome.work_experience")}
        </motion.h2>

        <CarouselComponent
          items={WORKEXPERIENCE}
          height="450px"
          theme={theme}
          translate={t}
        />
      </div>
    </div>
  );
};

export default WelcomePortfolio;
