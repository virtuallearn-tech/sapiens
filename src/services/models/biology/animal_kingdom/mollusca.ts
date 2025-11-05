import type { IModelData } from "@interfaces/model";

const Gastropod: IModelData = {
  topic: "mollusca_class_gastropoda",
  source: "/tsukushi_snail_euhadra_herklotsi.glb",
  name: "Euhadra herklotsi",
  title: "Caracol japonês (Euhadra herklotsi)",
  description: "Molusco gastrópode terrestre da família Camaenidae, encontrado no Japão. Possui concha espiralada e respira por pulmões adaptados à vida terrestre.",
  text: "O *Euhadra herklotsi*, conhecido como Tsukushi Snail, é um gastrópode pulmonado da família Camaenidae, endêmico do Japão. Como outros caracóis terrestres, apresenta concha calcária em espiral que protege seu corpo mole e auxilia na retenção de umidade. Respira por meio de uma cavidade pulmonar adaptada, característica da ordem Pulmonata. Alimenta-se de matéria vegetal em decomposição e folhas, desempenhando papel importante na ciclagem de nutrientes nos ecossistemas terrestres. Sua presença também é um indicador da qualidade ambiental, já que é sensível a mudanças de habitat e poluição.",
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
      description: "Concha calcária em espiral.",
      text: "A concha do *Euhadra herklotsi* é espiralada e robusta, oferecendo proteção contra predadores e perda de água."
    },
    {
      name: "Respiração",
      node: null,
      description: "Cavidade pulmonar adaptada à vida terrestre.",
      text: "Diferente de moluscos aquáticos, este gastrópode respira por pulmões, permitindo sua sobrevivência em ambientes terrestres úmidos."
    },
    {
      name: "Alimentação",
      node: null,
      description: "Herbívoro e detritívoro.",
      text: "Alimenta-se de folhas, frutos caídos e matéria vegetal em decomposição, contribuindo para a reciclagem de nutrientes no solo."
    },
    {
      name: "Habitat",
      node: null,
      description: "Ambientes terrestres úmidos do Japão.",
      text: "É encontrado em florestas e áreas úmidas, onde a umidade é essencial para sua sobrevivência."
    }
  ],
  attribuition: "Conteúdo adaptado para fins educativos - App Sapiens",
  wikipedia: "https://en.wikipedia.org/wiki/Euhadra_herklotsi",
  // sound: '/sounds/forest.wav',
  sceneBg: '#000',
  hasAnimation: false
};

const Cephalopoda_BobtailSquid: IModelData = {
  topic: "mollusca_class_cephalopoda_bobtail_squid",
  source: "/firefly-squid-glowing.glb",
  name: "Bobtail Squid",
  title: "Lula Bobtail (Sepiolidae)",
  description: "Cefalópode de pequeno porte, encontrado em águas costeiras rasas. Conhecido por sua bioluminescência simbiótica e habilidade de camuflagem.",
  text: "A lula Bobtail pertence à família Sepiolidae, dentro da classe Cephalopoda. Diferente de lulas maiores, possui corpo arredondado e compacto, lembrando um polvo em miniatura. Vive enterrada na areia durante o dia e sai para caçar à noite. Uma de suas características mais notáveis é a simbiose com bactérias bioluminescentes (*Vibrio fischeri*), que vivem em um órgão especial e produzem luz. Essa bioluminescência ajuda a camuflar a lula contra predadores, imitando o brilho da superfície marinha. Alimenta-se de pequenos crustáceos e peixes, desempenhando papel importante nos ecossistemas costeiros. Além de sua relevância ecológica, é um modelo de estudo em biologia marinha e microbiologia devido à sua relação simbiótica única.",
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
      text: "Abriga bactérias *Vibrio fischeri* em um órgão especializado. A luz emitida ajuda a camuflar sua silhueta contra a iluminação da superfície marinha, evitando predadores."
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
};

const Cephalopoda_BlueRingedOctopus: IModelData = {
  topic: "mollusca_class_cephalopoda_octopus",
  source: "/scene.glb",
  name: "Blue-ringed Octopus",
  title: "Polvo-de-anéis-azuis (Hapalochlaena)",
  description: "Pequeno cefalópode altamente venenoso, encontrado em recifes e costas do Indo-Pacífico. Reconhecido por seus anéis azuis brilhantes que aparecem como sinal de alerta.",
  text: "O polvo-de-anéis-azuis pertence ao gênero *Hapalochlaena*, dentro da classe Cephalopoda. Apesar de seu tamanho reduzido (10 a 20 cm), é um dos animais mais venenosos do mundo. Vive em recifes de coral e áreas costeiras do Indo-Pacífico, escondendo-se em conchas, fendas e areia. Sua característica mais marcante são os anéis azuis fluorescentes que brilham quando o animal se sente ameaçado, funcionando como aviso visual. Alimenta-se de pequenos crustáceos e peixes, que paralisa com sua saliva tóxica. Embora seja perigoso para humanos, raramente ataca se não for provocado. É um exemplo impressionante da diversidade e das adaptações defensivas dos cefalópodes.",
  scale: 1.3,
  scale_sm: 1.4,
  scale_md: 1.8,
  scale_lg: 2,
  scale_2lg: 2.5,
  rotation: [0, 0.436, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Estrutura corporal",
      node: null,
      description: "Corpo pequeno, com braços curtos e robustos.",
      text: "O polvo-de-anéis-azuis mede cerca de 10 a 20 cm, com corpo compacto e braços curtos, adaptados para se esconder em fendas e conchas."
    },
    {
      name: "Coloração e defesa",
      node: null,
      description: "Anéis azuis fluorescentes como aviso.",
      text: "Quando ameaçado, exibe anéis azuis brilhantes em todo o corpo, sinalizando sua toxicidade extrema para predadores."
    },
    {
      name: "Alimentação",
      node: null,
      description: "Predador de pequenos crustáceos e peixes.",
      text: "Utiliza sua saliva venenosa para paralisar presas, que depois são consumidas com auxílio de seu bico quitinoso."
    },
    {
      name: "Importância ecológica",
      node: null,
      description: "Parte da cadeia alimentar costeira.",
      text: "Apesar de perigoso, o polvo-de-anéis-azuis é um predador importante em recifes, ajudando a controlar populações de pequenos crustáceos e peixes."
    }
  ],
  attribuition: "Conteúdo adaptado para fins educativos - App Sapiens",
  wikipedia: "https://en.wikipedia.org/wiki/Blue-ringed_octopus",
  // sound: '/sounds/ocean.wav',
  sceneBg: '#000000',
  hasAnimation: true
};

const Cephalopoda_Nautilus: IModelData = {
  topic: "mollusca_class_cephalopoda_nautilus",
  source: "/nautilus_shell.glb",
  name: "Nautilus pompilius",
  title: "Nautilus (Nautilus pompilius)",
  description: "Cefalópode marinho considerado um 'fóssil vivo'. Possui concha espiralada com câmaras internas que auxiliam na flutuabilidade.",
  text: "O *Nautilus pompilius* é um cefalópode da ordem Nautilida, pertencente à classe Cephalopoda. Diferente de polvos, lulas e sépias, o nautilus mantém uma concha externa espiralada, dividida em câmaras preenchidas com gás e líquido que regulam sua flutuabilidade. Habita águas profundas do Indo-Pacífico, emergindo à noite para se alimentar de crustáceos e peixes. Seus tentáculos não possuem ventosas, mas são numerosos e pegajosos, permitindo capturar presas de forma eficiente. É considerado um 'fóssil vivo', pois apresenta características muito semelhantes às de seus ancestrais de centenas de milhões de anos. Além de sua importância ecológica, o nautilus é símbolo da fragilidade dos ecossistemas marinhos, já que sofre com a coleta excessiva e mudanças ambientais.",
  scale: 22,
  scale_sm: 23,
  scale_md: 25,
  scale_lg: 30,
  scale_2lg: 35,
  rotation: [0, 0, 0],
  position: [-0.5, 0.4, 0],
  node: [
    {
      name: "Concha",
      node: null,
      description: "Concha espiralada com câmaras internas.",
      text: "A concha do nautilus é dividida em câmaras que podem ser preenchidas com gás ou líquido, permitindo controlar a flutuabilidade."
    },
    {
      name: "Tentáculos",
      node: null,
      description: "Numerosos tentáculos sem ventosas.",
      text: "O nautilus possui dezenas de tentáculos finos e pegajosos, usados para capturar presas como crustáceos e pequenos peixes."
    },
    {
      name: "Habitat",
      node: null,
      description: "Águas profundas do Indo-Pacífico.",
      text: "Durante o dia, o nautilus permanece em águas profundas. À noite, sobe para regiões mais rasas em busca de alimento."
    },
    {
      name: "Importância evolutiva",
      node: null,
      description: "Considerado um 'fóssil vivo'.",
      text: "O nautilus preserva características primitivas dos cefalópodes, sendo um exemplo vivo da história evolutiva do grupo."
    }
  ],
  attribuition: "Conteúdo adaptado para fins educativos - App Sapiens",
  wikipedia: "https://en.wikipedia.org/wiki/Nautilus",
  // sound: '/sounds/ocean.wav',
  sceneBg: '#5A6E7F',
  hasAnimation: false
};

const Bivalvia_CardiumCostatum: IModelData = {
  topic: "mollusca_class_bivalvia",
  source: "/cardium_costatum.glb",
  name: "Cardium costatum",
  title: "Cardium costatum (Família Cardiidae)",
  description: "Molusco bivalve marinho da família Cardiidae. Possui concha robusta com costelas radiais e vive enterrado em substratos arenosos.",
  text: "O *Cardium costatum* é um molusco da classe Bivalvia, conhecido por sua concha espessa e ornamentada com costelas radiais. Pertence à família Cardiidae, popularmente chamada de 'corações-do-mar' devido ao formato arredondado das conchas. Vive enterrado em sedimentos arenosos de ambientes marinhos rasos, onde se alimenta por filtração, capturando partículas orgânicas suspensas na água. Como outros bivalves, possui duas valvas articuladas que protegem seu corpo mole. Desempenha papel ecológico importante na ciclagem de nutrientes e na estruturação do fundo marinho. Além disso, suas conchas são frequentemente coletadas por sua beleza e valor científico.",
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
      description: "Concha espessa com costelas radiais.",
      text: "A concha do *Cardium costatum* é robusta e apresenta costelas que se irradiam a partir do umbo, conferindo resistência e aparência característica."
    },
    {
      name: "Locomoção e proteção",
      node: null,
      description: "Enterramento em substratos arenosos.",
      text: "Enterra-se parcialmente na areia para se proteger de predadores e correntes marinhas, utilizando seu pé muscular para escavar."
    },
    {
      name: "Alimentação",
      node: null,
      description: "Filtrador de partículas orgânicas.",
      text: "Alimenta-se por filtração, capturando plâncton e matéria orgânica suspensa na água por meio de seus sifões."
    },
    {
      name: "Importância ecológica",
      node: null,
      description: "Contribui para a estrutura do fundo marinho.",
      text: "Ajuda na oxigenação e na reciclagem de nutrientes do sedimento, além de servir de abrigo para pequenos organismos marinhos."
    }
  ],
  attribuition: "Conteúdo adaptado para fins educativos - App Sapiens",
  wikipedia: "https://en.wikipedia.org/wiki/Cardium_costatum",
  // sound: '/sounds/ocean.wav',
  sceneBg: '#000',
  hasAnimation: false
};


export const MOLLUSCA_MODELS: IModelData[] = [
  Gastropod,
  Cephalopoda_BobtailSquid,
  Cephalopoda_BlueRingedOctopus,
  Cephalopoda_Nautilus,
  Bivalvia_CardiumCostatum
]
