import React from 'react';
import { Leaf, Mail, Phone, Shield, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-natural-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="text-natural-300 mr-2" size={24} />
              <span className="font-serif font-bold text-xl text-white">Farmácia Natural</span>
            </div>
            <p className="text-natural-200 mb-4">
              Guia completo de receitas naturais para tratar diversos problemas de saúde usando ingredientes comuns da sua cozinha.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/receitas_em_casa01/" target="_blank" rel="noopener noreferrer" className="text-natural-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-natural-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-natural-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="text-natural-300 hover:text-white transition-colors">Benefícios</a>
              </li>
              <li>
                <a href="#depoimentos" className="text-natural-300 hover:text-white transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#oferta" className="text-natural-300 hover:text-white transition-colors">Oferta Especial</a>
              </li>
              <li>
                <a href="#perguntas" className="text-natural-300 hover:text-white transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="text-natural-300 mr-2" />
                <a href="mailto:receitasemcasa517@gmail.com" className="text-natural-300 hover:text-white transition-colors">
                  receitasemcasa517@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-natural-300 mr-2" />
                <a href="tel:+554799252335" className="text-natural-300 hover:text-white transition-colors">
                  (47) 99252-3335
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle size={16} className="text-natural-300 mr-2" />
                <a href="https://wa.me/554799252335" target="_blank" rel="noopener noreferrer" className="text-natural-300 hover:text-white transition-colors">
                  WhatsApp: (47) 99252-3335
                </a>
              </li>
            </ul>
          </div>
          
          {/* Guarantee */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Segurança</h3>
            <div className="flex items-start mb-4">
              <Shield size={20} className="text-natural-300 mr-2 flex-shrink-0 mt-1" />
              <p className="text-natural-300">
                Garantia de 7 dias ou seu dinheiro de volta sem perguntas.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-natural-300 hover:text-white transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-natural-300 hover:text-white transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-natural-800 text-center">
          <p className="text-natural-400 text-sm">
            &copy; {new Date().getFullYear()} Farmácia Natural em Casa. Todos os direitos reservados.
          </p>
          <p className="text-natural-500 text-xs mt-2">
            Este produto não substitui o parecer médico profissional. Consulte seu médico antes de fazer alterações no seu tratamento.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;