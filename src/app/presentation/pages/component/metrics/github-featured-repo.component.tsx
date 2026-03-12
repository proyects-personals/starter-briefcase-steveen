import { motion } from "framer-motion";
import React from "react";
import { FaCode } from "react-icons/fa";

import type { IGitHubFeaturedRepo } from "@domain";

const GitHubFeaturedRepoComponent: React.FC<IGitHubFeaturedRepo> = ({
  repo,
  theme,
}) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative overflow-hidden rounded-3xl p-6 border "
    style={{
      backgroundColor: theme.colors.backgroundGlass,
      borderColor: theme.colors.borderGlass,
      backdropFilter: "blur(20px)",
    }}
  >
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      {/* Info principal del repo */}
      <div>
        <h3
          className="flex items-center gap-2"
          style={{
            color: theme.colors.primary,
            fontSize: theme.font.sizes.lg,
            fontWeight: theme.font.weights.bold,
          }}
        >
          <FaCode /> {repo.name}
        </h3>

        <p
          className="leading-relaxed italic mt-1"
          style={{
            color: theme.colors.text,
            fontSize: theme.font.sizes.sm,
            opacity: 0.7,
          }}
        >
          "{repo.description}"
        </p>

        <div
          className="flex gap-4 mt-2"
          style={{
            fontSize: theme.font.sizes.xs,
            fontWeight: theme.font.weights.medium,
            color: theme.colors.textSecondary,
          }}
        >
          <span className="flex items-center gap-1">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: repo.langColor }}
            />
            {repo.language}
          </span>
          <span className="flex items-center gap-1">⭐ {repo.stars} stars</span>
        </div>
      </div>

      {/* Última actualización */}
      <div className="flex flex-col items-end text-right mt-4 md:mt-0">
        <span
          style={{
            fontSize: theme.font.sizes.xs,
            fontWeight: theme.font.weights.medium,
            color: theme.colors.textSecondary,
            textTransform: "uppercase",
            opacity: 0.5,
          }}
        >
          Last Update
        </span>
        <span
          style={{
            fontSize: theme.font.sizes.sm,
            fontFamily: "monospace",
            color: theme.colors.text,
          }}
        >
          {repo.lastCommit}
        </span>
      </div>
    </div>
  </motion.div>
);

export default GitHubFeaturedRepoComponent;
