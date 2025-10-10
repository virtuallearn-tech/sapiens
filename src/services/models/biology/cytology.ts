import type { IModelData } from "@interfaces/model";


const PROKARYOTIC_CELL: IModelData = {
  code: 'prokaryotic_cell',
  source: '/models/archaea.glb',
  name: 'Célula Procarionte',
  title: 'Célula Procarionte',
  description: 'Estrutura simples e primitiva, sem núcleo definido, onde o material genético fica disperso no citoplasma',
  text: `A célula eucarionte é uma estrutura complexa e altamente organizada, presente em organismos como animais, plantas, fungos e protozoários. Diferente das células procariontes, ela possui um núcleo verdadeiro, envolto por uma membrana, onde está armazenado o material genético. Seu interior é compartimentalizado por diversas organelas, cada uma com funções específicas: mitocôndrias produzem energia, ribossomos sintetizam proteínas, o retículo endoplasmático atua no transporte e processamento de substâncias, e o complexo golgiense organiza e distribui os produtos celulares. Essa arquitetura interna permite que a célula execute tarefas sofisticadas, essenciais para o funcionamento dos organismos multicelulares.`,
  scale: 18,
  position: [0, 0.3, 0],
  rotation: [1.57, -1.57, 0],
  node: [
    {
      name: "Membrana plasmática",
      node: ['Object_7'],
      description: "Envolve a célula e controla a entrada e saída de substâncias.",
      text: "A membrana plasmática é uma camada fina e flexível que delimita a célula procarionte. Ela atua como uma barreira seletiva, permitindo que nutrientes entrem e resíduos saiam, mantendo o equilíbrio interno da célula."
    },
    {
      name: "Parede celular",
      node: ['Box001_tt_0'],
      description: "Estrutura rígida que dá forma e proteção à célula.",
      text: "A parede celular é uma camada resistente feita de peptidoglicano. Ela protege a célula contra danos físicos e ajuda a manter sua forma, especialmente em ambientes hostis."
    },
    {
      name: "Citoplasma",
      node: "Line002_op_0",
      description: "Região interna onde ocorrem as reações químicas da célula.",
      text: "O citoplasma é um fluido gelatinoso que preenche o interior da célula. Nele ocorrem diversas reações metabólicas essenciais para a sobrevivência do organismo."
    },
    {
      name: "Nucleoide",
      node: "Line005_tt_0",
      description: "Região onde está o DNA da célula, sem membrana envoltória.",
      text: "O nucleoide é uma área do citoplasma onde se encontra o material genético da célula procarionte. Diferente das células eucariontes, ele não está envolto por uma membrana, ficando livre no interior celular."
    },
    {
      name: "Ribossomos",
      node: [
        'Box004_tt_0',
        'Box008_tt_0',
        'Box010_tt_0',
        'Box012_tt_0',
        'Box005_tt_0',
        'Box009_tt_0',
        'Box020_tt_0',
        'Box017_tt_0',
        'Box016_tt_0',
        'Box019_tt_0',
        'Box002_tt_0',
        'Box006_tt_0',
        'Box011_tt_0',
        'Box018_tt_0',
        'Box014_tt_0',
        'Box017_tt_0',
        'Box013_tt_0',
        'Box003_tt_0',
        'Box015_tt_0',
        'Box007_tt_0',
      ],
      description: "Responsáveis pela produção de proteínas.",
      text: "Os ribossomos são pequenas estruturas que produzem proteínas a partir das instruções do DNA. Mesmo sem membranas, eles são essenciais para o funcionamento celular."
    },
    {
      name: "Flagelo",
      node: [
        'Line031_tt_0',
        'Line029_tt_0',
        'Line030_tt_0',
      ],
      description: "Estrutura longa que permite o movimento da célula.",
      text: "O flagelo é uma espécie de 'cauda' que ajuda a célula a se locomover em ambientes líquidos. Ele gira como uma hélice, impulsionando a célula para frente."
    },
    {
      name: "Plasmídeo",
      node: "Line033_tt_0",
      description: "Fragmento extra de DNA com funções adaptativas.",
      text: "Os plasmídeos são pequenos círculos de DNA que podem conter genes úteis, como resistência a antibióticos. Eles podem ser trocados entre bactérias, contribuindo para a adaptação e evolução."
    }
  ]
}

const PLANT_CELL: IModelData = {
  code: "plant_cell", // exemplo de subtopic
  source: "/models/plant_cell.glb",
  name: "Célula Vegetal",
  title: "Estrutura da Célula Vegetal",
  description: "Modelo 3D de uma célula vegetal com suas principais organelas.",
  text: "A célula vegetal é a unidade básica dos vegetais. Possui parede celular, cloroplastos e grandes vacúolos, que a diferenciam das células animais.",
  scale: 0.32,
  rotation: [0.53, 0, 0],
  position: [-2, 0, 0],
  node: [
    {
      name: "Parede Celular",
      node: ['cell_wall_Mat_0'],
      description: "Camada rígida que envolve a célula.",
      text: "A parede celular dá forma, proteção e sustentação à célula vegetal."
    },
    {
      name: "Cloroplasto",
      node: ["Boole_Mat1_0"],
      description: "Organela responsável pela fotossíntese.",
      text: "Os cloroplastos captam energia da luz solar e produzem glicose."
    },
    {
      name: "Vacúolo Central",
      node: ["vacuoles_Mat_0"],
      description: "Grande compartimento cheio de seiva celular.",
      text: "O vacúolo central armazena água, sais e ajuda a manter a pressão interna da célula."
    },
    {
      name: "Núcleo",
      node: [
        "Nucleus_2_Mat1_0",
        "Icosphere_Mat1_0",
        "shell_Mat1_0",
        "shell_Mat1_0",
        "Nucleolus_2_Mat1_0"
      ],
      description: "Centro de controle da célula.",
      text: "O núcleo guarda o DNA e coordena as atividades celulares."
    },
    {
      name: "Mitocôndria",
      node: ["Sphere_002_Mat2_0"],
      description: "Organela de respiração celular.",
      text: "As mitocôndrias produzem energia (ATP) a partir da glicose."
    },
    {
      name: "Complexo de Golgi",
      node: ["golgi_Mat1_0"],
      description: "Organela de empacotamento e secreção.",
      text: "O Golgi modifica e distribui proteínas e lipídios."
    },
    {
      //floating_ribosomes_Mat1_0
      name: "Retículo Endoplasmático Rugoso",
      node: ['floating_ribosomes_Mat1_0', 'Mat.1_0'],
      description: "Rede de membranas com ribossomos aderidos.",
      text: "O RER sintetiza proteínas que serão exportadas ou incorporadas às membranas."
    },
    {
      name: "Retículo Endoplasmático Liso",
      node: null,
      description: "Rede de membranas sem ribossomos.",
      text: "O REL produz lipídios e participa da desintoxicação celular."
    },
    {
      name: "Ribossomos",
      node: 'floating_ribosomes_Mat1_0',
      description: "Pequenas partículas de síntese proteica.",
      text: "Os ribossomos produzem proteínas a partir do RNA mensageiro."
    },
    {
      name: "Membrana Plasmática",
      node: 'lipid_bilayer_Mat_0',
      description: "Camada fina que envolve o citoplasma.",
      text: "A membrana plasmática controla a entrada e saída de substâncias da célula."
    },
    {
      name: "Citoplasma",
      node: 'Disc_glass_0',
      description: "Matriz fluida que preenche a célula.",
      text: "O citoplasma abriga as organelas e é o local de muitas reações metabólicas."
    },
    {
      name: "Citoesqueleto",
      node: 'cytoskeleton_Mat1_0',
      description: "Rede de filamentos proteicos.",
      text: "O citoesqueleto mantém a forma da célula e auxilia no transporte interno."
    },
    {
      name: "Nucleólo",
      node: "Nucleolus_2_Mat1_0",
      description: "Estrutura dentro do núcleo.",
      text: "O nucléolo é responsável pela produção de ribossomos."
    }
  ],
  attribuition: "Modelo adaptado de Sketchfab",
  wikipedia: "https://pt.wikipedia.org/wiki/C%C3%A9lula_vegetal"
}

const EUKARYOTIC_CELL: IModelData = {
  code: "eukaryotic_cell",
  source: "/models/eukaryotic_cell.glb",
  name: "Célula Eucarionte",
  title: "Estrutura da Célula Eucarionte",
  description: "Modelo 3D de uma célula eucarionte animal com suas organelas.",
  text: "A célula eucarionte possui núcleo definido e diversas organelas membranosas que organizam suas funções vitais.",
  scale: 0.0045,
  rotation: [0, 0, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Núcleo",
      node: [
        "Nulo__Material001_0",
        "Nulo__Material010_0",
        "Nulo__Material027_0"
      ],
      description: "Centro de controle da célula.",
      text: "O núcleo armazena o DNA e regula as funções celulares."
    },
    {
      name: "Vacúolo",
      node: "Nulo__Material1_0",
      description: "Pequena vesícula membranosa presente no citoplasma.",
      text: "Nas células animais, os vacúolos são menores e transitórios. Eles participam do armazenamento de substâncias, da regulação osmótica e podem auxiliar na digestão e eliminação de resíduos."
    },
    {
      name: "Mitocôndria",
      node: ["Nulo__Material008_0", "Nulo__Material007_0"],
      description: "Organela de respiração celular.",
      text: "As mitocôndrias produzem energia (ATP) para as atividades da célula."
    },
    {
      name: "Retículo Endoplasmático Rugoso",
      node: "Nulo__Material005_0",
      description: "Rede de membranas com ribossomos.",
      text: "O RER sintetiza proteínas que serão exportadas ou usadas na membrana."
    },
    {
      name: "Retículo Endoplasmático Liso",
      node: "Nulo__Material026_0",
      description: "Rede de membranas sem ribossomos.",
      text: "O REL produz lipídios e participa da desintoxicação celular."
    },
    {
      name: "Complexo de Golgi",
      node: "Nulo__Material006_0",
      description: "Organela de empacotamento e secreção.",
      text: "O Golgi modifica, armazena e envia proteínas e lipídios."
    },
    {
      name: "Lisossomo",
      node: "Nulo__Material025_0",
      description: "Vesícula com enzimas digestivas.",
      text: "Os lisossomos degradam substâncias e reciclam componentes celulares."
    },
    {
      name: "Ribossomos",
      node: "Nulo__Material018_0",
      description: "Pequenas partículas de síntese proteica.",
      text: "Os ribossomos produzem proteínas a partir do RNA mensageiro."
    },
    {
      name: "Centríolos",
      node: "Nulo__Material025_0",
      description: "Estruturas cilíndricas formadas por microtúbulos.",
      text: "Os centríolos participam da divisão celular e da organização do citoesqueleto."
    },
    {
      name: "Peroxissomos",
      node: "Nulo__Material003_0",
      description: "Vesículas com enzimas oxidativas.",
      text: "Os peroxissomos degradam peróxidos e participam do metabolismo lipídico."
    },
    {
      name: "Membrana Plasmática",
      node: "Nulo__Material_0",
      description: "Camada fina que envolve a célula.",
      text: "A membrana plasmática controla a entrada e saída de substâncias da célula."
    },
    {
      name: "Citoplasma",
      node: "citoplasma_remesh_Material004_0",
      description: "Matriz fluida que preenche a célula.",
      text: "O citoplasma abriga as organelas e é o local de muitas reações metabólicas."
    },
    {
      name: "Citoesqueleto",
      node: "Nulo__Material013_0",
      description: "Rede de filamentos proteicos.",
      text: "O citoesqueleto mantém a forma da célula e auxilia no transporte interno."
    },
    {
      name: "Nucleólo",
      node: "Nulo__Material027_0",
      description: "Estrutura dentro do núcleo.",
      text: "O nucléolo é responsável pela produção de ribossomos."
    }
  ],
  attribuition: "Modelo adaptado de Sketchfab",
  wikipedia: "https://pt.wikipedia.org/wiki/C%C3%A9lula_eucarionte"
}

export const CYTOLOGY_MODELS: IModelData[] = [
  PROKARYOTIC_CELL,
  PLANT_CELL,
  EUKARYOTIC_CELL
]



