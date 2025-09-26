import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, BookOpen, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state with small delay to ensure proper rendering
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById('conhecimento');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-16 pb-12 md:pt-20 md:pb-20 bg-gradient-to-b from-natural-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-4 md:pt-8">
          <h1 
            ref={headlineRef}
            className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-natural-900 mb-4 md:mb-6 leading-tight px-2 transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Transforme sua saúde com <span className="text-natural-600">protocolos naturais</span> de 30 dias - <span className="text-earth-700">Recupere sua energia sem depender de medicamentos</span>
          </h1>
          
          <p 
            ref={subheadlineRef}
            className={`text-lg md:text-xl lg:text-2xl text-natural-800 mb-6 md:mb-8 px-2 leading-relaxed transition-opacity duration-500 delay-100 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Viva com mais qualidade e menos dor! Descubra o guia natural que já transformou a vida de mais de 27.000 brasileiros, ajudando a dormir melhor, controlar diabetes, reduzir ansiedade e muito mais — usando apenas ingredientes da sua cozinha.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 max-w-3xl mx-auto" role="region" aria-label="Estatísticas">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-natural-100 touch-optimized">
              <div className="flex items-center justify-center mb-2">
                <Users className="text-natural-600 mr-2" size={28} aria-hidden="true" />
                <span className="text-3xl md:text-4xl font-bold text-natural-800">27k+</span>
              </div>
              <p className="text-natural-700 text-base md:text-lg font-medium">Famílias Transformadas</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-natural-100 touch-optimized">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="text-natural-600 mr-2" size={28} aria-hidden="true" />
                <span className="text-3xl md:text-4xl font-bold text-natural-800">3000+</span>
              </div>
              <p className="text-natural-700 text-base md:text-lg font-medium">Receitas Naturais</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-natural-100 touch-optimized">
              <div className="flex items-center justify-center mb-2">
                <Award className="text-natural-600 mr-2" size={28} aria-hidden="true" />
                <span className="text-3xl md:text-4xl font-bold text-natural-800">98%</span>
              </div>
              <p className="text-natural-700 text-base md:text-lg font-medium">Satisfação</p>
            </div>
          </div>
          
          <div 
            ref={ctaRef} 
            className={`space-y-4 transition-opacity duration-500 delay-200 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#oferta" 
                onClick={handleScrollToOffers}
                className="btn-mobile inline-block bg-natural-600 hover:bg-natural-700 text-white rounded-full transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-natural-500 focus:ring-offset-2 transform hover:scale-105 touch-optimized"
                aria-label="Ir para oferta especial"
              >
                Quero Transformar Minha Saúde →
              </a>
              
              <a 
                href="#conhecimento" 
                onClick={handleScrollToNext}
                className="btn-mobile inline-block border-2 border-natural-600 text-natural-600 hover:bg-natural-600 hover:text-white rounded-full transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-natural-500 focus:ring-offset-2 touch-optimized"
                aria-label="Saber mais sobre o produto"
              >
                <ArrowDown size={18} className="inline mr-2" aria-hidden="true" />
                Saber Mais
              </a>
            </div>
            
            <p className="text-natural-600 text-base md:text-lg font-medium mt-4">
              + de 27.000 famílias já estão utilizando estes remédios naturais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;