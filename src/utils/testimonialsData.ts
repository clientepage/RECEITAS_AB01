export interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string; // URL to the image
  quote: string;
  condition: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    location: "São Paulo, SP",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    quote: "Em 3 semanas seguindo as receitas do chá para diabetes, minha glicemia reduziu de 180 para 120. Meu médico ficou impressionado e até reduziu minha medicação!",
    condition: "Diabetes Tipo 2"
  },
  {
    id: 2,
    name: "João Pereira",
    location: "Belo Horizonte, MG",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    quote: "Sofria com insônia há anos. Desde que comecei a preparar a mistura natural antes de dormir, consigo ter 7 horas de sono tranquilo sem precisar de remédios.",
    condition: "Insônia Crônica"
  },
  {
    id: 3,
    name: "Ana Costa",
    location: "Rio de Janeiro, RJ",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    quote: "Depois de 2 meses usando as receitas para ansiedade, consegui reduzir minhas crises e retomar o controle da minha vida. Muito obrigada!",
    condition: "Ansiedade"
  },
  {
    id: 4,
    name: "Carlos Ferreira",
    location: "Porto Alegre, RS",
    image: "https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg",
    quote: "Meu colesterol estava em 280. Seguindo as dicas do guia por 45 dias, consegui baixar para 190 sem precisar aumentar a medicação. Até perdi 5kg nesse processo!",
    condition: "Colesterol Alto"
  }
];