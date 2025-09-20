import React from 'react';
import { ArrowDown } from 'lucide-react';

const NaturalRemediesList: React.FC = () => {
  const remedies = [
    "Remédio natural para Hipertensão",
    "Remédio natural para Diabetes",
    "Remédio natural para Obesidade",
    "Remédio natural para Menopausa",
    "Remédio natural para Varizes",
    "Remédio natural para Celulite",
    "Remédio natural para Queda Capilar",
    "Remédio natural para Flacidez",
    "Remédio natural para Micose",
    "Remédio natural para Endometriose",
    "Remédio natural para Depressão",
    "Remédio natural para Ansiedade",
    "Remédio natural para Sinusite",
    "Remédio natural para Asma",
    "Remédio natural para Artrite",
    "Remédio natural para Alzheimer",
    "Remédio natural para Parkinson",
    "Remédio natural para Doença Renal Crônica",
    "Remédio natural para Doença Pulmonar Crônica",
    "Remédio natural para Osteoporose",
    "Remédio natural para Dor Muscular",
    "Remédio natural para Dor de Dente",
    "Remédio natural para Dor no Pescoço",
    "Remédio natural para Dor de Garganta",
    "Remédio natural para Dor Abdominal",
    "Remédio natural para Dor nos Pés",
    "Remédio natural para Dor no Punho",
    "Remédio natural para Dor na Coluna Cervical",
    "Remédio natural para Dor Ciática",
    "Remédio natural para Dor na Coluna Lombar",
    "Remédio natural para Dor de Artrite",
    "Remédio natural para Dor de Enxaqueca",
    "Remédio natural para Dor de Cólica Menstrual",
    "Remédio natural para Dor Neuropática",
    "Remédio natural para Mau Hálito",
    "Remédio natural para Acne",
    "Remédio natural para Parar de Fumar",
    "Remédio natural para Transtorno Bipolar",
    "Remédio natural para Transtornos Alimentares",
    "Remédio natural para Transtorno de Ansiedade",
    "Remédio natural para Transtorno de Pânico",
    "Remédio natural para Déficit de Atenção e Hiperatividade",
    "Remédio natural para Insônia",
    "Remédio natural para Hepatite C",
    "Remédio natural para Tuberculose",
    "Remédio natural para Gripe",
    "Remédio natural para Estresse",
    "Remédio natural para Libido",
    "Remédio natural para Constipação",
    "Remédio natural para Infecção de Urina",
    "Remédio natural para Resfriado",
    "Remédio natural para Febre",
    "Remédio natural para Dor de Cabeça",
    "Remédio natural para Dor nas Costas",
    "Remédio natural para Dor nas Pernas",
    "Remédio natural para Dor nos Ombros",
    "Remédio natural para Dor nos Joelhos",
    "Remédio natural para Dor nas Articulações",
    "Remédio natural para Dor no Quadril",
    "Remédio natural para Dor de Ouvido",
    "Remédio natural para Hemorroida",
    "Remédio natural para TPM",
    "Remédio natural para Alergias",
    "Remédio natural para Cãibras Musculares",
    "Remédio natural para Retenção de Liquido",
    "Remédio natural para Pele Oleosa",
    "Remédio natural para Olheiras",
    "Remédio natural para Azia"
  ];

  const handleScrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById('galeria');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="receitas-lista" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-natural-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-4 leading-tight">
            Veja a lista de <span className="text-natural-600">Garrafadas Naturais</span> que vamos entregar para você, todas com base de <span className="text-earth-700">Ervas Medicinais</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 mb-8 md:mb-12">
            {remedies.map((remedy, index) => (
              <div 
                key={index} 
                className="flex items-center bg-white rounded-lg p-3 md:p-4 shadow-sm border border-natural-100 hover:shadow-md transition-shadow"
              >
                <span className="text-natural-600 mr-2 md:mr-3 text-lg">🌿</span>
                <span className="text-natural-800 text-sm md:text-base font-medium">{remedy}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <a 
                href="#oferta" 
                onClick={handleScrollToOffers}
                className="inline-block bg-natural-600 hover:bg-natural-700 text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-full transition-colors shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                Quero Acesso a Todas as Receitas →
              </a>
              
              <a 
                href="#galeria" 
                onClick={handleScrollToNext}
                className="inline-block border-2 border-natural-600 text-natural-600 hover:bg-natural-600 hover:text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
              >
                <ArrowDown size={16} className="inline mr-2" />
                Ver Ingredientes
              </a>
            </div>
            <p className="text-natural-600 text-sm">
              + de 3.000 receitas naturais para transformar sua saúde
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaturalRemediesList;