import type { IModelData } from "@interfaces/model";
import { NINETY } from "@utils/radAngles";

const Echinodermata_Asteroidea_Starfish: IModelData = { 
  topic: "echinodermata_class_asteroidea_starfish",
  source: "/scene_star3.glb",
  name: "Estrela-do-mar",
  title: "Estrela-do-mar (Asteroidea)",
  description: "Animal marinho equinodermo, com corpo em forma de estrela e geralmente cinco braços. Possui simetria radial, sistema ambulacrário e incrível capacidade de regeneração.",
  text: "A estrela-do-mar é um animal marinho do grupo dos equinodermos, pertencente à classe Asteroidea. Seu corpo tem forma de estrela, com braços que partem de um disco central. Apresenta simetria radial, o que significa que suas partes estão organizadas ao redor de um eixo central. O esqueleto é interno e formado por placas calcárias, o que dá rigidez e proteção. Um dos sistemas mais interessantes é o sistema ambulacrário, que usa a pressão da água para movimentar pequenos pés, chamados pés ambulacrários, responsáveis pela locomoção e pela captura de alimento. A estrela-do-mar se alimenta principalmente de moluscos, podendo projetar o estômago para fora da boca e digerir suas presas externamente. Vive em ambientes exclusivamente marinhos, desde águas rasas até grandes profundidades. Uma característica marcante é sua capacidade de regenerar braços perdidos e, em algumas espécies, até formar um novo indivíduo a partir de um único braço.",
  scale: 1.2,
  scale_sm: 1.22,
  scale_md: 1.3,
  scale_lg: 1.5,
  scale_2lg: 1.7,
  rotation: [0, 0, 0],
  position: [0, 0.1, 0],
  node: [
    {
      name: "Simetria radial",
      node: null,
      description: "Corpo organizado em torno de um ponto central.",
      text: "A estrela-do-mar apresenta simetria radial pentâmera, ou seja, o corpo é dividido em cinco partes iguais ao redor de um centro. Esse tipo de simetria facilita a locomoção e a percepção do ambiente em todas as direções."
    },
    {
      name: "Sistema ambulacrário",
      node: null,
      description: "Sistema de locomoção e alimentação movido por pressão da água.",
      text: "O sistema ambulacrário é formado por canais internos que conduzem água do mar para movimentar os pés ambulacrários. Esses pés funcionam como ventosas, permitindo que o animal se mova, fixe em superfícies e capture alimento com precisão."
    },
    {
      name: "Regeneração",
      node: null,
      description: "Capacidade de formar novamente partes do corpo perdidas.",
      text: "A estrela-do-mar pode regenerar braços perdidos e, em algumas espécies, até se reproduzir de forma assexuada a partir de um único braço e parte do disco central. Essa capacidade ajuda na sobrevivência após ataques de predadores."
    },
    {
      name: "Alimentação externa",
      node: null,
      description: "Digestão realizada fora do corpo.",
      text: "A estrela-do-mar se alimenta de moluscos e outros invertebrados. Ela projeta o estômago para fora da boca, introduzindo-o na concha da presa para digerir o alimento antes de recolhê-lo novamente para o interior do corpo."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/asteroid-starfish-or-seastar-32de6a92ad104e20aaa841c8e3eef93f">Asteroid: starfish or seastar</a> 
  by <a href="https://sketchfab.com/DigitalAtlasOfAncientLife">Digital Atlas of Ancient Life</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 Public Domain</a>
</div>
`,
  wikipedia: "https://pt.wikipedia.org/wiki/Estrela-do-mar",
  sceneBg: '#000',
  hasAnimation: false
};


const Echinodermata_Echinoidea_SandDollar: IModelData = {
  topic: "echinodermata_class_echinoidea_sanddollar",
  source: "/scene_dolla.glb",
  name: "Bolacha-de-praia",
  title: "Bolacha-de-praia (Echinoidea)",
  description: "Equinodermo marinho de corpo achatado e circular, adaptado para viver enterrado na areia. Apresenta simetria radial modificada e pequenos espinhos para locomoção.",
  text: "A bolacha-de-praia é um equinodermo da classe Echinoidea, a mesma dos ouriços-do-mar. Seu corpo é achatado, em forma de disco, e rígido, sendo uma adaptação para a vida enterrada na areia do fundo do mar. Apresenta simetria radial modificada, com o corpo organizado de forma mais bilateral para se movimentar melhor sob o sedimento. Possui espinhos curtos e finos, que auxiliam tanto na locomoção quanto na escavação. Na face inferior, encontra-se a boca, enquanto a face superior exibe um belo desenho em forma de flor, resultado dos canais do sistema ambulacrário, que ajudam na respiração e na movimentação. Alimenta-se de pequenas partículas orgânicas e detritos encontrados na areia. Quando viva, possui coloração escura e textura aveludada; após a morte, seu esqueleto branco e frágil, chamado de 'testa', é frequentemente encontrado nas praias. Esse animal é um excelente exemplo da diversidade e das adaptações do grupo dos equinodermos.",
  scale: 2,
  scale_sm: 2.1,
  scale_md: 2.1,
  scale_lg: 2.5,
  scale_2lg: 2.8,
  rotation: [0, -NINETY, 0],
  position: [0, 0.2, 0],
  node: [
    {
      name: "Corpo discoide",
      node: null,
      description: "Forma achatada que facilita a vida sob o sedimento.",
      text: "A bolacha-de-praia possui corpo circular e achatado, o que permite que ela se enterre facilmente na areia, protegendo-se de predadores e correntes marítimas."
    },
    {
      name: "Sistema ambulacrário",
      node: null,
      description: "Rede de canais usada para locomoção e respiração.",
      text: "Os canais ambulacrários formam um desenho em forma de flor na face superior. Esse sistema hidráulico movimenta pequenos pés ambulacrários, ajudando o animal a se mover e realizar trocas gasosas."
    },
    {
      name: "Espinhos curtos",
      node: null,
      description: "Auxiliam na escavação e movimentação na areia.",
      text: "A bolacha-de-praia tem espinhos curtos e delicados, diferentes dos espinhos longos dos ouriços-do-mar. Eles funcionam como pequenas pás, empurrando a areia e permitindo que o animal se desloque lentamente."
    },
    {
      name: "Esqueleto calcário",
      node: null,
      description: "Estrutura rígida visível após a morte do animal.",
      text: "O esqueleto, chamado de 'testa', é formado por placas calcárias unidas, conferindo resistência e forma ao corpo. Após a morte, esse esqueleto branco é frequentemente encontrado nas praias e confundido com uma concha."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/sand-dollar-3d-scan-d94302c29223418ebdae7e28a3b2d952">Sand Dollar (3D Scan)</a> 
  by <a href="https://sketchfab.com/JPDV">JPDV</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>
`,
  wikipedia: "https://pt.wikipedia.org/wiki/Bolacha-da-praia",
  sceneBg: '#000',
  hasAnimation: false
};


export const ECHINODERMATA_MODELS: IModelData[] = [
  Echinodermata_Asteroidea_Starfish,
  Echinodermata_Echinoidea_SandDollar
]