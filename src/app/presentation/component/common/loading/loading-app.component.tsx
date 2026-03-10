import { type JSX } from "react";

const LoadingAppComponent = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-16 h-16 rounded-full border-4 border-t-transparent animate-spin border-white" />
    </div>
  );
};

export default LoadingAppComponent;
