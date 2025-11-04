import type { IModelData } from "@interfaces/model";
import { FIFTEEN, FORTY_FIVE, NINETY, TEN, THIRTY, TWENTY } from "@utils/radAngles";

const Arachnida_Pseudoscorpion: IModelData = {
  topic: "arthropoda_class_arachnida_pseudoscorpion",
  source: "/pseudoscorpion.glb",
  name: "Pseudoscorpion",
  title: "Pseudoscorpion (Arachnida)",
  description: "Aracnídeo de pequeno porte, semelhante a um escorpião, mas sem cauda nem ferrão. Vive em ambientes úmidos e desempenha papel ecológico como predador de pequenos invertebrados.",
  text: "O pseudoscorpion é um aracnídeo pertencente à ordem Pseudoscorpiones. Apesar de lembrar um escorpião, não possui cauda nem ferrão. Mede geralmente menos de 5 mm e habita locais como o solo de florestas, troncos, folhas, livros e até casas humanas. Seus pedipalpos são grandes e semelhantes a pinças, usados para capturar presas como ácaros, larvas e pequenos insetos. Algumas espécies produzem seda por glândulas localizadas nos pedipalpos, formando câmaras de proteção. São inofensivos ao ser humano e importantes no controle de populações de pragas. Sua morfologia única e hábitos discretos fazem dele um exemplo fascinante da diversidade dentro da classe Arachnida.",
  scale: 0.08,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [THIRTY, 0, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Pedipalpos",
      node: null,
      description: "Pinças grandes usadas para captura de presas.",
      text: "Os pedipalpos do pseudoscorpion são robustos e funcionam como pinças, permitindo agarrar e imobilizar pequenos invertebrados."
    },
    {
      name: "Ausência de cauda",
      node: null,
      description: "Sem ferrão, ao contrário dos escorpiões.",
      text: "Apesar da aparência semelhante, o pseudoscorpion não possui cauda nem ferrão, sendo completamente inofensivo ao ser humano."
    },
    {
      name: "Produção de seda",
      node: null,
      description: "Algumas espécies produzem seda pelos pedipalpos.",
      text: "A seda é usada para construir câmaras de repouso ou proteção durante a muda, comportamento raro entre aracnídeos."
    },
    {
      name: "Habitat e ecologia",
      node: null,
      description: "Vive em ambientes úmidos e controla pragas.",
      text: "Habita o solo, troncos, folhas e até livros. Alimenta-se de ácaros e larvas, contribuindo para o equilíbrio ecológico."
    }
  ],
  attribuition: "Conteúdo adaptado para fins educativos - App Sapiens",
  wikipedia: "https://en.wikipedia.org/wiki/Pseudoscorpion",
  // sound: '/sounds/forest_floor.wav',
  // sceneBg: '#1a1a1a',
  hasAnimation: true,
  animation: 'Walk'
};

const Arachnida_Solifugae: IModelData = {
  topic: "arthropoda_class_arachnida_solifugae",
  source: "/wolf_spider.glb",
  name: "Solífugo",
  title: "Aranha-escorpião (Solifugae)",
  description: "Aracnídeo da ordem Solifugae, conhecido como aranha-escorpião ou camel spider. Possui quelíceras grandes e é ágil, mas não venenoso.",
  text: "Os solífugos, popularmente chamados de aranhas-escorpião ou camel spiders, pertencem à ordem Solifugae dentro da classe Arachnida. Apesar do nome, não são nem aranhas nem escorpiões. Possuem corpo segmentado, oito patas e grandes quelíceras que usam para capturar e triturar presas. São extremamente rápidos e habitam regiões áridas e semiáridas, como desertos. Não possuem veneno, mas sua mordida pode ser dolorosa. Alimentam-se de insetos, pequenos vertebrados e até outros aracnídeos. Sua aparência intimidadora e velocidade impressionante os tornam um exemplo marcante da diversidade dos aracnídeos.",
  scale: 100,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [FIFTEEN, NINETY * 2, 0],
  position: [0, 0.3, 0.1],
  node: [
    {
      name: "Quelíceras",
      node: null,
      description: "Mandíbulas grandes usadas para capturar e triturar presas.",
      text: "As quelíceras dos solífugos são proporcionalmente maiores que as de outros aracnídeos, permitindo uma mordida poderosa e precisa."
    },
    {
      name: "Locomoção",
      node: null,
      description: "Extremamente rápidos e ágeis.",
      text: "Solífugos são conhecidos por sua velocidade, podendo correr rapidamente para capturar presas ou fugir de predadores."
    },
    {
      name: "Habitat",
      node: null,
      description: "Regiões áridas e semiáridas.",
      text: "Vivem em desertos e áreas secas, escondendo-se sob pedras ou em tocas durante o dia e caçando à noite."
    },
    {
      name: "Classificação",
      node: null,
      description: "Não são aranhas nem escorpiões.",
      text: "Apesar do nome popular, os solífugos formam um grupo próprio dentro dos aracnídeos, com características únicas."
    }
  ],
  attribuition: "Conteúdo adaptado para fins educativos - App Sapiens",
  wikipedia: "https://en.wikipedia.org/wiki/Solifugae",
  // sceneBg: '#1a0e0e',
  hasAnimation: true
};

const Crustacea_Woodlouse: IModelData = {
  topic: "arthropoda_class_crustacea_woodlouse",
  source: "/woodlouse.glb",
  name: "Tatuzinho-de-jardim",
  title: "Tatuzinho-de-jardim (Isopoda)",
  description: "Crustáceo terrestre da ordem Isopoda. Possui corpo segmentado e capacidade de se enrolar como defesa. Vive em ambientes úmidos e sombreados.",
  text: "O tatuzinho-de-jardim, também conhecido como bichinho-de-conta, pertence à ordem Isopoda dentro da classe Crustacea. Apesar de ser um crustáceo, vive em ambientes terrestres úmidos, como sob pedras, troncos e folhas. Seu corpo é segmentado e protegido por placas rígidas, e ele pode se enrolar em forma de bola como mecanismo de defesa contra predadores e perda de umidade. Alimenta-se de matéria orgânica em decomposição, contribuindo para a reciclagem de nutrientes no solo. É um exemplo fascinante de adaptação de crustáceos à vida fora da água, mantendo características como respiração por brânquias e exoesqueleto articulado.",
  scale: 0.035,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [TEN, FORTY_FIVE, 0],
  position: [-0.3, 0.4, 0],
  node: [
    {
      name: "Segmentação corporal",
      node: null,
      description: "Corpo dividido em segmentos com placas rígidas.",
      text: "O corpo do tatuzinho é composto por segmentos sobrepostos que oferecem proteção e flexibilidade para locomoção e enrolamento."
    },
    {
      name: "Capacidade de enrolar",
      node: null,
      description: "Forma de bola como defesa.",
      text: "Quando ameaçado ou em ambientes secos, o tatuzinho se enrola completamente, protegendo suas partes moles e reduzindo a perda de água."
    },
    {
      name: "Respiração e umidade",
      node: null,
      description: "Respira por pseudobrânquias e precisa de umidade.",
      text: "Mesmo sendo terrestre, respira por estruturas semelhantes a brânquias e depende de ambientes úmidos para sobreviver."
    },
    {
      name: "Importância ecológica",
      node: null,
      description: "Decompositor no solo.",
      text: "Alimenta-se de folhas mortas e matéria orgânica, ajudando na decomposição e reciclagem de nutrientes nos ecossistemas terrestres."
    }
  ],
  attribuition: "Conteúdo adaptado para fins educativos - App Sapiens",
  wikipedia: "https://en.wikipedia.org/wiki/Woodlouse",
  // sceneBg: '#1e2d1e',
  hasAnimation: true
};

const Crustacea_Crab: IModelData = {
  topic: "arthropoda_class_crustacea_crab",
  source: "/freshwater_crab.glb",
  sound: '/sounds/peel-prawns-277146.mp3',
  name: "Caranguejo",
  title: "Caranguejo (Decapoda)",
  description: "Crustáceo da ordem Decapoda, com corpo achatado e pinças desenvolvidas. Vive em ambientes marinhos e costeiros, com grande diversidade de espécies.",
  text: "Os caranguejos pertencem à ordem Decapoda, dentro da classe Crustacea. São crustáceos com corpo achatado lateralmente, protegido por um exoesqueleto rígido. Possuem cinco pares de patas, sendo o primeiro par modificado em grandes pinças (quelas), usadas para defesa e alimentação. Habitam principalmente ambientes marinhos e costeiros, mas algumas espécies vivem em água doce ou até em terra firme. Alimentam-se de algas, pequenos animais e matéria orgânica, desempenhando papel importante na cadeia alimentar e na reciclagem de nutrientes. Sua morfologia variada e comportamento adaptativo fazem do caranguejo um dos crustáceos mais reconhecíveis e estudados.",
  scale: 1.4,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [TWENTY, 0, 0],
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
  attribuition: "Conteúdo adaptado para fins educativos - App Sapiens",
  wikipedia: "https://en.wikipedia.org/wiki/Crab",
  sceneBg: '#000',
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
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
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
  attribuition: "Conteúdo adaptado para fins educativos - App Sapiens",
  wikipedia: "https://en.wikipedia.org/wiki/Butterfly",
  // sceneBg: '#2e1e1e',
  hasAnimation: true
};

const Insecta_BombusDahlbomii: IModelData = {
  topic: "arthropoda_class_insecta_bombus_dahlbomii",
  source: "/bombus_dahlbomii.glb",
  sound: '/sounds/bee-flying-loop-42287.mp3',
  name: "Bombus dahlbomii",
  title: "Abelha Bombus dahlbomii",
  description: "Abelha sul-americana de grande porte, conhecida por sua coloração avermelhada e papel essencial na polinização de ecossistemas nativos.",
  text: "A *Bombus dahlbomii* é uma espécie de abelha nativa da América do Sul, especialmente encontrada em regiões do Chile e Argentina. É considerada uma das maiores abelhas do mundo, com corpo robusto e pelagem avermelhada. Pertence à ordem Hymenoptera e à família Apidae. Essa espécie desempenha papel fundamental na polinização de plantas nativas, sendo adaptada a ambientes frios e úmidos. Infelizmente, suas populações têm diminuído devido à introdução de espécies exóticas como a *Bombus terrestris*, que competem por recursos e transmitem doenças. A *Bombus dahlbomii* é um exemplo marcante da biodiversidade sul-americana e da importância da conservação de polinizadores nativos.",
  scale: 0.18,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
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
      text: "A pelagem avermelhada da *Bombus dahlbomii* é uma característica única entre os bombídeos, facilitando sua identificação."
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
      text: "A introdução de abelhas europeias como *Bombus terrestris* ameaça a sobrevivência da *Bombus dahlbomii* por competição e transmissão de patógenos."
    }
  ],
  attribuition: "Conteúdo adaptado para fins educativos - App Sapiens",
  wikipedia: "https://en.wikipedia.org/wiki/Bombus_dahlbomii",
  // sceneBg: '#2a1a1a',
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
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
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
  attribuition: "Conteúdo adaptado para fins educativos - App Sapiens",
  wikipedia: "https://en.wikipedia.org/wiki/Ant",
  // sceneBg: '#1f1f1f',
  hasAnimation: true
};

const Chilopoda_Centipede: IModelData = {
  topic: "arthropoda_class_chilopoda_centipede",
  source: "/polydesmus_angustus.glb",
  name: "Centopeia",
  title: "Centopeia (Chilopoda)",
  description: "Artrópode da classe Chilopoda, com corpo segmentado e um par de pernas por segmento. Predador ágil com ferrões venenosos.",
  text: "As centopeias pertencem à classe Chilopoda, dentro do filo Arthropoda. São artrópodes terrestres com corpo alongado e segmentado, apresentando um par de pernas por segmento — ao contrário dos diplópodes, que têm dois pares. A cabeça possui antenas sensoriais e um par de forcípulas, estruturas modificadas em ferrões que injetam veneno em suas presas. São predadoras noturnas, alimentando-se de insetos, vermes e pequenos vertebrados. Habitam ambientes úmidos, como solo, troncos e folhas em decomposição. Apesar de seu aspecto intimidador, a maioria das espécies não representa risco grave para humanos. Sua morfologia e comportamento predatório fazem da centopeia um exemplo fascinante da diversidade dos miriápodes.",
  scale: 0.09,
  scale_sm: 0.9,
  scale_md: 0.9,
  scale_lg: 0.9,
  scale_2lg: 0.9,
  rotation: [TEN, -FORTY_FIVE, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Forcípulas",
      node: null,
      description: "Ferrões modificados para injetar veneno.",
      text: "As forcípulas são apêndices localizados na cabeça, usados para capturar e paralisar presas com veneno."
    },
    {
      name: "Segmentação corporal",
      node: null,
      description: "Corpo dividido em muitos segmentos com um par de pernas cada.",
      text: "Cada segmento do corpo da centopeia possui um par de pernas, permitindo movimentos rápidos e flexíveis."
    },
    {
      name: "Hábitos noturnos",
      node: null,
      description: "Predadora ativa durante a noite.",
      text: "Centopeias caçam à noite, usando suas antenas para detectar vibrações e localizar presas no escuro."
    },
    {
      name: "Habitat",
      node: null,
      description: "Ambientes úmidos e sombreados.",
      text: "Vivem sob pedras, troncos e folhas, onde a umidade ajuda a evitar a desidratação."
    }
  ],
  attribuition: "Conteúdo adaptado para fins educativos - App Sapiens",
  wikipedia: "https://en.wikipedia.org/wiki/Centipede",
  // sceneBg: '#1a1a1a',
  hasAnimation: false
};

export const ARTHROPODA_MODELS: IModelData[] = [
    Arachnida_Pseudoscorpion,
    Arachnida_Solifugae,
    Crustacea_Woodlouse,
    Crustacea_Crab,
    Insecta_Butterfly,
    Insecta_BombusDahlbomii,
    Insecta_Ant,
    Chilopoda_Centipede
] 