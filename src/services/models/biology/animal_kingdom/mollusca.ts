import { ANIMAL_KINGDOM_TOPICS } from "@interfaces/disciplines/biology";
import type { IModelData } from "@interfaces/model";

const Gastropod: IModelData = {
  // topic: "mollusca_class_gastropoda",
  topic: ANIMAL_KINGDOM_TOPICS.MOLLUSCA_CLASS_GASTROPODA,
  // source: "/tsukushi_snail_euhadra_herklotsi.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/tsukushi_snail_euhadra_herklotsi_compressed.glb',
  name: "Euhadra herklotsi",
  title: "Caracol japonês (Euhadra herklotsi)",
  description: "Molusco gastrópode terrestre com concha espiralada e respiração pulmonar. Espécie endêmica do Japão, sensível à poluição e importante para o equilíbrio ecológico.",
  text: "O Euhadra herklotsi, conhecido como caracol japonês ou Tsukushi Snail, é um gastrópode pulmonado pertencente à família Camaenidae. Vive em ambientes terrestres úmidos e é endêmico do Japão. Seu corpo mole é protegido por uma concha calcária em espiral, que auxilia na retenção de umidade e na defesa contra predadores. Respira por meio de uma cavidade pulmonar adaptada — uma característica evolutiva que permitiu aos gastrópodes colonizar o ambiente terrestre. Alimenta-se de folhas, frutos caídos e matéria vegetal em decomposição, contribuindo para a ciclagem de nutrientes e a fertilidade do solo. Por ser sensível à poluição e à perda de habitat, é considerado um indicador biológico da qualidade ambiental.",
  scale: 70,
  scale_sm: 75,
  scale_md: 80,
  scale_lg: 90,
  scale_2lg: 100,
  rotation: [0.174, -0.523, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Concha",
      node: null,
      description: "Estrutura calcária em espiral que protege o corpo.",
      text: "A concha do Euhadra herklotsi é espiralada, resistente e essencial para evitar a desidratação e proteger contra predadores."
    },
    {
      name: "Cavidade pulmonar",
      node: null,
      description: "Sistema respiratório adaptado ao ambiente terrestre.",
      text: "Esse caracol respira por pulmões formados a partir de uma cavidade modificada, o que permite a troca gasosa em ar úmido."
    },
    {
      name: "Radula",
      node: null,
      description: "Estrutura raspadora usada na alimentação.",
      text: "A radula é uma 'língua' com fileiras de dentículos quitinosos, usada para raspar superfícies e ingerir matéria vegetal."
    },
    {
      name: "Habitat",
      node: null,
      description: "Ambientes terrestres úmidos e sombreados do Japão.",
      text: "O Euhadra herklotsi vive em florestas e regiões com alta umidade, onde encontra abrigo e alimento abundante."
    },
    {
      name: "Importância ecológica",
      node: null,
      description: "Contribui para a reciclagem de nutrientes e o equilíbrio do solo.",
      text: "Ao decompor matéria orgânica, esses caracóis participam do ciclo de nutrientes e ajudam a manter o solo fértil."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/cc0-tsukushi-snail-euhadra-herklotsi-c8abfc3cf4f54dd98b9076b79799bb39">Tsukushi Snail (Euhadra herklotsi)</a> 
  by <a href="https://sketchfab.com/ffishAsia-and-floraZia">ffish.asia / floraZia.com</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 Public Domain</a>
</div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Euhadra_herklotsi",
  sceneBg: '#000',
  hasAnimation: true
} as const;

const Cephalopoda_BobtailSquid: IModelData = {
  // topic: "mollusca_class_cephalopoda_bobtail_squid",
  topic: ANIMAL_KINGDOM_TOPICS.MOLLUSCA_CLASS_CEPHALOPODA,
  source: "/firefly-squid-glowing.glb",
  name: "Bobtail Squid",
  title: "Lula Bobtail (Sepiolidae)",
  description: "Cefalópode de pequeno porte, encontrado em águas costeiras rasas. Conhecido por sua bioluminescência simbiótica e habilidade de camuflagem.",
  text: "A lula Bobtail pertence à família Sepiolidae, dentro da classe Cephalopoda. Diferente de lulas maiores, possui corpo arredondado e compacto, lembrando um polvo em miniatura. Vive enterrada na areia durante o dia e sai para caçar à noite. Uma de suas características mais notáveis é a simbiose com bactérias bioluminescentes (Vibrio fischeri), que vivem em um órgão especial e produzem luz. Essa bioluminescência ajuda a camuflar a lula contra predadores, imitando o brilho da superfície marinha. Alimenta-se de pequenos crustáceos e peixes, desempenhando papel importante nos ecossistemas costeiros. Além de sua relevância ecológica, é um modelo de estudo em biologia marinha e microbiologia devido à sua relação simbiótica única.",
  scale: 0.4,
  scale_sm: 0.5,
  scale_md: 0.6,
  scale_lg: 0.7,
  scale_2lg: 0.8,
  rotation: [0, 0, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Estrutura corporal",
      node: null,
      description: "Corpo arredondado e compacto, com nadadeiras laterais.",
      text: "A lula Bobtail possui corpo pequeno e ovalado, com nadadeiras que permitem movimentos ágeis. Seu tamanho varia entre 2 e 8 cm, dependendo da espécie."
    },
    {
      name: "Bioluminescência",
      node: null,
      description: "Simbiose com bactérias luminosas.",
      text: "Abriga bactérias Vibrio fischeri em um órgão especializado. A luz emitida ajuda a camuflar sua silhueta contra a iluminação da superfície marinha, evitando predadores."
    },
    {
      name: "Comportamento",
      node: null,
      description: "Enterra-se na areia durante o dia.",
      text: "Durante o dia, a lula Bobtail se esconde sob a areia para evitar predadores. À noite, emerge para caçar pequenos crustáceos e peixes."
    },
    {
      name: "Importância ecológica",
      node: null,
      description: "Predador e presa em ecossistemas costeiros.",
      text: "Serve de alimento para peixes maiores e aves marinhas, enquanto controla populações de pequenos invertebrados. É também um organismo modelo em pesquisas científicas."
    }
  ],
  attribuition: "Conteúdo adaptado para fins educativos - App Sapiens",
  wikipedia: "https://en.wikipedia.org/wiki/Bobtail_squid",
  // sceneBg: '#000000',
  hasAnimation: true
} as const;

const Cephalopoda_BlueRingedOctopus: IModelData = {
  // topic: "mollusca_class_cephalopoda_octopus",
  topic: ANIMAL_KINGDOM_TOPICS.MOLLUSCA_CLASS_CEPHALOPODA,
  // source: "/scene.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/blue_ring_octopus_compressed.glb',
  name: "Blue-ringed Octopus",
  title: "Polvo-de-anéis-azuis (Hapalochlaena)",
  description: "Cefalópode de pequeno porte e alta toxicidade, encontrado em recifes do Indo-Pacífico. Reconhecido por seus anéis azuis fluorescentes que funcionam como aviso de perigo.",
  text: "O polvo-de-anéis-azuis pertence ao gênero Hapalochlaena, dentro da classe Cephalopoda. Apesar de medir apenas entre 10 e 20 cm, é um dos animais mais venenosos do planeta. Vive em recifes de coral, zonas costeiras e áreas arenosas do Indo-Pacífico, onde se esconde em conchas, fendas e rochas. Sua característica mais marcante são os anéis azuis fluorescentes, que brilham intensamente quando o animal se sente ameaçado, servindo como um alerta visual aos predadores. Alimenta-se de pequenos crustáceos e peixes, que paralisa com uma potente neurotoxina presente em sua saliva. Embora potencialmente letal para humanos, é um animal tímido e raramente ataca, sendo um exemplo notável das estratégias defensivas e da complexa biologia dos cefalópodes.",
  scale: 1.3,
  scale_sm: 1.4,
  scale_md: 1.8,
  scale_lg: 2,
  scale_2lg: 2.5,
  rotation: [0, 0.436, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Morfologia",
      node: null,
      description: "Corpo pequeno e flexível, com oito braços curtos.",
      text: "Possui corpo mole e braços robustos, adaptados para se mover entre fendas e superfícies rochosas dos recifes."
    },
    {
      name: "Anéis fluorescentes",
      node: null,
      description: "Coloração azul intensa em padrão de anéis.",
      text: "Os anéis azuis aparecem subitamente quando o animal se sente ameaçado, servindo como aviso visual de sua alta toxicidade."
    },
    {
      name: "Veneno",
      node: null,
      description: "Saliva com neurotoxina letal (tetrodotoxina).",
      text: "A toxina do Hapalochlaena é suficientemente potente para paralisar rapidamente suas presas — e pode ser fatal para humanos."
    },
    {
      name: "Alimentação",
      node: null,
      description: "Predador de crustáceos e pequenos peixes.",
      text: "Usa seu bico quitinoso para perfurar presas e injetar veneno, digerindo o alimento externamente antes de ingeri-lo."
    },
    {
      name: "Comportamento",
      node: null,
      description: "Animal tímido e não agressivo.",
      text: "Apesar de seu veneno poderoso, o polvo-de-anéis-azuis só exibe comportamento defensivo quando é manipulado ou ameaçado."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/blue-ringed-octopus-inktober-day-1-ac85becda709471494d049ab346136f0">Blue Ringed Octopus – Inktober Day 1</a> 
  by <a href="https://sketchfab.com/lesliestowe">lesliestowe</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Blue-ringed_octopus",
  // sound: '/sounds/ocean.wav',
  sceneBg: '#000000',
  hasAnimation: true
} as const;

const Cephalopoda_Nautilus: IModelData = {
  // topic: "mollusca_class_cephalopoda_nautilus",
  topic: ANIMAL_KINGDOM_TOPICS.MOLLUSCA_CLASS_CEPHALOPODA,
  // source: "/nautilus_shell.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/nautilus_shell_compressed.glb',
  name: "Nautilus pompilius",
  title: "Nautilus (Nautilus pompilius)",
  description: "Cefalópode marinho primitivo, conhecido como 'fóssil vivo'. Possui concha externa espiralada com câmaras internas que controlam sua flutuabilidade.",
  text: "O Nautilus pompilius é um cefalópode da ordem Nautilida, considerado um dos representantes mais antigos e primitivos da classe Cephalopoda. Ao contrário de lulas, sépias e polvos, mantém uma concha externa espiralada composta por várias câmaras internas. Essas câmaras são preenchidas com misturas de gás e líquido que permitem o controle preciso da flutuabilidade, funcionando como um sistema natural de lastro. Vive em águas profundas do Indo-Pacífico, emergindo à noite para caçar pequenos crustáceos e peixes. Seus tentáculos, que podem ultrapassar 90 em número, são finos e pegajosos, mas não possuem ventosas. Por conservar traços anatômicos semelhantes aos de fósseis de centenas de milhões de anos, o nautilus é considerado um 'fóssil vivo' e símbolo da continuidade evolutiva dos moluscos marinhos. Atualmente, sofre com a sobrepesca e a degradação dos habitats oceânicos.",
  scale: 22,
  scale_sm: 23,
  scale_md: 25,
  scale_lg: 30,
  scale_2lg: 35,
  rotation: [0, 0, 0],
  position: [-0.5, 0.4, 0],
  node: [
    {
      name: "Concha espiralada",
      node: null,
      description: "Estrutura externa dividida em câmaras.",
      text: "A concha do Nautilus pompilius é formada por múltiplas câmaras interconectadas, usadas para controlar sua flutuabilidade através de variação na pressão dos gases internos."
    },
    {
      name: "Tentáculos",
      node: null,
      description: "Mais de 90 tentáculos finos e aderentes.",
      text: "Diferente de outros cefalópodes, os tentáculos do nautilus não possuem ventosas, mas apresentam superfícies pegajosas para capturar presas."
    },
    {
      name: "Flutuabilidade",
      node: null,
      description: "Controle natural por câmaras internas com gás.",
      text: "O nautilus ajusta a proporção de gás e líquido dentro das câmaras da concha para subir ou descer na coluna d’água."
    },
    {
      name: "Comportamento noturno",
      node: null,
      description: "Atividade aumentada à noite.",
      text: "Durante o dia, permanece em grandes profundidades; à noite, sobe para regiões rasas em busca de alimento."
    },
    {
      name: "Importância evolutiva",
      node: null,
      description: "Espécie relicta, semelhante a fósseis antigos.",
      text: "O Nautilus pompilius representa uma linhagem pouco modificada de cefalópodes, fornecendo informações valiosas sobre a evolução do grupo."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/nautilus-shell-ca29276e0659491eb4c5e6eb9d2ae0fc">Nautilus shell</a> 
  by <a href="https://sketchfab.com/hrachski">Hailey Majewski (@hrachski)</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Nautilus",
  // sound: '/sounds/ocean.wav',
  sceneBg: '#5A6E7F',
  hasAnimation: false
} as const;

const Bivalvia_CardiumCostatum: IModelData = {
  // topic: "mollusca_class_bivalvia",
  topic: ANIMAL_KINGDOM_TOPICS.MOLLUSCA_CLASS_BIVALVIA,
  // source: "/cardium_costatum.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/cardium_costatum_compressed.glb',
  name: "Cardium costatum",
  title: "Cardium costatum (Família Cardiidae)",
  description: "Molusco bivalve marinho de concha espessa e ornamentada, pertencente à família Cardiidae. Vive enterrado em substratos arenosos e alimenta-se por filtração.",
  text: "O Cardium costatum é um molusco bivalve da família Cardiidae, conhecida como 'corações-do-mar' devido ao formato arredondado das conchas. Suas valvas são robustas e apresentam costelas radiais bem marcadas, que oferecem resistência e contribuem para o aspecto característico do grupo. Habita regiões costeiras de águas rasas, onde se enterra parcialmente em sedimentos arenosos. Alimenta-se por filtração, utilizando sifões para capturar plâncton e partículas orgânicas suspensas na água. Assim como outros bivalves, possui um pé muscular adaptado para escavação e locomoção no substrato. Além de sua importância ecológica na reciclagem de nutrientes e estabilização do fundo marinho, as conchas do C. costatum são valorizadas por sua beleza e relevância científica em estudos de paleoecologia e morfologia.",
  scale: 6,
  scale_sm: 6,
  scale_md: 6,
  scale_lg: 7,
  scale_2lg: 8,
  rotation: [0, 0, 0],
  position: [0, 0.2, 0],
  node: [
    {
      name: "Concha",
      node: null,
      description: "Concha espessa com costelas radiais pronunciadas.",
      text: "As conchas do Cardium costatum apresentam costelas que irradiam a partir do umbo, conferindo resistência e uma textura característica ao molusco."
    },
    {
      name: "Pé muscular",
      node: null,
      description: "Estrutura usada para escavação e fixação.",
      text: "O pé muscular permite ao animal enterrar-se parcialmente no substrato arenoso, protegendo-se de predadores e fortes correntes marinhas."
    },
    {
      name: "Sifões",
      node: null,
      description: "Estruturas usadas na alimentação por filtração.",
      text: "Os sifões do Cardium costatum captam água contendo plâncton e partículas orgânicas, filtradas para sua nutrição."
    },
    {
      name: "Hábitat",
      node: null,
      description: "Regiões costeiras com sedimentos arenosos.",
      text: "Vive enterrado em fundos de areia ou lodo, geralmente em águas rasas, onde encontra proteção e alimento abundante."
    },
    {
      name: "Importância ecológica",
      node: null,
      description: "Espécie filtradora que contribui para o equilíbrio ambiental.",
      text: "O Cardium costatum ajuda na oxigenação dos sedimentos, na ciclagem de nutrientes e serve de abrigo a pequenos invertebrados bentônicos."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/cardium-costatum-ea26ce5865b9434592bc70b07a607a94">Cardium costatum</a> 
  by <a href="https://sketchfab.com/latedcapuerj">latedcapuerj</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Cardium_costatum",
  // sound: '/sounds/ocean.wav',
  sceneBg: '#000',
  hasAnimation: false
} as const;

export const MOLLUSCA_MODELS: IModelData[] = [
  Gastropod,
  Cephalopoda_BobtailSquid,
  Cephalopoda_BlueRingedOctopus,
  Cephalopoda_Nautilus,
  Bivalvia_CardiumCostatum
]
