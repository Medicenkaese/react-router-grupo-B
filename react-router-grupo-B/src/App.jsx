// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/fotter';
import HomePage from './pages/Home'; 
import CatalogPage from './pages/CatalogPage';
import Contact from './pages/Contact';
import SobreNosotros from './pages/SobreNosotros';
function App() {
  return (
    <Router>
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Página de inicio */}
        <Route path="/catalogo" element={<CatalogPage />} /> {/* Página de catálogo */}
        <Route path="/contact" element={<Contact />} /> {/* Página de contactos */}
        <Route path="/SobreNosotros" element={<SobreNosotros />} /> {/* Página de informacion empresa */}
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;