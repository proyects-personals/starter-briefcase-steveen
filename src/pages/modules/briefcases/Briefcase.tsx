import React from 'react';
import { useLanguage } from '../../../hook/lenguage';

const Briefcase: React.FC = () => {
  const { translations } = useLanguage();
  return (
    <div>
       <h2>{translations['briefcase.title']}</h2> 
    </div>
  );
};

export default Briefcase;
