import type { IModelData } from "@interfaces/model";

const Anthozoa: IModelData = {
  topic: "cnidaria_class_anthozoa",
  // source: "/brain_coral.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/brain_coral_compressed.glb',
  name: "Coral-cérebro",
  title: "Coral-cérebro (Família Mussidae)",
  description:
    "Os corais da classe Anthozoa são cnidários exclusivamente pólipos, fixos ao substrato marinho. O coral-cérebro é conhecido por suas colônias maciças e sulcos que lembram os giros de um cérebro humano. Esses organismos formam recifes que sustentam uma enorme biodiversidade nos oceanos tropicais.",
  text: "A classe Anthozoa reúne corais e anêmonas-do-mar, cnidários que não apresentam fase medusoide em seu ciclo de vida. O coral-cérebro, pertencente à família Mussidae, é um exemplo marcante: suas colônias calcárias crescem lentamente e podem viver por séculos. Cada sulco visível na estrutura corresponde ao crescimento de pólipos interconectados, que secretam carbonato de cálcio para formar o esqueleto rígido. Esses corais vivem em simbiose com algas zooxantelas, que realizam fotossíntese e fornecem nutrientes essenciais. Além de sua beleza, o coral-cérebro desempenha papel vital na formação de recifes, que servem de abrigo, proteção e fonte de alimento para inúmeras espécies marinhas. Contudo, estão ameaçados por mudanças climáticas, acidificação dos oceanos e atividades humanas, tornando sua conservação fundamental para a saúde dos ecossistemas costeiros.",
  scale: 0.003,
  scale_sm: 0.004,
  scale_md: 0.004,
  scale_lg: 0.005,
  scale_2lg: 0.006,
  rotation: [0, 0, 0],
  position: [0, 0.4, 0],
  node: [
    {
      name: "Estrutura corporal",
      node: null,
      description: "Colônias calcárias com sulcos que lembram um cérebro.",
      text: "O coral-cérebro é formado por pólipos interligados que secretam carbonato de cálcio, criando uma estrutura rígida e duradoura. Os sulcos característicos aumentam a superfície de contato com a água e lembram os giros de um cérebro humano."
    },
    {
      name: "Alimentação e simbiose",
      node: null,
      description: "Relação simbiótica com algas zooxantelas.",
      text: "Os pólipos capturam pequenas partículas de alimento com seus tentáculos, mas dependem principalmente das zooxantelas, algas microscópicas que vivem em seus tecidos e realizam fotossíntese, fornecendo energia ao coral."
    },
    {
      name: "Habitat",
      node: null,
      description: "Recifes tropicais rasos e iluminados.",
      text: "O coral-cérebro habita águas tropicais claras e rasas, onde a luz solar é abundante para a fotossíntese das zooxantelas. É encontrado em recifes do Atlântico e do Caribe, formando parte essencial da estrutura recifal."
    },
    {
      name: "Reprodução",
      node: null,
      description: "Assexuada (brotamento) e sexuada (liberação de gametas).",
      text: "Os corais da classe Anthozoa se reproduzem tanto por brotamento — formando colônias geneticamente idênticas — quanto por reprodução sexuada, liberando gametas na água. A fecundação origina larvas planula que se fixam e originam novos pólipos."
    },
    {
      name: "Importância ecológica",
      node: null,
      description: "Base estrutural dos recifes de coral.",
      text: "Os corais-cérebro contribuem para a formação de recifes, que abrigam milhares de espécies marinhas. Além disso, protegem as costas contra erosão e tempestades, sendo fundamentais para a biodiversidade e para comunidades humanas costeiras."
    }
  ],
  attribuition: `<div>
    Modelo <a href="https://sketchfab.com/3d-models/brain-coral-c841a57b0b584a0d8fbf655c612dc836">Brain Coral</a> 
    por <a href="https://sketchfab.com/RubaQewar">RubaQewar</a> 
    em <a href="https://sketchfab.com">Sketchfab</a>, 
    licenciado sob <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
  </div>`,
  wikipedia: "https://pt.wikipedia.org/wiki/Mussidae",
  // sound: '/sounds/ocean.wav',
  // sceneBg: "#000",
  hasAnimation: false
};

const Hydrozoa: IModelData = {
  topic: "cnidaria_class_hydrozoa",
  // source: "/solmundella_jellyfish_narcomedusae.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/solmundella_jellyfish_narcomedusae_compressed-updated.glb',
  name: "Solmundella Jellyfish",
  title: "Solmundella (Narcomedusae)",
  description:
    "Cnidário da classe Hydrozoa. Pequena medusa transparente da ordem Narcomedusae, com corpo achatado e tentáculos que partem da face superior da campânula. Habita águas oceânicas profundas e temperadas.",
  text: "A Solmundella é uma medusa da ordem Narcomedusae, pertencente à classe Hydrozoa. Diferencia-se das medusas típicas por apresentar corpo em forma de disco achatado e tentáculos que emergem da face superior da campânula, uma adaptação para a vida pelágica. Esses tentáculos possuem cnidócitos que liberam toxinas, permitindo capturar plâncton e pequenos crustáceos. É uma espécie marinha de águas profundas e temperadas, transparente e de pequeno porte, que se desloca com pulsos rítmicos. Apesar de seu tamanho reduzido, a Solmundella tem papel relevante nas cadeias alimentares oceânicas, servindo de presa para peixes e outros organismos maiores. Sua morfologia e ciclo de vida complexos a tornam um exemplo notável da diversidade dos cnidários.",
  scale: 0.38,
  scale_sm: 0.38,
  scale_md: 0.38,
  scale_lg: 0.38,
  scale_2lg: 0.4,
  rotation: [0.523, 0, -0.1666],
  position: [-0.2, 0.1, 0],
  node: [
    {
      name: "Estrutura corporal",
      node: null,
      description: "Campânula achatada com tentáculos que partem da face superior.",
      text: "A Solmundella possui uma campânula em forma de disco achatado, de aparência quase translúcida. Seus tentáculos emergem da face superior — uma característica única da ordem Narcomedusae — facilitando o movimento e a captura de presas durante o deslocamento vertical."
    },
    {
      name: "Tentáculos e alimentação",
      node: null,
      description: "Tentáculos urticantes usados para capturar presas microscópicas.",
      text: "Os tentáculos da Solmundella contêm cnidócitos, células urticantes que liberam toxinas para imobilizar presas como copépodes e outros pequenos crustáceos. Após a captura, o alimento é levado até a boca localizada na face inferior da campânula."
    },
    {
      name: "Reprodução",
      node: null,
      description: "Alternância entre gerações pólipo e medusa.",
      text: "Os hidrozoários apresentam alternância de gerações: uma fase assexuada (pólipo, geralmente fixo) e outra sexuada (medusa livre). No caso da Solmundella, a fase medusoide é predominante, e a reprodução sexuada envolve liberação de gametas na água."
    },
    {
      name: "Habitat",
      node: null,
      description: "Espécie pelágica de águas profundas e temperadas.",
      text: "A Solmundella vive livremente na coluna d’água (pelágica), em oceanos temperados e profundos. Sua transparência e corpo leve são adaptações à vida em ambientes com pouca luz e alta pressão."
    },
    {
      name: "Importância ecológica",
      node: null,
      description: "Parte importante das cadeias alimentares oceânicas.",
      text: "Apesar de seu pequeno tamanho, a Solmundella contribui para o equilíbrio ecológico dos oceanos. Atua como predadora de plâncton e serve de alimento para diversos peixes, cefalópodes e outras medusas."
    }
  ],
  attribuition: `<div>
    Modelo <a href="https://sketchfab.com/3d-models/solmundella-jellyfish-narcomedusae-7bef3b41186e407e935a2da97f04bd3a">Solmundella Jellyfish (Narcomedusae)</a> 
    por <a href="https://sketchfab.com/n-">n-</a> 
    em <a href="https://sketchfab.com">Sketchfab</a>, 
    licenciado sob <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
  </div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Narcomedusae",
  // sound: '/sounds/ocean.wav',
  sceneBg: "#323232",
  hasAnimation: true
};

const Scyphozoa: IModelData = {
  topic: "cnidaria_class_scyphozoa",
  // source: "/cnidarians_class_scyphozoa.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/cnidarians_class_scyphozoa_compressed.glb',
  name: "Água-viva Mosaico",
  title: "Água-viva Mosaico (Catostylus mosaicus)",
  description:
    "As águas-vivas da classe Scyphozoa são conhecidas como as 'verdadeiras águas-vivas'. Possuem corpo gelatinoso em forma de sino e vivem principalmente em ambientes marinhos costeiros. Desempenham papel fundamental nas cadeias alimentares e no equilíbrio ecológico dos oceanos.",
  text: "A classe Scyphozoa reúne as chamadas 'verdadeiras águas-vivas', organismos marinhos pertencentes ao filo Cnidaria. Seu corpo é formado por uma mesogleia gelatinosa e transparente, com tentáculos dotados de cnidócitos — células especializadas na captura de presas e defesa. O ciclo de vida é dominado pela fase medusoide, que nada livremente e se alimenta de plâncton, pequenos crustáceos e peixes. A água-viva mosaico (Catostylus mosaicus), também conhecida como Blubber Jelly, é encontrada em águas costeiras do Indo-Pacífico e apresenta coloração azulada ou amarronzada. Pode formar grandes agrupamentos e movimenta-se por pulsos rítmicos da campânula. Além de sua importância ecológica como predadora e presa, é um exemplo da necessidade de conservar a biodiversidade marinha, pois alterações ambientais e poluição impactam diretamente suas populações.",
  scale: 0.8,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [0, 0, 0],
  position: [-0.3, 0, 0],
  node: [
    {
      name: "Estrutura corporal",
      node: null,
      description: "Corpo gelatinoso em forma de sino (campânula).",
      text: "O corpo da água-viva é composto por uma mesogleia espessa e elástica, que confere flutuação e permite movimentos suaves na água. A forma de sino facilita o deslocamento por meio de contrações rítmicas."
    },
    {
      name: "Tentáculos e alimentação",
      node: null,
      description: "Tentáculos com cnidócitos para captura de presas.",
      text: "Seus tentáculos possuem cnidócitos — células urticantes que liberam toxinas para capturar plâncton e pequenos animais. O alimento é levado até a boca, localizada na face inferior da campânula."
    },
    {
      name: "Reprodução",
      node: null,
      description: "Alternância entre gerações pólipo e medusa.",
      text: "As águas-vivas se reproduzem sexualmente na fase medusoide, liberando gametas na água. Após a fecundação, forma-se uma larva planula que se fixa e dá origem a um pólipo, o qual pode gerar novas medusas por brotamento."
    },
    {
      name: "Habitat",
      node: null,
      description: "Ambientes marinhos costeiros e estuarinos do Indo-Pacífico.",
      text: "A Blubber Jelly habita águas costeiras mornas e ricas em nutrientes, sendo comum em estuários e baías. Pode formar grandes agregações (bloom), principalmente durante períodos de aumento de temperatura."
    },
    {
      name: "Importância ecológica",
      node: null,
      description: "Papel nas cadeias alimentares e equilíbrio marinho.",
      text: "A água-viva mosaico atua como predadora de plâncton e presa para tartarugas marinhas e peixes. É essencial para o equilíbrio dos ecossistemas costeiros, e seu estudo ajuda a compreender mudanças ambientais nos oceanos."
    }
  ],
  attribuition: `<div>
    Modelo <a href="https://sketchfab.com/3d-models/jellyfish-003-7ef761c3eb2143b6a7178ddfb97e9e88">Jellyfish_003</a> 
    por <a href="https://sketchfab.com/n-">n-</a> 
    em <a href="https://sketchfab.com">Sketchfab</a>, 
    licenciado sob <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
  </div>`,
  wikipedia: "https://pt.wikipedia.org/wiki/Catostylus_mosaicus",
  // sound: '/sounds/ocean.wav',
  sceneBg: "#323232",
  hasAnimation: true
};


export const CNIDARIAN_MODELS: IModelData[] = [
  Anthozoa,
  Hydrozoa,
  Scyphozoa
]
