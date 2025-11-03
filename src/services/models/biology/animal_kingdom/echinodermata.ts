import type { IModelData } from "@interfaces/model";
import { NINETY } from "@utils/radAngles";

const Echinodermata_Asteroidea_Starfish: IModelData = {
  topic: "echinodermata_class_asteroidea_starfish",
  source: "/star_scene_2.glb",
  name: "Estrela-do-mar",
  title: "Estrela-do-mar (Asteroidea)",
  description: "Equinodermo marinho da classe Asteroidea, com corpo em forma de estrela e simetria radial. Possui sistema ambulacrário e capacidade de regeneração.",
  text: "A estrela-do-mar é um equinodermo da classe Asteroidea, caracterizado por seu corpo em forma de estrela, geralmente com cinco braços. Possui simetria radial e um esqueleto interno formado por placas calcárias. Seu sistema ambulacrário permite locomoção e captura de alimento por meio de pés ambulacrários que funcionam com pressão hidráulica. A boca está localizada na face inferior do corpo, e muitas espécies têm capacidade de regenerar braços perdidos. Alimenta-se de moluscos e outros invertebrados, podendo evertir o estômago para digerir presas externamente. Vive em ambientes marinhos variados, desde recifes tropicais até regiões profundas.",
  scale: 1.2,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [0, -NINETY, 0],
  position: [0, 0.1, 0],
  node: [
    {
      name: "Simetria radial",
      node: null,
      description: "Corpo organizado em torno de um eixo central.",
      text: "A estrela-do-mar apresenta simetria radial pentâmera, típica dos equinodermos, com braços dispostos ao redor de um disco central."
    },
    {
      name: "Sistema ambulacrário",
      node: null,
      description: "Locomoção por pés hidráulicos.",
      text: "O sistema ambulacrário usa canais internos e pressão de água para movimentar os pés ambulacrários, permitindo locomoção e manipulação de alimento."
    },
    {
      name: "Regeneração",
      node: null,
      description: "Capacidade de regenerar braços perdidos.",
      text: "Algumas espécies podem regenerar braços inteiros e, em casos raros, até formar um novo indivíduo a partir de um braço."
    },
    {
      name: "Alimentação externa",
      node: null,
      description: "Digestão fora do corpo.",
      text: "A estrela-do-mar pode evertir seu estômago para fora da boca e digerir presas como mexilhões diretamente no ambiente externo."
    }
  ],
  attribuition: "Modelo por Digital Atlas of Ancient Life - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Starfish",
  sceneBg: '#1a1a1a',
  hasAnimation: false
};

const Echinodermata_Echinoidea_SandDollar: IModelData = {
  topic: "echinodermata_class_echinoidea_sanddollar",
  source: "/scene_dolla.glb",
  name: "Bolacha-de-praia",
  title: "Bolacha-de-praia (Echinoidea)",
  description: "Equinodermo da classe Echinoidea, com corpo achatado e discoide. Vive enterrado na areia e possui simetria radial modificada.",
  text: "A bolacha-de-praia é um equinodermo da classe Echinoidea, grupo que inclui também os ouriços-do-mar. Seu corpo é achatado, rígido e em forma de disco, com simetria radial modificada para facilitar a vida enterrada na areia. Possui espinhos curtos e finos que ajudam na locomoção e na escavação. A face inferior abriga a boca, enquanto a superior exibe um padrão em forma de flor, formado por canais ambulacrários. Alimenta-se de partículas orgânicas presentes no sedimento marinho. Quando viva, possui coloração escura e textura aveludada; após a morte, seu esqueleto calcário branco é frequentemente encontrado nas praias. É um exemplo fascinante da diversidade morfológica dos equinodermos.",
  scale: 2,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [0, -NINETY, 0],
  position: [0, 0.2, 0],
  node: [
    {
      name: "Corpo discoide",
      node: null,
      description: "Forma achatada adaptada ao sedimento.",
      text: "O corpo da bolacha-de-praia é achatado e rígido, ideal para se mover e se enterrar na areia do fundo marinho."
    },
    {
      name: "Sistema ambulacrário",
      node: null,
      description: "Canais em forma de flor na face superior.",
      text: "Os canais ambulacrários formam um padrão radial que lembra uma flor, usado para locomoção e troca gasosa."
    },
    {
      name: "Espinhos curtos",
      node: null,
      description: "Usados para escavação e movimentação.",
      text: "Diferente dos ouriços, a bolacha-de-praia possui espinhos pequenos que ajudam a se mover pelo sedimento."
    },
    {
      name: "Esqueleto calcário",
      node: null,
      description: "Estrutura rígida visível após a morte.",
      text: "Após a morte, o esqueleto branco e delicado da bolacha-de-praia é frequentemente encontrado nas praias, com aparência decorativa."
    }
  ],
  attribuition: "Modelo por ffish.asia / floraZia.com - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Sand_dollar",
  sceneBg: '#1a1a1a',
  hasAnimation: false
};

export const ECHINODERMATA_MODELS: IModelData[] = [
  Echinodermata_Asteroidea_Starfish,
  Echinodermata_Echinoidea_SandDollar
]