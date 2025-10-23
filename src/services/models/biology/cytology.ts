import type { IModelData } from "@interfaces/model";


const PROKARYOTIC_CELL: IModelData = {
  topic: 'prokaryotic_cell',
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-models/master/archaea.glb',//'/models/archaea.glb',
  name: 'Célula Procarionte',
  title: 'Célula Procarionte',
  description: 'Estrutura simples e primitiva, sem núcleo definido, onde o material genético fica disperso no citoplasma',
  text: `As células procariontes são caracterizadas pela ausência de núcleo delimitado por membrana e pela simplicidade estrutural em relação às eucariontes. O DNA dessas células encontra-se disperso no citoplasma, em uma região chamada nucleoide, podendo também haver moléculas circulares menores chamadas plasmídeos. Elas não possuem organelas membranosas, mas apresentam ribossomos para a síntese de proteínas, membrana plasmática e parede celular, que protege e dá forma à célula. Em alguns grupos, há ainda flagelos, que auxiliam na locomoção, e cápsulas, que aumentam a proteção. Todos os seres procariontes pertencem aos reinos Monera, como as bactérias e arqueas.`,
  scale: 18,
  scale_sm: 19,
  scale_md: 20,
  scale_lg: 20,
  scale_2lg: 22,
  position: [0, 0.8, 0],
  rotation: [1.57, -1.57, 0],
  node: [
    {
      name: "Membrana plasmática",
      node: ["Object_7"],
      description: "Envolve a célula e controla a entrada e saída de substâncias.",
      text: "A membrana plasmática é uma camada fina, flexível e viva que envolve toda a célula procarionte. Ela funciona como uma 'porta de controle', decidindo o que pode entrar e sair. Assim, permite a entrada de nutrientes, elimina resíduos e mantém o equilíbrio interno da célula (a chamada homeostase)."
    },
    {
      name: "Parede celular",
      node: ["Box001_tt_0"],
      description: "Estrutura rígida que dá forma e proteção à célula.",
      text: "A parede celular é uma camada espessa e resistente que envolve a membrana plasmática. Nas células procariontes, é formada principalmente por peptidoglicano. Ela protege a célula contra choques e variações de pressão, além de manter sua forma, funcionando como uma espécie de 'armadura' natural."
    },
    {
      name: "Citoplasma",
      node: "Line002_op_0",
      description: "Região interna onde ocorrem as reações químicas da célula.",
      text: "O citoplasma é um tipo de gel que preenche o interior da célula. Nele ficam imersas as organelas e moléculas necessárias para as reações químicas que mantêm a célula viva. É como o 'ambiente de trabalho' onde tudo acontece dentro da célula."
    },
    {
      name: "Nucleoide",
      node: "Line005_tt_0",
      description: "Região onde está o DNA da célula, sem membrana envoltória.",
      text: "O nucleoide é a região do citoplasma onde está concentrado o material genético (DNA) da célula procarionte. Diferente das células eucariontes, ele não tem uma membrana ao redor — o DNA fica livre, controlando as atividades da célula e guardando suas informações hereditárias."
    },
    {
      name: "Ribossomos",
      node: [
        "Box004_tt_0", "Box008_tt_0", "Box010_tt_0", "Box012_tt_0", "Box005_tt_0",
        "Box009_tt_0", "Box020_tt_0", "Box017_tt_0", "Box016_tt_0", "Box019_tt_0",
        "Box002_tt_0", "Box006_tt_0", "Box011_tt_0", "Box018_tt_0", "Box014_tt_0",
        "Box017_tt_0", "Box013_tt_0", "Box003_tt_0", "Box015_tt_0", "Box007_tt_0"
      ],
      description: "Responsáveis pela produção de proteínas.",
      text: "Os ribossomos são pequenas fábricas dentro da célula. Eles produzem proteínas a partir das instruções do DNA — proteínas que serão usadas para formar estruturas, enzimas e outras moléculas vitais. Mesmo simples e sem membranas, são fundamentais para o funcionamento e crescimento celular."
    },
    {
      name: "Flagelo",
      node: ["Line031_tt_0", "Line029_tt_0", "Line030_tt_0"],
      description: "Estrutura longa que permite o movimento da célula.",
      text: "O flagelo é uma estrutura longa e fina que funciona como um 'motorzinho' para a célula. Ele gira como uma hélice, impulsionando a célula para se mover em ambientes líquidos — o que ajuda, por exemplo, as bactérias a se aproximarem de nutrientes ou se afastarem de substâncias tóxicas."
    },
    {
      name: "Plasmídeo",
      node: "Line033_tt_0",
      description: "Fragmento extra de DNA com funções adaptativas.",
      text: "Os plasmídeos são pequenos anéis de DNA que ficam soltos no citoplasma. Eles contêm genes extras, muitas vezes relacionados à sobrevivência, como resistência a antibióticos. Além disso, podem ser trocados entre bactérias, ajudando na adaptação e na evolução desses micro-organismos."
    }
  ], 
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/archaea-eb47b67df9ca4c47b681716d572e3177">Archaea</a> 
  by <a href="https://sketchfab.com/arloopa">arloopa</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>
`
}

const PLANT_CELL: IModelData = {
  topic: "plant_cell", // exemplo de subtopic
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-models/master/plant_cell.glb', //"/models/plant_cell.glb",
  name: "Célula Vegetal",
  title: "Estrutura da Célula Vegetal",
  description: "Modelo 3D de uma célula vegetal com suas principais organelas.",
  text: `A célula vegetal é a unidade fundamental dos organismos do reino Plantae. Além das estruturas comuns a outras células eucariontes, como o núcleo e o citoplasma, ela apresenta características exclusivas: uma parede celular rígida composta por celulose, cloroplastos que realizam a fotossíntese e grandes vacúolos que regulam o armazenamento e o equilíbrio de água e substâncias no interior da célula.`,
  scale: 0.32,
  scale_sm: 0.35,
  scale_md: 0.36,
  scale_lg: 0.40,
  scale_2lg: 0.40,
  rotation: [0.83, 0, 0],
  position: [-2.1, 0.5, 0],
  node: [
    {
      name: "Parede Celular",
      node: ["cell_wall_Mat_0"],
      description: "Camada rígida que envolve a célula.",
      text: "A parede celular é uma estrutura espessa e resistente que envolve a membrana plasmática. Formada principalmente por celulose, ela dá forma, proteção e sustentação à célula vegetal, evitando que se rompa quando absorve muita água. É o que torna as plantas firmes e eretas."
    },
    {
      name: "Cloroplasto",
      node: ["Boole_Mat1_0"],
      description: "Organela responsável pela fotossíntese.",
      text: "Os cloroplastos são organelas verdes que contêm clorofila, o pigmento responsável por capturar a energia da luz solar. Essa energia é usada na fotossíntese para produzir glicose, o 'alimento' da planta, liberando oxigênio como subproduto."
    },
    {
      name: "Vacúolo Central",
      node: ["vacuoles_Mat_0"],
      description: "Grande compartimento cheio de seiva celular.",
      text: "O vacúolo central é um grande reservatório que ocupa boa parte do interior da célula vegetal. Ele armazena água, sais minerais, açúcares e pigmentos, além de ajudar a manter a pressão interna (pressão de turgor), garantindo que a célula fique rígida e a planta ereta."
    },
    {
      name: "Núcleo",
      node: [
        "Nucleus_2_Mat1_0",
        "Icosphere_Mat1_0",
        "shell_Mat1_0",
        "Nucleolus_2_Mat1_0"
      ],
      description: "Centro de controle da célula.",
      text: "O núcleo é o centro de comando da célula vegetal. Ele contém o DNA, que guarda as instruções genéticas responsáveis por controlar todas as atividades celulares, como o crescimento, a divisão e a produção de proteínas."
    },
    {
      name: "Mitocôndria",
      node: ["Sphere_002_Mat2_0"],
      description: "Organela de respiração celular.",
      text: "As mitocôndrias são as 'usinas de energia' da célula. Elas realizam a respiração celular, quebrando moléculas de glicose para liberar energia na forma de ATP, que é usada em todas as atividades vitais da célula."
    },
    {
      name: "Complexo de Golgi",
      node: ["golgi_Mat1_0"],
      description: "Organela de empacotamento e secreção.",
      text: "O Complexo de Golgi funciona como um centro de empacotamento e distribuição. Ele recebe proteínas e lipídios produzidos no retículo endoplasmático, modifica, armazena e os envia para outras partes da célula ou para fora dela."
    },
    {
      name: "Retículo Rugoso",
      node: ["floating_ribosomes_Mat1_0", "Mat.1_0"],
      description: "Rede de membranas com ribossomos aderidos.",
      text: "O Retículo Endoplasmático Rugoso (RER) é uma rede de membranas ligada ao núcleo e coberta por ribossomos. Ele fabrica proteínas que serão exportadas pela célula ou incorporadas às membranas celulares."
    },
    {
      name: "Retículo  Liso",
      node: null,
      description: "Rede de membranas sem ribossomos.",
      text: "O Retículo Endoplasmático Liso (REL) é uma rede de túbulos sem ribossomos. Ele participa da produção de lipídios, da regulação do cálcio e da desintoxicação da célula, removendo substâncias nocivas."
    },
    {
      name: "Ribossomos",
      node: "floating_ribosomes_Mat1_0",
      description: "Pequenas partículas de síntese proteica.",
      text: "Os ribossomos são pequenas estruturas responsáveis por produzir proteínas. Eles leem as instruções do RNA mensageiro e montam as proteínas, que podem atuar como enzimas, hormônios ou componentes estruturais da célula."
    },
    {
      name: "Membrana Plasmática",
      node: "lipid_bilayer_Mat_0",
      description: "Camada fina que envolve o citoplasma.",
      text: "A membrana plasmática é uma fina camada que envolve a célula e controla o que entra e sai dela. É semipermeável, ou seja, permite a passagem de algumas substâncias e impede a de outras, mantendo o equilíbrio interno da célula."
    },
    {
      name: "Citoplasma",
      node: "Disc_glass_0",
      description: "Matriz fluida que preenche a célula.",
      text: "O citoplasma é o fluido gelatinoso que preenche o interior da célula. Nele estão suspensas as organelas e ocorrem diversas reações químicas essenciais para o metabolismo e a manutenção da vida celular."
    },
    {
      name: "Citoesqueleto",
      node: "cytoskeleton_Mat1_0",
      description: "Rede de filamentos proteicos.",
      text: "O citoesqueleto é uma rede de fibras proteicas que sustenta a forma da célula e organiza o posicionamento das organelas. Ele também participa do transporte de substâncias e do movimento interno dentro da célula."
    },
    {
      name: "Nucléolo",
      node: "Nucleolus_2_Mat1_0",
      description: "Estrutura dentro do núcleo.",
      text: "O nucléolo é uma estrutura localizada dentro do núcleo. Sua principal função é produzir e montar os ribossomos, que depois serão enviados ao citoplasma para fabricar proteínas."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/plant-cell-biology-0640c7a14f41400fbdac382c7de1d776">Plant Cell | Biology</a> 
  by <a href="https://sketchfab.com/okchs">Oliver</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>
`,
}

const EUKARYOTIC_CELL: IModelData = {
  topic: "eukaryotic_cell",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-models/master/eukaryotic_cell.glb',//"/models/eukaryotic_cell.glb",
  name: "Célula Eucarionte",
  title: "Estrutura da Célula Eucarionte",
  description: "Modelo 3D de uma célula eucarionte animal com suas organelas.",
  text: `As células eucariontes são mais complexas que as procariontes, pois possuem um núcleo verdadeiro — envolto por uma membrana — onde se localiza o DNA. Também apresentam diversas organelas membranosas, cada uma responsável por uma função essencial, como a produção de energia, a síntese de proteínas e o transporte de substâncias. Essa compartimentalização torna o funcionamento celular mais eficiente e é uma característica de organismos pluricelulares, como animais e plantas, e também de seres unicelulares, como os protozoários.`,
  scale: 0.0045,
  scale_sm: 0.006,
  scale_md: 0.006,
  scale_lg: 0.006,
  scale_2lg: 0.006,
  rotation: [0.083, 0, 0],
  position: [0, 0.5, 0],
  node: [
    {
      name: "Núcleo",
      node: [
        "Nulo__Material001_0",
        "Nulo__Material010_0",
        "Nulo__Material027_0"
      ],
      description: "Centro de controle da célula.",
      text: "O núcleo é o 'centro de comando' da célula eucarionte. Ele armazena o DNA — o material genético que contém todas as informações necessárias para o funcionamento, o crescimento e a reprodução celular. O núcleo também controla a produção de proteínas e coordena todas as atividades da célula."
    },
    {
      name: "Vacúolo",
      node: "Nulo__Material1_0",
      description: "Pequena vesícula membranosa presente no citoplasma.",
      text: "Nas células animais, os vacúolos são menores e temporários. Eles armazenam substâncias, participam do equilíbrio da quantidade de água (regulação osmótica) e auxiliam na digestão e na eliminação de resíduos. Já nas células vegetais, há um grande vacúolo central permanente."
    },
    {
      name: "Mitocôndria",
      node: ["Nulo__Material008_0", "Nulo__Material007_0"],
      description: "Organela de respiração celular.",
      text: "As mitocôndrias são as 'usinas de energia' da célula. Elas realizam a respiração celular, transformando a glicose e o oxigênio em ATP — a principal fonte de energia usada nas atividades vitais da célula. Quanto mais ativa for a célula, mais mitocôndrias ela possui."
    },
    {
      name: "Retículo Rugoso",
      node: "Nulo__Material005_0",
      description: "Rede de membranas com ribossomos aderidos.",
      text: "O Retículo Endoplasmático Rugoso (RER) é uma rede de canais e bolsas ligada ao núcleo, coberta por ribossomos. Ele tem papel essencial na síntese de proteínas, especialmente aquelas que serão exportadas ou inseridas nas membranas celulares."
    },
    {
      name: "Retículo Liso",
      node: "Nulo__Material026_0",
      description: "Rede de membranas sem ribossomos.",
      text: "O Retículo Endoplasmático Liso (REL) é uma rede de túbulos sem ribossomos. Ele está envolvido na produção de lipídios, no armazenamento de íons e na desintoxicação da célula — ajudando a neutralizar substâncias tóxicas, como medicamentos e álcool."
    },
    {
      name: "Complexo de Golgi",
      node: "Nulo__Material006_0",
      description: "Organela de empacotamento e secreção.",
      text: "O Complexo de Golgi atua como uma central de empacotamento e envio de substâncias. Ele recebe proteínas e lipídios do retículo endoplasmático, modifica essas moléculas (como a adição de açúcares) e as envia para seu destino dentro ou fora da célula, por meio de vesículas."
    },
    {
      name: "Lisossomo",
      node: "Nulo__Material025_0",
      description: "Vesícula com enzimas digestivas.",
      text: "Os lisossomos são pequenas bolsas que contêm enzimas digestivas. Eles são responsáveis por quebrar partículas, organelas danificadas e até micro-organismos invasores, mantendo a limpeza e o equilíbrio interno da célula — um processo chamado de digestão intracelular."
    },
    {
      name: "Ribossomos",
      node: "Nulo__Material018_0",
      description: "Pequenas partículas de síntese proteica.",
      text: "Os ribossomos são estruturas responsáveis pela produção de proteínas. Eles utilizam as instruções do RNA mensageiro para montar as cadeias de aminoácidos que formarão proteínas essenciais para o crescimento, a regeneração e o funcionamento da célula."
    },
    {
      name: "Centríolos",
      node: "Nulo__Material025_0",
      description: "Estruturas cilíndricas formadas por microtúbulos.",
      text: "Os centríolos são estruturas em forma de cilindro que participam da divisão celular, ajudando a organizar o fuso mitótico. Eles também estão ligados à formação de cílios e flagelos, estruturas que auxiliam no movimento celular ou no deslocamento de substâncias ao redor da célula."
    },
    {
      name: "Peroxissomos",
      node: "Nulo__Material003_0",
      description: "Vesículas com enzimas oxidativas.",
      text: "Os peroxissomos são pequenas vesículas que contêm enzimas capazes de decompor substâncias tóxicas, como o peróxido de hidrogênio (água oxigenada). Além disso, participam da quebra de ácidos graxos e do metabolismo de lipídios."
    },
    {
      name: "Membrana Plasmática",
      node: "Nulo__Material_0",
      description: "Camada fina que envolve a célula.",
      text: "A membrana plasmática é uma barreira semipermeável que envolve toda a célula. Ela controla a entrada e saída de substâncias, protegendo o interior celular e permitindo a comunicação com o meio externo por meio de proteínas e receptores."
    },
    {
      name: "Citoplasma",
      node: "citoplasma_remesh_Material004_0",
      description: "Matriz fluida que preenche a célula.",
      text: "O citoplasma é um fluido gelatinoso que preenche o interior da célula e abriga todas as organelas. Nele ocorrem diversas reações químicas essenciais ao metabolismo, e ele também serve de meio de transporte para substâncias entre as organelas."
    },
    {
      name: "Citoesqueleto",
      node: "Nulo__Material013_0",
      description: "Rede de filamentos proteicos.",
      text: "O citoesqueleto é uma rede de fibras de proteínas que sustenta a forma da célula, mantém as organelas em seus lugares e participa do transporte interno de substâncias. Ele também ajuda na movimentação celular e na divisão do citoplasma durante a mitose."
    },
    {
      name: "Nucléolo",
      node: "Nulo__Material027_0",
      description: "Estrutura dentro do núcleo.",
      text: "O nucléolo é uma região densa localizada dentro do núcleo. Sua principal função é produzir e montar os ribossomos, que depois serão enviados ao citoplasma para participar da síntese de proteínas."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/animal-cell-20-annotated-in-english-0d9f7f4257224975b2ef83a283709b2f">Animal cell 2.0 - annotated in English</a> 
  by <a href="https://sketchfab.com/montanna">montanna</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>
`
}

export const CYTOLOGY_MODELS: IModelData[] = [
  PROKARYOTIC_CELL,
  PLANT_CELL,
  EUKARYOTIC_CELL
]



