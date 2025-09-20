import React from 'react';
import { TrendingUp, Users, Star, CheckCircle, ArrowDown } from 'lucide-react';

const ScienceSection: React.FC = () => {
  const handleScrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById('receitas-lista');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const results = [
    {
      condition: "Diabetes",
      improvement: "Redução de 35% na glicemia",
      users: "2.847 pessoas"
    },
    {
      condition: "Insônia",
      improvement: "89% dormem melhor",
      users: "1.923 pessoas"
    },
    {
      condition: "Ansiedade",
      improvement: "67% menos sintomas",
      users: "3.156 pessoas"
    }
  ];

  return (
    <section id="ciencia" className="py-8 md:py-16 bg-natural-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-natural-800 mb-4">
              Resultados <span className="text-natural-600">Comprovados</span>
            </h2>
            <p className="text-lg text-natural-700">
              Mais de 27.000 pessoas já transformaram sua saúde
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {results.map((result, index) => (
              <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-natural-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-natural-600" size={24} />
                </div>
                <h3 className="font-bold text-natural-800 text-lg mb-2">{result.condition}</h3>
                <p className="text-natural-600 font-bold text-xl mb-2">{result.improvement}</p>
                <div className="flex items-center justify-center gap-2">
                  <Users className="text-natural-600" size={16} />
                  <span className="text-natural-700 text-sm">{result.users}</span>
                  <Star className="text-yellow-500 ml-2" size={16} />
                  <span className="text-natural-700 text-sm">4.9/5</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-natural-600 to-earth-600 rounded-xl p-6 md:p-8 text-white text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Garantia Total de 7 Dias
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Se você não ver melhorias em 7 dias, devolvemos 100% do seu dinheiro
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 rounded-lg p-4">
                <CheckCircle className="mx-auto mb-2 text-white" size={24} />
                <h4 className="font-bold mb-1">Receitas Testadas</h4>
                <p className="text-white/80 text-sm">Cada receita foi validada por centenas de pessoas</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <CheckCircle className="mx-auto mb-2 text-white" size={24} />
                <h4 className="font-bold mb-1">Suporte Completo</h4>
                <p className="text-white/80 text-sm">Tire dúvidas via WhatsApp durante o tratamento</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <CheckCircle className="mx-auto mb-2 text-white" size={24} />
                <h4 className="font-bold mb-1">Acesso Vitalício</h4>
                <p className="text-white/80 text-sm">Receba atualizações gratuitas para sempre</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="#oferta" 
              onClick={handleScrollToOffers}
              className="inline-block bg-natural-600 hover:bg-natural-700 text-white font-medium px-8 py-4 rounded-full transition-colors shadow-lg hover:shadow-xl text-lg mr-4"
            >
              Quero Garantir Meus Resultados →
            </a>
            
            <a 
              href="#receitas-lista" 
              onClick={handleScrollToNext}
              className="inline-block border-2 border-natural-600 text-natural-600 hover:bg-natural-600 hover:text-white font-medium px-6 py-3 rounded-full transition-all duration-300 text-base"
            >
              <ArrowDown size={18} className="inline mr-2" />
              Ver Receitas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;