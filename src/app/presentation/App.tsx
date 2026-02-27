import { useLanguage } from "@application";

import type { JSX } from "react";

export default function App(): JSX.Element {
  const { t, changeTranslate } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl p-8 shadow-2xl text-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          {t("scaffolding.page.title")}
        </h1>

        <p className="text-slate-300 mb-8">
          {t("scaffolding.page.description")}
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => changeTranslate("es")}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            ES
          </button>

          <button
            onClick={() => changeTranslate("en")}
            className="px-5 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition"
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
}
