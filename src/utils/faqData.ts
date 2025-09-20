export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "O que é a Farmácia Natural em Casa?",
    answer: "A Farmácia Natural em Casa é um guia digital completo com receitas naturais para tratar diversos problemas de saúde como diabetes, insônia, ansiedade, colesterol alto, dores e problemas digestivos, utilizando ingredientes comuns que você já tem na sua cozinha."
  },
  {
    id: 2,
    question: "Estas receitas substituem medicamentos prescritos?",
    answer: "Não. Nossas receitas naturais foram desenvolvidas como complemento ao tratamento médico tradicional. Sempre consulte seu médico antes de fazer qualquer alteração no seu regime de medicamentos. Nosso guia oferece alternativas naturais que podem auxiliar e complementar seus tratamentos atuais."
  },
  {
    id: 3,
    question: "Como recebo o material após a compra?",
    answer: "Após a confirmação do pagamento, você receberá imediatamente um e-mail com as instruções de acesso ao seu guia digital. Todo o material está disponível em formato PDF que pode ser acessado em qualquer dispositivo (computador, tablet ou smartphone)."
  },
  {
    id: 4,
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os resultados variam de pessoa para pessoa e dependem da condição tratada. Muitos usuários relatam melhorias em seus sintomas entre 7 e 30 dias de uso consistente das receitas. Para condições crônicas, o uso contínuo por períodos mais longos pode ser necessário para alcançar benefícios ótimos."
  },
  {
    id: 5,
    question: "As receitas funcionam para todas as idades?",
    answer: "A maioria das receitas é segura para adultos de todas as idades. No entanto, o guia inclui orientações específicas para idosos, gestantes e crianças quando aplicável. Sempre consulte um profissional de saúde antes de usar remédios naturais em crianças, gestantes ou durante a amamentação."
  },
  {
    id: 6,
    question: "Como funciona a garantia de 7 dias?",
    answer: "Oferecemos uma garantia incondicional de satisfação de 7 dias. Se você não estiver satisfeito com o material por qualquer motivo, basta nos enviar um e-mail dentro desse período e faremos o reembolso integral do seu investimento, sem perguntas ou complicações."
  },
  {
    id: 7,
    question: "Posso utilizar o guia se eu tiver alergias alimentares?",
    answer: "Sim. O guia inclui informações sobre alérgenos comuns e sugestões de substituições para ingredientes que possam causar reações alérgicas. Cada receita também possui variações que podem ser adaptadas para diferentes necessidades e restrições alimentares."
  }
];