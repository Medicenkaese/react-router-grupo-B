import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-gray-700 bg-pink-100 shadow-inner ">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Acerca de</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-600">Nuestra Historia</a></li>
              <li><a href="#" className="hover:text-pink-600">Equipo</a></li>
              <li><a href="#" className="hover:text-pink-600">Carreras</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Ayuda</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-600">FAQ</a></li>
              <li><a href="#" className="hover:text-pink-600">Envíos</a></li>
              <li><a href="#" className="hover:text-pink-600">Devoluciones</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
            <ul className="space-y-2">
              <li>Email: info@beautyglow.com</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>Dirección: Calle Belleza 123, Ciudad</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-pink-600"><Facebook size={24} /></a>
              <a href="#" className="text-gray-700 hover:text-pink-600"><Instagram size={24} /></a>
              <a href="#" className="text-gray-700 hover:text-pink-600"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-gray-200">
          <p>&copy; 2024 BeautyGlow. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;