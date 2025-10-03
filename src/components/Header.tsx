import React, { useState, useEffect, useCallback } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let rafId: number;
    let lastScrollY = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScrollY) < 5) return;

      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        setIsScrolled(scrollY > 50);
        lastScrollY = scrollY;
        rafId = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-3 md:py-4'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Leaf className="text-natural-600 mr-2" size={24} aria-hidden="true" />
          <span className="font-serif font-bold text-natural-800 text-xl md:text-2xl">Farmácia Natural</span>
        </div>

        <nav className="hidden md:flex gap-6 lg:gap-8 items-center" role="navigation" aria-label="Menu principal">
          <a href="#beneficios" className="text-natural-700 hover:text-natural-900 transition-colors text-base lg:text-lg font-medium">Benefícios</a>
          <a href="#depoimentos" className="text-natural-700 hover:text-natural-900 transition-colors text-base lg:text-lg font-medium">Depoimentos</a>
          <a href="#perguntas" className="text-natural-700 hover:text-natural-900 transition-colors text-base lg:text-lg font-medium">Dúvidas</a>
          <a 
            href="#oferta" 
            className="bg-natural-600 hover:bg-natural-700 text-white px-5 lg:px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-natural-500 focus:ring-offset-2 transform hover:scale-105"
          >
            Quero Receber Agora
          </a>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu} 
            className="text-natural-800 p-3 hover:bg-natural-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-natural-500 focus:ring-offset-2"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 right-0 border-t border-gray-100" role="navigation" aria-label="Menu mobile">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a 
              href="#beneficios" 
              className="text-natural-700 py-3 border-b border-gray-100 text-lg font-medium"
              onClick={closeMenu}
            >
              Benefícios
            </a>
            <a 
              href="#depoimentos" 
              className="text-natural-700 py-3 border-b border-gray-100 text-lg font-medium"
              onClick={closeMenu}
            >
              Depoimentos
            </a>
            <a 
              href="#perguntas" 
              className="text-natural-700 py-3 border-b border-gray-100 text-lg font-medium"
              onClick={closeMenu}
            >
              Dúvidas
            </a>
            <a 
              href="#oferta" 
              className="bg-natural-600 text-white py-4 rounded-full font-semibold text-center shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-natural-500 focus:ring-offset-2 mt-2"
              onClick={closeMenu}
            >
              Quero Receber Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;