export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string; // This will be the Lucide icon name
}

export const benefitsData: Benefit[] = [
  {
    id: 1,
    title: "Durma melhor sem remédios",
    description: "Receitas naturais que acalmam o sistema nervoso e preparam o corpo para um sono reparador, sem efeitos colaterais.",
    icon: "Moon"
  },
  {
    id: 2,
    title: "Controle sua glicemia naturalmente",
    description: "Ervas e especiarias que ajudam a regular os níveis de açúcar no sangue e complementam seu tratamento para diabetes.",
    icon: "Droplets"
  },
  {
    id: 3,
    title: "Reduza a ansiedade com ingredientes naturais",
    description: "Combinações de ervas que acalmam a mente, reduzem o estresse e promovem bem-estar emocional no dia a dia.",
    icon: "Heart"
  },
  {
    id: 4,
    title: "Melhore sua digestão",
    description: "Receitas que aliviam desconfortos digestivos, melhoram a absorção de nutrientes e promovem saúde intestinal.",
    icon: "Apple"
  },
  {
    id: 5,
    title: "Alivie dores naturalmente",
    description: "Compostos anti-inflamatórios naturais que reduzem dores articulares, musculares e desconfortos crônicos.",
    icon: "Sparkles"
  },
  {
    id: 6,
    title: "Reduza o colesterol alto",
    description: "Ingredientes que ajudam a equilibrar os níveis lipídicos no sangue e promovem saúde cardiovascular.",
    icon: "HeartPulse"
  }
];