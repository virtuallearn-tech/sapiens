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

const Amphibia_Urodela_CynopsPyrrhogaster: IModelData = {
  topic: "chordata_class_amphibia_urodela_cynops_pyrrhogaster",
  source: "/salamandra.glb",
  name: "Salamandra-de-barriga-de-fogo",
  title: "Salamandra-de-barriga-de-fogo (Urodela)",
  description: "Anfíbio da ordem Caudata, com corpo alongado, cauda persistente e pele úmida. Espécie nativa do Japão, conhecida pela coloração ventral avermelhada.",
  text: "A salamandra-de-barriga-de-fogo japonesa (*Cynops pyrrhogaster*) é um anfíbio da ordem Caudata (Urodela), pertencente à família Salamandridae. Diferente dos anuros, mantém a cauda durante toda a vida. Possui corpo alongado, pele úmida e lisa, e coloração ventral avermelhada que serve como aviso de toxicidade para predadores. Vive em ambientes aquáticos e terrestres, alternando entre rios, lagoas e áreas úmidas. Alimenta-se de pequenos invertebrados aquáticos e terrestres. Como outros anfíbios, apresenta respiração cutânea e pulmonar, além de passar por metamorfose durante o desenvolvimento. É um exemplo marcante da diversidade dos anfíbios e da adaptação a ambientes úmidos.",
  scale: 0.7,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [0, 1.221, 0],
  position: [0.1, 0, 0],
  node: [
    {
      name: "Cauda persistente",
      node: null,
      description: "Mantida durante toda a vida.",
      text: "Ao contrário dos anuros, as salamandras mantêm a cauda mesmo na fase adulta, característica da ordem Caudata."
    },
    {
      name: "Coloração de aviso",
      node: null,
      description: "Barriga vermelha indica toxicidade.",
      text: "A coloração ventral brilhante funciona como aposematismo, alertando predadores sobre sua toxicidade."
    },
    {
      name: "Respiração cutânea",
      node: null,
      description: "Trocas gasosas pela pele úmida.",
      text: "Além dos pulmões, a salamandra realiza respiração cutânea, o que exige pele sempre úmida."
    },
    {
      name: "Metamorfose",
      node: null,
      description: "Transformação do girino em adulto.",
      text: "Assim como outros anfíbios, passa por metamorfose, iniciando como larva aquática com brânquias e tornando-se adulto com pulmões."
    }
  ],
  attribuition: "Modelo por ffish.asia / floraZia.com - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Cynops_pyrrhogaster",
  sceneBg: '#1a1f1a',
  hasAnimation: true
};

const Amphibia_Anura_RhacophorusSchlegelii: IModelData = {
  topic: "chordata_class_amphibia_anura_rhacophorus_schlegelii",
  source: "/frog.glb",
  name: "Perereca-de-Schlegel",
  title: "Schlegel’s Green Tree Frog (Anura)",
  description: "Anuro da família Rhacophoridae, conhecido como Schlegel’s green tree frog. Vive em árvores e possui coloração verde adaptativa.",
  text: "O *Rhacophorus schlegelii*, conhecido como Schlegel’s green tree frog, é um anfíbio da ordem Anura e da família Rhacophoridae. É nativo do Japão e habita áreas florestais úmidas, vivendo principalmente em árvores e arbustos. Possui corpo esguio, coloração verde que auxilia na camuflagem e discos adesivos nos dedos, que permitem escalar superfícies. Como outros anuros, apresenta metamorfose, passando de girino aquático a adulto terrestre. Durante a reprodução, constrói ninhos de espuma em folhas sobre a água, onde os ovos se desenvolvem até que os girinos caiam no ambiente aquático. É um exemplo marcante da adaptação dos anuros à vida arborícola.",
  scale: 1.3,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [0, SIXTY, 0],
  position: [0.2, 0, 0],
  node: [
    {
      name: "Discos adesivos",
      node: null,
      description: "Auxiliam na escalada de superfícies.",
      text: "Os discos adesivos nos dedos permitem que a perereca suba em folhas, galhos e até superfícies lisas."
    },
    {
      name: "Coloração verde",
      node: null,
      description: "Camuflagem em ambientes florestais.",
      text: "A coloração verde brilhante ajuda a se esconder entre folhas e vegetação densa."
    },
    {
      name: "Ninhos de espuma",
      node: null,
      description: "Estratégia reprodutiva única.",
      text: "Durante a reprodução, o casal constrói ninhos de espuma em folhas sobre a água, protegendo os ovos até a eclosão."
    },
    {
      name: "Metamorfose",
      node: null,
      description: "Transformação de girino em adulto.",
      text: "Assim como outros anuros, passa por metamorfose, iniciando como girino aquático e tornando-se adulto com pulmões e pernas."
    }
  ],
  attribuition: "Modelo por ffish.asia / floraZia.com - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Rhacophorus_schlegelii",
  sceneBg: '#1a2f1a',
  hasAnimation: true
};

const Reptilia_Chelonia_Loggerhead: IModelData = {
  topic: "chordata_class_reptilia_chelonia_loggerhead",
  source: "/loggerhead_turtle.glb",
  name: "Tartaruga-cabeçuda",
  title: "Loggerhead sea turtle (Chelonia)",
  description: "Réptil marinho da ordem Chelonia, conhecido por sua cabeça grande e forte mandíbula. Espécie migratória encontrada em oceanos tropicais e temperados.",
  text: "A tartaruga-cabeçuda (*Caretta caretta*) é um réptil marinho da ordem Chelonia (ou Testudines). É facilmente reconhecida pela cabeça grande e mandíbulas poderosas, adaptadas para esmagar crustáceos e moluscos. Possui carapaça rígida e nadadeiras adaptadas para a natação oceânica. É uma espécie migratória, percorrendo longas distâncias entre áreas de alimentação e praias de desova. Como outros quelônios, apresenta respiração pulmonar e precisa emergir à superfície para respirar. Está classificada como vulnerável devido à perda de habitat, captura acidental em redes de pesca e poluição marinha. É um símbolo da conservação dos oceanos e da importância da proteção dos répteis marinhos.",
  scale: 3,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [0, THIRTY, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Cabeça grande",
      node: null,
      description: "Característica marcante da espécie.",
      text: "A cabeça robusta abriga mandíbulas fortes, usadas para esmagar crustáceos e moluscos."
    },
    {
      name: "Carapaça rígida",
      node: null,
      description: "Proteção contra predadores.",
      text: "A carapaça óssea e resistente protege os órgãos internos e ajuda na hidrodinâmica durante a natação."
    },
    {
      name: "Nadadeiras adaptadas",
      node: null,
      description: "Permitem longas migrações oceânicas.",
      text: "As nadadeiras em forma de remo são adaptadas para natação eficiente em mar aberto."
    },
    {
      name: "Espécie migratória",
      node: null,
      description: "Percorre grandes distâncias.",
      text: "A tartaruga-cabeçuda realiza migrações transoceânicas entre áreas de alimentação e praias de desova."
    }
  ],
  attribuition: "Modelo por Ra_in_coat - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Loggerhead_sea_turtle",
  sceneBg: '#0e1f1f',
  hasAnimation: true
};

const Reptilia_Squamata_Lizard: IModelData = {
  topic: "chordata_class_reptilia_squamata_lizard",
  source: "/lizard.glb",
  name: "Lagarto",
  title: "Lagarto (Squamata)",
  description: "Réptil da ordem Squamata, com corpo alongado, quatro patas bem desenvolvidas e cauda longa. Representa um modelo genérico de lagarto.",
  text: "Os lagartos são répteis da ordem Squamata, grupo que também inclui as serpentes. Possuem corpo alongado, quatro membros bem desenvolvidos e uma cauda geralmente longa. Sua pele é recoberta por escamas queratinizadas, que ajudam a reduzir a perda de água e oferecem proteção. A maioria das espécies é terrestre, mas há lagartos arborícolas, aquáticos e até escavadores. Muitas espécies apresentam autotomia caudal, ou seja, a capacidade de soltar a cauda para escapar de predadores. São animais ectotérmicos, regulando a temperatura corporal por meio de fontes externas de calor, como o sol. Alimentam-se de insetos, pequenos vertebrados, frutas e vegetais, dependendo da espécie. Representam um grupo diverso e adaptável de répteis, distribuídos em quase todos os continentes.",
  scale: 0.005,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [FIFTEEN, THIRTY, 0],
  position: [-0.7, 0.8, -1],
  node: [
    {
      name: "Escamas",
      node: null,
      description: "Revestimento protetor do corpo.",
      text: "A pele dos lagartos é recoberta por escamas de queratina, que reduzem a perda de água e oferecem proteção contra o ambiente."
    },
    {
      name: "Cauda longa",
      node: null,
      description: "Importante para equilíbrio e defesa.",
      text: "Muitos lagartos podem soltar a cauda (autotomia) para distrair predadores e escapar."
    },
    {
      name: "Ectotermia",
      node: null,
      description: "Dependência de fontes externas de calor.",
      text: "Como répteis, os lagartos regulam sua temperatura corporal por meio do ambiente, buscando sol ou sombra conforme necessário."
    },
    {
      name: "Diversidade de habitats",
      node: null,
      description: "Vivem em diferentes ambientes.",
      text: "Existem lagartos terrestres, arborícolas, aquáticos e até escavadores, mostrando grande capacidade de adaptação."
    }
  ],
  attribuition: "Modelo genérico por Froggreen - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Lizard",
  // sceneBg: '#1f1a1a',
  hasAnimation: true,
  animation: "Armature|WALK.002"
};

const Reptilia_Squamata_Snake: IModelData = {
  topic: "chordata_class_reptilia_squamata_snake",
  source: "/snake_animate.glb",
  name: "Serpente",
  title: "Serpente (Squamata)",
  description: "Réptil da subordem Serpentes, caracterizado pela ausência de membros, corpo alongado e escamas. Modelo genérico representando as cobras.",
  text: "As serpentes pertencem à ordem Squamata, dentro da classe Reptilia, e formam a subordem Serpentes. São répteis com corpo alongado, recoberto por escamas, e ausência de membros locomotores. Possuem mandíbula altamente flexível, permitindo engolir presas muito maiores que sua cabeça. A maioria das espécies é carnívora, alimentando-se de pequenos mamíferos, aves, anfíbios e outros répteis. Algumas espécies são peçonhentas, utilizando presas especializadas para inocular veneno, enquanto outras matam por constrição. São animais ectotérmicos, regulando sua temperatura corporal por meio de fontes externas de calor. Estão distribuídas em quase todos os continentes, ocupando desde desertos até florestas tropicais.",
  scale: 2,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [TEN, 0, 0],
  position: [-0.5, 1, -6],
  node: [
    {
      name: "Ausência de membros",
      node: null,
      description: "Característica marcante das serpentes.",
      text: "As serpentes perderam os membros ao longo da evolução, adaptando-se a um corpo alongado e flexível."
    },
    {
      name: "Mandíbula flexível",
      node: null,
      description: "Permite engolir presas grandes.",
      text: "A mandíbula das serpentes não é fundida, o que possibilita abrir a boca em grande amplitude."
    },
    {
      name: "Escamas",
      node: null,
      description: "Revestimento protetor do corpo.",
      text: "As escamas queratinizadas protegem o corpo e ajudam na locomoção, reduzindo o atrito com o solo."
    },
    {
      name: "Diversidade ecológica",
      node: null,
      description: "Habitam diferentes ambientes.",
      text: "As serpentes vivem em desertos, florestas, ambientes aquáticos e até áreas urbanas, mostrando grande capacidade de adaptação."
    }
  ],
  attribuition: "Modelo genérico por yaman.serhan - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Snake",
  // sceneBg: '#1a1a1a',
  hasAnimation: true
};

const Reptilia_Crocodylia_Crocodile: IModelData = {
  topic: "chordata_class_reptilia_crocodylia_crocodile",
  source: "/crocodile.glb",
  name: "Crocodilo",
  title: "Crocodilo (Crocodylia)",
  description: "Réptil da ordem Crocodylia, com corpo robusto, pele espessa e mandíbulas poderosas. Modelo genérico representando crocodilos.",
  text: "Os crocodilos são répteis da ordem Crocodylia, grupo que inclui crocodilos, jacarés e gaviais. Possuem corpo robusto, pele recoberta por escamas grossas e placas ósseas chamadas osteodermos. São predadores semiaquáticos, vivendo em rios, lagos e áreas costeiras. Suas mandíbulas são extremamente fortes, adaptadas para capturar e segurar presas, enquanto a dentição é projetada para perfurar e rasgar carne. São animais ectotérmicos, regulando a temperatura corporal por meio do ambiente. Apresentam comportamento social complexo, incluindo cuidado parental, algo raro entre répteis. São considerados fósseis vivos, pois mantêm muitas características primitivas desde a era dos dinossauros.",
  scale: 104,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [FIFTEEN, 3.054, 0],
  position: [-0.4, 0.4, 0],
  node: [
    {
      name: "Mandíbulas poderosas",
      node: null,
      description: "Força de mordida impressionante.",
      text: "As mandíbulas dos crocodilos estão entre as mais fortes do reino animal, capazes de esmagar ossos com facilidade."
    },
    {
      name: "Pele espessa",
      node: null,
      description: "Proteção contra predadores e ambiente.",
      text: "A pele é recoberta por escamas e osteodermos, oferecendo proteção e ajudando na regulação térmica."
    },
    {
      name: "Estilo de vida semiaquático",
      node: null,
      description: "Adaptados para água e terra.",
      text: "Os crocodilos vivem em rios, lagos e pântanos, mas também se deslocam em terra firme com eficiência."
    },
    {
      name: "Cuidado parental",
      node: null,
      description: "Proteção dos filhotes.",
      text: "As fêmeas protegem os ninhos e auxiliam os filhotes recém-nascidos, comportamento raro entre répteis."
    }
  ],
  attribuition: "Modelo genérico por Treey - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Crocodile",
  // sceneBg: '#1a1f1f',
  hasAnimation: true
};

// const Aves_Accipitriformes_BaldEagle: IModelData = {
//   topic: "chordata_class_aves_accipitriformes_bald_eagle",
//   source: "/animated_eagle.glb",
//   name: "Águia-careca",
//   title: "Águia-careca americana (Aves)",
//   description: "Ave de rapina da família Accipitridae, símbolo dos Estados Unidos. Reconhecida pela cabeça e cauda brancas contrastando com o corpo escuro.",
//   text: "A águia-careca (*Haliaeetus leucocephalus*) é uma ave de rapina da ordem Accipitriformes e da família Accipitridae. É facilmente identificada pela plumagem: corpo marrom-escuro, cabeça e cauda brancas, além do bico e olhos amarelos. Vive próxima a rios, lagos e zonas costeiras da América do Norte, alimentando-se principalmente de peixes, que captura com suas garras afiadas. Também pode caçar aves aquáticas e pequenos mamíferos. É uma espécie monogâmica, construindo grandes ninhos em árvores altas, que podem ser reutilizados por vários anos. Foi ameaçada de extinção no século XX devido à caça e ao uso de pesticidas, mas programas de conservação permitiram sua recuperação. Hoje é considerada símbolo de força e liberdade.",
//   scale: 0.2,
//   scale_sm: 0.9,
//   scale_md: 0.9,
//   scale_lg: 0.9,
//   scale_2lg: 0.9,
//   rotation: [0, 0, 0],
//   position: [0, 0, -6],
//   node: [
//     {
//       name: "Cabeça e cauda brancas",
//       node: null,
//       description: "Plumagem característica da espécie.",
//       text: "A cabeça e a cauda brancas contrastam com o corpo escuro, tornando a águia-careca inconfundível."
//     },
//     {
//       name: "Bico e olhos amarelos",
//       node: null,
//       description: "Adaptação para caça.",
//       text: "O bico curvo e forte, junto com a visão aguçada, permitem capturar e rasgar presas com eficiência."
//     },
//     {
//       name: "Alimentação piscívora",
//       node: null,
//       description: "Especialista em capturar peixes.",
//       text: "A águia-careca mergulha em alta velocidade para capturar peixes com suas garras afiadas."
//     },
//     {
//       name: "Símbolo cultural",
//       node: null,
//       description: "Ave nacional dos EUA.",
//       text: "Além de sua importância ecológica, é um ícone cultural e símbolo de liberdade nos Estados Unidos."
//     }
//   ],
//   attribuition: "Modelo genérico por Sketchfab Creator",
//   wikipedia: "https://en.wikipedia.org/wiki/Bald_eagle",
//   // sceneBg: '#1a1f2a',
//   hasAnimation: true
// };

export const Aves_Accipitriformes_RedTailedHawk: IModelData = {
  topic: "chordata_class_aves_accipitriformes_red_tailed_hawk",
  source: "/red-tailed-hawk.glb", // substitua pelo caminho do modelo baixado
  name: "Gavião-de-cauda-vermelha",
  title: "Gavião-de-cauda-vermelha (Aves)",
  description: "Ave de rapina da família Accipitridae, amplamente distribuída na América do Norte. Reconhecida pela cauda de coloração avermelhada e voo planado característico.",
  text: "O gavião-de-cauda-vermelha (*Buteo jamaicensis*) é uma das aves de rapina mais comuns da América do Norte. Possui corpo robusto, asas largas e cauda curta de coloração avermelhada, especialmente visível nos adultos. Alimenta-se de pequenos mamíferos, aves e répteis, caçando a partir de poleiros elevados ou em voo planado. É uma espécie altamente adaptável, encontrada em áreas abertas, campos agrícolas, desertos e até regiões urbanas. Seu grito característico é frequentemente usado em filmes para representar aves de rapina em geral.",
  scale: 1,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [FIFTEEN, THIRTY, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Cauda avermelhada",
      node: null,
      description: "Característica marcante da espécie.",
      text: "A cauda curta e de coloração avermelhada é um dos traços mais distintivos do gavião-de-cauda-vermelha."
    },
    {
      name: "Asas largas",
      node: null,
      description: "Adaptação para voo planado.",
      text: "As asas largas permitem longos voos planados, ideais para patrulhar áreas abertas em busca de presas."
    },
    {
      name: "Alimentação variada",
      node: null,
      description: "Predador oportunista.",
      text: "Caça pequenos mamíferos, aves e répteis, desempenhando papel importante no equilíbrio ecológico."
    },
    {
      name: "Espécie comum",
      node: null,
      description: "Amplamente distribuída na América do Norte.",
      text: "É uma das aves de rapina mais abundantes e adaptáveis, encontrada em diversos habitats, inclusive próximos a áreas urbanas."
    }
  ],
  attribuition: "Modelo 'Red-tailed Hawk - in Flight' por Oregon State University | Ecampus no Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Red-tailed_hawk",
  hasAnimation: true
};

const Aves_Struthioniformes_Ostrich: IModelData = {
  topic: "chordata_class_aves_struthioniformes_ostrich",
  source: "/african_ostrich.glb",
  name: "Avestruz-africano",
  title: "Avestruz-africano (Aves)",
  description: "Maior ave viva, incapaz de voar, adaptada à corrida em savanas africanas. Possui pernas longas e fortes, olhos grandes e penas macias.",
  text: "O avestruz-africano (*Struthio camelus*) é a maior ave existente, podendo atingir até 2,7 metros de altura e pesar mais de 150 kg. Pertence à ordem Struthioniformes, grupo de aves ratitas (não voadoras). Seu corpo robusto, pernas longas e musculosas e pés com dois dedos são adaptações para a corrida, alcançando velocidades de até 70 km/h. Possui olhos grandes, que garantem excelente visão em campo aberto. Alimenta-se de sementes, folhas, frutos e pequenos invertebrados. Os machos apresentam plumagem preta e branca, enquanto as fêmeas são mais acastanhadas. Seus ovos são os maiores do reino animal, chegando a pesar 1,5 kg. O avestruz é um exemplo marcante da diversidade das aves e de suas adaptações a ambientes terrestres.",
  scale: 0.7,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [0, 0, 0],
  position: [0, 0.2, 0],
  node: [
    {
      name: "Pernas longas e fortes",
      node: null,
      description: "Adaptadas para corrida em alta velocidade.",
      text: "As pernas musculosas permitem ao avestruz atingir até 70 km/h, sendo a ave mais veloz em terra."
    },
    {
      name: "Olhos grandes",
      node: null,
      description: "Visão aguçada em campo aberto.",
      text: "Os olhos do avestruz são os maiores entre as aves, garantindo excelente percepção de predadores à distância."
    },
    {
      name: "Plumagem diferenciada",
      node: null,
      description: "Machos e fêmeas com cores distintas.",
      text: "Os machos têm plumagem preta e branca, enquanto as fêmeas apresentam tons acastanhados para camuflagem."
    },
    {
      name: "Ovos gigantes",
      node: null,
      description: "Os maiores ovos do reino animal.",
      text: "Cada ovo de avestruz pode pesar até 1,5 kg, sendo proporcional ao tamanho da ave."
    }
  ],
  attribuition: "Modelo por Andrey - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Ostrich",
  // sceneBg: '#2a1f1a',
  hasAnimation: true
};

const Aves_Passeriformes_EasternBluebird: IModelData = {
  topic: "chordata_class_aves_passeriformes_eastern_bluebird",
  source: "/eastern_blue_bird.glb",
  name: "Eastern Bluebird",
  title: "Eastern Bluebird (Aves)",
  description: "Pequena ave canora da América do Norte, com plumagem azul brilhante e peito alaranjado. Habita áreas abertas e campos arborizados.",
  text: "O Eastern Bluebird (*Sialia sialis*) é uma ave passeriforme da família Turdidae, encontrada em grande parte da América do Norte. É facilmente reconhecida pela plumagem azul intensa no dorso e asas, contrastando com o peito alaranjado e a barriga branca. Vive em áreas abertas, campos, pomares e bordas de florestas, onde se alimenta de insetos, minhocas e frutos. É uma espécie migratória em algumas regiões, mas residente em outras. Conhecida por seu canto melodioso, é considerada um símbolo de felicidade e esperança em várias culturas. Nidifica em cavidades naturais ou em caixas-ninho, sendo beneficiada por programas de conservação que instalaram abrigos artificiais para a espécie.",
  scale: 0.12,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [0, 0, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Plumagem azul",
      node: null,
      description: "Característica marcante da espécie.",
      text: "O dorso e as asas apresentam um azul vibrante, especialmente nos machos, usado em exibição e defesa de território."
    },
    {
      name: "Peito alaranjado",
      node: null,
      description: "Contraste com o azul do corpo.",
      text: "O peito alaranjado é uma das marcas mais reconhecíveis do Eastern Bluebird, ajudando na identificação da espécie."
    },
    {
      name: "Canto melodioso",
      node: null,
      description: "Símbolo cultural de felicidade.",
      text: "O canto suave e melodioso do Eastern Bluebird é associado a esperança e alegria em várias tradições."
    },
    {
      name: "Nidificação em cavidades",
      node: null,
      description: "Uso de cavidades naturais ou artificiais.",
      text: "A espécie nidifica em buracos de árvores ou em caixas-ninho, sendo favorecida por projetos de conservação."
    }
  ],
  attribuition: "Modelo por kenchoo - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Eastern_bluebird",
  // sceneBg: '#1a2a3a',
  hasAnimation: true
};

const Mammalia_Chiroptera_Bat: IModelData = {
  topic: "chordata_class_mammalia_chiroptera_bat",
  source: "/bat.glb",
  name: "Morcego",
  title: "Morcego (Chiroptera)",
  description: "Único mamífero capaz de voo ativo, com asas formadas por membranas de pele esticadas entre os dedos. Modelo genérico representando morcegos.",
  text: "Os morcegos são mamíferos da ordem Chiroptera, o segundo maior grupo de mamíferos em número de espécies, atrás apenas dos roedores. São os únicos mamíferos capazes de voo ativo, graças às suas asas formadas por membranas de pele esticadas entre os dedos alongados. Apresentam grande diversidade de hábitos alimentares: a maioria é insetívora, mas há espécies frugívoras, nectarívoras e até hematófagas. Muitos utilizam a ecolocalização para se orientar no escuro, emitindo sons de alta frequência e interpretando os ecos. Estão distribuídos em quase todo o mundo, desempenhando papéis ecológicos fundamentais, como o controle de insetos e a polinização de plantas.",
  scale: 1.2,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [0, -FORTY_FIVE, 0],
  position: [0, 0.2, 0],
  node: [
    {
      name: "Asas membranosas",
      node: null,
      description: "Formadas por pele entre os dedos.",
      text: "As asas dos morcegos são compostas por uma membrana de pele esticada entre os dedos alongados, permitindo voo ativo."
    },
    {
      name: "Ecolocalização",
      node: null,
      description: "Navegação no escuro.",
      text: "Muitos morcegos emitem sons de alta frequência e interpretam os ecos para localizar presas e obstáculos."
    },
    {
      name: "Diversidade alimentar",
      node: null,
      description: "Insetos, frutas, néctar e até sangue.",
      text: "Os morcegos apresentam dietas variadas, desempenhando papéis ecológicos como polinizadores e controladores de pragas."
    },
    {
      name: "Importância ecológica",
      node: null,
      description: "Fundamentais para o equilíbrio ambiental.",
      text: "Ao controlar populações de insetos e polinizar plantas, os morcegos contribuem para a manutenção dos ecossistemas."
    }
  ],
  attribuition: "Modelo genérico por Mordecai The Despicable Me Fan - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Bat",
  // sceneBg: '#1a1a2a',
  hasAnimation: true
};

const Mammalia_Artiodactyla_Giraffe: IModelData = {
  topic: "chordata_class_mammalia_artiodactyla_giraffe",
  source: "/giraffe.glb",
  name: "Girafa",
  title: "Girafa (Mammalia)",
  description: "O mamífero terrestre mais alto do mundo, com pescoço longo e pernas compridas, adaptado para alcançar folhas no topo das árvores.",
  text: "A girafa (*Giraffa camelopardalis*) é um mamífero da ordem Artiodactyla, nativo das savanas africanas. É o animal terrestre mais alto do planeta, podendo ultrapassar 5,5 metros de altura. Seu pescoço longo, apesar de ter o mesmo número de vértebras cervicais que outros mamíferos (sete), é altamente alongado, permitindo alcançar folhas de acácias e outras árvores altas. Possui língua preênsil de até 45 cm, usada para segurar galhos espinhosos. As pernas longas e fortes permitem correr a velocidades de até 60 km/h. Vivem em grupos sociais e desempenham papel ecológico importante na dispersão de sementes. São símbolos da fauna africana e frequentemente estudadas como exemplo de adaptação evolutiva.",
  scale: 0.9,
  scale_sm: 1,
  scale_md: 1,
  scale_lg: 1,
  scale_2lg: 1,
  rotation: [0, -FORTY_FIVE, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Pescoço longo",
      node: null,
      description: "Permite alcançar folhas altas.",
      text: "Apesar de ter apenas sete vértebras cervicais, como a maioria dos mamíferos, cada vértebra é extremamente alongada."
    },
    {
      name: "Língua preênsil",
      node: null,
      description: "Adaptada para segurar galhos.",
      text: "A língua da girafa pode medir até 45 cm e é usada para alcançar folhas entre espinhos de acácias."
    },
    {
      name: "Pernas compridas",
      node: null,
      description: "Velocidade e defesa.",
      text: "As pernas longas permitem correr até 60 km/h e também são usadas em chutes poderosos contra predadores."
    },
    {
      name: "Altura recorde",
      node: null,
      description: "Maior animal terrestre.",
      text: "Com até 5,5 metros de altura, a girafa é o mamífero terrestre mais alto do mundo."
    }
  ],
  attribuition: "Modelo genérico por BlueMesh - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Giraffe",
  // sceneBg: '#2a1f1a',
  hasAnimation: true
};

const Mammalia_Carnivora_Lion: IModelData = {
  topic: "chordata_class_mammalia_carnivora_lion",
  source: "/lion.glb",
  name: "Leão",
  title: "Leão (Mammalia)",
  description: "Grande felino da família Felidae, conhecido como 'rei da selva'. Vive em grupos sociais chamados alcateias ou 'prides'.",
  text: "O leão (*Panthera leo*) é um mamífero carnívoro da ordem Carnivora e da família Felidae. É o único felino verdadeiramente social, vivendo em grupos chamados 'prides', compostos por fêmeas aparentadas, seus filhotes e um ou poucos machos dominantes. Os machos são facilmente reconhecidos pela juba, que varia em cor e tamanho e serve como sinal de maturidade e força. As fêmeas são as principais caçadoras, trabalhando em grupo para capturar presas como zebras, gnus e búfalos. O leão é considerado um predador de topo e desempenha papel fundamental no equilíbrio ecológico das savanas africanas. Apesar de sua fama de força, a espécie enfrenta ameaças como perda de habitat e caça ilegal.",
  scale: 1.2,
  scale_sm: 1,
  scale_md: 1,
  scale_lg: 1,
  scale_2lg: 1,
  rotation: [0, -2.26, 0],
  position: [-0.2, 0.15, 0],
  node: [
    {
      name: "Juba do macho",
      node: null,
      description: "Característica marcante dos machos.",
      text: "A juba protege o pescoço em combates e serve como sinal de maturidade e força para atrair fêmeas."
    },
    {
      name: "Vida em grupo",
      node: null,
      description: "Organização social única entre felinos.",
      text: "Os leões vivem em 'prides', onde as fêmeas caçam em cooperação e os machos defendem o território."
    },
    {
      name: "Predador de topo",
      node: null,
      description: "Importante para o equilíbrio ecológico.",
      text: "Como predador de topo, o leão controla populações de herbívoros e mantém o equilíbrio da savana."
    },
    {
      name: "Distribuição",
      node: null,
      description: "África e pequena população na Ásia.",
      text: "A maioria dos leões vive na África subsaariana, mas ainda existe uma população remanescente na Índia (Leão-asiático)."
    }
  ],
  attribuition: "Modelo genérico por planeta-elefante - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Lion",
  // sceneBg: '#2a1a1a',
  hasAnimation: true,
  animation: 'Walk'
};

const Mammalia_Cetacea_BlueWhale: IModelData = {
  topic: "chordata_class_mammalia_cetacea_blue_whale",
  source: "/blue_whale.glb",
  name: "Baleia-azul",
  title: "Baleia-azul (Mammalia)",
  description: "Maior animal do planeta, mamífero marinho da ordem Cetacea. Pode ultrapassar 30 metros de comprimento e pesar mais de 150 toneladas.",
  text: "A baleia-azul (*Balaenoptera musculus*) é o maior animal conhecido da história da Terra, podendo atingir mais de 30 metros de comprimento e pesar até 180 toneladas. Pertence à ordem Cetacea e à família Balaenopteridae. Apesar do tamanho colossal, alimenta-se quase exclusivamente de pequenos crustáceos chamados krill, filtrados por meio de placas de barbas em sua boca. É um mamífero marinho, respirando por pulmões e precisando emergir para expelir ar pelos espiráculos. As baleias-azuis são migratórias, percorrendo longas distâncias entre áreas de alimentação em águas frias e regiões de reprodução em águas tropicais. Estiveram à beira da extinção devido à caça comercial, mas hoje são protegidas internacionalmente. Ainda assim, permanecem ameaçadas por colisões com navios, poluição sonora e mudanças climáticas.",
  scale: 0.0032,
  scale_sm: 1,
  scale_md: 1,
  scale_lg: 1,
  scale_2lg: 1,
  rotation: [FIFTEEN, THIRTY, 0],
  position: [0, 0.4, 0],
  node: [
    {
      name: "Tamanho colossal",
      node: null,
      description: "Maior animal do planeta.",
      text: "Pode ultrapassar 30 metros de comprimento e pesar mais de 150 toneladas."
    },
    {
      name: "Alimentação por filtração",
      node: null,
      description: "Uso de barbas em vez de dentes.",
      text: "As baleias-azuis se alimentam de krill, filtrando milhares de litros de água por meio de placas de barbas."
    },
    {
      name: "Respiração pulmonar",
      node: null,
      description: "Precisa emergir para respirar.",
      text: "Como mamífero, respira por pulmões e expulsa ar pelos espiráculos no topo da cabeça."
    },
    {
      name: "Migração",
      node: null,
      description: "Longas viagens oceânicas.",
      text: "Realiza migrações entre águas frias, onde se alimenta, e águas tropicais, onde se reproduz."
    }
  ],
  attribuition: "Modelo por Bohdan Lvov - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Blue_whale",
  // sceneBg: '#0a1f3a',
  hasAnimation: true
};

const Mammalia_Cetacea_HumpbackDolphin: IModelData = {
  topic: "chordata_class_mammalia_cetacea_humpback_dolphin",
  source: "/humpback_dolphin.glb",
  name: "Humpback Dolphin",
  title: "Humpback Dolphin (Mammalia)",
  description: "Golfinho marinho costeiro da família Delphinidae, reconhecido pela nadadeira dorsal em forma de corcova.",
  text: "Os Humpback Dolphins pertencem ao gênero *Sousa*, dentro da família Delphinidae. São golfinhos marinhos que habitam águas costeiras rasas do Oceano Índico e Pacífico, incluindo regiões da África, Índia, Sudeste Asiático e norte da Austrália. Seu nome vem da nadadeira dorsal característica, posicionada sobre uma elevação em forma de corcova. Podem medir entre 2 e 2,8 metros de comprimento e pesar até 280 kg. Sua coloração varia do cinza ao rosado, sendo que alguns indivíduos apresentam tons rosados semelhantes aos do boto-cor-de-rosa, mas não são a mesma espécie. Alimentam-se de peixes e lulas, caçando em grupos cooperativos. Estão ameaçados pela degradação costeira, poluição e captura acidental em redes de pesca.",
  scale: 0.005,
  scale_sm: 1,
  scale_md: 1,
  scale_lg: 1,
  scale_2lg: 1,
  rotation: [FIFTEEN, THIRTY, 0],
  position: [-0.3, 0.2, 0],
  node: [
    {
      name: "Nadadeira dorsal em corcova",
      node: null,
      description: "Característica marcante da espécie.",
      text: "A nadadeira dorsal é posicionada sobre uma elevação, formando uma corcova que dá nome ao grupo."
    },
    {
      name: "Habitat costeiro",
      node: null,
      description: "Águas rasas próximas ao litoral.",
      text: "Vivem em regiões costeiras tropicais e subtropicais, geralmente em águas com menos de 30 metros de profundidade."
    },
    {
      name: "Coloração variável",
      node: null,
      description: "Do cinza ao rosado.",
      text: "Alguns indivíduos apresentam tons rosados, mas não devem ser confundidos com o boto-cor-de-rosa amazônico."
    },
    {
      name: "Alimentação cooperativa",
      node: null,
      description: "Caçam em grupos.",
      text: "Formam grupos sociais que cooperam para cercar cardumes de peixes e capturar presas com eficiência."
    }
  ],
  attribuition: "Modelo por Bohdan Lvov - Sketchfab",
  wikipedia: "https://en.wikipedia.org/wiki/Humpback_dolphin",
  // sceneBg: '#0f1f2f',
  hasAnimation: true
};


export const CHORDATA_MODELS: IModelData[] = [
  Chondrichthyes_TigerShark,
  Chondrichthyes_CownoseRay,
  Osteichthyes_BarbelSteed,
  Amphibia_Urodela_CynopsPyrrhogaster,
  Amphibia_Anura_RhacophorusSchlegelii,
  Reptilia_Chelonia_Loggerhead,
  Reptilia_Squamata_Lizard,
  Reptilia_Squamata_Snake,
  Reptilia_Crocodylia_Crocodile,
  // Aves_Accipitriformes_BaldEagle,
  Aves_Accipitriformes_RedTailedHawk,
  Aves_Struthioniformes_Ostrich,
  Aves_Passeriformes_EasternBluebird,
  Mammalia_Chiroptera_Bat,
  Mammalia_Artiodactyla_Giraffe,
  Mammalia_Carnivora_Lion,
  Mammalia_Cetacea_BlueWhale,
  Mammalia_Cetacea_HumpbackDolphin
]