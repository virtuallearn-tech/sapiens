import { ANIMAL_KINGDOM_TOPICS } from "@interfaces/disciplines/biology-topics/animal-kingdom";
import type { IModelData } from "@interfaces/model";
import { FIFTEEN, FORTY_FIVE, NINETY, SIXTY, TEN, THIRTY,  } from "@utils/radAngles";

const Chondrichthyes_TigerShark: IModelData = {
  // topic: "chordata_class_chondrichthyes_tiger_shark",
  topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_CHONDRICHTHYES_TIGER_SHARK,
  // source: "/tiger_shark.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/tiger_shark_compressed.glb',
  name: "Tubarão-tigre",
  title: "Tubarão-tigre (Galeocerdo cuvier)",
  description: "Peixe cartilaginoso da classe Chondrichthyes, conhecido pelas listras corporais e comportamento predador. Vive em mares tropicais e temperados de todo o mundo.",
  text: "O tubarão-tigre (Galeocerdo cuvier) é um peixe cartilaginoso da classe Chondrichthyes, pertencente à ordem Carcharhiniformes. É um dos maiores predadores marinhos, podendo atingir mais de 5 metros de comprimento. Seu nome vem das listras escuras que lembram as de um tigre, especialmente evidentes nos jovens. Possui esqueleto composto por cartilagem, o que lhe confere leveza e agilidade. Alimenta-se de uma ampla variedade de presas — peixes, aves, tartarugas e até objetos não comestíveis —, sendo considerado um predador oportunista. Habita águas tropicais e temperadas, tanto em regiões costeiras quanto oceânicas. Ecologicamente, exerce papel fundamental como predador de topo, ajudando a equilibrar as populações marinhas.",
  scale: 0.4,
  scale_sm: 0.4,
  scale_md: 0.5,
  scale_lg: 0.5,
  scale_2lg: 0.5,
  rotation: [0, (NINETY * 2) + THIRTY, 0],
  position: [-0.45, 0.4, 0],
  node: [
    {
      name: "Esqueleto cartilaginoso",
      node: null,
      description: "Estrutura leve e flexível.",
      text: "Diferente dos peixes ósseos, o tubarão-tigre possui esqueleto formado por cartilagem, o que melhora sua flutuação e mobilidade."
    },
    {
      name: "Listras corporais",
      node: null,
      description: "Padrão escuro semelhante ao de um tigre.",
      text: "As listras laterais servem para camuflagem em habitats costeiros e são mais visíveis em indivíduos jovens."
    },
    {
      name: "Dentes serrilhados",
      node: null,
      description: "Adaptados para cortar carne e ossos.",
      text: "Seus dentes curvos e serrilhados permitem rasgar carne e perfurar cascos de tartarugas, sendo constantemente substituídos ao longo da vida."
    },
    {
      name: "Predador de topo",
      node: null,
      description: "Essencial para o equilíbrio ecológico.",
      text: "O tubarão-tigre regula populações de presas e evita o desequilíbrio das cadeias alimentares marinhas."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/tiger-shark-galeocerdo-cuvier-9cb1b98c288f41cc822a8894933b061c">Tiger shark (Galeocerdo cuvier)</a> 
  by <a href="https://sketchfab.com/majorgalah">Major (@majorgalah)</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://pt.wikipedia.org/wiki/Tubar%C3%A3o-tigre",
  // sceneBg: '#0e1a1f',
  hasAnimation: true
} as const;


const Chondrichthyes_CownoseRay: IModelData = {
  // topic: "chordata_class_chondrichthyes_cownose_ray",
  topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_CHONDRICHTHYES_COWNOSE_RAY,
  // source: "/cownose_ray.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/cownose_ray_compressed.glb',
  name: "Raia-cownose",
  title: "Raia-cownose (Rhinoptera bonasus)",
  description: "Peixe cartilaginoso da classe Chondrichthyes, com corpo achatado e nadadeiras em forma de asas. Nada com movimentos ondulatórios graciosos e é comum em águas costeiras tropicais.",
  text: "A raia-cownose (Rhinoptera bonasus) é um peixe cartilaginoso da classe Chondrichthyes e ordem Myliobatiformes. Possui corpo achatado em forma de losango e amplas nadadeiras peitorais que se movem de forma ondulatória, lembrando o bater de asas de um pássaro. Seu nome deriva do formato da cabeça, que lembra o focinho de uma vaca. Alimenta-se de moluscos e crustáceos, triturando suas presas com placas dentárias resistentes. Vive em águas costeiras tropicais e subtropicais do Atlântico Ocidental, muitas vezes formando grandes cardumes migratórios. Assim como outros condrictes, possui esqueleto de cartilagem e sensores elétricos especializados para detectar presas enterradas no fundo do mar.",
  scale: 0.45,
  scale_sm: 0.45,
  scale_md: 0.45,
  scale_lg: 0.5,
  scale_2lg: 0.5,
  rotation: [0, (-NINETY) + FIFTEEN, 0],
  position: [-0.1, 0, 0],
  node: [
    {
      name: "Corpo achatado",
      node: null,
      description: "Forma adaptada ao fundo marinho.",
      text: "O corpo em formato de disco permite que a raia deslize sobre o fundo marinho de maneira eficiente, reduzindo a resistência da água."
    },
    {
      name: "Nadadeiras em forma de asas",
      node: null,
      description: "Movimento ondulatório característico.",
      text: "As nadadeiras peitorais largas se movem como asas, possibilitando um nado fluido e gracioso, típico das raias."
    },
    {
      name: "Cabeça em formato de focinho de vaca",
      node: null,
      description: "Origem do nome 'Cownose'.",
      text: "A forma arredondada e bipartida da cabeça lembra o focinho de uma vaca, característica marcante da espécie."
    },
    {
      name: "Alimentação por trituração",
      node: null,
      description: "Placas dentárias adaptadas.",
      text: "Alimenta-se de moluscos e crustáceos, utilizando suas placas dentárias planas para quebrar conchas e carapaças."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/cownose-ray-c7c51649007e4afba58416b15d891bf4">Cownose Ray</a> 
  by <a href="https://sketchfab.com/kenchoo">kenchoo</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://pt.wikipedia.org/wiki/Rhinoptera_bonasus",
  // sceneBg: '#0f1f1f',
  hasAnimation: true
} as const;


const Osteichthyes_BarbelSteed: IModelData = {
  // topic: "chordata_class_osteichthyes_barbel_steed",
  topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_OSTEICHTHYES_BARREL_STEED,
  // source: "/barbel_steed_h_barbus.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/barbel_steed_h_barbus_compressed.glb',
  name: "Barbel Steed",
  title: "Barbel Steed (Osteichthyes)",
  description:
    "Peixe ósseo de água doce da família Cyprinidae, com corpo alongado, escamas visíveis e nadadeiras bem desenvolvidas.",
  text: "O Barbel Steed (Hemibarbus barbus) é um peixe ósseo da classe Osteichthyes, pertencente à ordem Cypriniformes e à família Cyprinidae. Vive em rios e lagos da Ásia, preferindo águas de correnteza moderada. Seu corpo é alongado e coberto por escamas bem definidas, com nadadeiras adaptadas à natação eficiente. Como todos os peixes ósseos, possui esqueleto calcificado, opérculo cobrindo as brânquias e bexiga natatória que auxilia no controle de flutuabilidade. Alimenta-se de pequenos invertebrados e matéria orgânica no fundo dos rios. É um excelente exemplo da diversidade dos Osteíctes, grupo que representa a maioria dos vertebrados conhecidos.",
  scale: 17,
  scale_sm: 17,
  scale_md: 18,
  scale_lg: 20,
  scale_2lg: 20,
  rotation: [0, NINETY + THIRTY, TEN],
  position: [-0.4, 0.3, 0],
  node: [
    {
      name: "Esqueleto ósseo",
      node: null,
      description: "Estrutura rígida e calcificada.",
      text: "Diferente dos peixes cartilaginosos, o Barbel Steed possui esqueleto formado por ossos, o que garante maior resistência e suporte corporal."
    },
    {
      name: "Opérculo branquial",
      node: null,
      description: "Protege as brânquias e auxilia na respiração.",
      text: "O opérculo é uma estrutura móvel que cobre as brânquias, permitindo ao peixe respirar mesmo quando está parado."
    },
    {
      name: "Bexiga natatória",
      node: null,
      description: "Órgão responsável pela flutuabilidade.",
      text: "A bexiga natatória permite ajustar a posição do peixe na coluna d’água sem esforço constante de natação."
    },
    {
      name: "Habitat de água doce",
      node: null,
      description: "Ambiente típico dos rios asiáticos.",
      text: "O Barbel Steed vive em águas doces e limpas, geralmente com correnteza moderada, onde busca alimento no fundo dos rios."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/cc0-barbel-steed-h-barbus-animation-464c2645048c48618818d7b3fcb702db">Barbel Steed (Hemibarbus barbus)</a> 
  by <a href="https://sketchfab.com/ffishAsia-and-floraZia">ffish.asia / floraZia.com</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 Public Domain</a>
</div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Hemibarbus_barbus",
  sceneBg: "#5A6E7F",
  hasAnimation: true
} as const;


const Amphibia_Urodela_CynopsPyrrhogaster: IModelData = {
  // topic: "chordata_class_amphibia_urodela_cynops_pyrrhogaster",
  topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_AMPHIBIA_URODELA_CYNOPS_PYRRHOGASTER,
  // source: "/salamandra.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/salamandra_compressed.glb',
  name: "Salamandra-de-barriga-de-fogo",
  title: "Salamandra-de-barriga-de-fogo (Urodela)",
  description:
    "Anfíbio da ordem Caudata, com corpo alongado, cauda persistente e pele úmida. Espécie nativa do Japão, conhecida pela coloração ventral avermelhada.",
  text: "A salamandra-de-barriga-de-fogo japonesa (Cynops pyrrhogaster) é um anfíbio da ordem Caudata (Urodela), pertencente à família Salamandridae. Diferente dos anuros, mantém a cauda durante toda a vida. Possui corpo alongado, pele lisa e úmida, e coloração ventral avermelhada que serve como aviso de toxicidade para predadores. Vive em ambientes aquáticos e terrestres, alternando entre rios, lagoas e regiões úmidas. Alimenta-se de pequenos invertebrados aquáticos e terrestres. Como outros anfíbios, apresenta respiração cutânea e pulmonar, além de passar por metamorfose durante o desenvolvimento. É um excelente exemplo da diversidade e das adaptações dos anfíbios a ambientes úmidos.",
  scale: 0.7,
  scale_sm: 0.7,
  scale_md: 0.8,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [0, 1.221, 0],
  position: [0.1, 0, 0],
  node: [
    {
      name: "Cauda persistente",
      node: null,
      description: "Mantida durante toda a vida.",
      text: "Ao contrário dos anuros (sapos e rãs), as salamandras mantêm a cauda mesmo na fase adulta — característica típica da ordem Caudata."
    },
    {
      name: "Coloração de aviso",
      node: null,
      description: "Barriga vermelha indica toxicidade.",
      text: "A coloração ventral brilhante serve como um aviso (aposematismo), indicando a presença de toxinas que afastam predadores."
    },
    {
      name: "Respiração cutânea",
      node: null,
      description: "Trocas gasosas pela pele úmida.",
      text: "A salamandra respira tanto pelos pulmões quanto pela pele úmida e permeável, essencial para trocas gasosas eficientes."
    },
    {
      name: "Metamorfose",
      node: null,
      description: "Transformação do girino em adulto.",
      text: "Como outros anfíbios, passa por metamorfose: inicia como larva aquática com brânquias e transforma-se em adulto com pulmões."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/cc0-japanese-fire-bellied-newt-162a62976ebd4b7180db6723564b72ab">Japanese Fire-bellied Newt (Cynops pyrrhogaster)</a> 
  by <a href="https://sketchfab.com/ffishAsia-and-floraZia">ffish.asia / floraZia.com</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 Public Domain</a>
</div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Cynops_pyrrhogaster",
  // sceneBg: '#1a1f1a',
  hasAnimation: true
} as const;


const Amphibia_Anura_RhacophorusSchlegelii: IModelData = {
  // topic: "chordata_class_amphibia_anura_rhacophorus_schlegelii",
  topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_AMPHIBIA_ANURA_RHACOPHORUS_SCHLEGELII,
  // source: "/frog.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/frog_compressed.glb',
  sound: "/sounds/frog-sound-210348.mp3",
  name: "Perereca-de-Schlegel",
  title: "Perereca-de-Schlegel (Anura)",
  description:
    "Anuro arborícola da família Rhacophoridae, conhecido pela coloração verde adaptativa e pelos discos adesivos que auxiliam na escalada.",
  text: "A perereca-de-Schlegel (Rhacophorus schlegelii), conhecida internacionalmente como Schlegel’s green tree frog, é um anfíbio da ordem Anura e da família Rhacophoridae. Nativa do Japão, habita áreas florestais úmidas, vivendo principalmente em árvores e arbustos. Possui corpo esguio, coloração verde brilhante que favorece a camuflagem e discos adesivos nos dedos que permitem escalar superfícies lisas. Durante a reprodução, o casal constrói ninhos de espuma em folhas sobre a água, onde os ovos se desenvolvem até que os girinos caiam no ambiente aquático. Como outros anuros, apresenta metamorfose, passando de girino aquático a adulto terrestre. É um exemplo notável da adaptação dos anuros à vida arborícola.",
  scale: 1.3,
  scale_sm: 1.7,
  scale_md: 1.8,
  scale_lg: 1.8,
  scale_2lg: 2,
  rotation: [0, SIXTY, 0],
  position: [0.2, 0, 0],
  node: [
    {
      name: "Discos adesivos",
      node: null,
      description: "Auxiliam na escalada de superfícies.",
      text: "Os discos adesivos presentes nos dedos permitem que a perereca escale folhas, galhos e até superfícies lisas, característica essencial para sua vida arborícola."
    },
    {
      name: "Coloração verde",
      node: null,
      description: "Camuflagem em ambientes florestais.",
      text: "A coloração verde vibrante ajuda a perereca a se camuflar entre a vegetação, protegendo-a de predadores."
    },
    {
      name: "Ninhos de espuma",
      node: null,
      description: "Estratégia reprodutiva única.",
      text: "Durante a reprodução, o casal constrói ninhos de espuma em folhas sobre a água. Os ovos ficam protegidos até que os girinos eclodam e caiam no ambiente aquático."
    },
    {
      name: "Metamorfose",
      node: null,
      description: "Transformação do girino em adulto.",
      text: "Assim como outros anuros, a perereca passa por metamorfose, iniciando como girino aquático com brânquias e transformando-se em adulto com pulmões e pernas adaptadas ao salto."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/cc0-schlegels-green-tree-frog-218caec043db49d4b41855ab7e92765d">Schlegel's Green Tree Frog (Rhacophorus schlegelii)</a> 
  by <a href="https://sketchfab.com/ffishAsia-and-floraZia">ffish.asia / floraZia.com</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 Public Domain</a>
</div>`,
  wikipedia: "https://pt.wikipedia.org/wiki/Rhacophorus_schlegelii",
  sceneBg: "#000",
  hasAnimation: true
} as const;


const Reptilia_Chelonia_Loggerhead: IModelData = {
  // topic: "chordata_class_reptilia_chelonia_loggerhead",
  topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_REPTILIA_CHELONIA_LOGGERHEAD,
  // source: "/loggerhead_turtle.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/loggerhead_turtle_compressed.glb',
  name: "Tartaruga-cabeçuda",
  title: "Tartaruga-cabeçuda (Chelonia)",
  description:
    "Réptil marinho da ordem Chelonia, reconhecido pela cabeça grande e mandíbula poderosa. Espécie migratória que habita oceanos tropicais e temperados.",
  text: "A tartaruga-cabeçuda (Caretta caretta) é um réptil marinho da ordem Chelonia (ou Testudines), amplamente distribuído pelos oceanos tropicais e temperados. É facilmente identificada pela cabeça grande e mandíbulas robustas, adaptadas para esmagar crustáceos e moluscos. Possui carapaça óssea e nadadeiras em forma de remo, que permitem natação eficiente em longas distâncias. Realiza migrações transoceânicas entre áreas de alimentação e praias de desova, retornando muitas vezes ao local de nascimento. Como todos os quelônios, respira por pulmões e precisa subir à superfície para respirar. Está classificada como espécie vulnerável devido à perda de habitat, poluição e captura acidental em redes de pesca, sendo um importante símbolo da conservação marinha.",
  scale: 3.5,
  scale_sm: 4,
  scale_md: 4.5,
  scale_lg: 5,
  scale_2lg: 6,
  rotation: [0, THIRTY, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Cabeça grande",
      node: null,
      description: "Característica marcante da espécie.",
      text: "A cabeça robusta abriga mandíbulas poderosas, usadas para esmagar crustáceos e moluscos, sua principal fonte de alimento."
    },
    {
      name: "Carapaça rígida",
      node: null,
      description: "Proteção contra predadores.",
      text: "A carapaça óssea e resistente protege os órgãos internos e contribui para a hidrodinâmica durante o nado."
    },
    {
      name: "Nadadeiras adaptadas",
      node: null,
      description: "Permitem longas migrações oceânicas.",
      text: "As nadadeiras anteriores funcionam como remos, impulsionando a tartaruga através de vastas distâncias marítimas."
    },
    {
      name: "Espécie migratória",
      node: null,
      description: "Percorre grandes distâncias.",
      text: "A tartaruga-cabeçuda realiza migrações transoceânicas entre áreas de alimentação e praias de desova, demonstrando notável orientação geográfica."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/loggerhead-turtle-42aaed2a8085424b9aeaa3f3394eeb3a">Loggerhead Turtle</a> 
  by <a href="https://sketchfab.com/ra_in_coat">Ra_in_coat</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://pt.wikipedia.org/wiki/Caretta_caretta",
  // sceneBg: "#0e1f1f",
  hasAnimation: true
} as const;


const Reptilia_Squamata_Lizard: IModelData = {
  // topic: "chordata_class_reptilia_squamata_lizard",
  topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_REPTILIA_SQUAMATA_LIZARD,
  // source: "/lizard.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/lizard_compressed.glb',
  // sound: '/sounds/iguana-220061.mp3',
  name: "Lagarto",
  title: "Lagarto (Squamata)",
  description: "Réptil da ordem Squamata, com corpo alongado, quatro patas bem desenvolvidas e cauda longa. Representa um modelo genérico de lagarto.",
  text: "Os lagartos são répteis da ordem Squamata, grupo que também inclui as serpentes. Possuem corpo alongado, quatro membros bem desenvolvidos e cauda geralmente longa. A pele é recoberta por escamas queratinizadas que reduzem a perda de água e oferecem proteção. A maioria das espécies é terrestre, mas há lagartos arborícolas, aquáticos e escavadores. Muitas espécies apresentam autotomia caudal, ou seja, a capacidade de soltar a cauda para escapar de predadores. São ectotérmicos, regulando a temperatura corporal por meio de fontes externas de calor. Alimentam-se de insetos, pequenos vertebrados, frutas e vegetais, dependendo da espécie. Representam um grupo diverso e adaptável, distribuído em quase todos os continentes.",
  scale: 0.005,
  scale_sm: 0.006,
  scale_md: 0.006,
  scale_lg: 0.006,
  scale_2lg: 0.006,
  rotation: [0, THIRTY, 0],
  position: [-0.7, 0.8, -1],
  node: [
    {
      name: "Escamas",
      node: null,
      description: "Revestimento protetor do corpo.",
      text: "As escamas de queratina reduzem a perda de água e protegem contra agressões do ambiente."
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
      text: "Regulam a temperatura corporal buscando sol ou sombra conforme necessário."
    },
    {
      name: "Diversidade de habitats",
      node: null,
      description: "Vivem em diferentes ambientes.",
      text: "Existem lagartos terrestres, arborícolas, aquáticos e escavadores, mostrando grande capacidade de adaptação."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/lizard-2405fa5c4338474ebb646a21aaf81f2d">Lizard</a> 
  by <a href="https://sketchfab.com/Froggreen">Froggreen</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://pt.wikipedia.org/wiki/Lagartos",
  // sceneBg: '#1f1a1a',
  hasAnimation: true,
  animation: "Armature|WALK.002"
} as const;


const Reptilia_Squamata_Snake: IModelData = {
  // topic: "chordata_class_reptilia_squamata_snake",
  topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_REPTILIA_SQUAMATA_SNAKE,
  // source: "/snake_animate.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/snake_animate_compressed.glb',
  sound: '/sounds/snake-hissing-6092.mp3',
  name: "Serpente",
  title: "Serpente (Squamata)",
  description: "Réptil da subordem Serpentes, caracterizado pela ausência de membros, corpo alongado e escamas. Modelo genérico representando as cobras.",
  text: "As serpentes pertencem à ordem Squamata, dentro da classe Reptilia, e formam a subordem Serpentes. São répteis com corpo alongado, recoberto por escamas, e ausência de membros locomotores. Possuem mandíbula altamente flexível, permitindo engolir presas muito maiores que sua cabeça. A maioria das espécies é carnívora, alimentando-se de pequenos mamíferos, aves, anfíbios e outros répteis. Algumas espécies são peçonhentas, utilizando presas especializadas para inocular veneno, enquanto outras matam por constrição. São animais ectotérmicos, regulando sua temperatura corporal por meio de fontes externas de calor. Estão distribuídas em quase todos os continentes, ocupando desde desertos até florestas tropicais.",
  scale: 2,
  scale_sm: 2.3,
  scale_md: 2.5,
  scale_lg: 2.5,
  scale_2lg: 2.8,
  rotation: [TEN, 0, 0],
  position: [-0.5, 0.5, -5],
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
      text: "A mandíbula das serpentes não é fundida, permitindo abrir a boca em grande amplitude."
    },
    {
      name: "Escamas",
      node: null,
      description: "Revestimento protetor do corpo.",
      text: "As escamas queratinizadas protegem o corpo e auxiliam na locomoção, reduzindo o atrito com o solo."
    },
    {
      name: "Diversidade ecológica",
      node: null,
      description: "Habitam diferentes ambientes.",
      text: "As serpentes vivem em desertos, florestas, ambientes aquáticos e até áreas urbanas, mostrando grande capacidade de adaptação."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/snake-animate-b386cde691a5419b847b2730ac652371">Snake Animate</a> 
  by <a href="https://sketchfab.com/yaman.serhan">yaman.serhan</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://pt.wikipedia.org/wiki/Serpentes",
  sceneBg: '#C2B79B',
  hasAnimation: true
} as const;


// const Reptilia_Crocodylia_Crocodile: IModelData = {
//   // topic: "chordata_class_reptilia_crocodylia_crocodile",
//   topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_REPTILIA_CROCODYLIA_CROCODILE,
//   source: "/scene_crocodile.glb",
//   sound: '/sounds/alligator-411864.mp3',
//   name: "Crocodilo",
//   title: "Crocodilo (Crocodylia)",
//   description: "Réptil da ordem Crocodylia, com corpo robusto, pele espessa e mandíbulas poderosas. Modelo genérico representando crocodilos.",
//   text: "Os crocodilos são répteis da ordem Crocodylia, grupo que inclui crocodilos, jacarés e gaviais. Possuem corpo robusto, pele recoberta por escamas grossas e placas ósseas chamadas osteodermos. São predadores semiaquáticos, vivendo em rios, lagos e áreas costeiras. Suas mandíbulas são extremamente fortes, adaptadas para capturar e segurar presas, enquanto a dentição é projetada para perfurar e rasgar carne. São animais ectotérmicos, regulando a temperatura corporal por meio do ambiente. Apresentam comportamento social complexo, incluindo cuidado parental, algo raro entre répteis. São considerados fósseis vivos, pois mantêm muitas características primitivas desde a era dos dinossauros.",
//   scale: 1,
//   scale_sm: 1,
//   scale_md: 1,
//   scale_lg: 1,
//   scale_2lg: 1,
//   rotation: [0, 0, 0],//3.054
//   position: [0, 0.2, 0],
//   node: [
//     {
//       name: "Mandíbulas poderosas",
//       node: null,
//       description: "Força de mordida impressionante.",
//       text: "As mandíbulas dos crocodilos estão entre as mais fortes do reino animal, capazes de esmagar ossos com facilidade."
//     },
//     {
//       name: "Pele espessa",
//       node: null,
//       description: "Proteção contra predadores e ambiente.",
//       text: "A pele é recoberta por escamas e osteodermos, oferecendo proteção e ajudando na regulação térmica."
//     },
//     {
//       name: "Estilo de vida semiaquático",
//       node: null,
//       description: "Adaptados para água e terra.",
//       text: "Os crocodilos vivem em rios, lagos e pântanos, mas também se deslocam em terra firme com eficiência."
//     },
//     {
//       name: "Cuidado parental",
//       node: null,
//       description: "Proteção dos filhotes.",
//       text: "As fêmeas protegem os ninhos e auxiliam os filhotes recém-nascidos, comportamento raro entre répteis."
//     }
//   ],
//   attribuition: "Modelo genérico por Treey - Sketchfab",
//   wikipedia: "https://en.wikipedia.org/wiki/Crocodile",
//   // sceneBg: '#1a1f1f',
//   hasAnimation: true
// } as const;


export const Aves_Accipitriformes_RedTailedHawk: IModelData = {
  // topic: "chordata_class_aves_accipitriformes_red_tailed_hawk",
  topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_AVES_ACCIPITRIFORMES_RED_TAILED_HAWK,
  //source: "/red-tailed-hawk.glb", // substitua pelo caminho do modelo baixado
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/red-tailed-hawk_compressed.glb',
  sound: '/sounds/hawk-78766-updated.mp3',
  name: "Gavião-de-cauda-vermelha",
  title: "Gavião-de-cauda-vermelha (Aves)",
  description: "Ave de rapina da família Accipitridae, amplamente distribuída na América do Norte. Reconhecida pela cauda de coloração avermelhada e voo planado característico.",
  text: "O gavião-de-cauda-vermelha (Buteo jamaicensis) é uma das aves de rapina mais comuns da América do Norte. Possui corpo robusto, asas largas e cauda curta de coloração avermelhada, especialmente visível nos adultos. Alimenta-se de pequenos mamíferos, aves e répteis, caçando a partir de poleiros elevados ou em voo planado. É uma espécie altamente adaptável, encontrada em áreas abertas, campos agrícolas, desertos e até regiões urbanas. Seu grito característico é frequentemente usado em filmes para representar aves de rapina em geral.",
  scale: 1,
  scale_sm: 1.5,
  scale_md: 1.5,
  scale_lg: 1.6,
  scale_2lg: 2,
  rotation: [0, THIRTY, 0],
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
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/red-tailed-hawk-in-flight-4abcab5af9044a939fb5a55bff9e5000">Red-tailed Hawk – in Flight</a> 
  by <a href="https://sketchfab.com/osuecampus">Oregon State University | Ecampus</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://pt.wikipedia.org/wiki/Buteo_jamaicensis",
  hasAnimation: true
} as const;


const Aves_Struthioniformes_Ostrich: IModelData = {
  // topic: "chordata_class_aves_struthioniformes_ostrich",
  topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_AVES_STRUTHIONIFORMES_OSTRICH,
  // source: "/african_ostrich.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/african_ostrich_compressed.glb',
  name: "Avestruz-africano",
  title: "Avestruz-africano (Aves)",
  description: "Maior ave viva, incapaz de voar, adaptada à corrida em savanas africanas. Possui pernas longas e fortes, olhos grandes e penas macias.",
  text: "O avestruz-africano (Struthio camelus) é a maior ave existente, podendo atingir até 2,7 metros de altura e pesar mais de 150 kg. Pertence à ordem Struthioniformes, grupo de aves ratitas (não voadoras). Seu corpo robusto, pernas longas e musculosas e pés com dois dedos são adaptações para a corrida, alcançando velocidades de até 70 km/h. Possui olhos grandes, que garantem excelente visão em campo aberto. Alimenta-se de sementes, folhas, frutos e pequenos invertebrados. Os machos apresentam plumagem preta e branca, enquanto as fêmeas são mais acastanhadas. Seus ovos são os maiores do reino animal, chegando a pesar 1,5 kg. O avestruz é um exemplo marcante da diversidade das aves e de suas adaptações a ambientes terrestres.",
  scale: 0.7,
  scale_sm: 0.7,
  scale_md: 0.7,
  scale_lg: 0.8,
  scale_2lg: 0.8,
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
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/african-ostrich-revised-version-0999e676453e4562a7777cd006125738">African Ostrich (Revised version)</a> 
  by <a href="https://sketchfab.com/andrey.">Andrey</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://pt.wikipedia.org/wiki/Struthio_camelus",
  hasAnimation: true
} as const;

const Aves_Passeriformes_EasternBluebird: IModelData = {
  // topic: "chordata_class_aves_passeriformes_eastern_bluebird",
  topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_AVES_PASSERIFORMES_EASTERN_BLUEBIRD,
  // source: "/eastern_blue_bird.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/eastern_blue_bird_compressed.glb',
  sound: '/sounds/gallant_bluebirds-24092-updated.mp3',
  name: "Eastern Bluebird",
  title: "Eastern Bluebird (Aves)",
  description: "Pequena ave canora da América do Norte, com plumagem azul brilhante e peito alaranjado. Habita áreas abertas e campos arborizados.",
  text: "O Eastern Bluebird (Sialia sialis) é uma ave passeriforme da família Turdidae, encontrada em grande parte da América do Norte. É facilmente reconhecida pela plumagem azul intensa no dorso e asas, contrastando com o peito alaranjado e a barriga branca. Vive em áreas abertas, campos, pomares e bordas de florestas, onde se alimenta de insetos, minhocas e frutos. É uma espécie migratória em algumas regiões, mas residente em outras. Conhecida por seu canto melodioso, é considerada um símbolo de felicidade e esperança em várias culturas. Nidifica em cavidades naturais ou em caixas-ninho, sendo beneficiada por programas de conservação que instalaram abrigos artificiais para a espécie.",
  scale: 0.12,
  scale_sm: 0.13,
  scale_md: 0.14,
  scale_lg: 0.15,
  scale_2lg: 0.16,
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
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/eastern-blue-bird-c646531de6a3494faeaf2d3ce91b9dd2">Eastern Blue Bird</a> 
  by <a href="https://sketchfab.com/kenchoo">kenchoo</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://pt.wikipedia.org/wiki/Sialia_sialis",
  hasAnimation: true
} as const;


const Mammalia_Chiroptera_Bat: IModelData = {
  // topic: "chordata_class_mammalia_chiroptera_bat",
  topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_MAMMALIA_CHIROPTERA_BAT,
  // source: "/bat.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/bat_compressed.glb',
  sound: '/sounds/bat-chirping-type-1-354288.mp3',
  name: "Morcego",
  title: "Morcego (Chiroptera)",
  description: "Único mamífero capaz de voo ativo, com asas formadas por membranas de pele esticadas entre os dedos. Modelo genérico representando morcegos.",
  text: "Os morcegos são mamíferos da ordem Chiroptera, o segundo maior grupo de mamíferos em número de espécies, atrás apenas dos roedores. São os únicos mamíferos capazes de voo ativo, graças às suas asas formadas por membranas de pele esticadas entre os dedos alongados. Apresentam grande diversidade de hábitos alimentares: a maioria é insetívora, mas há espécies frugívoras, nectarívoras e até hematófagas. Muitos utilizam a ecolocalização para se orientar no escuro, emitindo sons de alta frequência e interpretando os ecos. Estão distribuídos em quase todo o mundo, desempenhando papéis ecológicos fundamentais, como o controle de insetos e a polinização de plantas.",
  scale: 1.2,
  scale_sm: 1.4,
  scale_md: 1.6,
  scale_lg: 1.8,
  scale_2lg: 2,
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
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/bat-8719886cf8f645ca9d53d766976baf9c">Bat</a> 
  by <a href="https://sketchfab.com/theice9">ice9</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://pt.wikipedia.org/wiki/Morcego",
  // sceneBg: '#1a1a2a',
  hasAnimation: true
} as const;


const Mammalia_Artiodactyla_Giraffe: IModelData = {
  // topic: "chordata_class_mammalia_artiodactyla_giraffe",
  topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_MAMMALIA_ARTIODACTYLA_GIRAFFE, 
  // source: "/giraffe.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/giraffe_compressed.glb',
  name: "Girafa",
  title: "Girafa (Mammalia)",
  description: "O mamífero terrestre mais alto do mundo, com pescoço longo e pernas compridas, adaptado para alcançar folhas no topo das árvores.",
  text: "A girafa (Giraffa camelopardalis) é um mamífero da ordem Artiodactyla, nativo das savanas africanas. É o animal terrestre mais alto do planeta, podendo ultrapassar 5,5 metros de altura. Seu pescoço longo, apesar de ter o mesmo número de vértebras cervicais que outros mamíferos (sete), é altamente alongado, permitindo alcançar folhas de acácias e outras árvores altas. Possui língua preênsil de até 45 cm, usada para segurar galhos espinhosos. As pernas longas e fortes permitem correr a velocidades de até 60 km/h. Vivem em grupos sociais e desempenham papel ecológico importante na dispersão de sementes. São símbolos da fauna africana e frequentemente estudadas como exemplo de adaptação evolutiva.",
  scale: 0.9,
  scale_sm: 1,
  scale_md: 1,
  scale_lg: 1,
  scale_2lg: 1.1,
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
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/giraffe-98ecdd62c76d47dea44683b3f8b37bf6">Giraffe</a> 
  by <a href="https://sketchfab.com/Amx360">Amx360</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Giraffe",
  // sceneBg: '#2a1f1a',
  hasAnimation: true
} as const;


const Mammalia_Carnivora_Lion: IModelData = {
  // topic: "chordata_class_mammalia_carnivora_lion",
  topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_MAMMALIA_CARNIVORA_LION,
  // source: "/lion.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/lion_compressed.glb',
  sound: '/sounds/lion-loud-6813-updated.mp3',
  name: "Leão",
  title: "Leão (Mammalia)",
  description: "Grande felino da família Felidae, conhecido como 'rei da selva'. Vive em grupos sociais chamados alcateias ou 'prides'.",
  text: "O leão (Panthera leo) é um mamífero carnívoro da ordem Carnivora e da família Felidae. É o único felino verdadeiramente social, vivendo em grupos chamados 'prides', compostos por fêmeas aparentadas, seus filhotes e um ou poucos machos dominantes. Os machos são facilmente reconhecidos pela juba, que varia em cor e tamanho e serve como sinal de maturidade e força. As fêmeas são as principais caçadoras, trabalhando em grupo para capturar presas como zebras, gnus e búfalos. O leão é considerado um predador de topo e desempenha papel fundamental no equilíbrio ecológico das savanas africanas. Apesar de sua fama de força, a espécie enfrenta ameaças como perda de habitat e caça ilegal.",
  scale: 1.2,
  scale_sm: 1.2,
  scale_md: 1.2,
  scale_lg: 1.3,
  scale_2lg: 1.6,
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
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/lion-e5adb6265b944c5990031a9aa93ee316">Lion</a> 
  by <a href="https://sketchfab.com/planeta-elefante">planeta-elefante</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Lion",
  // sceneBg: '#2a1a1a',
  hasAnimation: true,
  animation: 'Walk'
} as const;


const Mammalia_Cetacea_BlueWhale: IModelData = {
  // topic: "chordata_class_mammalia_cetacea_blue_whale",
  topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_MAMMALIA_CETACEA_BLUE_WHALE,
  // source: "/blue_whale.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/blue_whale_compressed.glb',
  // sound: '/sounds/whale-sound-type-4-235993.mp3',
  name: "Baleia-azul",
  title: "Baleia-azul (Mammalia)",
  description: "Maior animal do planeta, mamífero marinho da ordem Cetacea. Pode ultrapassar 30 metros de comprimento e pesar mais de 150 toneladas.",
  text: "A baleia-azul (Balaenoptera musculus) é o maior animal conhecido da história da Terra, podendo atingir mais de 30 metros de comprimento e pesar até 180 toneladas. Pertence à ordem Cetacea e à família Balaenopteridae. Apesar do tamanho colossal, alimenta-se quase exclusivamente de pequenos crustáceos chamados krill, filtrados por meio de placas de barbas em sua boca. É um mamífero marinho, respirando por pulmões e precisando emergir para expelir ar pelos espiráculos. As baleias-azuis são migratórias, percorrendo longas distâncias entre áreas de alimentação em águas frias e regiões de reprodução em águas tropicais. Estiveram à beira da extinção devido à caça comercial, mas hoje são protegidas internacionalmente. Ainda assim, permanecem ameaçadas por colisões com navios, poluição sonora e mudanças climáticas.",
  scale: 0.0032,
  scale_sm: 0.0033,
  scale_md: 0.0035,
  scale_lg: 0.004,
  scale_2lg: 0.0045,
  rotation: [0, -FORTY_FIVE, 0],
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
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/blue-whale-textured-d24d19021c724c3a9134eebcb76b0e0f">Blue Whale – Textured</a> 
  by <a href="https://sketchfab.com/ostapblendercg">Bohdan Lvov (@ostapblendercg)</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Blue_whale",
  // sceneBg: '#0a1f3a',
  hasAnimation: true
} as const;


const Mammalia_Cetacea_HumpbackDolphin: IModelData = {
  // topic: "chordata_class_mammalia_cetacea_humpback_dolphin",
  topic: ANIMAL_KINGDOM_TOPICS.CHORDATA_CLASS_MAMMALIA_CETACEA_HUMPBACK_DOLPHIN,
  // source: "/humpback_dolphin.glb",
  source: 'https://raw.githubusercontent.com/virtuallearn-tech/sapiens-animal-kingdom-models/master/humpback_dolphin_compressed.glb',
  // sound: '/sounds/dolphin-lumba-lumba-220055.mp3',
  name: "Humpback Dolphin",
  title: "Humpback Dolphin (Mammalia)",
  description: "Golfinho marinho costeiro da família Delphinidae, reconhecido pela nadadeira dorsal em forma de corcova.",
  text: "Os Humpback Dolphins pertencem ao gênero Sousa, dentro da família Delphinidae. São golfinhos marinhos que habitam águas costeiras rasas do Oceano Índico e Pacífico, incluindo regiões da África, Índia, Sudeste Asiático e norte da Austrália. Seu nome vem da nadadeira dorsal característica, posicionada sobre uma elevação em forma de corcova. Podem medir entre 2 e 2,8 metros de comprimento e pesar até 280 kg. Sua coloração varia do cinza ao rosado, sendo que alguns indivíduos apresentam tons rosados semelhantes aos do boto-cor-de-rosa, mas não são a mesma espécie. Alimentam-se de peixes e lulas, caçando em grupos cooperativos. Estão ameaçados pela degradação costeira, poluição e captura acidental em redes de pesca.",
  scale: 0.005,
  scale_sm: 0.005,
  scale_md: 0.005,
  scale_lg: 0.006,
  scale_2lg: 0.007,
  rotation: [0, THIRTY, 0],
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
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/humpback-dolphin-5f27b694149e4c3eb5e338b734134ecf">Humpback Dolphin</a> 
  by <a href="https://sketchfab.com/ostapblendercg">Bohdan Lvov (@ostapblendercg)</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Humpback_dolphin",
  // sceneBg: '#0f1f2f',
  hasAnimation: true
} as const;


export const CHORDATA_MODELS: IModelData[] = [
  Chondrichthyes_TigerShark,
  Chondrichthyes_CownoseRay,
  Osteichthyes_BarbelSteed,
  Amphibia_Urodela_CynopsPyrrhogaster,
  Amphibia_Anura_RhacophorusSchlegelii,
  Reptilia_Chelonia_Loggerhead,
  Reptilia_Squamata_Lizard,
  Reptilia_Squamata_Snake,
  //Reptilia_Crocodylia_Crocodile,
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