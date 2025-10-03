import React, { useState, useCallback } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../utils/faqData';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = useCallback((id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  }, []);

  return (
    <section id="perguntas" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-4">
            Perguntas <span className="text-natural-600">Frequentes</span>
          </h2>
          <p className="text-lg text-natural-700 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o guia Farmácia Natural em Casa
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item) => (
              <div 
                key={item.id} 
                className="bg-natural-50 rounded-xl overflow-hidden border border-natural-100 shadow-sm"
              >
                <button 
                  className="w-full text-left px-6 py-4 flex justify-between items-center"
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="font-medium text-natural-800">{item.question}</span>
                  <span className="ml-2 flex-shrink-0">
                    {openItems.includes(item.id) ? (
                      <Minus size={20} className="text-natural-600" />
                    ) : (
                      <Plus size={20} className="text-natural-600" />
                    )}
                  </span>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openItems.includes(item.id) ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-natural-700">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-natural-50 rounded-xl border border-natural-100 text-center">
            <p className="text-natural-700 mb-4">
              Não encontrou a resposta que procurava? Entre em contato conosco!
            </p>
            <a 
              href="mailto:receitasemcasa517@gmail.com" 
              className="inline-block text-natural-600 hover:text-natural-800 underline font-medium"
            >
              receitasemcasa517@gmail.com
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="#oferta" 
              onClick={useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                const offersSection = document.getElementById('oferta');
                if (offersSection) {
                  offersSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, [])}
              className="inline-block bg-natural-600 hover:bg-natural-700 text-white font-medium px-8 py-4 rounded-full transition-colors shadow-lg hover:shadow-xl text-lg"
            >
              Quero Garantir Meu Acesso Agora →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;