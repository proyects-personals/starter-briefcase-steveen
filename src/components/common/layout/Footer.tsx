import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Todos los derechos reservados. Propiedad
          intelectual de <strong>Steveen Ordoñez</strong>.
        </p>
        <a
          href="https://www.termsfeed.com/live/d2d4dcfd-2e6a-4888-8679-131e1f48afb2"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 md:mt-0 text-orange-400 hover:text-orange-300 text-sm"
        >
          Ver detalles legales
        </a>
      </div>
    </footer>
  );
};

export default Footer;
