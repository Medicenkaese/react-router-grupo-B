import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/fotter';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-lg">Cargando productos...</p>;
  if (error) return <p className="text-center text-red-500 text-lg">Error: {error}</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Catálogo de Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={product.image_link || '/api/placeholder/300/200?text=No+Image'}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-2">${product.price}</p>
                <p className="text-gray-600 truncate">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CatalogPage;