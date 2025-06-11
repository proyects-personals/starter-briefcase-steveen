import React from 'react';

type TitleComponentProps = {
  title: string;
};
const TitleComponent: React.FC<TitleComponentProps> = ({
  title,
}: TitleComponentProps) => {
  return (
    <div className="container mx-auto px-4 mb-16 relative z-10 space-y-4 sm:space-y-8">
      <h2 className="text-center text-xl sm:text-6xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
          {title}
        </span>
      </h2>
      <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
    </div>
  );
};
export default TitleComponent;
