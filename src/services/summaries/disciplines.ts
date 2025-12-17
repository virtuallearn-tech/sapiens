import { DISCIPLINE, DISCIPLINE_TOPICS } from "@interfaces/discipline";
import { Cover } from "@utils/getImageCover";

export interface Summary {
  title: string;
  file: string;
  topic?: typeof DISCIPLINE_TOPICS[keyof typeof DISCIPLINE_TOPICS]
}

export interface IDiscipline {
  discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE];
  title: string;
  cover: string;
  summaries: Summary[];
}

export interface DisciplineCard {
  title: string;
  discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE];
  cover: string;
}

export const SUMMARIES: IDiscipline[] = [
  {
    discipline: DISCIPLINE.BIOLOGY,
    title: "Biologia",
    cover: Cover.tartaruga_cabecuda,
    summaries: [
      { title: "Citologia: estrutura e função das células", file: "citologia" },
      { title: "Membrana plasmática e transporte celular", file: "membrana-plasmatica-transporte" },
      { title: "Organelas celulares e metabolismo", file: "organelas-celulares" },
      { title: "Fotossíntese", file: "fotossintese" },
      { title: "Respiração celular", file: "respiracao-celular" },
      { title: "Divisão celular: mitose e meiose", file: "mitose-e-meiose" },
      { title: "Genética básica", file: "genetica-basica" },
      { title: "Leis de Mendel", file: "leis-de-mendel" },
      { title: "DNA, RNA e síntese de proteínas", file: "dna-rna-sintese-proteica" },
      { title: "Evolução e seleção natural", file: "evolucao" },
      { title: "Ecologia: conceitos básicos", file: "ecologia-conceitos-basicos" },
      { title: "Cadeias e teias alimentares", file: "cadeias-e-teias-alimentares" },
      { title: "Ciclos biogeoquímicos", file: "ciclos-biogeoquimicos" },
      { title: "Impactos ambientais", file: "impactos-ambientais" },
      { title: "Sistema digestório humano", file: "sistema-digestorio" },
      { title: "Sistema respiratório humano", file: "sistema-respiratorio" },
      { title: "Sistema circulatório humano", file: "sistema-circulatorio" },
      { title: "Sistema nervoso humano", file: "sistema-nervoso" },
      { title: "Sistema endócrino humano", file: "sistema-endocrino" },
      { title: "Sistema imunológico e vacinas", file: "sistema-imunologico" }
    ]
  },
  {
    discipline: DISCIPLINE.QUEMISTRY,
    title: "Química",
    cover: Cover.cover_chemistry,
    summaries: [
      { title: "Matéria e suas propriedades", file: "materia-propriedades" },
      { title: "Estados físicos da matéria", file: "estados-fisicos" },
      { title: "Misturas e métodos de separação", file: "misturas-separacao" },
      { title: "Estrutura atômica", file: "estrutura-atomica" },
      { title: "Tabela periódica", file: "tabela-periodica" },
      { title: "Ligações químicas", file: "ligacoes-quimicas" },
      { title: "Funções inorgânicas", file: "funcoes-inorganicas" },
      { title: "Reações químicas", file: "reacoes-quimicas" },
      { title: "Balanceamento químico", file: "balanceamento-quimico" },
      { title: "Cálculo estequiométrico", file: "estequiometria" },
      { title: "Soluções e concentração", file: "solucoes-concentracao" },
      { title: "Ácidos, bases e pH", file: "acidos-bases-ph" },
      { title: "Oxirredução", file: "oxirreducao" },
      { title: "Termoquímica", file: "termoquimica" },
      { title: "Cinética química", file: "cinetica-quimica" },
      { title: "Equilíbrio químico", file: "equilibrio-quimico" },
      { title: "Química orgânica: introdução", file: "quimica-organica-introducao" },
      { title: "Hidrocarbonetos", file: "hidrocarbonetos" },
      { title: "Funções orgânicas", file: "funcoes-organicas" },
      { title: "Química ambiental", file: "quimica-ambiental" }
    ]
  },
  {
    discipline: DISCIPLINE.PHYSICS,
    title: "Física",
    cover: Cover.cover_physics,
    summaries: [
      { title: "Grandezas físicas e unidades", file: "grandezas-unidades" },
      { title: "Cinemática: movimento", file: "cinematica" },
      { title: "Velocidade e aceleração", file: "velocidade-aceleracao" },
      { title: "Leis de Newton", file: "leis-de-newton" },
      { title: "Trabalho, energia e potência", file: "trabalho-energia" },
      { title: "Quantidade de movimento", file: "quantidade-movimento" },
      { title: "Gravitação universal", file: "gravitacao" },
      { title: "Hidrostática", file: "hidrostatica" },
      { title: "Termologia", file: "termologia" },
      { title: "Ondulatória", file: "ondulatoria" },
      { title: "Óptica geométrica", file: "optica-geometrica" },
      { title: "Eletricidade básica", file: "eletricidade-basica" },
      { title: "Circuitos elétricos", file: "circuitos-eletricos" },
      { title: "Eletrostática", file: "eletrostatica" },
      { title: "Eletromagnetismo", file: "eletromagnetismo" },
      { title: "Física moderna: introdução", file: "fisica-moderna" },
      { title: "Radioatividade", file: "radioatividade" },
      { title: "Física e meio ambiente", file: "fisica-meio-ambiente" },
      // { title: "Leitura de gráficos", file: "graficos-fisica" },
      { title: "Análise dimensional", file: "analise-dimensional" }
    ]
  },
  {
    discipline: DISCIPLINE.MATH,
    title: "Matemática",
    cover: Cover.cover_math,
    summaries: [
      { title: "Conjuntos numéricos", file: "conjuntos-numericos" },
      { title: "Operações básicas", file: "operacoes-basicas" },
      { title: "Razão e proporção", file: "razao-proporcao" },
      { title: "Porcentagem", file: "porcentagem" },
      { title: "Equações do 1º grau", file: "equacoes-primeiro-grau" },
      { title: "Equações do 2º grau", file: "equacoes-segundo-grau" },
      { title: "Função afim", file: "funcao-afim" },
      { title: "Função quadrática", file: "funcao-quadratica" },
      { title: "Função exponencial", file: "funcao-exponencial" },
      { title: "Função logarítmica", file: "funcao-logaritmica" },
      { title: "Progressões aritméticas", file: "progressao-aritmetica" },
      { title: "Progressões geométricas", file: "progressao-geometrica" },
      { title: "Trigonometria básica", file: "trigonometria-basica" },
      { title: "Teorema de Pitágoras", file: "teorema-pitagoras" },
      { title: "Geometria plana", file: "geometria-plana" },
      { title: "Geometria espacial", file: "geometria-espacial" },
      { title: "Probabilidade", file: "probabilidade" },
      { title: "Estatística básica", file: "estatistica-basica" },
      // { title: "Leitura e interpretação de gráficos", file: "graficos-matematica" },
      { title: "Matemática aplicada ao ENEM", file: "matematica-aplicada-enem" }
    ]
  }
] as const;

