import type { IModelData, IModelNode,  } from "@interfaces/model";

const PROKARYOTIC_CELL_NODES: IModelNode[] = [
  // {
  //   name: "Membrana plasmática",
  //   node: "Membrana",
  //   description: "Envolve a célula e controla a entrada e saída de substâncias.",
  //   text: "A membrana plasmática é uma camada fina e flexível que delimita a célula procarionte. Ela atua como uma barreira seletiva, permitindo que nutrientes entrem e resíduos saiam, mantendo o equilíbrio interno da célula."
  // },
  // {
  //   name: "Parede celular",
  //   node: "Parede",
  //   description: "Estrutura rígida que dá forma e proteção à célula.",
  //   text: "A parede celular é uma camada resistente feita de peptidoglicano. Ela protege a célula contra danos físicos e ajuda a manter sua forma, especialmente em ambientes hostis."
  // },
  // {
  //   name: "Citoplasma",
  //   node: "Citoplasma",
  //   description: "Região interna onde ocorrem as reações químicas da célula.",
  //   text: "O citoplasma é um fluido gelatinoso que preenche o interior da célula. Nele ocorrem diversas reações metabólicas essenciais para a sobrevivência do organismo."
  // },
  {
    name: "Nucleoide",
    node: ['Box013_tt_0', 'Box014_tt_0', 'Line031_tt_0'],
    description: "Região onde está o DNA da célula, sem membrana envoltória.",
    text: "O nucleoide é uma área do citoplasma onde se encontra o material genético da célula procarionte. Diferente das células eucariontes, ele não está envolto por uma membrana, ficando livre no interior celular."
  },
  // {
  //   name: "Ribossomos",
  //   node: "Ribossomos",
  //   description: "Responsáveis pela produção de proteínas.",
  //   text: "Os ribossomos são pequenas estruturas que produzem proteínas a partir das instruções do DNA. Mesmo sem membranas, eles são essenciais para o funcionamento celular."
  // },
  // {
  //   name: "Flagelo",
  //   node: "Flagelo",
  //   description: "Estrutura longa que permite o movimento da célula.",
  //   text: "O flagelo é uma espécie de 'cauda' que ajuda a célula a se locomover em ambientes líquidos. Ele gira como uma hélice, impulsionando a célula para frente."
  // },
  // {
  //   name: "Plasmídeo",
  //   node: "Plasmideo",
  //   description: "Fragmento extra de DNA com funções adaptativas.",
  //   text: "Os plasmídeos são pequenos círculos de DNA que podem conter genes úteis, como resistência a antibióticos. Eles podem ser trocados entre bactérias, contribuindo para a adaptação e evolução."
  // }
]

export const PROKARYOTIC_CELL:IModelData = {
  source: '/models/archaea.glb',
  name: 'prokaryotic_cell',
  title: 'Célula Procarionte',
  description: 'Estrutura simples e primitiva, sem núcleo definido, onde o material genético fica disperso no citoplasma',
  text: `A célula eucarionte é uma estrutura complexa e altamente organizada, presente em organismos como animais, plantas, fungos e protozoários. Diferente das células procariontes, ela possui um núcleo verdadeiro, envolto por uma membrana, onde está armazenado o material genético. Seu interior é compartimentalizado por diversas organelas, cada uma com funções específicas: mitocôndrias produzem energia, ribossomos sintetizam proteínas, o retículo endoplasmático atua no transporte e processamento de substâncias, e o complexo golgiense organiza e distribui os produtos celulares. Essa arquitetura interna permite que a célula execute tarefas sofisticadas, essenciais para o funcionamento dos organismos multicelulares.`,
  scale: 16,
  position: [0, 1, 0],
  rotation: [1.57, -1.57, 0],
  node: PROKARYOTIC_CELL_NODES
}