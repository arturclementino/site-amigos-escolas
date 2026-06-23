export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  progress?: {
    goal: number;
    raised: number;
  };
  link: string;
}

export const projects: Project[] = [
  {
    id: "escola-betel",
    title: "Escola Betel",
    category: "Educação",
    description: "Nossa base educacional, oferecendo ensino de excelência para mais de 800 alunos na região de Cacine.",
    image: "/images/projetos/escola-betel.jpg",
    link: "/projetos/escola-betel"
  },
  {
    id: "casa-estudante",
    title: "Casa do Estudante",
    category: "Moradia",
    description: "Acolhimento para alunos que vivem em tabancas distantes, garantindo acesso contínuo à educação.",
    image: "/images/projetos/casa-estudante.jpg",
    link: "/projetos/casa-do-estudante"
  },
  {
    id: "radio-voz-paz",
    title: "Rádio Voz de Paz",
    category: "Comunicação",
    description: "Ferramenta fundamental para integração comunitária, informação e educação à distância.",
    image: "/images/projetos/radio-voz-paz.jpg",
    link: "/projetos/radio-voz-de-paz"
  },
  {
    id: "ginasio-poliesportivo",
    title: "Ginásio Poliesportivo",
    category: "Esporte",
    description: "Projeto em destaque para promoção de saúde, integração e disciplina através do esporte.",
    image: "/images/projetos/ginasio.jpg",
    progress: {
      goal: 1591039,
      raised: 450000 // Exemplo de valor arrecadado
    },
    link: "/projetos/ginasio-poliesportivo"
  },
  {
    id: "agua-potavel",
    title: "Água Potável",
    category: "Saúde",
    description: "Perfuração de poços artesianos para reduzir doenças de veiculação hídrica nas comunidades.",
    image: "/images/projetos/agua-potavel.jpg",
    link: "/projetos/agua-potavel"
  }
];