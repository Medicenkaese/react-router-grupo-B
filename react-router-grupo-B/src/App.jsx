// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/fotter';
import HomePage from './pages/Home'; 
import CatalogPage from './pages/CatalogPage';

function App() {
  return (
    <Router>
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Página de inicio */}
        <Route path="/catalogo" element={<CatalogPage />} /> {/* Página de catálogo */}
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;