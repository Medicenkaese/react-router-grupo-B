import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">Bienvenido a BeautyGlow</h1>
      <p className="text-lg text-gray-700 mb-4">
        Descubre nuestros productos y ofertas exclusivas para realzar tu belleza. 
        Explora nuestra colección y encuentra lo que necesitas para brillar.
      </p>
      <Link to="/catalogo"> {/* Envuelve el botón con Link */}
        <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700">
          Ver Productos
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
