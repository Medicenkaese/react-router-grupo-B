import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-pink-100 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-pink-600">BeautyGlow</div>
        
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-700 hover:text-pink-600">Inicio</Link></li>
            <li><Link to="/catalogo" className="text-gray-700 hover:text-pink-600">Productos</Link></li>
            <li><a href="#" className="text-gray-700 hover:text-pink-600">Ofertas</a></li>
            <li><a href="#" className="text-gray-700 hover:text-pink-600">Contacto</a></li>
          </ul>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-pink-600">
            <Search size={20} />
          </button>
          <button className="text-gray-700 hover:text-pink-600">
            <ShoppingCart size={20} />
          </button>
          <button className="text-gray-700 hover:text-pink-600">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
