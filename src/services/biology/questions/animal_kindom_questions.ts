import type { ANIMAL_KINGDOM_TOPICS } from "@interfaces/disciplines/biology";
import type { IQuestion } from "@interfaces/question";

export const poriferosQuestions: IQuestion = {
  discipline: 'BIOLOGY',
  module: 'ANIMAL_KINGDOM',
  data: [
    {
      code: "PORI0001",
      context: "O que caracteriza os poríferos?",
      correctAltenative: "A",
      altenativesIntroduction: "Escolha a alternativa correta:",
      alternatives: [
        { letter: "A", isCorrect: true, text: "São animais aquáticos, geralmente marinhos, com corpo cheio de poros." },
        { letter: "B", isCorrect: false, text: "São animais terrestres com corpo segmentado." },
        { letter: "C", isCorrect: false, text: "Possuem simetria bilateral e sistema nervoso centralizado." },
        { letter: "D", isCorrect: false, text: "São exclusivamente parasitas." }
      ],
      explanation: "Poríferos são esponjas com corpo poroso adaptado à filtração de água."
    },
    {
      code: "PORI0002",
      context: "Os poríferos possuem tecidos verdadeiros?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Sim, possuem tecidos e órgãos complexos." },
        { letter: "B", isCorrect: true, text: "Não, são parazoários e não possuem tecidos verdadeiros." },
        { letter: "C", isCorrect: false, text: "Sim, mas apenas durante a fase larval." },
        { letter: "D", isCorrect: false, text: "Possuem tecidos apenas na região da espícula." }
      ],
      explanation: "A organização é celular, sem formação de tecidos e órgãos."
    },
    {
      code: "PORI0003",
      context: "Qual é a função dos coanócitos nos poríferos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produzir espículas calcárias." },
        { letter: "B", isCorrect: false, text: "Secretar enzimas digestivas extracelulares." },
        { letter: "C", isCorrect: true, text: "Gerar corrente de água e capturar partículas de alimento." },
        { letter: "D", isCorrect: false, text: "Atuar na reprodução sexuada." }
      ],
      explanation: "Coanócitos possuem flagelos que promovem fluxo de água e fagocitam alimento."
    },
    {
      code: "PORI0004",
      context: "Qual é o tipo de digestão dos poríferos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Intracelular, realizada dentro das células." },
        { letter: "B", isCorrect: false, text: "Extracelular na cavidade gastrovascular." },
        { letter: "C", isCorrect: false, text: "Mista: extra e intracelular." },
        { letter: "D", isCorrect: false, text: "Não possuem digestão." }
      ],
      explanation: "Poríferos não têm cavidade digestiva; a digestão ocorre por fagocitose."
    },
    {
      code: "PORI0005",
      context: "Qual é a composição do esqueleto dos poríferos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Quitina." },
        { letter: "B", isCorrect: false, text: "Cartilagem." },
        { letter: "C", isCorrect: false, text: "Ossos." },
        { letter: "D", isCorrect: true, text: "Espículas de sílica ou calcário e/ou fibras de espongina." }
      ],
      explanation: "As espículas e a espongina conferem sustentação ao corpo das esponjas."
    },
    {
      code: "PORI0006",
      context: "Como ocorre a reprodução assexuada nos poríferos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Fissão binária." },
        { letter: "B", isCorrect: true, text: "Brotamento e formação de gêmulas." },
        { letter: "C", isCorrect: false, text: "Partenogênese obrigatória." },
        { letter: "D", isCorrect: false, text: "Esporulação." }
      ],
      explanation: "Gêmulas são estruturas resistentes; o brotamento forma novos indivíduos."
    },
    {
      code: "PORI0007",
      context: "Como ocorre a reprodução sexuada nos poríferos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Autofecundação obrigatória." },
        { letter: "B", isCorrect: false, text: "Fecundação externa apenas em colônias." },
        { letter: "C", isCorrect: true, text: "Produção de gametas e fecundação cruzada formando larvas móveis." },
        { letter: "D", isCorrect: false, text: "Partenogênese facultativa." }
      ],
      explanation: "Muitas esponjas são hermafroditas e liberam larvas que se fixam depois."
    },
    {
      code: "PORI0008",
      context: "Sobre o fluxo de água em poríferos, assinale a correta.",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "A água entra pelos óstios/poros e sai pelo ósculo." },
        { letter: "B", isCorrect: false, text: "A água entra pelo ósculo e sai pelos porócitos." },
        { letter: "C", isCorrect: false, text: "A água é bombeada por pinacócitos no ósculo." },
        { letter: "D", isCorrect: false, text: "Não há fluxo de água nos poríferos." }
      ],
      explanation: "Óstios são aberturas de entrada; o ósculo é a abertura de saída."
    },
    {
      code: "PORI0009",
      context: "Qual é a simetria corporal típica dos poríferos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Simetria bilateral." },
        { letter: "B", isCorrect: false, text: "Simetria radial obrigatória." },
        { letter: "C", isCorrect: false, text: "Pentarradial." },
        { letter: "D", isCorrect: true, text: "Predominantemente assimétricos." }
      ],
      explanation: "A maioria das esponjas não apresenta simetria definida."
    },
    {
      code: "PORI0010",
      context: "Qual é a importância ecológica dos poríferos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Polinização de plantas aquáticas." },
        { letter: "B", isCorrect: true, text: "Filtram água e servem de abrigo para diversos organismos." },
        { letter: "C", isCorrect: false, text: "Produtores primários por fotossíntese." },
        { letter: "D", isCorrect: false, text: "Vetores de doenças humanas." }
      ],
      explanation: "A filtração contribui para a clarificação da água e micro-habitat."
    },
    {
      code: "PORI0011",
      context: "Os poríferos possuem sistema nervoso?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Sim, com cérebro e nervos periféricos." },
        { letter: "B", isCorrect: false, text: "Sim, apenas na fase larval." },
        { letter: "C", isCorrect: true, text: "Não, não possuem sistema nervoso." },
        { letter: "D", isCorrect: false, text: "Possuem sistema nervoso difuso." }
      ],
      explanation: "A coordenação é feita por células; não há tecido nervoso."
    },
    {
      code: "PORI0012",
      context: "Qual é a importância econômica de alguns poríferos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Esponjas naturais utilizadas para higiene e limpeza." },
        { letter: "B", isCorrect: false, text: "Produção de seda e lã." },
        { letter: "C", isCorrect: false, text: "Extração de pérolas." },
        { letter: "D", isCorrect: false, text: "Fermentação de alimentos." }
      ],
      explanation: "Espécies comercializadas como esponjas naturais têm valor econômico."
    },
    {
      code: "PORI0013",
      context: "Qual célula participa da formação de espículas e transporte interno?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Coanócito." },
        { letter: "B", isCorrect: false, text: "Pinacócito." },
        { letter: "C", isCorrect: false, text: "Porócito." },
        { letter: "D", isCorrect: true, text: "Amebócito (célula mesenquimal)." }
      ],
      explanation: "Amebócitos circulam pela mesóglia, transportam nutrientes e podem formar espículas."
    },
    {
      code: "PORI0014",
      context: "Sobre os tipos morfológicos (ascon, sicon e leucon), assinale a correta.",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Ascon é o mais complexo, com câmaras flageladas amplas." },
        { letter: "B", isCorrect: true, text: "Leucon é o mais complexo, com muitas câmaras e canais." },
        { letter: "C", isCorrect: false, text: "Sicon é o mais simples, com espongiocele lisa." },
        { letter: "D", isCorrect: false, text: "Não há variação morfológica em poríferos." }
      ],
      explanation: "A complexidade aumenta de ascon (simples) para sicon e leucon (complexo)."
    },
    {
      code: "PORI0015",
      context: "Qual afirmação sobre o ósculo é correta?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "É o poro de entrada de água." },
        { letter: "B", isCorrect: false, text: "É a célula flagelada responsável pela filtração." },
        { letter: "C", isCorrect: true, text: "É a abertura por onde a água filtrada sai do corpo da esponja." },
        { letter: "D", isCorrect: false, text: "É a fibra proteica que compõe o esqueleto." }
      ],
      explanation: "O ósculo é a saída principal do fluxo de água após a filtração."
    }
  ]
};

export const cnidariosQuestions: IQuestion = {
  discipline: 'BIOLOGY',
  module: 'ANIMAL_KINGDOM',
  data: [
    {
      code: "CNID0001",
      context: "Qual é a principal característica dos cnidários?",
      correctAltenative: "B",
      altenativesIntroduction: "Escolha a alternativa correta:",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Presença de rádula para raspar alimentos." },
        { letter: "B", isCorrect: true, text: "Possuem cnidócitos, células urticantes para defesa e captura de presas." },
        { letter: "C", isCorrect: false, text: "Corpo segmentado em metâmeros." },
        { letter: "D", isCorrect: false, text: "Exoesqueleto de quitina." }
      ],
      explanation: "Cnidócitos são exclusivos dos cnidários e liberam nematocistos urticantes."
    },
    {
      code: "CNID0002",
      context: "Quais são as duas formas corporais básicas dos cnidários?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Pólipo e medusa." },
        { letter: "B", isCorrect: false, text: "Larva e adulto." },
        { letter: "C", isCorrect: false, text: "Segmentado e não segmentado." },
        { letter: "D", isCorrect: false, text: "Assimétrico e bilateral." }
      ],
      explanation: "Pólipo é geralmente séssil, medusa é livre-natante."
    },
    {
      code: "CNID0003",
      context: "Qual é a simetria corporal típica dos cnidários?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Simetria bilateral." },
        { letter: "B", isCorrect: false, text: "Assimetria." },
        { letter: "C", isCorrect: true, text: "Simetria radial." },
        { letter: "D", isCorrect: false, text: "Pentarradial." }
      ],
      explanation: "A simetria radial facilita a interação uniforme com o ambiente aquático."
    },
    {
      code: "CNID0004",
      context: "Onde ocorre a digestão nos cnidários?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Somente intracelular." },
        { letter: "B", isCorrect: false, text: "Somente extracelular." },
        { letter: "C", isCorrect: false, text: "Não possuem digestão." },
        { letter: "D", isCorrect: true, text: "Extracelular na cavidade gastrovascular e intracelular nas células." }
      ],
      explanation: "A cavidade gastrovascular permite digestão extracelular; o restante ocorre intracelularmente."
    },
    {
      code: "CNID0005",
      context: "Qual classe inclui as águas-vivas típicas (medusas predominantes)?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Hydrozoa." },
        { letter: "B", isCorrect: true, text: "Scyphozoa." },
        { letter: "C", isCorrect: false, text: "Anthozoa." },
        { letter: "D", isCorrect: false, text: "Cubozoa." }
      ],
      explanation: "Em Scyphozoa, a fase de medusa é predominante."
    },
    {
      code: "CNID0006",
      context: "Qual classe inclui os corais e as anêmonas-do-mar?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Hydrozoa." },
        { letter: "B", isCorrect: false, text: "Scyphozoa." },
        { letter: "C", isCorrect: true, text: "Anthozoa." },
        { letter: "D", isCorrect: false, text: "Cubozoa." }
      ],
      explanation: "Anthozoa apresenta apenas a forma pólipo, sem fase de medusa."
    },
    {
      code: "CNID0007",
      context: "Qual classe inclui águas-vivas cúbicas com veneno potente?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Hydrozoa." },
        { letter: "B", isCorrect: false, text: "Scyphozoa." },
        { letter: "C", isCorrect: false, text: "Anthozoa." },
        { letter: "D", isCorrect: true, text: "Cubozoa." }
      ],
      explanation: "Cubozoa inclui as ‘box jellyfish’, com toxicidade elevada."
    },
    {
      code: "CNID0008",
      context: "Hydra e a caravela-portuguesa pertencem a qual classe?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Hydrozoa." },
        { letter: "B", isCorrect: false, text: "Scyphozoa." },
        { letter: "C", isCorrect: false, text: "Anthozoa." },
        { letter: "D", isCorrect: false, text: "Cubozoa." }
      ],
      explanation: "Hydrozoa inclui organismos solitários e colônias como sifonóforos."
    },
    {
      code: "CNID0009",
      context: "Qual é a função dos cnidócitos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produção de muco e proteção contra dessecação." },
        { letter: "B", isCorrect: true, text: "Defesa e captura de presas por meio de nematocistos." },
        { letter: "C", isCorrect: false, text: "Locomoção ativa e nado rápido." },
        { letter: "D", isCorrect: false, text: "Respiração por difusão direta nos nematocistos." }
      ],
      explanation: "Nematocistos são organelos evertíveis que inoculam toxinas e prendem presas."
    },
    {
      code: "CNID0010",
      context: "Como ocorre a reprodução assexuada nos cnidários?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Por fissão binária." },
        { letter: "B", isCorrect: true, text: "Por brotamento, comum em pólipos." },
        { letter: "C", isCorrect: false, text: "Por esporulação." },
        { letter: "D", isCorrect: false, text: "Por partenogênese obrigatória." }
      ],
      explanation: "Pólipos como Hydra brotam novos indivíduos geneticamente idênticos."
    },
    {
      code: "CNID0011",
      context: "Como ocorre a reprodução sexuada nos cnidários?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Autofecundação obrigatória em todos os grupos." },
        { letter: "B", isCorrect: false, text: "Fecundação interna sempre na forma pólipo." },
        { letter: "C", isCorrect: true, text: "Produção de gametas, geralmente com fecundação externa na água." },
        { letter: "D", isCorrect: false, text: "Apenas por clonagem natural." }
      ],
      explanation: "Medusas liberam gametas na água, onde ocorre a fecundação externa."
    },
    {
      code: "CNID0012",
      context: "Qual é a importância ecológica dos corais?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Formam recifes que abrigam alta biodiversidade e protegem costas." },
        { letter: "B", isCorrect: false, text: "São polinizadores de plantas aquáticas." },
        { letter: "C", isCorrect: false, text: "São produtores primários por fotossíntese direta." },
        { letter: "D", isCorrect: false, text: "Atuam como predadores de topo nos oceanos." }
      ],
      explanation: "Recifes fornecem habitat, alimento e proteção, sustentando cadeias tróficas."
    },
    {
      code: "CNID0013",
      context: "Os cnidários possuem sistema nervoso centralizado?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Sim, com cérebro e medula espinhal." },
        { letter: "B", isCorrect: true, text: "Não, possuem rede nervosa difusa sem centralização." },
        { letter: "C", isCorrect: false, text: "Sim, apenas na fase de medusa." },
        { letter: "D", isCorrect: false, text: "Possuem sistema nervoso ganglionar típico dos artrópodes." }
      ],
      explanation: "A rede nervosa difusa coordena movimentos e respostas simples."
    },
    {
      code: "CNID0014",
      context: "Qual afirmação sobre o ciclo de vida dos cnidários é correta?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Todos os cnidários apresentam apenas a forma de medusa." },
        { letter: "B", isCorrect: false, text: "A forma pólipo é sempre parasita." },
        { letter: "C", isCorrect: false, text: "Não há alternância de formas no filo." },
        { letter: "D", isCorrect: true, text: "Muitos grupos alternam entre pólipo (assexuado) e medusa (sexuada)." }
      ],
      explanation: "A metagênese (alternância de gerações) é comum em Hydrozoa e outros grupos."
    },
    {
      code: "CNID0015",
      context: "Sobre a relação entre corais e zooxantelas, assinale a correta.",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "É uma simbiose: algas dinoflageladas vivem nos tecidos do coral e fornecem nutrientes." },
        { letter: "B", isCorrect: false, text: "É comensalismo sem troca de nutrientes." },
        { letter: "C", isCorrect: false, text: "É parasitismo, prejudicando o coral." },
        { letter: "D", isCorrect: false, text: "Não há relação; corais não possuem simbiontes." }
      ],
      explanation: "Zooxantelas realizam fotossíntese e fornecem compostos ao coral, que oferece abrigo e CO₂."
    }
  ]
};

export const platelmintosQuestions: IQuestion = {
  discipline: 'BIOLOGY',
  module: 'ANIMAL_KINGDOM',
  data: [
    {
      code: "PLAT0001",
      context: "Qual é a principal característica morfológica dos platelmintos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Corpo achatado dorsoventralmente." },
        { letter: "B", isCorrect: false, text: "Corpo cilíndrico e segmentado." },
        { letter: "C", isCorrect: false, text: "Corpo com exoesqueleto quitinoso." },
        { letter: "D", isCorrect: false, text: "Corpo com simetria radial." }
      ],
      explanation: "Platelmintos possuem corpo achatado dorsoventralmente, característica que dá nome ao filo."
    },
    {
      code: "PLAT0002",
      context: "Os platelmintos são acelomados, pseudocelomados ou celomados?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Acelomados." },
        { letter: "B", isCorrect: false, text: "Pseudocelomados." },
        { letter: "C", isCorrect: false, text: "Celomados." },
        { letter: "D", isCorrect: false, text: "Não possuem classificação quanto ao celoma." }
      ],
      explanation: "Platelmintos não possuem cavidade corporal verdadeira, sendo acelomados."
    },
    {
      code: "PLAT0003",
      context: "Qual é a simetria corporal dos platelmintos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Radial." },
        { letter: "B", isCorrect: true, text: "Bilateral." },
        { letter: "C", isCorrect: false, text: "Assimétrica." },
        { letter: "D", isCorrect: false, text: "Pentarradial." }
      ],
      explanation: "Platelmintos apresentam simetria bilateral, típica de animais mais complexos."
    },
    {
      code: "PLAT0004",
      context: "Qual é o tipo de digestão dos platelmintos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Somente extracelular." },
        { letter: "B", isCorrect: false, text: "Somente intracelular." },
        { letter: "C", isCorrect: true, text: "Mista: extracelular e intracelular." },
        { letter: "D", isCorrect: false, text: "Não possuem digestão." }
      ],
      explanation: "Platelmintos realizam digestão extracelular na cavidade gastrovascular e intracelular nas células."
    },
    {
      code: "PLAT0005",
      context: "Os platelmintos possuem sistema circulatório?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Sim, fechado." },
        { letter: "B", isCorrect: false, text: "Sim, aberto." },
        { letter: "C", isCorrect: false, text: "Sim, misto." },
        { letter: "D", isCorrect: true, text: "Não, a distribuição ocorre por difusão." }
      ],
      explanation: "Platelmintos não possuem sistema circulatório; nutrientes e gases se difundem pelo corpo."
    },
    {
      code: "PLAT0006",
      context: "Qual é o sistema excretor dos platelmintos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Nefrídios metanéfricos." },
        { letter: "B", isCorrect: true, text: "Protonefrídios com células-flama." },
        { letter: "C", isCorrect: false, text: "Rins primitivos." },
        { letter: "D", isCorrect: false, text: "Excreção por difusão apenas." }
      ],
      explanation: "Protonefrídios com células-flama eliminam resíduos metabólicos."
    },
    {
      code: "PLAT0007",
      context: "Qual classe inclui as planárias de vida livre?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Turbellaria." },
        { letter: "B", isCorrect: false, text: "Cestoda." },
        { letter: "C", isCorrect: false, text: "Trematoda." },
        { letter: "D", isCorrect: false, text: "Nematoda." }
      ],
      explanation: "Turbellaria inclui planárias, geralmente de vida livre em ambientes aquáticos."
    },
    {
      code: "PLAT0008",
      context: "Qual classe inclui as tênias?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Turbellaria." },
        { letter: "B", isCorrect: true, text: "Cestoda." },
        { letter: "C", isCorrect: false, text: "Trematoda." },
        { letter: "D", isCorrect: false, text: "Nematoda." }
      ],
      explanation: "Cestoda inclui vermes parasitas como Taenia solium e Taenia saginata."
    },
    {
      code: "PLAT0009",
      context: "Qual classe inclui os vermes causadores da esquistossomose?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Turbellaria." },
        { letter: "B", isCorrect: false, text: "Cestoda." },
        { letter: "C", isCorrect: true, text: "Trematoda." },
        { letter: "D", isCorrect: false, text: "Nematoda." }
      ],
      explanation: "Trematoda inclui parasitas como Schistosoma mansoni, causador da esquistossomose."
    },
    {
      code: "PLAT0010",
      context: "Como ocorre a reprodução das planárias?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Somente assexuada por brotamento." },
        { letter: "B", isCorrect: false, text: "Somente sexuada com fecundação externa." },
        { letter: "C", isCorrect: false, text: "Somente por partenogênese." },
        { letter: "D", isCorrect: true, text: "Podem se reproduzir de forma sexuada e assexuada por regeneração." }
      ],
      explanation: "Planárias têm grande capacidade de regeneração e também se reproduzem sexuadamente."
    },
    {
      code: "PLAT0011",
      context: "Qual é a importância médica dos platelmintos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produzem antibióticos naturais." },
        { letter: "B", isCorrect: true, text: "Algumas espécies são parasitas humanos, causando doenças como teníase e esquistossomose." },
        { letter: "C", isCorrect: false, text: "São usados como polinizadores aquáticos." },
        { letter: "D", isCorrect: false, text: "Atuam como produtores primários nos ecossistemas." }
      ],
      explanation: "Platelmintos parasitas têm grande impacto na saúde pública."
    },
    {
      code: "PLAT0012",
      context: "Qual é a importância ecológica das planárias?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "São predadores de pequenos invertebrados e ajudam no equilíbrio ecológico." },
        { letter: "B", isCorrect: false, text: "São polinizadores de plantas aquáticas." },
        { letter: "C", isCorrect: false, text: "São produtores primários." },
        { letter: "D", isCorrect: false, text: "São decompositores exclusivos." }
      ],
      explanation: "Planárias controlam populações de pequenos organismos aquáticos."
    },
    {
      code: "PLAT0013",
      context: "Os platelmintos possuem sistema nervoso?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Não possuem sistema nervoso." },
        { letter: "B", isCorrect: false, text: "Possuem sistema nervoso difuso, como os cnidários." },
        { letter: "C", isCorrect: true, text: "Sim, possuem sistema nervoso ganglionar com cordões nervosos longitudinais." },
        { letter: "D", isCorrect: false, text: "Possuem sistema nervoso centralizado com cérebro e medula espinhal." }
      ],
      explanation: "Platelmintos apresentam sistema nervoso ganglionar, mais avançado que o dos cnidários."
    },
    {
      code: "PLAT0014",
      context: "Qual é a principal forma de respiração dos platelmintos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Respiração cutânea por difusão." },
        { letter: "B", isCorrect: false, text: "Respiração branquial." },
        { letter: "C", isCorrect: false, text: "Respiração pulmonar." },
        { letter: "D", isCorrect: false, text: "Respiração traqueal." }
      ],
      explanation: "Devido ao corpo achatado, a troca gasosa ocorre por difusão através da pele."
    },
    {
      code: "PLAT0015",
      context: "Qual é a importância da forma achatada do corpo dos platelmintos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Facilita a locomoção em ambientes terrestres." },
        { letter: "B", isCorrect: true, text: "Aumenta a superfície corporal, facilitando trocas por difusão." },
        { letter: "C", isCorrect: false, text: "Permite a formação de segmentos corporais." },
        { letter: "D", isCorrect: false, text: "Auxilia na reprodução sexuada." }
      ],
      explanation: "O corpo achatado maximiza a área de contato com o meio, favorecendo difusão de gases e nutrientes."
    },
    {
      code: "PLAT0016",
      context: "Qual é a principal diferença entre cestódeos e trematódeos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Cestódeos possuem sistema digestório completo, trematódeos não." },
        { letter: "B", isCorrect: false, text: "Trematódeos são de vida livre, cestódeos são parasitas." },
        { letter: "C", isCorrect: true, text: "Cestódeos não possuem sistema digestório, enquanto trematódeos possuem incompleto." },
        { letter: "D", isCorrect: false, text: "Cestódeos são aquáticos, trematódeos são terrestres." }
      ],
      explanation: "Cestódeos absorvem nutrientes diretamente do hospedeiro; trematódeos possuem tubo digestivo incompleto."
    },
    {
      code: "PLAT0017",
      context: "Qual é a importância do saneamento básico no combate às doenças causadas por platelmintos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Evita a reprodução das planárias de vida livre." },
        { letter: "B", isCorrect: false, text: "Impede a formação de gêmulas resistentes." },
        { letter: "C", isCorrect: false, text: "Reduz a transmissão de doenças respiratórias." },
        { letter: "D", isCorrect: true, text: "Diminui a contaminação da água e do solo, prevenindo teníase e esquistossomose." }
      ],
      explanation: "O saneamento básico reduz a exposição a ovos e larvas de parasitas, prevenindo infecções humanas."
    }
  ]
};

export const nematelmintosQuestions: IQuestion = {
  discipline: 'BIOLOGY',
  module: 'ANIMAL_KINGDOM',
  data: [
    {
      code: "NEMA0001",
      context: "Qual é a principal característica morfológica dos nematelmintos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Corpo cilíndrico, alongado e afilado nas extremidades." },
        { letter: "B", isCorrect: false, text: "Corpo achatado dorsoventralmente." },
        { letter: "C", isCorrect: false, text: "Corpo segmentado em anéis." },
        { letter: "D", isCorrect: false, text: "Corpo com simetria radial." }
      ],
      explanation: "Nematelmintos possuem corpo cilíndrico e não segmentado."
    },
    {
      code: "NEMA0002",
      context: "Os nematelmintos são acelomados, pseudocelomados ou celomados?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Acelomados." },
        { letter: "B", isCorrect: true, text: "Pseudocelomados." },
        { letter: "C", isCorrect: false, text: "Celomados." },
        { letter: "D", isCorrect: false, text: "Não possuem classificação quanto ao celoma." }
      ],
      explanation: "Nematelmintos possuem pseudoceloma, cavidade parcialmente revestida."
    },
    {
      code: "NEMA0003",
      context: "Qual é a simetria corporal dos nematelmintos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Radial." },
        { letter: "B", isCorrect: false, text: "Assimétrica." },
        { letter: "C", isCorrect: true, text: "Bilateral." },
        { letter: "D", isCorrect: false, text: "Pentarradial." }
      ],
      explanation: "Nematelmintos apresentam simetria bilateral."
    },
    {
      code: "NEMA0004",
      context: "Qual é o tipo de tubo digestivo dos nematelmintos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Completo, com boca e ânus." },
        { letter: "B", isCorrect: false, text: "Incompleto, apenas boca." },
        { letter: "C", isCorrect: false, text: "Incompleto, apenas ânus." },
        { letter: "D", isCorrect: false, text: "Não possuem tubo digestivo." }
      ],
      explanation: "Nematelmintos possuem sistema digestivo completo."
    },
    {
      code: "NEMA0005",
      context: "Os nematelmintos possuem sistema circulatório?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Sim, fechado." },
        { letter: "B", isCorrect: false, text: "Sim, aberto." },
        { letter: "C", isCorrect: false, text: "Sim, misto." },
        { letter: "D", isCorrect: true, text: "Não, a distribuição ocorre por difusão." }
      ],
      explanation: "Nematelmintos não possuem sistema circulatório."
    },
    {
      code: "NEMA0006",
      context: "Qual é o sistema nervoso dos nematelmintos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Difuso, como nos cnidários." },
        { letter: "B", isCorrect: true, text: "Ganglionar, com anel nervoso e cordões longitudinais." },
        { letter: "C", isCorrect: false, text: "Centralizado com cérebro e medula." },
        { letter: "D", isCorrect: false, text: "Ausente." }
      ],
      explanation: "Nematelmintos possuem sistema nervoso simples, mas organizado em cordões."
    },
    {
      code: "NEMA0007",
      context: "Qual é a forma de respiração dos nematelmintos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Respiração cutânea por difusão." },
        { letter: "B", isCorrect: false, text: "Respiração branquial." },
        { letter: "C", isCorrect: false, text: "Respiração pulmonar." },
        { letter: "D", isCorrect: false, text: "Respiração traqueal." }
      ],
      explanation: "Nematelmintos realizam trocas gasosas por difusão através da pele."
    },
    {
      code: "NEMA0008",
      context: "Como ocorre a reprodução dos nematelmintos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Somente assexuada por brotamento." },
        { letter: "B", isCorrect: false, text: "Somente por partenogênese." },
        { letter: "C", isCorrect: true, text: "Sexuada, com fecundação interna; geralmente dióicos." },
        { letter: "D", isCorrect: false, text: "Somente por regeneração." }
      ],
      explanation: "Nematelmintos apresentam reprodução sexuada, com indivíduos separados."
    },
    {
      code: "NEMA0009",
      context: "Qual doença é causada pelo Ascaris lumbricoides?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Ascaridíase." },
        { letter: "B", isCorrect: false, text: "Ancilostomíase." },
        { letter: "C", isCorrect: false, text: "Filariose." },
        { letter: "D", isCorrect: false, text: "Bicho-geográfico." }
      ],
      explanation: "Ascaris lumbricoides causa a verminose chamada ascaridíase."
    },
    {
      code: "NEMA0010",
      context: "Qual doença é causada pelo Ancylostoma duodenale?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Ascaridíase." },
        { letter: "B", isCorrect: true, text: "Ancilostomíase (amarelão)." },
        { letter: "C", isCorrect: false, text: "Filariose." },
        { letter: "D", isCorrect: false, text: "Bicho-geográfico." }
      ],
      explanation: "Ancylostoma duodenale causa a ancilostomíase, conhecida como amarelão."
    },
    {
      code: "NEMA0011",
      context: "Qual doença é causada pelo Wuchereria bancrofti?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Ascaridíase." },
        { letter: "B", isCorrect: false, text: "Ancilostomíase." },
        { letter: "C", isCorrect: true, text: "Filariose (elefantíase)." },
        { letter: "D", isCorrect: false, text: "Bicho-geográfico." }
      ],
      explanation: "Wuchereria bancrofti causa filariose, que pode evoluir para elefantíase."
    },
    {
      code: "NEMA0012",
      context: "Qual doença é causada pela larva migrans cutânea?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Ascaridíase." },
        { letter: "B", isCorrect: false, text: "Ancilostomíase." },
        { letter: "C", isCorrect: false, text: "Filariose." },
        { letter: "D", isCorrect: true, text: "Bicho-geográfico." }
      ],
      explanation: "Larva migrans cutânea provoca lesões serpiginosas na pele, chamadas bicho-geográfico."
    },
    {
      code: "NEMA0013",
      context: "Qual é a importância ecológica dos nematelmintos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Atuam como decompositores e parasitas, regulando populações de outros organismos." },
        { letter: "B", isCorrect: false, text: "São produtores primários nos ecossistemas aquáticos." },
        { letter: "C", isCorrect: false, text: "São polinizadores de plantas aquáticas." },
        { letter: "D", isCorrect: false, text: "São responsáveis pela fotossíntese nos oceanos." }
      ],
      explanation: "Nematelmintos têm papel ecológico importante como decompositores e parasitas, influenciando cadeias alimentares."
    },
    {
      code: "NEMA0014",
      context: "Qual é a importância médica dos nematelmintos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produzem antibióticos naturais usados em tratamentos." },
        { letter: "B", isCorrect: true, text: "São responsáveis por diversas doenças parasitárias humanas, como ascaridíase, ancilostomíase e filariose." },
        { letter: "C", isCorrect: false, text: "Atuam como vacinas naturais contra vírus." },
        { letter: "D", isCorrect: false, text: "São usados como polinizadores em ambientes terrestres." }
      ],
      explanation: "Nematelmintos parasitas causam doenças de grande impacto em saúde pública."
    },
    {
      code: "NEMA0015",
      context: "Qual é a importância econômica dos nematelmintos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "São utilizados na produção de fibras têxteis." },
        { letter: "B", isCorrect: false, text: "São usados como fonte de alimento humano." },
        { letter: "C", isCorrect: true, text: "Podem causar prejuízos na agricultura e pecuária, parasitando plantas e animais domésticos." },
        { letter: "D", isCorrect: false, text: "São fundamentais na produção de pérolas." }
      ],
      explanation: "Nematelmintos parasitas afetam plantações e animais, gerando perdas econômicas significativas."
    }
  ]
};

export const anelideosQuestions: IQuestion = {
  discipline: 'BIOLOGY',
  module: 'ANIMAL_KINGDOM',
  data: [
    {
      code: "ANEL0001",
      context: "Qual é a principal característica morfológica dos anelídeos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Corpo cilíndrico sem segmentação." },
        { letter: "B", isCorrect: true, text: "Corpo alongado e segmentado em metâmeros." },
        { letter: "C", isCorrect: false, text: "Corpo achatado dorsoventralmente." },
        { letter: "D", isCorrect: false, text: "Corpo com simetria radial." }
      ],
      explanation: "A metameria é a característica marcante dos anelídeos."
    },
    {
      code: "ANEL0002",
      context: "Os anelídeos são acelomados, pseudocelomados ou celomados?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Acelomados." },
        { letter: "B", isCorrect: false, text: "Pseudocelomados." },
        { letter: "C", isCorrect: true, text: "Celomados." },
        { letter: "D", isCorrect: false, text: "Não possuem classificação quanto ao celoma." }
      ],
      explanation: "Anelídeos possuem celoma verdadeiro, revestido por mesoderma."
    },
    {
      code: "ANEL0003",
      context: "Qual é a simetria corporal dos anelídeos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Simetria bilateral." },
        { letter: "B", isCorrect: false, text: "Simetria radial." },
        { letter: "C", isCorrect: false, text: "Assimétrica." },
        { letter: "D", isCorrect: false, text: "Pentarradial." }
      ],
      explanation: "Anelídeos apresentam simetria bilateral típica de animais complexos."
    },
    {
      code: "ANEL0004",
      context: "Qual é o tipo de tubo digestivo dos anelídeos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Incompleto, apenas boca." },
        { letter: "B", isCorrect: true, text: "Completo, com boca e ânus." },
        { letter: "C", isCorrect: false, text: "Incompleto, apenas ânus." },
        { letter: "D", isCorrect: false, text: "Não possuem tubo digestivo." }
      ],
      explanation: "O sistema digestivo dos anelídeos é completo."
    },
    {
      code: "ANEL0005",
      context: "Os anelídeos possuem sistema circulatório?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Sim, fechado." },
        { letter: "B", isCorrect: false, text: "Sim, aberto." },
        { letter: "C", isCorrect: false, text: "Sim, misto." },
        { letter: "D", isCorrect: false, text: "Não possuem sistema circulatório." }
      ],
      explanation: "Anelídeos possuem circulação fechada, com vasos sanguíneos."
    },
    {
      code: "ANEL0006",
      context: "Qual é o sistema excretor dos anelídeos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Protonefrídios." },
        { letter: "B", isCorrect: false, text: "Rins primitivos." },
        { letter: "C", isCorrect: true, text: "Metanefrídios." },
        { letter: "D", isCorrect: false, text: "Excreção apenas por difusão." }
      ],
      explanation: "Cada segmento dos anelídeos possui metanefrídios para excreção."
    },
    {
      code: "ANEL0007",
      context: "Qual classe inclui as minhocas?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Polychaeta." },
        { letter: "B", isCorrect: true, text: "Oligochaeta." },
        { letter: "C", isCorrect: false, text: "Hirudinea." },
        { letter: "D", isCorrect: false, text: "Nematoda." }
      ],
      explanation: "Minhocas pertencem à classe Oligochaeta."
    },
    {
      code: "ANEL0008",
      context: "Qual classe inclui as sanguessugas?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Polychaeta." },
        { letter: "B", isCorrect: false, text: "Oligochaeta." },
        { letter: "C", isCorrect: true, text: "Hirudinea." },
        { letter: "D", isCorrect: false, text: "Nematoda." }
      ],
      explanation: "Sanguessugas pertencem à classe Hirudinea."
    },
    {
      code: "ANEL0009",
      context: "Qual classe inclui os poliquetas marinhos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Polychaeta." },
        { letter: "B", isCorrect: false, text: "Oligochaeta." },
        { letter: "C", isCorrect: false, text: "Hirudinea." },
        { letter: "D", isCorrect: false, text: "Platyhelminthes." }
      ],
      explanation: "Polychaeta inclui vermes marinhos com muitas cerdas."
    },
    {
      code: "ANEL0010",
      context: "Qual é a importância ecológica das minhocas?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "São polinizadoras de plantas aquáticas." },
        { letter: "B", isCorrect: false, text: "São predadores de topo." },
        { letter: "C", isCorrect: false, text: "São produtores primários." },
        { letter: "D", isCorrect: true, text: "Ajudam na aeração e fertilização do solo." }
      ],
      explanation: "Minhocas melhoram a estrutura e fertilidade do solo."
    },
    {
      code: "ANEL0011",
      context: "Qual é a importância médica das sanguessugas?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produzem antibióticos naturais." },
        { letter: "B", isCorrect: true, text: "São usadas em medicina para estimular circulação sanguínea." },
        { letter: "C", isCorrect: false, text: "São usadas como fonte de alimento humano." },
        { letter: "D", isCorrect: false, text: "São polinizadoras de plantas terrestres." }
      ],
      explanation: "Sanguessugas são usadas em tratamentos médicos para melhorar circulação."
    },
    {
      code: "ANEL0012",
      context: "Qual é a importância econômica dos anelídeos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produzem fibras têxteis." },
        { letter: "B", isCorrect: false, text: "São usados como polinizadores." },
        { letter: "C", isCorrect: true, text: "São usados na pesca e na agricultura para melhorar o solo." },
        { letter: "D", isCorrect: false, text: "São usados na produção de pérolas." }
      ],
      explanation: "Minhocas são usadas como isca e para fertilização do solo."
    },
    {
      code: "ANEL0013",
      context: "Qual é o sistema nervoso dos anelídeos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Ganglionar, com cordões nervosos ventrais." },
        { letter: "B", isCorrect: false, text: "Difuso, como nos cnidários." },
        { letter: "C", isCorrect: false, text: "Centralizado com cérebro e medula espinhal." },
        { letter: "D", isCorrect: false, text: "Ausente." }
      ],
      explanation: "Os anelídeos possuem sistema nervoso ganglionar, com gânglios cerebrais e cordões nervosos ventrais."
    },
    {
      code: "ANEL0014",
      context: "Qual é a forma de respiração dos anelídeos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Respiração pulmonar." },
        { letter: "B", isCorrect: true, text: "Respiração cutânea por difusão, e em poliquetas também por brânquias." },
        { letter: "C", isCorrect: false, text: "Respiração traqueal." },
        { letter: "D", isCorrect: false, text: "Respiração exclusivamente por espiráculos." }
      ],
      explanation: "A maioria dos anelídeos realiza trocas gasosas pela pele; poliquetas possuem brânquias especializadas."
    },
    {
      code: "ANEL0015",
      context: "Qual é a importância ecológica dos anelídeos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "São produtores primários nos ecossistemas." },
        { letter: "B", isCorrect: false, text: "São polinizadores de plantas terrestres." },
        { letter: "C", isCorrect: true, text: "Contribuem para a fertilidade do solo, servem de alimento para outros animais e participam da cadeia trófica aquática." },
        { letter: "D", isCorrect: false, text: "São responsáveis pela formação de recifes marinhos." }
      ],
      explanation: "Minhocas melhoram a qualidade do solo e poliquetas participam da cadeia alimentar marinha."
    }
  ]
};

export const moluscosQuestions: IQuestion = {
  discipline: 'BIOLOGY',
  module: 'ANIMAL_KINGDOM',
  data: [
    {
      code: "MOLU0001",
      context: "Qual é a principal característica dos moluscos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Corpo mole, geralmente protegido por concha calcária." },
        { letter: "B", isCorrect: false, text: "Corpo segmentado em metâmeros." },
        { letter: "C", isCorrect: false, text: "Corpo com exoesqueleto quitinoso." },
        { letter: "D", isCorrect: false, text: "Corpo com simetria radial." }
      ],
      explanation: "Moluscos possuem corpo mole e muitos apresentam concha calcária externa."
    },
    {
      code: "MOLU0002",
      context: "Os moluscos são acelomados, pseudocelomados ou celomados?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Acelomados." },
        { letter: "B", isCorrect: false, text: "Pseudocelomados." },
        { letter: "C", isCorrect: true, text: "Celomados." },
        { letter: "D", isCorrect: false, text: "Não possuem classificação quanto ao celoma." }
      ],
      explanation: "Moluscos possuem celoma verdadeiro, revestido por mesoderma."
    },
    {
      code: "MOLU0003",
      context: "Qual é a simetria corporal dos moluscos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Simetria bilateral." },
        { letter: "B", isCorrect: false, text: "Simetria radial." },
        { letter: "C", isCorrect: false, text: "Assimétrica." },
        { letter: "D", isCorrect: false, text: "Pentarradial." }
      ],
      explanation: "Moluscos apresentam simetria bilateral."
    },
    {
      code: "MOLU0004",
      context: "Qual é a estrutura responsável pela locomoção nos moluscos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Tentáculos." },
        { letter: "B", isCorrect: true, text: "Pé muscular." },
        { letter: "C", isCorrect: false, text: "Concha." },
        { letter: "D", isCorrect: false, text: "Rádula." }
      ],
      explanation: "O pé muscular é usado para locomoção e fixação."
    },
    {
      code: "MOLU0005",
      context: "Qual é a função da rádula nos moluscos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Respiração." },
        { letter: "B", isCorrect: false, text: "Excreção." },
        { letter: "C", isCorrect: true, text: "Raspagem de alimentos." },
        { letter: "D", isCorrect: false, text: "Locomoção." }
      ],
      explanation: "A rádula é uma estrutura raspadora usada na alimentação."
    },
    {
      code: "MOLU0006",
      context: "Qual classe inclui os caracóis e lesmas?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Gastropoda." },
        { letter: "B", isCorrect: false, text: "Bivalvia." },
        { letter: "C", isCorrect: false, text: "Cephalopoda." },
        { letter: "D", isCorrect: false, text: "Polyplacophora." }
      ],
      explanation: "Gastropoda inclui caracóis e lesmas."
    },
    {
      code: "MOLU0007",
      context: "Qual classe inclui mexilhões e ostras?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Gastropoda." },
        { letter: "B", isCorrect: true, text: "Bivalvia." },
        { letter: "C", isCorrect: false, text: "Cephalopoda." },
        { letter: "D", isCorrect: false, text: "Scaphopoda." }
      ],
      explanation: "Bivalvia inclui moluscos com duas conchas articuladas."
    },
    {
      code: "MOLU0008",
      context: "Qual classe inclui polvos e lulas?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Gastropoda." },
        { letter: "B", isCorrect: false, text: "Bivalvia." },
        { letter: "C", isCorrect: true, text: "Cephalopoda." },
        { letter: "D", isCorrect: false, text: "Monoplacophora." }
      ],
      explanation: "Cephalopoda inclui polvos, lulas e sépias."
    },
    {
      code: "MOLU0009",
      context: "Qual é o sistema circulatório dos moluscos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Não possuem sistema circulatório." },
        { letter: "B", isCorrect: false, text: "Sempre fechado." },
        { letter: "C", isCorrect: false, text: "Sempre aberto." },
        { letter: "D", isCorrect: true, text: "Pode ser aberto (na maioria) ou fechado (nos cefalópodes)." }
      ],
      explanation: "Moluscos possuem circulação aberta, exceto cefalópodes que têm circulação fechada."
    },
    {
      code: "MOLU0010",
      context: "Qual é a importância ecológica dos moluscos bivalves?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Filtram a água, contribuindo para o equilíbrio dos ecossistemas aquáticos." },
        { letter: "B", isCorrect: false, text: "São produtores primários." },
        { letter: "C", isCorrect: false, text: "São polinizadores aquáticos." },
        { letter: "D", isCorrect: false, text: "São decompositores exclusivos." }
      ],
      explanation: "Bivalves filtram partículas da água, ajudando na qualidade ambiental."
    },
    {
      code: "MOLU0011",
      context: "Qual é a importância econômica dos moluscos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produzem fibras têxteis." },
        { letter: "B", isCorrect: false, text: "São usados como polinizadores." },
        { letter: "C", isCorrect: true, text: "São fonte de alimento, matéria-prima e usados na produção de pérolas." },
        { letter: "D", isCorrect: false, text: "São usados na produção de seda." }
      ],
      explanation: "Moluscos têm importância econômica na alimentação e na produção de pérolas."
    },
    {
      code: "MOLU0012",
      context: "Qual é a estrutura responsável pela secreção da concha nos moluscos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Pé muscular." },
        { letter: "B", isCorrect: true, text: "Manto." },
        { letter: "C", isCorrect: false, text: "Rádula." },
        { letter: "D", isCorrect: false, text: "Tentáculos." }
      ],
      explanation: "O manto secreta a concha calcária nos moluscos."
    },
    {
      code: "MOLU0013",
      context: "Qual é a importância dos cefalópodes para os ecossistemas marinhos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "São produtores primários nos oceanos." },
        { letter: "B", isCorrect: false, text: "São decompositores exclusivos." },
        { letter: "C", isCorrect: true, text: "São predadores importantes, controlando populações de peixes e crustáceos." },
        { letter: "D", isCorrect: false, text: "São responsáveis pela formação de recifes." }
      ],
      explanation: "Cefalópodes como polvos e lulas são predadores ativos e desempenham papel essencial no equilíbrio ecológico marinho."
    },
    {
      code: "MOLU0014",
      context: "Qual é a forma de respiração dos moluscos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Respiração cutânea por difusão." },
        { letter: "B", isCorrect: true, text: "Respiração branquial, realizada por ctenídios." },
        { letter: "C", isCorrect: false, text: "Respiração pulmonar em todos os grupos." },
        { letter: "D", isCorrect: false, text: "Respiração traqueal." }
      ],
      explanation: "Moluscos respiram por brânquias chamadas ctenídios; alguns gastrópodes terrestres possuem pulmão adaptado."
    },
    {
      code: "MOLU0015",
      context: "Qual é a importância econômica dos moluscos para os seres humanos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "São fonte de alimento, usados na pesca e na produção de pérolas." },
        { letter: "B", isCorrect: false, text: "São usados como polinizadores agrícolas." },
        { letter: "C", isCorrect: false, text: "São utilizados na produção de seda." },
        { letter: "D", isCorrect: false, text: "São fundamentais na produção de antibióticos naturais." }
      ],
      explanation: "Moluscos como ostras, mexilhões e lulas são consumidos como alimento e têm importância econômica na produção de pérolas."
    }
  ]
};

export const artropodesQuestions: IQuestion = {
  discipline: 'BIOLOGY',
  module: 'ANIMAL_KINGDOM',
  data: [
    {
      code: "ARTR0001",
      context: "Qual é a principal característica dos artrópodes?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Corpo mole e não segmentado." },
        { letter: "B", isCorrect: false, text: "Presença de concha calcária externa." },
        { letter: "C", isCorrect: true, text: "Corpo segmentado, apêndices articulados e exoesqueleto de quitina." },
        { letter: "D", isCorrect: false, text: "Corpo com simetria radial e tentáculos." }
      ],
      explanation: "Artrópodes têm corpo segmentado, exoesqueleto quitinoso e apêndices articulados."
    },
    {
      code: "ARTR0002",
      context: "Os artrópodes são acelomados, pseudocelomados ou celomados?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Acelomados." },
        { letter: "B", isCorrect: false, text: "Pseudocelomados." },
        { letter: "C", isCorrect: false, text: "Não possuem classificação quanto ao celoma." },
        { letter: "D", isCorrect: true, text: "Celomados." }
      ],
      explanation: "Artrópodes possuem celoma verdadeiro, embora reduzido em algumas espécies."
    },
    {
      code: "ARTR0003",
      context: "Qual é a simetria corporal dos artrópodes?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Simetria bilateral." },
        { letter: "B", isCorrect: false, text: "Simetria radial." },
        { letter: "C", isCorrect: false, text: "Assimétrica." },
        { letter: "D", isCorrect: false, text: "Pentarradial." }
      ],
      explanation: "Artrópodes apresentam simetria bilateral, como a maioria dos animais complexos."
    },
    {
      code: "ARTR0004",
      context: "Qual é o tipo de exoesqueleto dos artrópodes?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Calcário." },
        { letter: "B", isCorrect: true, text: "Quitina." },
        { letter: "C", isCorrect: false, text: "Colágeno." },
        { letter: "D", isCorrect: false, text: "Espongina." }
      ],
      explanation: "O exoesqueleto de quitina protege e dá sustentação ao corpo dos artrópodes."
    },
    {
      code: "ARTR0005",
      context: "Qual processo permite o crescimento dos artrópodes?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Metagênese." },
        { letter: "B", isCorrect: false, text: "Partenogênese." },
        { letter: "C", isCorrect: true, text: "Muda ou ecdise, troca do exoesqueleto." },
        { letter: "D", isCorrect: false, text: "Fragmentação." }
      ],
      explanation: "A ecdise é necessária porque o exoesqueleto não cresce com o animal."
    },
    {
      code: "ARTR0006",
      context: "Qual é o sistema circulatório dos artrópodes?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Fechado em todos os grupos." },
        { letter: "B", isCorrect: false, text: "Ausente." },
        { letter: "C", isCorrect: false, text: "Misto, com vasos e brânquias." },
        { letter: "D", isCorrect: true, text: "Aberto, com hemolinfa circulando em cavidades." }
      ],
      explanation: "A hemolinfa circula livremente em cavidades corporais, exceto em alguns insetos especializados."
    },
    {
      code: "ARTR0007",
      context: "Qual é a função das antenas nos artrópodes?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Percepção sensorial." },
        { letter: "B", isCorrect: false, text: "Respiração." },
        { letter: "C", isCorrect: false, text: "Locomoção." },
        { letter: "D", isCorrect: false, text: "Digestão." }
      ],
      explanation: "As antenas são órgãos sensoriais que captam estímulos do ambiente."
    },
    {
      code: "ARTR0008",
      context: "Qual classe inclui os insetos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Crustacea." },
        { letter: "B", isCorrect: true, text: "Insecta." },
        { letter: "C", isCorrect: false, text: "Arachnida." },
        { letter: "D", isCorrect: false, text: "Myriapoda." }
      ],
      explanation: "Insecta é a classe mais diversa dos artrópodes, com milhões de espécies."
    },
    {
      code: "ARTR0009",
      context: "Qual classe inclui os aracnídeos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Insecta." },
        { letter: "B", isCorrect: false, text: "Crustacea." },
        { letter: "C", isCorrect: true, text: "Arachnida." },
        { letter: "D", isCorrect: false, text: "Diplopoda." }
      ],
      explanation: "Arachnida inclui aranhas, escorpiões, carrapatos e ácaros."
    },
    {
      code: "ARTR0010",
      context: "Qual classe inclui os crustáceos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Crustacea." },
        { letter: "B", isCorrect: false, text: "Insecta." },
        { letter: "C", isCorrect: false, text: "Arachnida." },
        { letter: "D", isCorrect: false, text: "Chilopoda." }
      ],
      explanation: "Crustacea inclui camarões, caranguejos, lagostas e outros animais aquáticos."
    },
    {
      code: "ARTR0011",
      context: "Qual é a importância ecológica dos insetos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produzem oxigênio por fotossíntese." },
        { letter: "B", isCorrect: false, text: "São decompositores exclusivos." },
        { letter: "C", isCorrect: false, text: "São predadores de topo." },
        { letter: "D", isCorrect: true, text: "Polinizam plantas, reciclam matéria orgânica e servem de alimento para outros animais." }
      ],
      explanation: "Insetos desempenham papéis fundamentais na polinização e na cadeia alimentar."
    },
    {
      code: "ARTR0012",
      context: "Qual é a importância médica dos artrópodes?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produzem antibióticos naturais." },
        { letter: "B", isCorrect: true, text: "Podem ser vetores de doenças como dengue, malária e doença de Chagas." },
        { letter: "C", isCorrect: false, text: "São usados como vacinas naturais." },
        { letter: "D", isCorrect: false, text: "São usados na produção de hormônios humanos." }
      ],
      explanation: "Insetos como mosquitos e barbeiros transmitem doenças graves aos seres humanos."
    },
    {
      code: "ARTR0013",
      context: "Qual é a importância econômica dos artrópodes?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "São usados apenas como polinizadores aquáticos." },
        { letter: "B", isCorrect: false, text: "São responsáveis pela produção de oxigênio nos oceanos." },
        { letter: "C", isCorrect: true, text: "São utilizados na agricultura, na produção de mel, seda e como alimento." },
        { letter: "D", isCorrect: false, text: "São usados exclusivamente na medicina tradicional." }
      ],
      explanation: "Artrópodes como abelhas, bicho-da-seda e crustáceos têm grande valor econômico."
    },
    {
      code: "ARTR0014",
      context: "Qual é a principal forma de respiração dos insetos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Respiração traqueal, com entrada de ar por espiráculos." },
        { letter: "B", isCorrect: false, text: "Respiração cutânea por difusão." },
        { letter: "C", isCorrect: false, text: "Respiração branquial." },
        { letter: "D", isCorrect: false, text: "Respiração pulmonar com alvéolos." }
      ],
      explanation: "Insetos respiram por um sistema de traqueias que distribui o ar diretamente aos tecidos."
    },
    {
      code: "ARTR0015",
      context: "Qual é a diferença entre diplópodes e quilópodes?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Diplópodes têm corpo achatado e são predadores; quilópodes têm corpo cilíndrico e são herbívoros." },
        { letter: "B", isCorrect: true, text: "Diplópodes têm dois pares de pernas por segmento e são detritívoros; quilópodes têm um par por segmento e são predadores." },
        { letter: "C", isCorrect: false, text: "Ambos possuem asas e são voadores." },
        { letter: "D", isCorrect: false, text: "Quilópodes possuem concha calcária; diplópodes não." }
      ],
      explanation: "Diplópodes (como piolhos-de-cobra) são lentos e detritívoros; quilópodes (como lacraias) são rápidos e predadores."
    }
  ]
};

export const equinodermosQuestions: IQuestion = {
  discipline: 'BIOLOGY',
  module: 'ANIMAL_KINGDOM',
  data: [
    {
      code: "EQUI0001",
      context: "Qual é a principal característica dos equinodermos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Corpo segmentado com exoesqueleto de quitina." },
        { letter: "B", isCorrect: false, text: "Corpo mole com concha calcária." },
        { letter: "C", isCorrect: true, text: "Presença de simetria radial e sistema ambulacrário." },
        { letter: "D", isCorrect: false, text: "Presença de rádula e pé muscular." }
      ],
      explanation: "Equinodermos possuem simetria radial (na fase adulta) e sistema ambulacrário para locomoção e alimentação."
    },
    {
      code: "EQUI0002",
      context: "Os equinodermos são acelomados, pseudocelomados ou celomados?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Acelomados." },
        { letter: "B", isCorrect: false, text: "Pseudocelomados." },
        { letter: "C", isCorrect: false, text: "Não possuem classificação quanto ao celoma." },
        { letter: "D", isCorrect: true, text: "Celomados." }
      ],
      explanation: "Equinodermos possuem celoma verdadeiro, revestido por mesoderma."
    },
    {
      code: "EQUI0003",
      context: "Qual é a simetria corporal dos equinodermos adultos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Simetria bilateral." },
        { letter: "B", isCorrect: true, text: "Simetria radial." },
        { letter: "C", isCorrect: false, text: "Assimétrica." },
        { letter: "D", isCorrect: false, text: "Pentarradial apenas em larvas." }
      ],
      explanation: "Equinodermos adultos apresentam simetria radial, geralmente pentarradial."
    },
    {
      code: "EQUI0004",
      context: "Qual é o tipo de esqueleto dos equinodermos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Endoesqueleto calcário." },
        { letter: "B", isCorrect: false, text: "Exoesqueleto quitinoso." },
        { letter: "C", isCorrect: false, text: "Cartilagem flexível." },
        { letter: "D", isCorrect: false, text: "Espículas de sílica." }
      ],
      explanation: "O esqueleto interno dos equinodermos é formado por placas calcárias."
    },
    {
      code: "EQUI0005",
      context: "Qual estrutura é exclusiva dos equinodermos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Rádula." },
        { letter: "B", isCorrect: false, text: "Tentáculos." },
        { letter: "C", isCorrect: true, text: "Sistema ambulacrário." },
        { letter: "D", isCorrect: false, text: "Cerdas locomotoras." }
      ],
      explanation: "O sistema ambulacrário é exclusivo dos equinodermos e atua na locomoção, respiração e alimentação."
    },
    {
      code: "EQUI0006",
      context: "Qual é a forma de locomoção dos equinodermos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Pé muscular." },
        { letter: "B", isCorrect: false, text: "Cílios vibráteis." },
        { letter: "C", isCorrect: false, text: "Tentáculos retráteis." },
        { letter: "D", isCorrect: true, text: "Pés ambulacrários acionados por pressão hidráulica." }
      ],
      explanation: "Os pés ambulacrários funcionam por pressão de água, permitindo movimentação."
    },
    {
      code: "EQUI0007",
      context: "Qual é a forma de respiração dos equinodermos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Pulmões segmentados." },
        { letter: "B", isCorrect: true, text: "Trocas gasosas pelos pés ambulacrários e estruturas dérmicas." },
        { letter: "C", isCorrect: false, text: "Brânquias internas com alvéolos." },
        { letter: "D", isCorrect: false, text: "Traqueias com espiráculos." }
      ],
      explanation: "A respiração ocorre por difusão através dos pés ambulacrários e estruturas como papilas dérmicas."
    },
    {
      code: "EQUI0008",
      context: "Qual é o tipo de sistema circulatório dos equinodermos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Fechado com vasos sanguíneos." },
        { letter: "B", isCorrect: false, text: "Aberto com hemolinfa." },
        { letter: "C", isCorrect: true, text: "Ausente; a distribuição ocorre por difusão e sistema ambulacrário." },
        { letter: "D", isCorrect: false, text: "Misto com vasos e brânquias." }
      ],
      explanation: "Equinodermos não possuem sistema circulatório verdadeiro."
    },
    {
      code: "EQUI0009",
      context: "Qual é a forma de reprodução dos equinodermos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Sexuada, com fecundação externa." },
        { letter: "B", isCorrect: false, text: "Assexuada por brotamento." },
        { letter: "C", isCorrect: false, text: "Partenogênese obrigatória." },
        { letter: "D", isCorrect: false, text: "Clonagem por mitose." }
      ],
      explanation: "A maioria dos equinodermos realiza fecundação externa com desenvolvimento indireto."
    },
    {
      code: "EQUI0010",
      context: "Qual é a simetria corporal das larvas dos equinodermos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Radial." },
        { letter: "B", isCorrect: true, text: "Bilateral." },
        { letter: "C", isCorrect: false, text: "Pentarradial." },
        { letter: "D", isCorrect: false, text: "Assimétrica." }
      ],
      explanation: "As larvas dos equinodermos possuem simetria bilateral, diferente da fase adulta."
    },
    {
      code: "EQUI0011",
      context: "Qual é a importância ecológica dos equinodermos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "São produtores primários nos oceanos." },
        { letter: "B", isCorrect: false, text: "São polinizadores de plantas aquáticas." },
        { letter: "C", isCorrect: true, text: "Participam da cadeia alimentar e reciclam matéria orgânica." },
        { letter: "D", isCorrect: false, text: "São responsáveis pela formação de recifes." }
      ],
      explanation: "Equinodermos como estrelas-do-mar e ouriços ajudam na reciclagem de matéria orgânica."
    },
    {
      code: "EQUI0012",
      context: "Qual equinodermo é conhecido por sua capacidade de regeneração?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Ouriço-do-mar." },
        { letter: "B", isCorrect: false, text: "Pepino-do-mar." },
        { letter: "C", isCorrect: false, text: "Lírio-do-mar." },
        { letter: "D", isCorrect: true, text: "Estrela-do-mar." }
      ],
      explanation: "Estrelas-do-mar podem regenerar braços e até o corpo inteiro em alguns casos."
    },
    {
      code: "EQUI0013",
      context: "Qual é a importância econômica dos equinodermos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Algumas espécies são consumidas como alimento e usadas na pesquisa biomédica." },
        { letter: "B", isCorrect: false, text: "São usados na produção de seda e lã." },
        { letter: "C", isCorrect: false, text: "São amplamente utilizados como polinizadores agrícolas." },
        { letter: "D", isCorrect: false, text: "São domesticados como animais de estimação." }
      ],
      explanation: "Ouriços-do-mar e pepinos-do-mar são consumidos em várias culturas e usados em estudos científicos."
    },
    {
      code: "EQUI0014",
      context: "Qual equinodermo possui corpo alongado e libera substâncias pegajosas como defesa?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Estrela-do-mar." },
        { letter: "B", isCorrect: false, text: "Ouriço-do-mar." },
        { letter: "C", isCorrect: true, text: "Pepino-do-mar." },
        { letter: "D", isCorrect: false, text: "Lírio-do-mar." }
      ],
      explanation: "Pepinos-do-mar (holotúrias) podem ejetar parte de seus órgãos internos como mecanismo de defesa."
    },
    {
      code: "EQUI0015",
      context: "Qual das alternativas descreve corretamente o sistema digestório dos equinodermos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Ausente, com digestão exclusivamente extracelular." },
        { letter: "B", isCorrect: true, text: "Completo, com boca e ânus, embora varie entre os grupos." },
        { letter: "C", isCorrect: false, text: "Incompleto, com apenas uma abertura." },
        { letter: "D", isCorrect: false, text: "Somente intracelular, sem cavidade digestiva." }
      ],
      explanation: "A maioria dos equinodermos possui sistema digestório completo, embora algumas espécies tenham ânus reduzido ou ausente."
    }
  ]
};

export const cordadosPeixesQuestions: IQuestion = {
  discipline: 'BIOLOGY',
  module: 'ANIMAL_KINGDOM',
  data: [
    {
      code: "PEIX0001",
      context: "Qual é a principal característica dos peixes?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Animais aquáticos com respiração branquial e corpo adaptado ao nado." },
        { letter: "B", isCorrect: false, text: "Animais terrestres com respiração pulmonar." },
        { letter: "C", isCorrect: false, text: "Animais aquáticos com respiração cutânea." },
        { letter: "D", isCorrect: false, text: "Animais voadores com penas." }
      ],
      explanation: "Peixes são vertebrados aquáticos que respiram por brânquias e possuem nadadeiras."
    },
    {
      code: "PEIX0002",
      context: "Qual é o tipo de simetria corporal dos peixes?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Radial." },
        { letter: "B", isCorrect: false, text: "Assimétrica." },
        { letter: "C", isCorrect: true, text: "Bilateral." },
        { letter: "D", isCorrect: false, text: "Pentarradial." }
      ],
      explanation: "Peixes possuem simetria bilateral, como a maioria dos vertebrados."
    },
    {
      code: "PEIX0003",
      context: "Qual estrutura permite a flutuação dos peixes ósseos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Brânquias." },
        { letter: "B", isCorrect: true, text: "Bexiga natatória." },
        { letter: "C", isCorrect: false, text: "Linha lateral." },
        { letter: "D", isCorrect: false, text: "Nadadeira caudal." }
      ],
      explanation: "A bexiga natatória regula a densidade e permite a flutuação dos peixes ósseos."
    },
    {
      code: "PEIX0004",
      context: "Qual é a função das brânquias nos peixes?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Locomoção." },
        { letter: "B", isCorrect: false, text: "Digestão." },
        { letter: "C", isCorrect: false, text: "Excreção." },
        { letter: "D", isCorrect: true, text: "Respiração aquática por troca gasosa." }
      ],
      explanation: "Brânquias permitem a troca de gases entre o sangue e a água."
    },
    {
      code: "PEIX0005",
      context: "Qual é a principal diferença entre peixes cartilaginosos e ósseos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Peixes cartilaginosos possuem esqueleto de cartilagem; peixes ósseos possuem esqueleto de osso." },
        { letter: "B", isCorrect: false, text: "Peixes cartilaginosos têm pulmões; peixes ósseos têm brânquias." },
        { letter: "C", isCorrect: false, text: "Peixes cartilaginosos vivem em água doce; peixes ósseos em água salgada." },
        { letter: "D", isCorrect: false, text: "Peixes cartilaginosos possuem penas; peixes ósseos possuem escamas." }
      ],
      explanation: "A composição do esqueleto é a principal distinção entre os dois grupos."
    },
    {
      code: "PEIX0006",
      context: "Qual é a função da linha lateral nos peixes?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Respiração." },
        { letter: "B", isCorrect: false, text: "Digestão." },
        { letter: "C", isCorrect: true, text: "Percepção de movimentos e vibrações na água." },
        { letter: "D", isCorrect: false, text: "Excreção de amônia." }
      ],
      explanation: "A linha lateral é um sistema sensorial que detecta variações na água."
    },
    {
      code: "PEIX0007",
      context: "Qual é o tipo de circulação dos peixes?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Fechada e simples, com um único circuito." },
        { letter: "B", isCorrect: false, text: "Aberta e dupla." },
        { letter: "C", isCorrect: false, text: "Fechada e dupla." },
        { letter: "D", isCorrect: false, text: "Mista, com hemolinfa e sangue." }
      ],
      explanation: "O sangue circula em um único circuito: coração → brânquias → corpo → coração."
    },
    {
      code: "PEIX0008",
      context: "Como ocorre a excreção nos peixes?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Por pulmões e pele." },
        { letter: "B", isCorrect: true, text: "Por rins, eliminando amônia diretamente na água." },
        { letter: "C", isCorrect: false, text: "Por brânquias e intestino." },
        { letter: "D", isCorrect: false, text: "Por glândulas excretoras nas nadadeiras." }
      ],
      explanation: "Peixes excretam amônia pela urina e pelas brânquias."
    },
    {
      code: "PEIX0009",
      context: "Qual é a forma de reprodução dos peixes?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Por brotamento." },
        { letter: "B", isCorrect: false, text: "Por partenogênese obrigatória." },
        { letter: "C", isCorrect: false, text: "Por clonagem." },
        { letter: "D", isCorrect: true, text: "Sexuada, com fecundação externa ou interna." }
      ],
      explanation: "A maioria dos peixes realiza fecundação externa, mas há espécies com fecundação interna."
    },
    {
      code: "PEIX0010",
      context: "Qual grupo de peixes possui escamas placoides e ausência de bexiga natatória?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Peixes cartilaginosos (condrictes)." },
        { letter: "B", isCorrect: false, text: "Peixes ósseos (osteíctes)." },
        { letter: "C", isCorrect: false, text: "Peixes pulmonados." },
        { letter: "D", isCorrect: false, text: "Peixes agnatos." }
      ],
      explanation: "Tubarões e raias são condrictes, com escamas placoides e sem bexiga natatória."
    },
    {
      code: "PEIX0011",
      context: "Qual grupo de peixes não possui mandíbula?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Osteíctes." },
        { letter: "B", isCorrect: false, text: "Condrictes." },
        { letter: "C", isCorrect: true, text: "Agnatos." },
        { letter: "D", isCorrect: false, text: "Cefalópodes." }
      ],
      explanation: "Agnatos como lampreias e feiticeiras não possuem mandíbula."
    },
    {
      code: "PEIX0012",
      context: "Qual é a importância ecológica dos peixes?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "São produtores primários nos oceanos." },
        { letter: "B", isCorrect: true, text: "Participam da cadeia alimentar aquática e controlam populações de organismos." },
        { letter: "C", isCorrect: false, text: "São polinizadores de plantas aquáticas." },
        { letter: "D", isCorrect: false, text: "São decompositores exclusivos." }
      ],
      explanation: "Peixes são consumidores e predadores que mantêm o equilíbrio ecológico nos ambientes aquáticos."
    },
    {
      code: "PEIX0013",
      context: "Qual é a importância econômica dos peixes?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "São fonte de alimento, usados na pesca comercial e na aquicultura." },
        { letter: "B", isCorrect: false, text: "São usados como polinizadores agrícolas." },
        { letter: "C", isCorrect: false, text: "São utilizados na produção de seda." },
        { letter: "D", isCorrect: false, text: "São domesticados como animais de estimação em larga escala." }
      ],
      explanation: "Peixes têm grande valor econômico na alimentação humana e na indústria pesqueira."
    },
    {
      code: "PEIX0014",
      context: "Qual é a diferença entre agnatos e gnatostomados?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Agnatos possuem mandíbula e gnatostomados não." },
        { letter: "B", isCorrect: false, text: "Gnatostomados não possuem coluna vertebral." },
        { letter: "C", isCorrect: true, text: "Agnatos não possuem mandíbula; gnatostomados possuem mandíbula." },
        { letter: "D", isCorrect: false, text: "Agnatos possuem pulmões; gnatostomados possuem brânquias." }
      ],
      explanation: "A presença de mandíbula é a principal diferença entre esses dois grupos de peixes."
    },
    {
      code: "PEIX0015",
      context: "Qual é a função das nadadeiras nos peixes?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Respiração e excreção." },
        { letter: "B", isCorrect: false, text: "Digestão e circulação." },
        { letter: "C", isCorrect: false, text: "Reprodução e defesa." },
        { letter: "D", isCorrect: true, text: "Locomoção, equilíbrio e direção durante o nado." }
      ],
      explanation: "As nadadeiras permitem que os peixes se movimentem, mantenham estabilidade e mudem de direção na água."
    }
  ]
};

export const cordadosAnfibiosQuestions: IQuestion = {
  discipline: 'BIOLOGY',
  module: 'ANIMAL_KINGDOM',
  data: [
    {
      code: "ANFI0001",
      context: "Qual é a principal característica dos anfíbios?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Presença de escamas e respiração exclusivamente pulmonar." },
        { letter: "B", isCorrect: false, text: "Corpo segmentado com exoesqueleto quitinoso." },
        { letter: "C", isCorrect: true, text: "Dependência da água para reprodução e pele permeável." },
        { letter: "D", isCorrect: false, text: "Presença de penas e voo ativo." }
      ],
      explanation: "Anfíbios precisam da água para reprodução e possuem pele fina e úmida que permite trocas gasosas."
    },
    {
      code: "ANFI0002",
      context: "Qual é a simetria corporal dos anfíbios?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Simetria bilateral." },
        { letter: "B", isCorrect: false, text: "Simetria radial." },
        { letter: "C", isCorrect: false, text: "Pentarradial." },
        { letter: "D", isCorrect: false, text: "Assimétrica." }
      ],
      explanation: "Como todos os vertebrados, os anfíbios possuem simetria bilateral."
    },
    {
      code: "ANFI0003",
      context: "Qual é o tipo de respiração dos anfíbios adultos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Branquial exclusivamente." },
        { letter: "B", isCorrect: false, text: "Pulmonar exclusivamente." },
        { letter: "C", isCorrect: false, text: "Cutânea exclusivamente." },
        { letter: "D", isCorrect: true, text: "Pulmonar, cutânea e bucofaríngea." }
      ],
      explanation: "Anfíbios adultos respiram por pulmões, pele e cavidade bucofaríngea."
    },
    {
      code: "ANFI0004",
      context: "Qual é o tipo de circulação dos anfíbios?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Simples e fechada." },
        { letter: "B", isCorrect: true, text: "Dupla e incompleta." },
        { letter: "C", isCorrect: false, text: "Dupla e completa." },
        { letter: "D", isCorrect: false, text: "Aberta e mista." }
      ],
      explanation: "Anfíbios possuem circulação dupla e incompleta, com mistura parcial de sangue no coração."
    },
    {
      code: "ANFI0005",
      context: "Qual é a principal diferença entre a fase larval e adulta dos anfíbios?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "A larva possui asas e o adulto não." },
        { letter: "B", isCorrect: false, text: "A larva vive em terra e o adulto na água." },
        { letter: "C", isCorrect: true, text: "A larva é aquática e respira por brânquias; o adulto é terrestre e respira por pulmões e pele." },
        { letter: "D", isCorrect: false, text: "Ambas as fases possuem respiração pulmonar." }
      ],
      explanation: "A metamorfose transforma o girino aquático em adulto terrestre com pulmões."
    },
    {
      code: "ANFI0006",
      context: "Qual é a função da pele dos anfíbios?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Respiração e proteção." },
        { letter: "B", isCorrect: false, text: "Locomoção e digestão." },
        { letter: "C", isCorrect: false, text: "Reprodução e excreção." },
        { letter: "D", isCorrect: false, text: "Circulação e visão." }
      ],
      explanation: "A pele dos anfíbios é permeável e participa da respiração cutânea."
    },
    {
      code: "ANFI0007",
      context: "Qual é o tipo de excreção dos anfíbios?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Excreção de ácido úrico." },
        { letter: "B", isCorrect: false, text: "Excreção de amônia exclusivamente." },
        { letter: "C", isCorrect: true, text: "Excreção de ureia (ureotélicos)." },
        { letter: "D", isCorrect: false, text: "Excreção por difusão cutânea." }
      ],
      explanation: "Anfíbios excretam ureia, substância menos tóxica que a amônia."
    },
    {
      code: "ANFI0008",
      context: "Qual é a forma de reprodução dos anfíbios?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Assexuada por brotamento." },
        { letter: "B", isCorrect: false, text: "Partenogênese obrigatória." },
        { letter: "C", isCorrect: false, text: "Clonagem por mitose." },
        { letter: "D", isCorrect: true, text: "Sexuada, geralmente com fecundação externa." }
      ],
      explanation: "A maioria dos anfíbios realiza fecundação externa em ambiente aquático."
    },
    {
      code: "ANFI0009",
      context: "Qual é a importância ecológica dos anfíbios?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "São produtores primários em ambientes terrestres." },
        { letter: "B", isCorrect: true, text: "Controlam populações de insetos e servem de alimento para outros animais." },
        { letter: "C", isCorrect: false, text: "São polinizadores de plantas aquáticas." },
        { letter: "D", isCorrect: false, text: "São decompositores exclusivos." }
      ],
      explanation: "Anfíbios são predadores de insetos e presas de aves, répteis e mamíferos."
    },
    {
      code: "ANFI0010",
      context: "Qual é a importância médica dos anfíbios?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produzem hormônios humanos." },
        { letter: "B", isCorrect: false, text: "São usados como vacinas naturais." },
        { letter: "C", isCorrect: true, text: "Algumas espécies produzem substâncias com potencial farmacológico." },
        { letter: "D", isCorrect: false, text: "São usados na produção de seda." }
      ],
      explanation: "Secreções cutâneas de anfíbios têm propriedades antimicrobianas e analgésicas."
    },
    {
      code: "ANFI0011",
      context: "Qual é a importância econômica dos anfíbios?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "São usados em pesquisas científicas e controle biológico de pragas." },
        { letter: "B", isCorrect: false, text: "São domesticados como animais de estimação em larga escala." },
        { letter: "C", isCorrect: false, text: "São usados como polinizadores agrícolas." },
        { letter: "D", isCorrect: false, text: "São utilizados na produção de fibras têxteis." }
      ],
      explanation: "Anfíbios são importantes em estudos de biologia e no controle de insetos."
    },
    {
      code: "ANFI0012",
      context: "Quais são as principais ordens de anfíbios?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Reptilia, Aves e Mammalia." },
        { letter: "B", isCorrect: false, text: "Anura, Testudines e Crocodilia." },
        { letter: "C", isCorrect: false, text: "Urodela, Squamata e Anura." },
        { letter: "D", isCorrect: true, text: "Anura, Urodela e Gymnophiona." }
      ],
      explanation: "As ordens dos anfíbios incluem Anura (sapos e rãs), Urodela (salamandras) e Gymnophiona (cecílias)."
    },
    {
      code: "ANFI0013",
      context: "Qual é a importância dos anfíbios como bioindicadores?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Sua pele sensível reflete rapidamente alterações ambientais." },
        { letter: "B", isCorrect: false, text: "Eles são os únicos animais que produzem oxigênio." },
        { letter: "C", isCorrect: false, text: "São usados para medir a acidez do solo." },
        { letter: "D", isCorrect: false, text: "Indicam a presença de metais pesados por fluorescência." }
      ],
      explanation: "Anfíbios são sensíveis à poluição e mudanças ambientais, sendo excelentes bioindicadores."
    },
    {
      code: "ANFI0014",
      context: "Como ocorre o desenvolvimento dos anfíbios?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Direto, sem estágio larval." },
        { letter: "B", isCorrect: false, text: "Por brotamento e regeneração." },
        { letter: "C", isCorrect: true, text: "Indireto, com metamorfose do girino para adulto." },
        { letter: "D", isCorrect: false, text: "Por partenogênese facultativa." }
      ],
      explanation: "A maioria dos anfíbios passa por metamorfose, transformando-se de larva aquática em adulto terrestre."
    },
    {
      code: "ANFI0015",
      context: "Qual é a principal ameaça à sobrevivência dos anfíbios atualmente?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Predação por aves migratórias." },
        { letter: "B", isCorrect: true, text: "Destruição de habitats e poluição ambiental." },
        { letter: "C", isCorrect: false, text: "Competição com mamíferos aquáticos." },
        { letter: "D", isCorrect: false, text: "Falta de oxigênio atmosférico." }
      ],
      explanation: "A degradação ambiental e a poluição afetam diretamente os anfíbios, que dependem de ambientes úmidos e limpos."
    }
  ]
};

export const cordadosRepteisQuestions: IQuestion = {
  discipline: 'BIOLOGY',
  module: 'ANIMAL_KINGDOM',
  data: [
    {
      code: "REPT0001",
      context: "Qual é a principal característica dos répteis?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Pele fina e úmida com respiração cutânea." },
        { letter: "B", isCorrect: true, text: "Pele seca e queratinizada, com respiração pulmonar." },
        { letter: "C", isCorrect: false, text: "Presença de penas e voo ativo." },
        { letter: "D", isCorrect: false, text: "Corpo segmentado com exoesqueleto quitinoso." }
      ],
      explanation: "Répteis possuem pele impermeável e respiram exclusivamente por pulmões."
    },
    {
      code: "REPT0002",
      context: "Qual é a simetria corporal dos répteis?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Simetria bilateral." },
        { letter: "B", isCorrect: false, text: "Simetria radial." },
        { letter: "C", isCorrect: false, text: "Pentarradial." },
        { letter: "D", isCorrect: false, text: "Assimétrica." }
      ],
      explanation: "Como todos os vertebrados, os répteis possuem simetria bilateral."
    },
    {
      code: "REPT0003",
      context: "Qual é o tipo de respiração dos répteis?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Cutânea e branquial." },
        { letter: "B", isCorrect: false, text: "Branquial exclusivamente." },
        { letter: "C", isCorrect: true, text: "Pulmonar exclusivamente." },
        { letter: "D", isCorrect: false, text: "Pulmonar e cutânea." }
      ],
      explanation: "Répteis respiram exclusivamente por pulmões, mesmo os aquáticos."
    },
    {
      code: "REPT0004",
      context: "Qual é o tipo de circulação dos répteis?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Simples e fechada." },
        { letter: "B", isCorrect: true, text: "Dupla e incompleta (exceto crocodilos)." },
        { letter: "C", isCorrect: false, text: "Dupla e completa em todos os grupos." },
        { letter: "D", isCorrect: false, text: "Aberta e mista." }
      ],
      explanation: "Répteis possuem circulação dupla e incompleta, com exceção dos crocodilos que têm coração com quatro cavidades."
    },
    {
      code: "REPT0005",
      context: "Qual é a principal adaptação dos répteis ao ambiente terrestre?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Presença de brânquias." },
        { letter: "B", isCorrect: false, text: "Pele permeável e úmida." },
        { letter: "C", isCorrect: false, text: "Fecundação externa." },
        { letter: "D", isCorrect: true, text: "Ovo com casca e fecundação interna." }
      ],
      explanation: "O ovo com casca protege o embrião fora da água, permitindo reprodução terrestre."
    },
    {
      code: "REPT0006",
      context: "Qual é o tipo de excreção dos répteis?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Excreção de ácido úrico (uricotélicos)." },
        { letter: "B", isCorrect: false, text: "Excreção de ureia." },
        { letter: "C", isCorrect: false, text: "Excreção de amônia." },
        { letter: "D", isCorrect: false, text: "Excreção por difusão cutânea." }
      ],
      explanation: "Répteis excretam ácido úrico, economizando água, o que é vantajoso em ambientes secos."
    },
    {
      code: "REPT0007",
      context: "Quais são as principais ordens de répteis?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Anura, Urodela e Gymnophiona." },
        { letter: "B", isCorrect: false, text: "Squamata, Amphibia e Testudines." },
        { letter: "C", isCorrect: true, text: "Squamata, Testudines, Crocodilia e Rhynchocephalia." },
        { letter: "D", isCorrect: false, text: "Reptilia, Mammalia e Aves." }
      ],
      explanation: "As ordens incluem lagartos e serpentes (Squamata), tartarugas (Testudines), crocodilos (Crocodilia) e tuataras (Rhynchocephalia)."
    },
    {
      code: "REPT0008",
      context: "Qual é a importância ecológica dos répteis?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "São produtores primários em ambientes terrestres." },
        { letter: "B", isCorrect: true, text: "Controlam populações de presas e servem de alimento para outros animais." },
        { letter: "C", isCorrect: false, text: "São polinizadores de plantas aquáticas." },
        { letter: "D", isCorrect: false, text: "São decompositores exclusivos." }
      ],
      explanation: "Répteis são predadores e presas, mantendo o equilíbrio ecológico."
    },
    {
      code: "REPT0009",
      context: "Qual é a importância econômica dos répteis?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "São usados na produção de seda." },
        { letter: "B", isCorrect: false, text: "São domesticados como animais de estimação em larga escala." },
        { letter: "C", isCorrect: true, text: "São usados na alimentação, medicina tradicional e indústria de couro." },
        { letter: "D", isCorrect: false, text: "São usados como polinizadores agrícolas." }
      ],
      explanation: "Répteis como jacarés e serpentes têm valor econômico em diversos setores."
    },
    {
      code: "REPT0010",
      context: "Qual é a forma de reprodução dos répteis?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Assexuada por brotamento." },
        { letter: "B", isCorrect: false, text: "Fecundação externa com ovos gelatinosos." },
        { letter: "C", isCorrect: false, text: "Clonagem por mitose." },
        { letter: "D", isCorrect: true, text: "Sexuada, com fecundação interna e ovos com casca." }
      ],
      explanation: "A fecundação interna e o ovo com casca são adaptações à vida terrestre."
    },
    {
      code: "REPT0011",
      context: "Qual réptil é considerado um 'fóssil vivo'?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Tuatara (Rhynchocephalia)." },
        { letter: "B", isCorrect: false, text: "Lagarto." },
        { letter: "C", isCorrect: false, text: "Cobra." },
        { letter: "D", isCorrect: false, text: "Tartaruga." }
      ],
      explanation: "A tuatara é o único representante vivo da ordem Rhynchocephalia."
    },
    {
      code: "REPT0012",
      context: "Qual é a diferença entre serpentes e lagartos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Serpentes possuem patas e lagartos não." },
        { letter: "B", isCorrect: true, text: "Lagartos possuem membros e pálpebras móveis; serpentes não." },
        { letter: "C", isCorrect: false, text: "Lagartos são exclusivamente aquáticos; serpentes são exclusivamente terrestres." },
        { letter: "D", isCorrect: false, text: "Serpentes possuem escamas; lagartos não." }
      ],
      explanation: "Lagartos têm membros locomotores e pálpebras móveis, enquanto serpentes não possuem membros nem pálpebras."
    },
    {
      code: "REPT0013",
      context: "Qual é a importância dos répteis como bioindicadores?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Eles indicam a presença de metais pesados por fluorescência." },
        { letter: "B", isCorrect: false, text: "São usados para medir a acidez do solo." },
        { letter: "C", isCorrect: true, text: "Algumas espécies são sensíveis a alterações ambientais, refletindo mudanças no ecossistema." },
        { letter: "D", isCorrect: false, text: "São os únicos animais que produzem oxigênio." }
      ],
      explanation: "Répteis podem indicar desequilíbrios ambientais, especialmente em áreas úmidas e tropicais."
    },
    {
      code: "REPT0014",
      context: "Como ocorre o desenvolvimento dos répteis?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Por metamorfose aquática." },
        { letter: "B", isCorrect: false, text: "Por partenogênese obrigatória." },
        { letter: "C", isCorrect: false, text: "Por brotamento e regeneração." },
        { letter: "D", isCorrect: true, text: "Direto, sem fase larval." }
      ],
      explanation: "Répteis apresentam desenvolvimento direto, com o filhote nascendo semelhante ao adulto."
    },
    {
      code: "REPT0015",
      context: "Qual é a principal ameaça à sobrevivência dos répteis atualmente?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Destruição de habitats e tráfico de animais silvestres." },
        { letter: "B", isCorrect: false, text: "Predação por aves migratórias." },
        { letter: "C", isCorrect: false, text: "Falta de oxigênio atmosférico." },
        { letter: "D", isCorrect: false, text: "Competição com mamíferos aquáticos." }
      ],
      explanation: "A perda de habitat e o comércio ilegal são grandes ameaças à biodiversidade dos répteis."
    }
  ]
};

export const cordadosAvesQuestions: IQuestion = {
  discipline: 'BIOLOGY',
  module: 'ANIMAL_KINGDOM',
  data: [
    {
      code: "AVES0001",
      context: "Qual é a principal característica exclusiva das aves?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Presença de escamas e respiração branquial." },
        { letter: "B", isCorrect: false, text: "Pele úmida e permeável." },
        { letter: "C", isCorrect: true, text: "Corpo coberto por penas." },
        { letter: "D", isCorrect: false, text: "Presença de exoesqueleto quitinoso." }
      ],
      explanation: "As penas são exclusivas das aves e fundamentais para o voo e isolamento térmico."
    },
    {
      code: "AVES0002",
      context: "Qual é o tipo de respiração das aves?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Pulmonar com sacos aéreos." },
        { letter: "B", isCorrect: false, text: "Cutânea e branquial." },
        { letter: "C", isCorrect: false, text: "Pulmonar simples sem estruturas auxiliares." },
        { letter: "D", isCorrect: false, text: "Traqueal com espiráculos." }
      ],
      explanation: "As aves possuem pulmões e sacos aéreos que aumentam a eficiência respiratória durante o voo."
    },
    {
      code: "AVES0003",
      context: "Qual é o tipo de circulação das aves?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Simples e fechada." },
        { letter: "B", isCorrect: false, text: "Dupla e incompleta." },
        { letter: "C", isCorrect: false, text: "Aberta e mista." },
        { letter: "D", isCorrect: true, text: "Dupla e completa." }
      ],
      explanation: "Aves possuem coração com quatro cavidades e circulação dupla e completa, como os mamíferos."
    },
    {
      code: "AVES0004",
      context: "Qual é o tipo de excreção das aves?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Excreção de ureia." },
        { letter: "B", isCorrect: true, text: "Excreção de ácido úrico (uricotélicos)." },
        { letter: "C", isCorrect: false, text: "Excreção de amônia." },
        { letter: "D", isCorrect: false, text: "Excreção por difusão cutânea." }
      ],
      explanation: "Aves excretam ácido úrico, o que economiza água e é adaptativo para o voo."
    },
    {
      code: "AVES0005",
      context: "Qual é a principal adaptação das aves ao voo?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Presença de escamas e cauda longa." },
        { letter: "B", isCorrect: false, text: "Pele úmida e musculatura reduzida." },
        { letter: "C", isCorrect: true, text: "Penas, ossos pneumáticos e sacos aéreos." },
        { letter: "D", isCorrect: false, text: "Exoesqueleto rígido e pesado." }
      ],
      explanation: "Essas estruturas tornam o corpo leve e eficiente para o voo."
    },
    {
      code: "AVES0006",
      context: "Qual é a forma de reprodução das aves?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Sexuada, com fecundação interna e ovos com casca." },
        { letter: "B", isCorrect: false, text: "Fecundação externa com ovos gelatinosos." },
        { letter: "C", isCorrect: false, text: "Assexuada por brotamento." },
        { letter: "D", isCorrect: false, text: "Clonagem por mitose." }
      ],
      explanation: "A fecundação é interna e os ovos possuem casca calcária que protege o embrião."
    },
    {
      code: "AVES0007",
      context: "Qual é a função das penas nas aves?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Respiração e excreção." },
        { letter: "B", isCorrect: false, text: "Digestão e circulação." },
        { letter: "C", isCorrect: false, text: "Reprodução e defesa." },
        { letter: "D", isCorrect: true, text: "Isolamento térmico, voo e proteção." }
      ],
      explanation: "As penas ajudam na regulação térmica e são essenciais para o voo."
    },
    {
      code: "AVES0008",
      context: "Qual é a importância ecológica das aves?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "São produtores primários em ambientes terrestres." },
        { letter: "B", isCorrect: true, text: "Polinizam plantas, dispersam sementes e controlam populações de insetos." },
        { letter: "C", isCorrect: false, text: "São decompositores exclusivos." },
        { letter: "D", isCorrect: false, text: "São os únicos animais que produzem oxigênio." }
      ],
      explanation: "Aves têm papel fundamental na manutenção dos ecossistemas."
    },
    {
      code: "AVES0009",
      context: "Qual é a importância econômica das aves?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "São usadas na produção de seda." },
        { letter: "B", isCorrect: false, text: "São domesticadas exclusivamente como animais de estimação." },
        { letter: "C", isCorrect: true, text: "São usadas na alimentação, produção de ovos, penas e controle biológico." },
        { letter: "D", isCorrect: false, text: "São utilizadas na produção de fibras vegetais." }
      ],
      explanation: "Aves como galinhas, patos e codornas têm grande valor econômico."
    },
    {
      code: "AVES0010",
      context: "Qual é a estrutura óssea que auxilia no voo das aves?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Quilha (carena)." },
        { letter: "B", isCorrect: false, text: "Cresta neural." },
        { letter: "C", isCorrect: false, text: "Espinha bífida." },
        { letter: "D", isCorrect: false, text: "Tíbia alongada." }
      ],
      explanation: "A quilha é uma projeção do esterno onde se fixam os músculos do voo."
    },
    {
      code: "AVES0011",
      context: "Qual é a diferença entre aves voadoras e não voadoras?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "As voadoras têm escamas; as não voadoras têm penas." },
        { letter: "B", isCorrect: false, text: "As voadoras possuem pulmões; as não voadoras respiram por brânquias." },
        { letter: "C", isCorrect: false, text: "As voadoras têm patas; as não voadoras não." },
        { letter: "D", isCorrect: true, text: "As voadoras possuem ossos pneumáticos e quilha desenvolvida; as não voadoras não." }
      ],
      explanation: "Aves não voadoras como emas e avestruzes têm ossos densos e ausência de quilha."
    },
    {
      code: "AVES0012",
      context: "Qual é a classe taxonômica das aves?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Reptilia." },
        { letter: "B", isCorrect: true, text: "Aves." },
        { letter: "C", isCorrect: false, text: "Mammalia." },
        { letter: "D", isCorrect: false, text: "Amphibia." }
      ],
      explanation: "Aves pertencem à classe Aves, dentro do filo dos cordados."
    },
    {
      code: "AVES0013",
      context: "Qual é a importância das aves como bioindicadores?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Indicam a presença de metais pesados por fluorescência." },
        { letter: "B", isCorrect: false, text: "São usadas para medir a acidez do solo." },
        { letter: "C", isCorrect: true, text: "São sensíveis a alterações ambientais, refletindo mudanças nos ecossistemas." },
        { letter: "D", isCorrect: false, text: "Produzem oxigênio por fotossíntese." }
      ],
      explanation: "Aves são excelentes bioindicadores devido à sua sensibilidade a poluição, desmatamento e mudanças climáticas."
    },
    {
      code: "AVES0014",
      context: "Como ocorre o desenvolvimento das aves?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Por metamorfose aquática." },
        { letter: "B", isCorrect: false, text: "Por partenogênese obrigatória." },
        { letter: "C", isCorrect: false, text: "Por brotamento e regeneração." },
        { letter: "D", isCorrect: true, text: "Desenvolvimento direto, com filhotes semelhantes aos adultos." }
      ],
      explanation: "As aves apresentam desenvolvimento direto, sem fase larval, e os filhotes nascem com forma semelhante à dos adultos."
    },
    {
      code: "AVES0015",
      context: "Qual é a principal ameaça à sobrevivência das aves atualmente?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Destruição de habitats, poluição e mudanças climáticas." },
        { letter: "B", isCorrect: false, text: "Falta de oxigênio atmosférico." },
        { letter: "C", isCorrect: false, text: "Predação por mamíferos aquáticos." },
        { letter: "D", isCorrect: false, text: "Competição com répteis voadores." }
      ],
      explanation: "A degradação ambiental e as mudanças climáticas afetam diretamente a sobrevivência de diversas espécies de aves."
    }
  ]
};

export const cordadosMamiferosQuestions: IQuestion = {
  discipline: 'BIOLOGY',
  module: 'ANIMAL_KINGDOM',
  data: [
    {
      code: "MAMI0001",
      context: "Qual é a principal característica exclusiva dos mamíferos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Presença de penas e voo ativo." },
        { letter: "B", isCorrect: false, text: "Pele úmida e permeável." },
        { letter: "C", isCorrect: true, text: "Presença de glândulas mamárias." },
        { letter: "D", isCorrect: false, text: "Respiração branquial." }
      ],
      explanation: "Mamíferos possuem glândulas mamárias que produzem leite para alimentar os filhotes."
    },
    {
      code: "MAMI0002",
      context: "Qual é o tipo de respiração dos mamíferos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Pulmonar exclusivamente." },
        { letter: "B", isCorrect: false, text: "Cutânea e branquial." },
        { letter: "C", isCorrect: false, text: "Pulmonar e traqueal." },
        { letter: "D", isCorrect: false, text: "Branquial exclusivamente." }
      ],
      explanation: "Todos os mamíferos respiram exclusivamente por pulmões, mesmo os aquáticos."
    },
    {
      code: "MAMI0003",
      context: "Qual é o tipo de circulação dos mamíferos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Simples e fechada." },
        { letter: "B", isCorrect: false, text: "Dupla e incompleta." },
        { letter: "C", isCorrect: false, text: "Aberta e mista." },
        { letter: "D", isCorrect: true, text: "Dupla e completa." }
      ],
      explanation: "Mamíferos possuem coração com quatro cavidades e circulação dupla e completa."
    },
    {
      code: "MAMI0004",
      context: "Qual é o tipo de excreção dos mamíferos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Excreção de ácido úrico." },
        { letter: "B", isCorrect: true, text: "Excreção de ureia (ureotélicos)." },
        { letter: "C", isCorrect: false, text: "Excreção de amônia." },
        { letter: "D", isCorrect: false, text: "Excreção por difusão cutânea." }
      ],
      explanation: "Mamíferos excretam ureia, substância menos tóxica e solúvel em água."
    },
    {
      code: "MAMI0005",
      context: "Qual é a principal característica da pele dos mamíferos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Coberta por escamas." },
        { letter: "B", isCorrect: false, text: "Coberta por penas." },
        { letter: "C", isCorrect: true, text: "Coberta por pelos e rica em glândulas." },
        { letter: "D", isCorrect: false, text: "Coberta por cutícula quitinosa." }
      ],
      explanation: "A pele dos mamíferos possui pelos e glândulas sudoríparas, sebáceas e mamárias."
    },
    {
      code: "MAMI0006",
      context: "Qual é a forma de reprodução dos mamíferos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Sexuada, com fecundação interna e desenvolvimento geralmente interno." },
        { letter: "B", isCorrect: false, text: "Fecundação externa com ovos gelatinosos." },
        { letter: "C", isCorrect: false, text: "Assexuada por brotamento." },
        { letter: "D", isCorrect: false, text: "Clonagem por mitose." }
      ],
      explanation: "Mamíferos têm fecundação interna e a maioria apresenta desenvolvimento dentro do útero."
    },
    {
      code: "MAMI0007",
      context: "Quais são os três grupos principais de mamíferos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Aves, répteis e anfíbios." },
        { letter: "B", isCorrect: false, text: "Marsupiais, monotremados e crustáceos." },
        { letter: "C", isCorrect: false, text: "Primatas, roedores e cetáceos." },
        { letter: "D", isCorrect: true, text: "Monotremados, marsupiais e placentários." }
      ],
      explanation: "Esses grupos se diferenciam pelo modo de desenvolvimento embrionário."
    },
    {
      code: "MAMI0008",
      context: "Qual mamífero é ovíparo?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Canguru." },
        { letter: "B", isCorrect: true, text: "Ornitorrinco." },
        { letter: "C", isCorrect: false, text: "Gato." },
        { letter: "D", isCorrect: false, text: "Tamanduá." }
      ],
      explanation: "O ornitorrinco é um monotremado que põe ovos, diferentemente da maioria dos mamíferos."
    },
    {
      code: "MAMI0009",
      context: "Qual é a importância ecológica dos mamíferos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "São produtores primários em ambientes terrestres." },
        { letter: "B", isCorrect: false, text: "São polinizadores exclusivos." },
        { letter: "C", isCorrect: true, text: "Participam de diversas cadeias alimentares como predadores, presas e dispersores de sementes." },
        { letter: "D", isCorrect: false, text: "São decompositores obrigatórios." }
      ],
      explanation: "Mamíferos têm papéis variados nos ecossistemas, influenciando a biodiversidade."
    },
    {
      code: "MAMI0010",
      context: "Qual é a importância econômica dos mamíferos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "São usados exclusivamente como animais de estimação." },
        { letter: "B", isCorrect: false, text: "São usados na produção de seda." },
        { letter: "C", isCorrect: false, text: "São utilizados apenas como polinizadores." },
        { letter: "D", isCorrect: true, text: "São usados na alimentação, produção de leite, couro, lã e pesquisa científica." }
      ],
      explanation: "Mamíferos como vacas, ovelhas e porcos têm grande valor econômico."
    },
    {
      code: "MAMI0011",
      context: "Qual é a principal característica dos marsupiais?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Desenvolvimento do filhote ocorre em bolsa externa (marsúpio)." },
        { letter: "B", isCorrect: false, text: "São ovíparos e vivem exclusivamente na água." },
        { letter: "C", isCorrect: false, text: "Possuem penas e bico córneo." },
        { letter: "D", isCorrect: false, text: "Realizam metamorfose aquática." }
      ],
      explanation: "Marsupiais como o canguru possuem marsúpio para completar o desenvolvimento do filhote."
    },
    {
      code: "MAMI0012",
      context: "Qual é a função dos pelos nos mamíferos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Respiração e excreção." },
        { letter: "B", isCorrect: false, text: "Digestão e locomoção." },
        { letter: "C", isCorrect: true, text: "Isolamento térmico e proteção." },
        { letter: "D", isCorrect: false, text: "Reprodução e defesa química." }
      ],
      explanation: "Os pelos ajudam a manter a temperatura corporal e protegem contra agentes externos."
    },
    {
      code: "MAMI0013",
      context: "Qual é a importância dos mamíferos como bioindicadores?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produzem oxigênio por fotossíntese." },
        { letter: "B", isCorrect: true, text: "Algumas espécies são sensíveis a alterações ambientais, refletindo mudanças nos ecossistemas." },
        { letter: "C", isCorrect: false, text: "Indicam a presença de metais pesados por fluorescência." },
        { letter: "D", isCorrect: false, text: "São usados para medir a acidez do solo." }
      ],
      explanation: "Mamíferos como morcegos e lontras podem indicar desequilíbrios ambientais."
    },
    {
      code: "MAMI0014",
      context: "Como ocorre o desenvolvimento dos mamíferos placentários?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Por metamorfose aquática." },
        { letter: "B", isCorrect: false, text: "Por partenogênese obrigatória." },
        { letter: "C", isCorrect: false, text: "Por brotamento e regeneração." },
        { letter: "D", isCorrect: true, text: "Desenvolvimento interno no útero, com placenta nutrindo o embrião." }
      ],
      explanation: "Nos mamíferos placentários, o embrião se desenvolve no útero, nutrido pela placenta."
    },
    {
      code: "MAMI0015",
      context: "Qual é a principal ameaça à sobrevivência dos mamíferos atualmente?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Destruição de habitats, poluição e caça ilegal." },
        { letter: "B", isCorrect: false, text: "Falta de oxigênio atmosférico." },
        { letter: "C", isCorrect: false, text: "Competição com aves migratórias." },
        { letter: "D", isCorrect: false, text: "Predação por répteis aquáticos." }
      ],
      explanation: "A perda de habitat e a ação humana são os principais fatores que ameaçam os mamíferos."
    }
  ]
};

export const getAnimalKingdomQuestions = (topic:ANIMAL_KINGDOM_TOPICS): IQuestion | undefined => {
  if(topic.includes('porifera')) return poriferosQuestions;
  if(topic.includes('cnidaria')) return cnidariosQuestions;
  if(topic.includes('platyhelminthes')) return platelmintosQuestions;
  if(topic.includes('nematoda')) return nematelmintosQuestions;
  if(topic.includes('annelida')) return anelideosQuestions;
  if(topic.includes('mollusca')) return moluscosQuestions;
  if(topic.includes('arthropoda')) return artropodesQuestions;
  if(topic.includes('echinodermata')) return equinodermosQuestions;
  if(topic.includes('amphibia')) return cordadosAnfibiosQuestions;
  if(topic.includes('chondrichthyes') || topic.includes('osteichthyes')) return cordadosPeixesQuestions;
  if(topic.includes('reptilia')) return cordadosRepteisQuestions;
  if(topic.includes('aves')) return cordadosAvesQuestions;
  if(topic.includes('mammalia')) return cordadosMamiferosQuestions;
  return undefined;
}