import type { IModelData } from "@interfaces/model";
import { FIFTEEN, FORTY_FIVE, NINETY, TEN, THIRTY, TWENTY } from "@utils/radAngles";

const Arachnida_Pseudoscorpion: IModelData = {
  topic: "arthropoda_class_arachnida_pseudoscorpion",
  source: "/pseudoscorpion.glb",
  name: "Pseudoscorpion",
  title: "Pseudoscorpion (Arachnida)",
  description:
    "Pequeno aracnídeo semelhante a um escorpião, mas sem cauda nem ferrão. Vive em ambientes úmidos e atua como predador de pequenos invertebrados, auxiliando no controle ecológico de pragas.",
  text: "O pseudoscorpion é um aracnídeo pertencente à ordem Pseudoscorpiones. Apesar da semelhança com os escorpiões, não possui cauda nem ferrão. Mede geralmente menos de 5 mm e pode ser encontrado em locais úmidos, como o solo de florestas, sob troncos, folhas, pedras, e até dentro de livros e casas. Seus pedipalpos são grandes e terminam em pinças, utilizadas para capturar e imobilizar pequenas presas, como ácaros, larvas e insetos. Algumas espécies produzem seda por glândulas localizadas nos pedipalpos, que utilizam para construir câmaras de repouso ou proteção durante a muda. Inofensivo ao ser humano, o pseudoscorpion é importante para o equilíbrio ecológico e demonstra a diversidade funcional da classe Arachnida.",
  scale: 0.08,
  scale_sm: 0.08,
  scale_md: 0.08,
  scale_lg: 0.09,
  scale_2lg: 0.11,
  rotation: [0, THIRTY, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Pedipalpos",
      node: null,
      description: "Pinças grandes usadas para captura de presas.",
      text: "Os pedipalpos do pseudoscorpion são robustos e funcionam como pinças articuladas, permitindo agarrar e imobilizar pequenos invertebrados com precisão."
    },
    {
      name: "Ausência de cauda",
      node: null,
      description: "Sem ferrão, ao contrário dos escorpiões.",
      text: "Embora lembre um escorpião em forma e comportamento, o pseudoscorpion não possui cauda nem ferrão, sendo totalmente inofensivo ao ser humano."
    },
    {
      name: "Produção de seda",
      node: null,
      description: "Algumas espécies produzem seda pelos pedipalpos.",
      text: "A seda é secretada por glândulas localizadas nos pedipalpos e usada para construir câmaras de proteção, especialmente durante o repouso ou a muda."
    },
    {
      name: "Habitat e ecologia",
      node: null,
      description: "Vive em ambientes úmidos e controla pragas.",
      text: "Habita locais úmidos como troncos, folhas e frestas. Alimenta-se de ácaros, larvas e pequenos insetos, ajudando a controlar populações de pragas naturais."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/pseudoscorpion-60a474f1f87040f38e073f87a63b7548">Pseudoscorpion</a> 
  by <a href="https://sketchfab.com/.hapto">.hapto GmbH</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Pseudoscorpion",
  // sound: '/sounds/forest_floor.wav',
  // sceneBg: '#1a1a1a',
  hasAnimation: true,
  animation: "Walk"
};


const Arachnida_Araneae_WolfSpider: IModelData = {
  topic: "arthropoda_class_arachnida_araneae_wolf_spider",
  source: "/wolf_spider.glb",
  name: "Aranha-lobo",
  title: "Aranha-lobo (Lycosidae)",
  description:
    "Aracnídeo da família Lycosidae, conhecido por sua caça ativa e pelo cuidado materno com os filhotes. Possui excelente visão e vive em diversos ambientes terrestres.",
  text: "A aranha-lobo pertence à família Lycosidae, dentro da ordem Araneae. Diferente de muitas aranhas que constroem teias para capturar presas, é uma caçadora ativa, que persegue suas vítimas no solo com agilidade e precisão. Possui oito olhos distribuídos em três fileiras, sendo os dois centrais anteriores maiores, o que garante excelente visão — uma característica essencial para seu modo de vida. Um traço marcante é o cuidado parental: as fêmeas carregam o saco de ovos preso ao abdômen e, após a eclosão, os filhotes sobem sobre o dorso da mãe, onde permanecem por vários dias até se dispersarem. Essa estratégia aumenta a sobrevivência dos jovens. As aranhas-lobo habitam florestas, campos, jardins e áreas urbanas, onde ajudam no controle natural de insetos. Apesar da aparência intimidadora, raramente representam perigo ao ser humano.",
  scale: 100,
  scale_sm: 105,
  scale_md: 110,
  scale_lg: 118,
  scale_2lg: 125,
  rotation: [0, 2.79, 0],
  position: [0, 0.3, 0.1],
  node: [
    {
      name: "Olhos frontais",
      node: null,
      description: "Disposição ocular característica e excelente visão.",
      text: "A aranha-lobo possui oito olhos em três fileiras, com os dois centrais anteriores grandes e voltados para frente, garantindo percepção aguçada de movimentos e profundidade — essencial para caçar."
    },
    {
      name: "Locomoção ativa",
      node: null,
      description: "Caçadora que não utiliza teias para capturar presas.",
      text: "Em vez de teias, confia na visão e agilidade. Move-se rapidamente pelo solo para perseguir e dominar presas como insetos e outros pequenos invertebrados."
    },
    {
      name: "Cuidado parental",
      node: null,
      description: "A fêmea carrega ovos e filhotes no corpo.",
      text: "A fêmea transporta o saco de ovos preso ao abdômen e, após a eclosão, carrega os filhotes sobre o dorso. Esse comportamento é raro entre aranhas e demonstra alto investimento parental."
    },
    {
      name: "Habitat",
      node: null,
      description: "Presente em uma ampla variedade de ambientes.",
      text: "Ocorre em florestas, campos, jardins e até residências humanas, preferindo locais com abundância de presas e abrigo no solo ou sob folhas."
    }
  ],
  attribuition: `<div>
    <a href="https://sketchfab.com/3d-models/wolf-spider-rigged-rabidosa-rabida-6392e4cfb64d407182fdad2cea9e0abe">Wolf Spider (Rigged) - (Rabidosa rabida)</a> 
    by <a href="https://sketchfab.com/DreamingInAlternation27">Dreaming In Alternation 27</a> 
    on <a href="https://sketchfab.com">Sketchfab</a>, 
    licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
  </div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Wolf_spider",
  hasAnimation: true
};

const Crustacea_Woodlouse: IModelData = {
  topic: "arthropoda_class_crustacea_woodlouse",
  source: "/woodlouse.glb",
  name: "Tatuzinho-de-jardim",
  title: "Tatuzinho-de-jardim (Isopoda)",
  description:
    "Crustáceo terrestre da ordem Isopoda, com corpo segmentado e placas articuladas. Possui a capacidade de se enrolar como forma de defesa e vive em ambientes úmidos e sombreados.",
  text: "O tatuzinho-de-jardim, também conhecido como bichinho-de-conta, é um crustáceo isópode adaptado à vida terrestre. Apesar de pertencer à classe Crustacea — grupo majoritariamente aquático —, habita ambientes úmidos sob pedras, troncos e folhas. Seu corpo é formado por segmentos cobertos por placas rígidas, conferindo proteção e flexibilidade. Quando ameaçado ou em condições secas, é capaz de se enrolar completamente, protegendo as partes moles e reduzindo a perda de água. Alimenta-se de matéria orgânica em decomposição, atuando como decompositor e contribuindo para a ciclagem de nutrientes no solo. Essa espécie representa um exemplo notável de adaptação dos crustáceos à vida fora da água, mantendo estruturas como o exoesqueleto articulado e a respiração branquial, dependente da umidade do ambiente.",
  scale: 0.03,
  scale_sm: 0.032,
  scale_md: 0.032,
  scale_lg: 0.034,
  scale_2lg: 0.042,
  rotation: [0, FIFTEEN, 0],
  position: [0, 0.4, 0],
  node: [
    {
      name: "Segmentação corporal",
      node: null,
      description: "Corpo dividido em segmentos articulados e protegidos por placas rígidas.",
      text: "O corpo do tatuzinho é composto por segmentos sobrepostos que oferecem proteção e flexibilidade, permitindo curvar-se e se enrolar para defesa."
    },
    {
      name: "Capacidade de enrolar",
      node: null,
      description: "Defesa contra predadores e desidratação.",
      text: "Ao se enrolar em forma de bola, o tatuzinho protege as partes moles e reduz a evaporação, estratégia essencial para sobrevivência fora da água."
    },
    {
      name: "Respiração e umidade",
      node: null,
      description: "Respira por pseudobrânquias e depende de ambientes úmidos.",
      text: "Mesmo sendo terrestre, respira por estruturas derivadas de brânquias. Por isso, habita locais úmidos, onde o ar possui maior teor de vapor d’água."
    },
    {
      name: "Importância ecológica",
      node: null,
      description: "Atua como decompositor nos ecossistemas terrestres.",
      text: "Alimenta-se de folhas e matéria orgânica morta, acelerando a decomposição e reciclagem de nutrientes, fundamentais para a fertilidade do solo."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/woodlouse-fae04aa296f844c18675f6ae50aefe77">Woodlouse</a> 
  by <a href="https://sketchfab.com/.hapto">.hapto GmbH</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Woodlouse",
  hasAnimation: true
};


const Crustacea_Crab: IModelData = {
  topic: "arthropoda_class_crustacea_crab",
  source: "/freshwater_crab.glb",
  sound: "/sounds/peel-prawns-277146.mp3",
  name: "Caranguejo",
  title: "Caranguejo (Decapoda)",
  description: "Crustáceo da ordem Decapoda, com corpo achatado e pinças desenvolvidas. Vive em ambientes marinhos e costeiros, com grande diversidade de espécies.",
  text: "Os caranguejos pertencem à ordem Decapoda, dentro da classe Crustacea. São crustáceos com corpo achatado lateralmente, protegido por um exoesqueleto rígido. Possuem cinco pares de patas, sendo o primeiro par modificado em grandes pinças (quelas), usadas para defesa e alimentação. Habitam principalmente ambientes marinhos e costeiros, mas algumas espécies vivem em água doce ou até em terra firme. Alimentam-se de algas, pequenos animais e matéria orgânica, desempenhando papel importante na cadeia alimentar e na reciclagem de nutrientes. Sua morfologia variada e comportamento adaptativo fazem do caranguejo um dos crustáceos mais reconhecíveis e estudados.",
  scale: 1.4,
  scale_sm: 1.5,
  scale_md: 1.6,
  scale_lg: 1.8,
  scale_2lg: 2.3,
  rotation: [0, 0, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Pinças (quelas)",
      node: null,
      description: "Patas anteriores modificadas para captura e defesa.",
      text: "As pinças são usadas para agarrar alimentos, lutar com outros indivíduos e se proteger de predadores."
    },
    {
      name: "Locomoção lateral",
      node: null,
      description: "Movimento característico para os lados.",
      text: "A maioria dos caranguejos se locomove lateralmente, o que lhes permite agilidade em ambientes rochosos e arenosos."
    },
    {
      name: "Exoesqueleto",
      node: null,
      description: "Carapaça rígida que protege o corpo.",
      text: "O exoesqueleto é composto por quitina e precisa ser trocado periodicamente através da muda para permitir o crescimento."
    },
    {
      name: "Diversidade ecológica",
      node: null,
      description: "Presente em diversos habitats.",
      text: "Existem caranguejos marinhos, de água doce e terrestres, adaptados a diferentes condições ambientais."
    }
  ],
  attribuition: `<div>
    <a href="https://sketchfab.com/3d-models/cc0-japanese-freshwater-crab-35559c2236d04c1a80ccbe08cae863c6">Japanese Freshwater Crab</a> 
    by <a href="https://sketchfab.com/ffishAsia-and-floraZia">ffish.asia / floraZia.com</a> 
    on <a href="https://sketchfab.com">Sketchfab</a>, 
    licensed under <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 Public Domain</a>
  </div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Crab",
  sceneBg: "#000",
  hasAnimation: true
};


const Insecta_Butterfly: IModelData = {
  topic: "arthropoda_class_insecta_butterfly",
  source: "/butterfly.glb",
  name: "Borboleta",
  title: "Borboleta (Lepidoptera)",
  description: "Inseto da ordem Lepidoptera, com asas coloridas e corpo segmentado. Passa por metamorfose completa e é importante polinizador.",
  text: "As borboletas pertencem à ordem Lepidoptera, dentro da classe Insecta. São insetos com corpo dividido em cabeça, tórax e abdômen, além de quatro asas cobertas por escamas coloridas. A espécie representada aqui possui asas laranja com bordas pretas, padrão comum em borboletas aposemáticas, que usam cores vivas para afastar predadores. O ciclo de vida inclui metamorfose completa: ovo, larva (lagarta), pupa (crisálida) e adulto. Alimentam-se de néctar e atuam como polinizadores em diversos ecossistemas. Além de sua importância ecológica, são símbolos culturais e indicadores ambientais.",
  scale: 0.025,
  scale_sm: 0.027,
  scale_md: 0.027,
  scale_lg: 0.028,
  scale_2lg: 0.035,
  rotation: [0, -TWENTY, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Asas coloridas",
      node: null,
      description: "Cobertas por escamas com padrão aposemático.",
      text: "As asas da borboleta possuem escamas microscópicas que refletem luz e criam padrões vibrantes, usados para comunicação e defesa."
    },
    {
      name: "Metamorfose",
      node: null,
      description: "Transformação completa durante o ciclo de vida.",
      text: "A borboleta passa por quatro estágios: ovo, larva, pupa e adulto, cada um com funções ecológicas distintas."
    },
    {
      name: "Polinização",
      node: null,
      description: "Importante agente polinizador.",
      text: "Ao se alimentar de néctar, a borboleta transfere pólen entre flores, contribuindo para a reprodução de plantas."
    },
    {
      name: "Defesa por cor",
      node: null,
      description: "Cores vivas indicam toxicidade ou sabor desagradável.",
      text: "O padrão laranja e preto é um sinal visual para predadores, indicando que a borboleta pode ser tóxica ou de sabor ruim."
    }
  ],
  attribuition: `<div>
    <a href="https://sketchfab.com/3d-models/butterfly-d642db74a3fa491a8143bd088b408094">Butterfly</a> 
    by <a href="https://sketchfab.com/rukh3d">Rukh3D</a> 
    on <a href="https://sketchfab.com">Sketchfab</a>, 
    licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
  </div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Butterfly",
  // sceneBg: "#2e1e1e",
  hasAnimation: true
};


const Insecta_BombusDahlbomii: IModelData = {
  topic: "arthropoda_class_insecta_bombus_dahlbomii",
  source: "/bombus_dahlbomii.glb",
  sound: "/sounds/bee-flying-loop-42287.mp3",
  name: "Bombus dahlbomii",
  title: "Abelha Bombus dahlbomii",
  description: "Abelha sul-americana de grande porte, conhecida por sua coloração avermelhada e papel essencial na polinização de ecossistemas nativos.",
  text: "A Bombus dahlbomii é uma espécie de abelha nativa da América do Sul, especialmente encontrada em regiões do Chile e Argentina. É considerada uma das maiores abelhas do mundo, com corpo robusto e pelagem avermelhada. Pertence à ordem Hymenoptera e à família Apidae. Essa espécie desempenha papel fundamental na polinização de plantas nativas, sendo adaptada a ambientes frios e úmidos. Infelizmente, suas populações têm diminuído devido à introdução de espécies exóticas como a Bombus terrestris, que competem por recursos e transmitem doenças. A Bombus dahlbomii é um exemplo marcante da biodiversidade sul-americana e da importância da conservação de polinizadores nativos.",
  scale: 0.18,
  scale_sm: 0.18,
  scale_md: 0.2,
  scale_lg: 0.21,
  scale_2lg: 0.25,
  rotation: [0, 0, 0],
  position: [0, 0.4, 0],
  node: [
    {
      name: "Tamanho corporal",
      node: null,
      description: "Uma das maiores abelhas do mundo.",
      text: "Seu corpo robusto e peludo pode atingir até 4 cm, destacando-se entre os himenópteros pela imponência física."
    },
    {
      name: "Coloração avermelhada",
      node: null,
      description: "Pelagem vermelha intensa.",
      text: "A pelagem avermelhada da Bombus dahlbomii é uma característica única entre os bombídeos, facilitando sua identificação."
    },
    {
      name: "Polinização nativa",
      node: null,
      description: "Importante polinizadora de plantas sul-americanas.",
      text: "Adaptada a flores locais, essa abelha garante a reprodução de diversas espécies vegetais nativas."
    },
    {
      name: "Ameaças ecológicas",
      node: null,
      description: "Competição com espécies exóticas.",
      text: "A introdução de abelhas europeias como Bombus terrestris ameaça a sobrevivência da Bombus dahlbomii por competição e transmissão de patógenos."
    }
  ],
  attribuition: `<div>
    <a href="https://sketchfab.com/3d-models/bombus-dahlbomii-375f7b0ab4fd463f89c3b1a702fd653d">Bombus dahlbomii</a> 
    by <a href="https://sketchfab.com/sapiains">Philippe Sapiains</a> 
    on <a href="https://sketchfab.com">Sketchfab</a>, 
    licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
  </div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Bombus_dahlbomii",
  // sceneBg: "#2a1a1a",
  hasAnimation: true
};


const Insecta_Ant: IModelData = {
  topic: "arthropoda_class_insecta_ant",
  source: "/ant.glb",
  name: "Formiga",
  title: "Formiga (Formicidae)",
  description: "Inseto social da ordem Hymenoptera, com organização em castas e comportamento cooperativo. Vive em colônias e desempenha papel ecológico essencial.",
  text: "As formigas pertencem à família Formicidae, dentro da ordem Hymenoptera e da classe Insecta. São insetos sociais que vivem em colônias organizadas, com divisão de tarefas entre rainhas, operárias e soldados. Possuem corpo segmentado em cabeça, tórax e abdômen, além de antenas articuladas e mandíbulas fortes. A comunicação entre indivíduos ocorre por feromônios e contato físico. As formigas desempenham funções ecológicas importantes, como dispersão de sementes, controle de pragas e reciclagem de matéria orgânica. Algumas espécies constroem ninhos subterrâneos complexos, enquanto outras vivem em árvores ou estruturas humanas. Sua diversidade e comportamento coletivo fazem delas um dos grupos mais bem-sucedidos do reino animal.",
  scale: 0.003,
  scale_sm: 0.003,
  scale_md: 0.003,
  scale_lg: 0.0035,
  scale_2lg: 0.004,
  rotation: [0, FORTY_FIVE, 0],
  position: [0.3, 0, -0.1],
  node: [
    {
      name: "Casta social",
      node: null,
      description: "Rainha, operárias e soldados com funções distintas.",
      text: "A rainha é responsável pela reprodução, enquanto operárias cuidam da colônia e soldados defendem o ninho."
    },
    {
      name: "Mandíbulas",
      node: null,
      description: "Ferramenta para defesa, transporte e alimentação.",
      text: "As mandíbulas das formigas são fortes e versáteis, usadas para cortar, carregar e lutar."
    },
    {
      name: "Comunicação química",
      node: null,
      description: "Uso de feromônios para coordenar ações.",
      text: "As formigas liberam substâncias químicas para alertar sobre perigo, marcar trilhas ou identificar membros da colônia."
    },
    {
      name: "Importância ecológica",
      node: null,
      description: "Dispersão de sementes e controle de pragas.",
      text: "Ao interagir com o solo e outros organismos, as formigas ajudam a manter o equilíbrio dos ecossistemas."
    }
  ],
  attribuition: `<div>
    <a href="https://sketchfab.com/3d-models/ant-b29567ff8d2949eb950283e0e42ad85f">Ant</a> 
    by <a href="https://sketchfab.com/ap-school">ap-school</a> 
    on <a href="https://sketchfab.com">Sketchfab</a>, 
    licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
  </div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Ant",
  // sceneBg: "#1f1f1f",
  hasAnimation: true
};


const Chilopoda_Centipede: IModelData = {
  topic: "arthropoda_class_chilopoda_centipede",
  source: "/polydesmus_angustus.glb",
  name: "Centopeia",
  title: "Centopeia (Chilopoda)",
  description: "Artrópode predador de corpo alongado e segmentado, com um par de pernas por segmento. Possui forcípulas venenosas e hábitos noturnos.",
  text: "As centopeias são miriápodes pertencentes à classe Chilopoda, do filo Arthropoda. Apresentam corpo alongado e segmentado, com um par de pernas por segmento, o que as diferencia dos diplópodes, que possuem dois. A cabeça possui antenas sensoriais e um par de forcípulas — apêndices modificados em ferrões que injetam veneno para capturar e paralisar presas. São predadoras noturnas, alimentando-se de insetos, vermes e pequenos vertebrados. Habitam locais úmidos e escuros, como solo, troncos e folhas em decomposição. Apesar da aparência ameaçadora, a maioria das espécies não oferece perigo significativo aos humanos. Sua estrutura corporal e modo de vida ilustram a notável adaptação dos miriápodes aos ambientes terrestres.",
  scale: 0.09,
  scale_sm: 0.1,
  scale_md: 0.1,
  scale_lg: 0.13,
  scale_2lg: 0.15,
  rotation: [0, -FORTY_FIVE, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Forcípulas",
      node: null,
      description: "Apêndices modificados em ferrões venenosos.",
      text: "As forcípulas são estruturas exclusivas das centopeias, usadas para injetar veneno em suas presas durante o ataque."
    },
    {
      name: "Segmentação corporal",
      node: null,
      description: "Corpo dividido em segmentos com um par de pernas cada.",
      text: "Cada segmento do corpo da centopeia possui um par de pernas, o que garante mobilidade rápida e eficiente na caça."
    },
    {
      name: "Antenas sensoriais",
      node: null,
      description: "Detectam vibrações e odores do ambiente.",
      text: "As antenas longas e móveis auxiliam na percepção do ambiente, permitindo que a centopeia localize presas e obstáculos mesmo no escuro."
    },
    {
      name: "Hábitos noturnos",
      node: null,
      description: "Atividade predominante durante a noite.",
      text: "São animais de hábitos noturnos, saindo para caçar à noite e permanecendo escondidas durante o dia para evitar a desidratação."
    },
    {
      name: "Habitat",
      node: null,
      description: "Locais úmidos e protegidos.",
      text: "Centopeias vivem sob pedras, troncos e folhas, ambientes onde a umidade é alta e a exposição à luz é reduzida."
    }
  ],
  attribuition: `<div>
  <a href="https://sketchfab.com/3d-models/centipede-4b2a2d5f3b4b4c4b9c1c9e6e3f6f6f6f">Centipede</a> 
  by <a href="https://sketchfab.com/.hapto">.hapto GmbH</a> 
  on <a href="https://sketchfab.com">Sketchfab</a>, 
  licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</div>`,
  wikipedia: "https://en.wikipedia.org/wiki/Centipede",
  hasAnimation: false
};


export const ARTHROPODA_MODELS: IModelData[] = [
  Arachnida_Pseudoscorpion,
  Arachnida_Araneae_WolfSpider,
  Crustacea_Woodlouse,
  Crustacea_Crab,
  Insecta_Butterfly,
  Insecta_BombusDahlbomii,
  Insecta_Ant,
  Chilopoda_Centipede
] 