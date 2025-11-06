import type { IModelData } from "@interfaces/model";

const Anthozoa: IModelData = {
  topic: "cnidaria_class_anthozoa",
  source: "/brain_coral.glb",
  name: "Coral-cérebro",
  title: "Coral-cérebro (Família Mussidae)",
  description: "Os corais da classe Anthozoa são cnidários exclusivamente pólipos, fixos ao substrato marinho. O coral-cérebro é conhecido por suas colônias maciças e sulcos que lembram os giros de um cérebro humano. Esses organismos formam recifes que sustentam uma enorme biodiversidade nos oceanos tropicais.",
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
      name: "Importância ecológica",
      node: null,
      description: "Base estrutural dos recifes de coral.",
      text: "Os corais-cérebro contribuem para a formação de recifes, que abrigam milhares de espécies marinhas. Além disso, protegem as costas contra erosão e tempestades, sendo fundamentais para a biodiversidade e para comunidades humanas costeiras."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/brain-coral-c841a57b0b584a0d8fbf655c612dc836">Brain Coral</a> 
  by <a href="https://sketchfab.com/RubaQewar">RubaQewar</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>
`,
  wikipedia: "https://pt.wikipedia.org/wiki/Mussidae",
  // sound: '/sounds/ocean.wav',
  // sceneBg: '#001a33',
  hasAnimation: false
};

const Hydrozoa: IModelData = {
  topic: "cnidaria_class_hydrozoa",
  source: "/solmundella_jellyfish_narcomedusae.glb",
  name: "Solmundella Jellyfish",
  title: "Solmundella (Narcomedusae)",
  description: "Cnidário da classe Hydrozoa. Pequena medusa transparente da ordem Narcomedusae, com corpo achatado e tentáculos que partem da face superior da campânula.",
  text: "A Solmundella é uma medusa da ordem Narcomedusae, pertencente à classe Hydrozoa. Diferencia-se por apresentar corpo em forma de disco achatado, com tentáculos que emergem da face superior da campânula, ao contrário da maioria das medusas. É uma espécie pelágica, encontrada em águas oceânicas profundas e temperadas. Alimenta-se de plâncton e pequenos organismos, utilizando seus tentáculos urticantes para capturar presas. Apesar de seu tamanho reduzido, desempenha papel importante nas cadeias alimentares marinhas, servindo de alimento para peixes e outros predadores. Sua morfologia peculiar a torna um exemplo fascinante da diversidade dentro dos cnidários.",
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
      text: "Ao contrário de muitas medusas, a Solmundella apresenta tentáculos que emergem da parte superior da campânula, característica marcante da ordem Narcomedusae."
    },
    {
      name: "Tentáculos e alimentação",
      node: null,
      description: "Tentáculos urticantes para captura de plâncton.",
      text: "Seus tentáculos possuem cnidócitos que liberam toxinas para imobilizar presas microscópicas, como plâncton e pequenos crustáceos."
    },
    {
      name: "Habitat",
      node: null,
      description: "Ambientes oceânicos pelágicos.",
      text: "A Solmundella é encontrada em águas oceânicas profundas e temperadas, vivendo livremente na coluna d’água."
    },
    {
      name: "Importância ecológica",
      node: null,
      description: "Parte das cadeias alimentares marinhas.",
      text: "Apesar de pequena, a Solmundella é alimento para peixes e outros predadores, além de predadora de plâncton, contribuindo para o equilíbrio ecológico dos oceanos."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/solmundella-jellyfish-narcomedusae-7bef3b41186e407e935a2da97f04bd3a">Solmundella Jellyfish (Narcomedusae)</a> 
  by <a href="https://sketchfab.com/n-">n-</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>
`,
  wikipedia: "https://en.wikipedia.org/wiki/Narcomedusae",
  // sound: '/sounds/ocean.wav',
  sceneBg: '#000000',
  hasAnimation: true
};

const Scyphozoa: IModelData = {
  topic: "cnidaria_class_scyphozoa",
  source: "/cnidarians_class_scyphozoa.glb",
  name: "Água-viva Mosaico",
  title: "Água-viva Blubber Jelly",
  description: "As águas-vivas da classe Scyphozoa são conhecidas como as 'verdadeiras águas-vivas'. Elas possuem corpo gelatinoso em forma de sino, vivem principalmente em ambientes marinhos costeiros e desempenham papel importante no equilíbrio ecológico dos oceanos.",
  text: "A classe Scyphozoa reúne as chamadas 'verdadeiras águas-vivas', animais marinhos do filo Cnidaria. Seu corpo é formado por uma mesogleia gelatinosa, com tentáculos que contêm cnidócitos — células especializadas na captura de presas e defesa. O ciclo de vida é marcado pela predominância da fase medusoide, que nada livremente e se alimenta de plâncton, pequenos peixes e outros organismos. A Blubber Jelly (*Catostylus mosaicus*) é um representante típico dessa classe, encontrada em águas costeiras da região do Indo-Pacífico. Ela possui coloração azulada ou amarronzada e pode formar grandes agregações. Além de sua importância ecológica como predadora e presa em cadeias alimentares marinhas, destaca-se como exemplo da necessidade de conservar a biodiversidade oceânica, já que mudanças ambientais e poluição podem afetar diretamente suas populações e o equilíbrio dos ecossistemas.",
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
      description: "Corpo em forma de sino, composto por mesogleia gelatinosa.",
      text: "A Blubber Jelly apresenta corpo mole e translúcido, sustentado por uma mesogleia espessa. Essa estrutura permite flutuar e se locomover lentamente no ambiente marinho."
    },
    {
      name: "Tentáculos e alimentação",
      node: null,
      description: "Tentáculos com cnidócitos para captura de presas.",
      text: "Os tentáculos da Blubber Jelly possuem cnidócitos, células urticantes que liberam toxinas para imobilizar presas. Alimenta-se de plâncton, pequenos crustáceos e peixes."
    },
    {
      name: "Habitat",
      node: null,
      description: "Ambientes marinhos costeiros do Indo-Pacífico.",
      text: "A Blubber Jelly é encontrada em águas costeiras, geralmente em estuários e baías, onde pode formar grandes grupos. Prefere águas mornas e ricas em nutrientes."
    },
    {
      name: "Importância ecológica",
      node: null,
      description: "Papel no equilíbrio dos ecossistemas marinhos.",
      text: "Como predadora de plâncton e presa de tartarugas marinhas e peixes, a Blubber Jelly participa ativamente das cadeias alimentares. Sua conservação é essencial para manter o equilíbrio ecológico dos oceanos."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/jellyfish-003-7ef761c3eb2143b6a7178ddfb97e9e88">Jellyfish_003</a> 
  by <a href="https://sketchfab.com/n-">n-</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>
`,
  wikipedia: "https://pt.wikipedia.org/wiki/Catostylus_mosaicus",
  // sound: '/sounds/ocean.wav',
  sceneBg: '#000000',
  hasAnimation: true
};

export const CNIDARIAN_MODELS: IModelData[] = [
  Anthozoa,
  Hydrozoa,
  Scyphozoa
]
