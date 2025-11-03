import type { IModelData } from "@interfaces/model";
import { FIFTEEN, FORTY_FIVE, NINETY, SIXTY, TEN, THIRTY, TWENTY } from "@utils/radAngles";

const Chondrichthyes_TigerShark: IModelData = {
  topic: "chordata_class_chondrichthyes_tiger_shark",
  source: "/tiger_shark.glb",
  name: "Tubarão-tigre",
  title: "Tubarão-tigre (Chondrichthyes)",
  description: "Peixe cartilaginoso da classe Chondrichthyes, conhecido por suas listras corporais e comportamento predador. Vive em mares tropicais e temperados.",
  text: "O tubarão-tigre (*Galeocerdo cuvier*) é um peixe cartilaginoso da classe Chondrichthyes, pertencente à ordem Carcharhiniformes. Seu nome vem das listras escuras no corpo, semelhantes às de um tigre, especialmente visíveis em indivíduos jovens. Possui esqueleto de cartilagem, cinco fendas branquiais, nadadeiras bem desenvolvidas e dentes serrilhados adaptados para cortar carne e ossos. É um predador oportunista, alimentando-se de peixes, aves marinhas, tartarugas e até objetos não comestíveis. Habita águas tropicais e temperadas, sendo encontrado em regiões costeiras e oceânicas. Sua importância ecológica como predador de topo é fundamental para o equilíbrio dos ecossistemas marinhos.",
  scale: 0.4,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [0, (NINETY * 2) + THIRTY, 0],
  position: [-0.45, 0.4, 0],
  node: [
    {
      name: "Esqueleto cartilaginoso",
      node: null,
      description: "Estrutura leve e flexível.",
      text: "Ao contrário dos peixes ósseos, o tubarão-tigre possui esqueleto feito de cartilagem, o que proporciona maior agilidade e flutuação."
    },
    {
      name: "Listras corporais",
      node: null,
      description: "Padrão escuro semelhante ao de um tigre.",
      text: "As listras são mais visíveis em indivíduos jovens e ajudam na camuflagem em ambientes costeiros."
    },
    {
      name: "Dentes serrilhados",
      node: null,
      description: "Adaptados para cortar carne e ossos.",
      text: "Seus dentes são afiados e curvos, permitindo rasgar presas com facilidade, inclusive tartarugas e mamíferos marinhos."
    },
    {
      name: "Predador de topo",
      node: null,
      description: "Importante para o equilíbrio ecológico.",
      text: "Como predador de topo, o tubarão-tigre regula populações de outras espécies e mantém a saúde dos ecossistemas marinhos."
    }
  ],
  attribuition: "Modelo por Major (@majorgalah) - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Tiger_shark",
  sceneBg: '#0e1a1f',
  hasAnimation: true
};

const Chondrichthyes_CownoseRay: IModelData = {
  topic: "chordata_class_chondrichthyes_cownose_ray",
  source: "/cownose_ray.glb",
  name: "Raia Cownose",
  title: "Raia Cownose (Chondrichthyes)",
  description: "Peixe cartilaginoso da classe Chondrichthyes, com corpo achatado e nadadeiras peitorais em forma de asas. Nada com movimentos ondulatórios graciosos.",
  text: "A raia Cownose (*Rhinoptera bonasus*) é um peixe cartilaginoso da classe Chondrichthyes, pertencente à ordem Myliobatiformes. Possui corpo achatado em forma de losango e nadadeiras peitorais que se estendem como asas, permitindo um nado elegante e ondulatório. Seu nome vem do formato da cabeça, que lembra o focinho de uma vaca. Alimenta-se principalmente de moluscos e crustáceos, que tritura com placas dentárias. Vive em águas costeiras tropicais e subtropicais, muitas vezes formando grandes cardumes migratórios. Assim como outros condrictes, possui esqueleto de cartilagem e sistema sensorial especializado para detectar presas enterradas no fundo do mar.",
  scale: 0.45,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [0, (-NINETY) + FIFTEEN, 0],
  position: [-0.1, 0, 0],
  node: [
    {
      name: "Corpo achatado",
      node: null,
      description: "Forma adaptada ao fundo marinho.",
      text: "O corpo em forma de disco permite que a raia deslize sobre o fundo do mar com eficiência e discrição."
    },
    {
      name: "Nadadeiras em forma de asas",
      node: null,
      description: "Movimento ondulatório para natação.",
      text: "As nadadeiras peitorais se movem como asas de pássaro, permitindo um nado fluido e elegante."
    },
    {
      name: "Cabeça em formato de focinho de vaca",
      node: null,
      description: "Característica que dá nome à espécie.",
      text: "A forma arredondada e dividida da cabeça lembra o focinho de uma vaca, originando o nome 'Cownose'."
    },
    {
      name: "Alimentação por trituração",
      node: null,
      description: "Placas dentárias para esmagar presas.",
      text: "A raia Cownose se alimenta de moluscos e crustáceos, que são triturados por suas placas dentárias resistentes."
    }
  ],
  attribuition: "Modelo por kenchoo - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Cownose_ray",
  sceneBg: '#0f1f1f',
  hasAnimation: true
};

const Osteichthyes_BarbelSteed: IModelData = {
  topic: "chordata_class_osteichthyes_barbel_steed",
  source: "/barbel_steed_h_barbus.glb",
  name: "Barbel Steed",
  title: "Barbel Steed (Osteichthyes)",
  description: "Peixe ósseo de água doce da família Cyprinidae. Possui corpo alongado, nadadeiras bem desenvolvidas e escamas visíveis.",
  text: "O Barbel Steed (*Hemibarbus barbus*) é um peixe ósseo da classe Osteichthyes, pertencente à ordem Cypriniformes e à família Cyprinidae. É encontrado em rios e lagos da Ásia, especialmente em regiões de correnteza moderada. Seu corpo é alongado, com escamas bem definidas e nadadeiras adaptadas à natação em águas doces. Como todos os peixes ósseos, possui esqueleto calcificado, opérculo cobrindo as brânquias e bexiga natatória para controle de flutuabilidade. Alimenta-se de pequenos invertebrados e matéria orgânica no fundo dos rios. É um excelente exemplo para ilustrar a diversidade dos peixes ósseos, que representam o maior grupo de vertebrados do planeta.",
  scale: 17,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [0, NINETY + THIRTY, TEN],
  position: [-0.4, 0.3, 0],
  node: [
    {
      name: "Esqueleto ósseo",
      node: null,
      description: "Estrutura rígida e calcificada.",
      text: "Diferente dos peixes cartilaginosos, o Barbel Steed possui esqueleto formado por ossos, conferindo maior suporte e proteção."
    },
    {
      name: "Opérculo branquial",
      node: null,
      description: "Protege as brânquias e facilita a respiração.",
      text: "O opérculo é uma estrutura móvel que cobre as brânquias, permitindo a ventilação mesmo com o peixe parado."
    },
    {
      name: "Bexiga natatória",
      node: null,
      description: "Controle de flutuabilidade.",
      text: "A bexiga natatória permite ao peixe ajustar sua posição na coluna d'água sem gastar energia nadando constantemente."
    },
    {
      name: "Habitat de água doce",
      node: null,
      description: "Vive em rios e lagos asiáticos.",
      text: "O Barbel Steed prefere águas doces com correnteza moderada, onde se alimenta de pequenos organismos bentônicos."
    }
  ],
  attribuition: "Modelo por ffish.asia / floraZia.com - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Hemibarbus_barbus",
  sceneBg: '#1a2a2f',
  hasAnimation: true
};


export const CHORDATA_MODELS: IModelData[] = [
  Chondrichthyes_TigerShark,
  Chondrichthyes_CownoseRay,
  Osteichthyes_BarbelSteed
]