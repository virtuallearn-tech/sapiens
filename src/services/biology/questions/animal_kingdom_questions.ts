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
    },
    {
      code: "PORI0016",
      context: "Qual é o habitat predominante dos poríferos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Ambientes aquáticos, principalmente marinhos." },
        { letter: "B", isCorrect: false, text: "Ambientes terrestres úmidos." },
        { letter: "C", isCorrect: false, text: "Água doce apenas." },
        { letter: "D", isCorrect: false, text: "Áreas de solo arenoso." }
      ],
      explanation: "A maioria das espécies vive no ambiente marinho, fixas em substratos rochosos."
    },
    {
      code: "PORI0017",
      context: "Qual é o nome da cavidade interna do corpo das esponjas?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Mesóglia." },
        { letter: "B", isCorrect: true, text: "Espongiocele." },
        { letter: "C", isCorrect: false, text: "Blastóporo." },
        { letter: "D", isCorrect: false, text: "Gastrocele." }
      ],
      explanation: "A espongiocele é a cavidade central por onde circula a água."
    },
    {
      code: "PORI0018",
      context: "O que são espículas nos poríferos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Células responsáveis pela digestão." },
        { letter: "B", isCorrect: false, text: "Canais internos de circulação de água." },
        { letter: "C", isCorrect: true, text: "Estruturas esqueléticas de sustentação feitas de sílica ou calcário." },
        { letter: "D", isCorrect: false, text: "Fragmentos de coanócitos endurecidos." }
      ],
      explanation: "Espículas dão sustentação e proteção ao corpo das esponjas."
    },
    {
      code: "PORI0019",
      context: "Qual é a principal forma de locomoção das esponjas adultas?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Rastejamento com pseudópodes." },
        { letter: "B", isCorrect: false, text: "Movimento ciliar." },
        { letter: "C", isCorrect: false, text: "Natação por contrações musculares." },
        { letter: "D", isCorrect: true, text: "São sésseis, permanecendo fixas ao substrato." }
      ],
      explanation: "As esponjas adultas são fixas; apenas suas larvas são móveis."
    },
    {
      code: "PORI0020",
      context: "Qual tipo de célula reveste externamente o corpo dos poríferos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Pinacócitos." },
        { letter: "B", isCorrect: false, text: "Amebócitos." },
        { letter: "C", isCorrect: false, text: "Coanócitos." },
        { letter: "D", isCorrect: false, text: "Porócitos." }
      ],
      explanation: "Os pinacócitos formam a camada externa, semelhante a um epitélio simples."
    },
    {
      code: "PORI0021",
      context: "Qual é a função das gêmulas nas esponjas?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Facilitar a dispersão de gametas." },
        { letter: "B", isCorrect: false, text: "Capturar partículas alimentares." },
        { letter: "C", isCorrect: true, text: "Permitir resistência a condições adversas e regeneração posterior." },
        { letter: "D", isCorrect: false, text: "Atuar como estruturas de defesa." }
      ],
      explanation: "Gêmulas são formas de resistência que possibilitam regeneração após períodos desfavoráveis."
    },
    {
      code: "PORI0022",
      context: "Qual é a camada gelatinosa entre o pinacoderme e o coanoderme?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Mesoderme." },
        { letter: "B", isCorrect: true, text: "Mesóglia (ou mesoílo)." },
        { letter: "C", isCorrect: false, text: "Ectoderme." },
        { letter: "D", isCorrect: false, text: "Endoderme." }
      ],
      explanation: "A mesóglia contém amebócitos e é o espaço onde ocorrem transportes internos."
    },
    {
      code: "PORI0023",
      context: "Qual é a função dos porócitos nas esponjas?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Digestão intracelular do alimento." },
        { letter: "B", isCorrect: false, text: "Síntese de espongina." },
        { letter: "C", isCorrect: false, text: "Produção de gametas." },
        { letter: "D", isCorrect: true, text: "Formam os poros de entrada de água no corpo da esponja." }
      ],
      explanation: "Porócitos são células tubulares que permitem a passagem de água para o interior."
    },
    {
      code: "PORI0024",
      context: "Por que os poríferos são considerados organismos filtradores?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Porque capturam partículas alimentares suspensas na água que flui através de seu corpo." },
        { letter: "B", isCorrect: false, text: "Porque filtram nutrientes dissolvidos no substrato." },
        { letter: "C", isCorrect: false, text: "Porque absorvem diretamente nutrientes da água sem corrente interna." },
        { letter: "D", isCorrect: false, text: "Porque utilizam espículas para capturar alimento." }
      ],
      explanation: "O fluxo contínuo de água possibilita a filtração e a nutrição das esponjas."
    },
    {
      code: "PORI0025",
      context: "Como ocorre a regeneração nos poríferos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Por mitose de coanócitos apenas." },
        { letter: "B", isCorrect: false, text: "Apenas a partir de gêmulas reconstituídas." },
        { letter: "C", isCorrect: true, text: "A partir da totipotência das células amebóides." },
        { letter: "D", isCorrect: false, text: "Pelo brotamento controlado por hormônios." }
      ],
      explanation: "Amebócitos podem se diferenciar em diversos tipos celulares, regenerando tecidos."
    },
    {
      code: "PORI0016",
      context: "Qual é a principal forma de locomoção das larvas dos poríferos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Movimentam-se por meio de flagelos." },
        { letter: "B", isCorrect: false, text: "Deslocam-se por pseudópodes." },
        { letter: "C", isCorrect: false, text: "Utilizam cílios curtos e coordenados." },
        { letter: "D", isCorrect: false, text: "São imóveis durante todo o ciclo de vida." }
      ],
      explanation: "As larvas dos poríferos são móveis, impulsionadas por flagelos, e fixam-se depois no substrato."
    },
    {
      code: "PORI0017",
      context: "Por que os poríferos são considerados animais filtradores?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Porque ingerem presas ativamente." },
        { letter: "B", isCorrect: false, text: "Porque se alimentam apenas de detritos." },
        { letter: "C", isCorrect: true, text: "Porque capturam partículas alimentares suspensas na água que atravessa o corpo." },
        { letter: "D", isCorrect: false, text: "Porque realizam fotossíntese." }
      ],
      explanation: "O fluxo de água permite a captura de partículas alimentares microscópicas."
    },
    {
      code: "PORI0018",
      context: "Qual é o habitat predominante dos poríferos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Terrestre úmido." },
        { letter: "B", isCorrect: false, text: "Água doce exclusivamente." },
        { letter: "C", isCorrect: false, text: "Ambiente de maré e praias arenosas." },
        { letter: "D", isCorrect: true, text: "Ambientes aquáticos, principalmente marinhos." }
      ],
      explanation: "A grande maioria das espécies vive em mares e oceanos, fixas em substratos."
    },
    {
      code: "PORI0019",
      context: "Como os poríferos obtêm oxigênio?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Por meio de hemoglobina presente nos coanócitos." },
        { letter: "B", isCorrect: true, text: "Por difusão direta da água que circula através de seus poros." },
        { letter: "C", isCorrect: false, text: "Por respiração cutânea com vasos capilares." },
        { letter: "D", isCorrect: false, text: "Através de pulmões primitivos." }
      ],
      explanation: "O oxigênio dissolve-se na água e entra por difusão nas células do corpo."
    },
    {
      code: "PORI0020",
      context: "O que é o espongiocele nos poríferos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "É a cavidade central por onde circula a água antes de sair pelo ósculo." },
        { letter: "B", isCorrect: false, text: "É o canal por onde entram os gametas." },
        { letter: "C", isCorrect: false, text: "É o nome dado à camada externa de pinacócitos." },
        { letter: "D", isCorrect: false, text: "É a estrutura responsável pela reprodução assexuada." }
      ],
      explanation: "O espongiocele é a cavidade interna que conduz o fluxo de água."
    },
    {
      code: "PORI0021",
      context: "Como é classificado o nível de organização dos poríferos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Tecidual." },
        { letter: "B", isCorrect: false, text: "Órgânico." },
        { letter: "C", isCorrect: true, text: "Celular, pois não formam tecidos verdadeiros." },
        { letter: "D", isCorrect: false, text: "Sistêmico." }
      ],
      explanation: "Poríferos possuem apenas organização celular, sem tecidos ou órgãos definidos."
    },
    {
      code: "PORI0022",
      context: "Que tipo de simbiose pode ocorrer entre poríferos e algas unicelulares?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Comensalismo obrigatório." },
        { letter: "B", isCorrect: false, text: "Parasitismo facultativo." },
        { letter: "C", isCorrect: false, text: "Predação interespecífica." },
        { letter: "D", isCorrect: true, text: "Mutualismo, pois as algas fornecem oxigênio e recebem abrigo." }
      ],
      explanation: "Algumas esponjas abrigam algas simbióticas que realizam fotossíntese e trocam substâncias benéficas."
    },
    {
      code: "PORI0023",
      context: "Qual camada do corpo do porífero contém os coanócitos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Camada interna (coanoderme)." },
        { letter: "B", isCorrect: false, text: "Camada externa (pinacoderme)." },
        { letter: "C", isCorrect: false, text: "Mesóglia (camada gelatinosa intermediária)." },
        { letter: "D", isCorrect: false, text: "Espongiocele (cavidade central)." }
      ],
      explanation: "A coanoderme reveste a cavidade interna e contém as células flageladas (coanócitos)."
    },
    {
      code: "PORI0024",
      context: "O que ocorre quando um fragmento de esponja é separado do corpo principal?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "O fragmento morre rapidamente." },
        { letter: "B", isCorrect: false, text: "Forma uma larva móvel que retorna ao corpo principal." },
        { letter: "C", isCorrect: true, text: "Pode regenerar-se e formar um novo indivíduo." },
        { letter: "D", isCorrect: false, text: "Libera toxinas para evitar a regeneração." }
      ],
      explanation: "Os poríferos têm alta capacidade regenerativa devido à totipotência celular."
    },
    {
      code: "PORI0025",
      context: "Qual das opções representa corretamente a estrutura corporal básica dos poríferos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Endoderme, mesoderme e ectoderme." },
        { letter: "B", isCorrect: true, text: "Pinacoderme, mesóglia e coanoderme." },
        { letter: "C", isCorrect: false, text: "Epidermis, derme e hipoderme." },
        { letter: "D", isCorrect: false, text: "Cutícula, epiderme e intestino." }
      ],
      explanation: "Essas três camadas compõem a estrutura básica de uma esponja."
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
    },
    {
      code: "CNID0016",
      context: "Qual é o tipo de tecido presente nos cnidários?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Triblástico, com três folhetos embrionários." },
        { letter: "B", isCorrect: false, text: "Acelomado, sem tecidos verdadeiros." },
        { letter: "C", isCorrect: true, text: "Diblástico, com ectoderme e endoderme." },
        { letter: "D", isCorrect: false, text: "Pseudocelomado com mesoderme incompleta." }
      ],
      explanation: "Os cnidários são diblásticos e possuem mesogleia entre ectoderme e endoderme."
    },
    {
      code: "CNID0017",
      context: "O que é a mesogleia nos cnidários?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Camada de células musculares responsáveis pela locomoção." },
        { letter: "B", isCorrect: true, text: "Substância gelatinosa entre a ectoderme e a endoderme." },
        { letter: "C", isCorrect: false, text: "Tecido nervoso centralizado nas medusas." },
        { letter: "D", isCorrect: false, text: "Epiderme protetora que cobre o corpo do animal." }
      ],
      explanation: "A mesogleia atua como suporte estrutural e contribui para a flutuação."
    },
    {
      code: "CNID0018",
      context: "Como ocorre a excreção nos cnidários?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Por meio de nefrídios." },
        { letter: "B", isCorrect: false, text: "Por glândulas excretoras especializadas." },
        { letter: "C", isCorrect: false, text: "Por túbulos de Malpighi." },
        { letter: "D", isCorrect: true, text: "Por difusão direta através das células." }
      ],
      explanation: "A ausência de sistema excretor é compensada pela difusão de resíduos metabólicos para a água."
    },
    {
      code: "CNID0019",
      context: "Os cnidários são animais exclusivamente aquáticos. Onde vivem predominantemente?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Em ambientes marinhos, embora algumas espécies vivam em água doce." },
        { letter: "B", isCorrect: false, text: "Em ambientes terrestres úmidos." },
        { letter: "C", isCorrect: false, text: "Somente em rios e lagos de água doce." },
        { letter: "D", isCorrect: false, text: "No solo, em simbiose com plantas." }
      ],
      explanation: "A maioria é marinha, como águas-vivas e corais; Hydras são exceções de água doce."
    },
    {
      code: "CNID0020",
      context: "Qual é o tipo de sistema digestório dos cnidários?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Completo, com boca e ânus distintos." },
        { letter: "B", isCorrect: false, text: "Ausente, absorvendo nutrientes pela pele." },
        { letter: "C", isCorrect: true, text: "Incompleto, com uma única abertura para ingestão e eliminação." },
        { letter: "D", isCorrect: false, text: "Segmentado com múltiplas cavidades digestivas." }
      ],
      explanation: "A boca serve tanto para entrada de alimentos quanto para eliminação de resíduos."
    },
    {
      code: "CNID0021",
      context: "Qual é a principal forma de locomoção das medusas?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Movimento ciliar contínuo na superfície corporal." },
        { letter: "B", isCorrect: true, text: "Contrações rítmicas do corpo, propulsionando-se na água." },
        { letter: "C", isCorrect: false, text: "Movimento rastejante semelhante a vermes." },
        { letter: "D", isCorrect: false, text: "Nado ativo com nadadeiras musculares." }
      ],
      explanation: "As medusas se movimentam por contrações musculares da mesogleia, gerando propulsão."
    },
    {
      code: "CNID0022",
      context: "O que ocorre durante o fenômeno do branqueamento dos corais?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Expulsão das zooxantelas simbióticas devido ao estresse ambiental." },
        { letter: "B", isCorrect: false, text: "Produção de mais pigmentos protetores contra a luz solar." },
        { letter: "C", isCorrect: false, text: "Deposição de sais minerais para reforçar o esqueleto." },
        { letter: "D", isCorrect: false, text: "Aumento da densidade da mesogleia para flutuação." }
      ],
      explanation: "A perda das zooxantelas reduz a coloração e prejudica a sobrevivência dos corais."
    },
    {
      code: "CNID0023",
      context: "Qual é o papel ecológico das medusas nos ecossistemas marinhos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produzem oxigênio por fotossíntese." },
        { letter: "B", isCorrect: false, text: "São decompositoras de matéria orgânica." },
        { letter: "C", isCorrect: true, text: "Atuam como predadoras de zooplâncton e pequenas presas." },
        { letter: "D", isCorrect: false, text: "Fixam-se no substrato e filtram nutrientes da água." }
      ],
      explanation: "As medusas controlam populações de pequenos organismos, equilibrando cadeias alimentares."
    },
    {
      code: "CNID0024",
      context: "Qual é a estrutura que permite a fixação dos pólipos ao substrato?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Tentáculos retráteis." },
        { letter: "B", isCorrect: false, text: "Cnidócitos adesivos." },
        { letter: "C", isCorrect: false, text: "Disco oral ventral." },
        { letter: "D", isCorrect: true, text: "Disco pedal ou basal." }
      ],
      explanation: "O disco pedal fixa o pólipo a superfícies sólidas, permitindo estabilidade e alimentação eficiente."
    },
    {
      code: "CNID0025",
      context: "Em colônias de cnidários, como na caravela-portuguesa, o que ocorre entre os indivíduos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Todos os indivíduos são idênticos e desempenham a mesma função." },
        { letter: "B", isCorrect: true, text: "Há divisão de trabalho entre pólipos especializados (alimentação, defesa e reprodução)." },
        { letter: "C", isCorrect: false, text: "Cada indivíduo vive isoladamente, sem conexão física." },
        { letter: "D", isCorrect: false, text: "A colônia é formada por organismos de espécies diferentes." }
      ],
      explanation: "Nas colônias, há pólipos especializados interligados, formando organismos funcionais coletivos."
    },
    {
      code: "CNID0026",
      context: "Qual é o nome da larva típica dos cnidários?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Planária." },
        { letter: "B", isCorrect: false, text: "Trocofora." },
        { letter: "C", isCorrect: true, text: "Plânula." },
        { letter: "D", isCorrect: false, text: "Náuplio." }
      ],
      explanation: "A larva plânula é ciliada e livre-natante, dando origem ao pólipo após fixação."
    },
    {
      code: "CNID0027",
      context: "Como os cnidários realizam as trocas gasosas?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Por difusão direta através das células corporais." },
        { letter: "B", isCorrect: false, text: "Por brânquias especializadas na cavidade gastrovascular." },
        { letter: "C", isCorrect: false, text: "Por pulmões primitivos presentes na medusa." },
        { letter: "D", isCorrect: false, text: "Por circulação fechada com hemoglobina." }
      ],
      explanation: "Como são pequenos e vivem em meio aquático, a difusão é suficiente para trocas gasosas."
    },
    {
      code: "CNID0028",
      context: "O que caracteriza a digestão intracelular nos cnidários?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Ocorre apenas em organismos multicelulares complexos." },
        { letter: "B", isCorrect: false, text: "É realizada exclusivamente por enzimas secretadas na água." },
        { letter: "C", isCorrect: false, text: "Envolve a ação de glândulas digestivas externas." },
        { letter: "D", isCorrect: true, text: "As células gastrodermais fagocitam partículas e completam a digestão." }
      ],
      explanation: "Após a digestão extracelular, as células gastrodermais terminam o processo internamente."
    },
    {
      code: "CNID0029",
      context: "Qual é a principal função dos tentáculos nos cnidários?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Auxiliar na excreção de resíduos." },
        { letter: "B", isCorrect: true, text: "Capturar presas e conduzi-las à boca." },
        { letter: "C", isCorrect: false, text: "Produzir gametas durante a reprodução." },
        { letter: "D", isCorrect: false, text: "Realizar trocas gasosas com o ambiente." }
      ],
      explanation: "Os tentáculos contêm cnidócitos que paralisam as presas e as conduzem à boca."
    },
    {
      code: "CNID0030",
      context: "O que é a metagênese nos cnidários?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Alternância entre gerações sexuadas (medusas) e assexuadas (pólipos)." },
        { letter: "B", isCorrect: false, text: "Processo de regeneração após lesões." },
        { letter: "C", isCorrect: false, text: "Mudança de cor dos corais por variação ambiental." },
        { letter: "D", isCorrect: false, text: "Alternância entre vida marinha e terrestre." }
      ],
      explanation: "Muitos cnidários alternam entre pólipo assexuado e medusa sexuada em seu ciclo de vida."
    },
    {
      code: "CNID0031",
      context: "Por que os corais são considerados bioindicadores ambientais?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Porque mudam de cor de acordo com o ciclo lunar." },
        { letter: "B", isCorrect: false, text: "Porque produzem substâncias que purificam a água." },
        { letter: "C", isCorrect: true, text: "Porque são sensíveis a variações de temperatura e poluição." },
        { letter: "D", isCorrect: false, text: "Porque se alimentam apenas de detritos tóxicos." }
      ],
      explanation: "A perda de cor e morte dos corais indicam desequilíbrios ambientais, como aquecimento global."
    },
    {
      code: "CNID0032",
      context: "Qual estrutura atua como 'boca' e 'ânus' nos cnidários?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Cnidócito." },
        { letter: "B", isCorrect: true, text: "Óstio ou abertura oral." },
        { letter: "C", isCorrect: false, text: "Disco pedal." },
        { letter: "D", isCorrect: false, text: "Mesogleia." }
      ],
      explanation: "A única abertura da cavidade gastrovascular funciona tanto para ingestão quanto para eliminação."
    },
    {
      code: "CNID0033",
      context: "Os cnidários possuem órgãos especializados de circulação?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Sim, com vasos e coração simples." },
        { letter: "B", isCorrect: false, text: "Sim, apenas nas formas de medusa." },
        { letter: "C", isCorrect: false, text: "Sim, por tubos conectados à mesogleia." },
        { letter: "D", isCorrect: true, text: "Não, a circulação ocorre por difusão na cavidade gastrovascular." }
      ],
      explanation: "A cavidade gastrovascular distribui nutrientes e gases sem necessidade de vasos sanguíneos."
    },
    {
      code: "CNID0034",
      context: "Qual característica permite que muitos cnidários apresentem regeneração?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Presença de células totipotentes capazes de se diferenciar." },
        { letter: "B", isCorrect: false, text: "Tecido ósseo altamente mineralizado." },
        { letter: "C", isCorrect: false, text: "Presença de esqueleto cartilaginoso interno." },
        { letter: "D", isCorrect: false, text: "Células epiteliais que produzem queratina." }
      ],
      explanation: "Células totipotentes permitem regeneração de tentáculos e partes do corpo danificadas."
    },
    {
      code: "CNID0035",
      context: "Qual das alternativas descreve corretamente a locomoção das hidras?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Movem-se nadando continuamente como medusas." },
        { letter: "B", isCorrect: true, text: "Deslocam-se por movimentos de cambalhota e rastejamento." },
        { letter: "C", isCorrect: false, text: "Locomovem-se por jatos de água expelidos pela boca." },
        { letter: "D", isCorrect: false, text: "São totalmente imóveis durante toda a vida." }
      ],
      explanation: "As hidras fixas podem se soltar e mover-se por cambalhotas ou deslizando sobre o substrato."
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
    },
    {
      code: "PLAT0018",
      context: "Qual é o tipo de simetria que marca o surgimento da cefalização nos animais, como nos platelmintos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Radial." },
        { letter: "B", isCorrect: true, text: "Bilateral." },
        { letter: "C", isCorrect: false, text: "Assimétrica." },
        { letter: "D", isCorrect: false, text: "Pentarradial." }
      ],
      explanation: "A simetria bilateral permitiu o surgimento da cefalização, concentrando estruturas sensoriais na região anterior."
    },
    {
      code: "PLAT0019",
      context: "Qual estrutura é usada pelas tênias para fixação na parede intestinal do hospedeiro?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Escólex." },
        { letter: "B", isCorrect: false, text: "Proglotes." },
        { letter: "C", isCorrect: false, text: "Vermes juvenis." },
        { letter: "D", isCorrect: false, text: "Cílios locomotores." }
      ],
      explanation: "O escólex é a estrutura anterior da tênia com ventosas e ganchos usados na fixação ao intestino do hospedeiro."
    },
    {
      code: "PLAT0020",
      context: "Qual é a principal via de contaminação humana pela Taenia solium?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Picada de insetos vetores." },
        { letter: "B", isCorrect: false, text: "Contato direto com fezes humanas." },
        { letter: "C", isCorrect: true, text: "Ingestão de carne de porco malcozida contendo cisticercos." },
        { letter: "D", isCorrect: false, text: "Inalação de ovos presentes no ar." }
      ],
      explanation: "A ingestão de carne suína malcozida contendo larvas (cisticercos) causa a teníase por Taenia solium."
    },
    {
      code: "PLAT0021",
      context: "O que ocorre quando o homem ingere ovos de Taenia solium ao invés de larvas?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Nada acontece, pois os ovos são destruídos no estômago." },
        { letter: "B", isCorrect: false, text: "Desenvolve-se a teníase intestinal." },
        { letter: "C", isCorrect: false, text: "O indivíduo atua como hospedeiro definitivo." },
        { letter: "D", isCorrect: true, text: "Desenvolve-se a cisticercose, com larvas alojando-se em tecidos." }
      ],
      explanation: "A ingestão de ovos de Taenia solium pode causar cisticercose, uma infecção grave dos tecidos humanos."
    },
    {
      code: "PLAT0022",
      context: "Qual é o hospedeiro intermediário do Schistosoma mansoni?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Caramujo Biomphalaria." },
        { letter: "B", isCorrect: false, text: "Mosquito Aedes aegypti." },
        { letter: "C", isCorrect: false, text: "Caramujo Lymnaea." },
        { letter: "D", isCorrect: false, text: "Peixe Tilápia." }
      ],
      explanation: "O caramujo do gênero Biomphalaria atua como hospedeiro intermediário na esquistossomose."
    },
    {
      code: "PLAT0023",
      context: "Qual é a forma larval infectante do Schistosoma mansoni para o homem?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Esporocisto." },
        { letter: "B", isCorrect: true, text: "Cercária." },
        { letter: "C", isCorrect: false, text: "Mirácido." },
        { letter: "D", isCorrect: false, text: "Cisticerco." }
      ],
      explanation: "As cercárias penetram ativamente na pele humana, infectando o hospedeiro definitivo."
    },
    {
      code: "PLAT0024",
      context: "Em que local do corpo humano o Schistosoma mansoni se aloja quando adulto?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Intestino delgado." },
        { letter: "B", isCorrect: false, text: "Pulmões." },
        { letter: "C", isCorrect: true, text: "Veias do sistema porta-hepático." },
        { letter: "D", isCorrect: false, text: "Coração direito." }
      ],
      explanation: "Os vermes adultos vivem nas veias mesentéricas, ligadas ao fígado e intestino grosso."
    },
    {
      code: "PLAT0025",
      context: "Qual estrutura corporal substitui o tubo digestório nos cestódeos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Protonefrídios modificados." },
        { letter: "B", isCorrect: false, text: "Gânglios nervosos absorventes." },
        { letter: "C", isCorrect: false, text: "Vilosidades intestinais." },
        { letter: "D", isCorrect: true, text: "Superfície corporal altamente absorvente." }
      ],
      explanation: "Cestódeos não têm tubo digestório; absorvem nutrientes pela superfície do corpo."
    },
    {
      code: "PLAT0026",
      context: "O que são proglotes nas tênias?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Órgãos de fixação na parede intestinal." },
        { letter: "B", isCorrect: true, text: "Segmentos corporais reprodutivos." },
        { letter: "C", isCorrect: false, text: "Larvas imaturas da tênia." },
        { letter: "D", isCorrect: false, text: "Cistos formados no músculo do hospedeiro." }
      ],
      explanation: "As proglotes são segmentos com órgãos sexuais masculinos e femininos, responsáveis pela reprodução."
    },
    {
      code: "PLAT0027",
      context: "Qual é a forma de reprodução predominante nas tênias adultas?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Assexuada por divisão transversal." },
        { letter: "B", isCorrect: false, text: "Parthenogênese facultativa." },
        { letter: "C", isCorrect: true, text: "Sexuada, por autofecundação nas proglotes." },
        { letter: "D", isCorrect: false, text: "Sexuada com fecundação cruzada obrigatória." }
      ],
      explanation: "Cada proglote contém ambos os sexos e realiza autofecundação, liberando ovos nas fezes."
    },
    {
      code: "PLAT0028",
      context: "Como o corpo achatado dos platelmintos influencia na respiração?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Facilita as trocas gasosas por difusão." },
        { letter: "B", isCorrect: false, text: "Aumenta a capacidade pulmonar." },
        { letter: "C", isCorrect: false, text: "Permite respiração branquial eficiente." },
        { letter: "D", isCorrect: false, text: "Reduz a perda de água por evaporação." }
      ],
      explanation: "O corpo achatado maximiza a superfície de contato, permitindo respiração cutânea por difusão."
    },
    {
      code: "PLAT0029",
      context: "Qual é o papel do miracídeo no ciclo do Schistosoma mansoni?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Forma larval que infecta o homem." },
        { letter: "B", isCorrect: false, text: "Forma adulta reprodutora no hospedeiro." },
        { letter: "C", isCorrect: false, text: "Forma de resistência no ambiente." },
        { letter: "D", isCorrect: true, text: "Larva ciliada que penetra no caramujo hospedeiro intermediário." }
      ],
      explanation: "O miracídeo é a larva ciliada que infecta o caramujo Biomphalaria, iniciando o ciclo no hospedeiro intermediário."
    },
    {
      code: "PLAT0030",
      context: "Como ocorre a eliminação dos ovos de Schistosoma mansoni?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Pelas vias urinárias." },
        { letter: "B", isCorrect: true, text: "Pelas fezes humanas." },
        { letter: "C", isCorrect: false, text: "Pelo suor e secreções cutâneas." },
        { letter: "D", isCorrect: false, text: "Pelas lágrimas e saliva." }
      ],
      explanation: "Os ovos são liberados nas fezes e, em contato com a água, liberam miracídios que infectam caramujos."
    },
    {
      code: "PLAT0031",
      context: "Qual é o tipo de tubo digestivo presente nas planárias?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Completo, com boca e ânus." },
        { letter: "B", isCorrect: false, text: "Ausente, com absorção direta." },
        { letter: "C", isCorrect: true, text: "Incompleto, com uma única abertura." },
        { letter: "D", isCorrect: false, text: "Reto e segmentado." }
      ],
      explanation: "Planárias possuem tubo digestivo incompleto, com uma só abertura para entrada e saída de alimentos."
    },
    {
      code: "PLAT0032",
      context: "Qual a função das células-flama nos platelmintos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Excreção e regulação osmótica." },
        { letter: "B", isCorrect: false, text: "Digestão intracelular." },
        { letter: "C", isCorrect: false, text: "Produção de enzimas digestivas." },
        { letter: "D", isCorrect: false, text: "Transporte de oxigênio." }
      ],
      explanation: "As células-flama fazem parte dos protonefrídios, excretando resíduos e controlando o equilíbrio hídrico."
    },
    {
      code: "PLAT0033",
      context: "Que tipo de simbiose ocorre entre os platelmintos parasitas e seus hospedeiros?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Comensalismo." },
        { letter: "B", isCorrect: false, text: "Mutualismo." },
        { letter: "C", isCorrect: false, text: "Neutralismo." },
        { letter: "D", isCorrect: true, text: "Parasitismo." }
      ],
      explanation: "Platelmintos parasitas retiram nutrientes do hospedeiro, prejudicando-o."
    },
    {
      code: "PLAT0034",
      context: "Quais medidas ajudam a prevenir a esquistossomose?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Beber água fervida." },
        { letter: "B", isCorrect: true, text: "Evitar contato com águas contaminadas e controlar caramujos." },
        { letter: "C", isCorrect: false, text: "Consumir carne bem cozida." },
        { letter: "D", isCorrect: false, text: "Usar repelente de insetos." }
      ],
      explanation: "Evitar banhos em águas contaminadas e eliminar caramujos previne a transmissão da doença."
    },
    {
      code: "PLAT0035",
      context: "Qual característica diferencia as planárias de outros platelmintos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Vida livre e capacidade de regeneração elevada." },
        { letter: "B", isCorrect: false, text: "Segmentação corporal completa." },
        { letter: "C", isCorrect: false, text: "Sistema circulatório fechado." },
        { letter: "D", isCorrect: false, text: "Presença de exoesqueleto." }
      ],
      explanation: "Planárias vivem livremente e têm notável capacidade de regeneração."
    },
    {
      code: "PLAT0036",
      context: "O que acontece com as proglotes maduras das tênias?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Elas formam novas larvas dentro do hospedeiro intermediário." },
        { letter: "B", isCorrect: false, text: "Elas migram para o cérebro do hospedeiro." },
        { letter: "C", isCorrect: true, text: "São eliminadas nas fezes, liberando ovos no ambiente." },
        { letter: "D", isCorrect: false, text: "Se transformam em escólex." }
      ],
      explanation: "As proglotes maduras contêm ovos e são liberadas nas fezes do hospedeiro definitivo."
    },
    {
      code: "PLAT0037",
      context: "Por que as tênias são consideradas hermafroditas?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Possuem sexos separados em indivíduos diferentes." },
        { letter: "B", isCorrect: true, text: "Cada proglote contém órgãos masculinos e femininos." },
        { letter: "C", isCorrect: false, text: "Alternam entre fases sexuadas e assexuadas." },
        { letter: "D", isCorrect: false, text: "Reproduzem-se apenas por brotamento." }
      ],
      explanation: "Cada proglote da tênia possui órgãos reprodutivos de ambos os sexos, caracterizando o hermafroditismo."
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
    },
    {
      code: "NEMA0016",
      context: "Qual é o habitat predominante dos nematelmintos de vida livre?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Ambientes aquáticos e solos úmidos." },
        { letter: "B", isCorrect: false, text: "Ambientes desérticos e secos." },
        { letter: "C", isCorrect: false, text: "Somente no interior de outros organismos." },
        { letter: "D", isCorrect: false, text: "Regiões polares e montanhosas." }
      ],
      explanation: "Os nematelmintos de vida livre habitam solos úmidos e ambientes aquáticos, onde se alimentam de matéria orgânica em decomposição."
    },
    {
      code: "NEMA0017",
      context: "Como ocorre a excreção nos nematelmintos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Por glândulas excretoras presentes na epiderme." },
        { letter: "B", isCorrect: true, text: "Por meio de um sistema de canais excretores, com poro excretor." },
        { letter: "C", isCorrect: false, text: "Por células-flama, como nos platelmintos." },
        { letter: "D", isCorrect: false, text: "Pela difusão direta do intestino para o ambiente." }
      ],
      explanation: "Nematelmintos possuem um sistema excretor formado por canais longitudinais que eliminam resíduos pelo poro excretor."
    },
    {
      code: "NEMA0018",
      context: "Qual é a principal diferença entre os nematelmintos e os platelmintos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Os nematelmintos são acelomados e os platelmintos pseudocelomados." },
        { letter: "B", isCorrect: false, text: "Os nematelmintos possuem tubo digestivo incompleto, e os platelmintos, completo." },
        { letter: "C", isCorrect: true, text: "Os nematelmintos possuem tubo digestivo completo e pseudoceloma, enquanto os platelmintos são acelomados e têm tubo digestivo incompleto." },
        { letter: "D", isCorrect: false, text: "Os platelmintos têm corpo cilíndrico e os nematelmintos, achatado." }
      ],
      explanation: "A principal diferença é estrutural: nematelmintos têm tubo digestivo completo e pseudoceloma, enquanto platelmintos são acelomados e de tubo incompleto."
    },
    {
      code: "NEMA0019",
      context: "Qual é o nome da verminose causada pelo Enterobius vermicularis?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Oxiurose." },
        { letter: "B", isCorrect: false, text: "Ancilostomíase." },
        { letter: "C", isCorrect: false, text: "Filariose." },
        { letter: "D", isCorrect: false, text: "Ascaridíase." }
      ],
      explanation: "Enterobius vermicularis é o agente causador da oxiurose, infecção intestinal comum em crianças."
    },
    {
      code: "NEMA0020",
      context: "Qual é o hospedeiro intermediário na filariose?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Homem." },
        { letter: "B", isCorrect: true, text: "Mosquito do gênero Culex." },
        { letter: "C", isCorrect: false, text: "Caracol aquático." },
        { letter: "D", isCorrect: false, text: "Peixe de água doce." }
      ],
      explanation: "Na filariose, o mosquito Culex atua como hospedeiro intermediário e vetor, transmitindo larvas do parasita Wuchereria bancrofti."
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
    },
    {
      code: "MOLU0016",
      context: "Qual é o tipo de sistema digestivo dos moluscos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Incompleto, com boca, mas sem ânus." },
        { letter: "B", isCorrect: false, text: "Incompleto, apenas com ânus." },
        { letter: "C", isCorrect: true, text: "Completo, com boca e ânus." },
        { letter: "D", isCorrect: false, text: "Ausente." }
      ],
      explanation: "Moluscos possuem tubo digestivo completo, garantindo digestão eficiente."
    },
    {
      code: "MOLU0017",
      context: "Qual é o sistema excretor dos moluscos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Metanefrídios, responsáveis pela eliminação de resíduos nitrogenados." },
        { letter: "B", isCorrect: false, text: "Células-flama, como nos platelmintos." },
        { letter: "C", isCorrect: false, text: "Túbulos de Malpighi." },
        { letter: "D", isCorrect: false, text: "Glândulas verdes." }
      ],
      explanation: "Moluscos excretam resíduos por meio de metanefrídios, órgãos excretores típicos do grupo."
    },
    {
      code: "MOLU0018",
      context: "Qual é o tipo de sistema nervoso encontrado nos moluscos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Difuso, sem centralização." },
        { letter: "B", isCorrect: false, text: "Centralizado com cérebro e medula." },
        { letter: "C", isCorrect: false, text: "Anelar, típico dos anelídeos." },
        { letter: "D", isCorrect: true, text: "Ganglionar, variando em complexidade entre as classes." }
      ],
      explanation: "Moluscos possuem sistema nervoso ganglionar; nos cefalópodes, é altamente desenvolvido."
    },
    {
      code: "MOLU0019",
      context: "Como ocorre a reprodução na maioria dos moluscos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Assexuada por brotamento." },
        { letter: "B", isCorrect: true, text: "Sexuada, geralmente com fecundação externa ou interna." },
        { letter: "C", isCorrect: false, text: "Partenogênese obrigatória." },
        { letter: "D", isCorrect: false, text: "Divisão binária." }
      ],
      explanation: "Moluscos se reproduzem sexuadamente, com variação no tipo de fecundação entre as classes."
    },
    {
      code: "MOLU0020",
      context: "Os moluscos são dióicos ou monóicos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Apenas monóicos." },
        { letter: "B", isCorrect: false, text: "Apenas dióicos." },
        { letter: "C", isCorrect: true, text: "Podem ser monóicos ou dióicos, dependendo da classe." },
        { letter: "D", isCorrect: false, text: "Apresentam alternância obrigatória de sexo." }
      ],
      explanation: "A reprodução varia: gastrópodes podem ser hermafroditas (monóicos), enquanto bivalves e cefalópodes são dióicos."
    },
    {
      code: "MOLU0021",
      context: "Qual característica distingue os cefalópodes dos demais moluscos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Presença de tentáculos e alta capacidade de propulsão a jato." },
        { letter: "B", isCorrect: false, text: "Presença de rádula funcional para filtragem." },
        { letter: "C", isCorrect: false, text: "Concha externa espiralada visível." },
        { letter: "D", isCorrect: false, text: "Ausência total de sistema nervoso." }
      ],
      explanation: "Cefalópodes se destacam por locomoção rápida com propulsão e tentáculos bem desenvolvidos."
    },
    {
      code: "MOLU0022",
      context: "Como ocorre a locomoção nos bivalves?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Por tentáculos retráteis." },
        { letter: "B", isCorrect: true, text: "Por contração do pé muscular em formato de cunha." },
        { letter: "C", isCorrect: false, text: "Por jato propulsor." },
        { letter: "D", isCorrect: false, text: "Por batimento ciliar do manto." }
      ],
      explanation: "Bivalves locomovem-se lentamente com o pé muscular em forma de cunha."
    },
    {
      code: "MOLU0023",
      context: "O que é a torsão nos gastrópodes?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Processo de simetrização do corpo durante o desenvolvimento." },
        { letter: "B", isCorrect: false, text: "Perda da concha calcária externa." },
        { letter: "C", isCorrect: true, text: "Rotação de 180° da massa visceral durante o desenvolvimento larval." },
        { letter: "D", isCorrect: false, text: "Fusão do pé com o manto." }
      ],
      explanation: "A torsão é característica dos gastrópodes, resultando na torção da cavidade paleal e órgãos internos."
    },
    {
      code: "MOLU0024",
      context: "Qual é o habitat predominante dos moluscos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Maioritariamente aquático, mas há espécies terrestres." },
        { letter: "B", isCorrect: false, text: "Exclusivamente terrestre." },
        { letter: "C", isCorrect: false, text: "Somente de água doce." },
        { letter: "D", isCorrect: false, text: "Apenas parasitário." }
      ],
      explanation: "Moluscos habitam principalmente ambientes aquáticos marinhos, mas alguns gastrópodes são terrestres."
    },
    {
      code: "MOLU0025",
      context: "Qual molusco é conhecido por produzir pérolas?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Caracol." },
        { letter: "B", isCorrect: true, text: "Ostra." },
        { letter: "C", isCorrect: false, text: "Polvo." },
        { letter: "D", isCorrect: false, text: "Lula." }
      ],
      explanation: "As ostras produzem pérolas como reação defensiva à entrada de corpos estranhos na concha."
    },
    {
      code: "MOLU0026",
      context: "Qual é a principal função do manto nos moluscos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Locomoção." },
        { letter: "B", isCorrect: false, text: "Digestão de partículas alimentares." },
        { letter: "C", isCorrect: true, text: "Proteção e secreção da concha." },
        { letter: "D", isCorrect: false, text: "Trocas gasosas e excreção simultâneas." }
      ],
      explanation: "O manto é uma dobra corporal que protege o corpo e secreta a concha calcária."
    },
    {
      code: "MOLU0027",
      context: "Qual é o tipo de circulação encontrado nos cefalópodes?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Fechada, garantindo maior eficiência no transporte de oxigênio." },
        { letter: "B", isCorrect: false, text: "Aberta, típica de invertebrados simples." },
        { letter: "C", isCorrect: false, text: "Ausente, pois dependem de difusão." },
        { letter: "D", isCorrect: false, text: "Mista, com vasos abertos e fechados." }
      ],
      explanation: "Cefalópodes são os únicos moluscos com sistema circulatório fechado, adequado ao seu metabolismo elevado."
    },
    {
      code: "MOLU0028",
      context: "Qual é a substância predominante que forma a concha dos moluscos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Quitina." },
        { letter: "B", isCorrect: false, text: "Celulose." },
        { letter: "C", isCorrect: false, text: "Sílica." },
        { letter: "D", isCorrect: true, text: "Carbonato de cálcio." }
      ],
      explanation: "A concha dos moluscos é formada principalmente por carbonato de cálcio secretado pelo manto."
    },
    {
      code: "MOLU0029",
      context: "Qual molusco é conhecido por liberar tinta como mecanismo de defesa?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Caramujo." },
        { letter: "B", isCorrect: true, text: "Polvo e lula." },
        { letter: "C", isCorrect: false, text: "Ostra." },
        { letter: "D", isCorrect: false, text: "Marisco." }
      ],
      explanation: "Cefalópodes como polvos e lulas liberam tinta escura para confundir predadores e escapar."
    },
    {
      code: "MOLU0030",
      context: "Como ocorre a respiração nos gastrópodes terrestres?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Por um pulmão adaptado derivado da cavidade do manto." },
        { letter: "B", isCorrect: false, text: "Por brânquias externas." },
        { letter: "C", isCorrect: false, text: "Por difusão direta através da pele." },
        { letter: "D", isCorrect: false, text: "Por traqueias e espiráculos." }
      ],
      explanation: "Gastrópodes terrestres respiram com um pulmão modificado da cavidade paleal."
    },
    {
      code: "MOLU0031",
      context: "O que diferencia os bivalves dos demais moluscos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Presença de rádula para raspar alimentos." },
        { letter: "B", isCorrect: false, text: "Locomoção ativa por tentáculos." },
        { letter: "C", isCorrect: true, text: "Ausência de rádula e presença de duas conchas articuladas." },
        { letter: "D", isCorrect: false, text: "Sistema nervoso complexo." }
      ],
      explanation: "Bivalves não possuem rádula e apresentam duas valvas articuladas, filtrando partículas da água."
    },
    {
      code: "MOLU0032",
      context: "Qual é a principal forma de alimentação dos bivalves?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Predação ativa." },
        { letter: "B", isCorrect: true, text: "Filtração de partículas suspensas na água." },
        { letter: "C", isCorrect: false, text: "Fotossíntese simbiótica." },
        { letter: "D", isCorrect: false, text: "Herbivoria direta." }
      ],
      explanation: "Bivalves filtram partículas alimentares e microrganismos da água através das brânquias."
    },
    {
      code: "MOLU0033",
      context: "Qual molusco é usado como bioindicador da poluição aquática?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Lula." },
        { letter: "B", isCorrect: false, text: "Caracol." },
        { letter: "C", isCorrect: false, text: "Polvo." },
        { letter: "D", isCorrect: true, text: "Mexilhão." }
      ],
      explanation: "Mexilhões acumulam poluentes na água, sendo usados como indicadores biológicos da qualidade ambiental."
    },
    {
      code: "MOLU0034",
      context: "Qual é a principal característica dos monoplacóforos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Apresentam concha única e corpo segmentado internamente." },
        { letter: "B", isCorrect: false, text: "Possuem corpo cilíndrico e pseudoceloma." },
        { letter: "C", isCorrect: false, text: "São exclusivamente terrestres." },
        { letter: "D", isCorrect: false, text: "Não possuem sistema digestivo completo." }
      ],
      explanation: "Monoplacóforos têm concha única e mostram indícios de segmentação interna, característica primitiva dos moluscos."
    },
    {
      code: "MOLU0035",
      context: "Qual é a importância evolutiva dos moluscos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Foram os primeiros vertebrados marinhos." },
        { letter: "B", isCorrect: true, text: "Representam o grupo de invertebrados mais diversificado depois dos artrópodes." },
        { letter: "C", isCorrect: false, text: "Derivam diretamente dos poríferos." },
        { letter: "D", isCorrect: false, text: "São ancestrais diretos dos equinodermos." }
      ],
      explanation: "Moluscos são um dos grupos de invertebrados mais antigos e diversos, com grande importância na evolução animal."
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
    },
    {
      code: "ARTR0016",
      context: "Qual é a principal função do exoesqueleto nos artrópodes?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produção de energia e armazenamento de lipídios." },
        { letter: "B", isCorrect: false, text: "Trocas gasosas e absorção de nutrientes." },
        { letter: "C", isCorrect: true, text: "Proteção, sustentação e ponto de fixação dos músculos." },
        { letter: "D", isCorrect: false, text: "Digestão e excreção de substâncias." }
      ],
      explanation: "O exoesqueleto de quitina protege o corpo e serve como estrutura de sustentação e fixação muscular."
    },
    {
      code: "ARTR0017",
      context: "Qual grupo de artrópodes possui respiração branquial?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Crustáceos." },
        { letter: "B", isCorrect: false, text: "Insetos." },
        { letter: "C", isCorrect: false, text: "Aracnídeos." },
        { letter: "D", isCorrect: false, text: "Quilópodes." }
      ],
      explanation: "Os crustáceos respiram por brânquias adaptadas ao ambiente aquático."
    },
    {
      code: "ARTR0018",
      context: "Como é a reprodução na maioria dos artrópodes?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Assexuada, por fragmentação." },
        { letter: "B", isCorrect: true, text: "Sexuada, geralmente com fecundação interna." },
        { letter: "C", isCorrect: false, text: "Por brotamento." },
        { letter: "D", isCorrect: false, text: "Por partenogênese obrigatória." }
      ],
      explanation: "A maioria dos artrópodes tem reprodução sexuada e fecundação interna, com dimorfismo sexual evidente."
    },
    {
      code: "ARTR0019",
      context: "O que é o processo de metamorfose nos insetos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Troca do exoesqueleto durante o crescimento." },
        { letter: "B", isCorrect: false, text: "Mudança de ambiente durante o ciclo de vida." },
        { letter: "C", isCorrect: false, text: "Transformação genética durante a reprodução." },
        { letter: "D", isCorrect: true, text: "Transformação do corpo durante o desenvolvimento, como de larva para adulto." }
      ],
      explanation: "A metamorfose permite que as fases imaturas e adultas ocupem nichos diferentes."
    },
    {
      code: "ARTR0020",
      context: "Qual é a função das traqueias nos insetos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Conduzem o ar diretamente aos tecidos para respiração." },
        { letter: "B", isCorrect: false, text: "Transportam nutrientes pelo corpo." },
        { letter: "C", isCorrect: false, text: "Excretam substâncias nitrogenadas." },
        { letter: "D", isCorrect: false, text: "Secretam o exoesqueleto." }
      ],
      explanation: "O sistema traqueal distribui oxigênio diretamente aos tecidos, sem necessidade de hemoglobina."
    },
    {
      code: "ARTR0021",
      context: "Qual estrutura excretora é típica dos insetos e aracnídeos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Nefrídios." },
        { letter: "B", isCorrect: false, text: "Células-flama." },
        { letter: "C", isCorrect: true, text: "Túbulos de Malpighi." },
        { letter: "D", isCorrect: false, text: "Glândulas antenais." }
      ],
      explanation: "Os túbulos de Malpighi excretam resíduos nitrogenados, adaptando os insetos à vida terrestre."
    },
    {
      code: "ARTR0022",
      context: "O que caracteriza os crustáceos em relação aos outros artrópodes?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Presença de asas e respiração traqueal." },
        { letter: "B", isCorrect: true, text: "Dois pares de antenas e respiração branquial." },
        { letter: "C", isCorrect: false, text: "Ausência de exoesqueleto." },
        { letter: "D", isCorrect: false, text: "Corpo dividido apenas em cabeça e tórax." }
      ],
      explanation: "Crustáceos possuem dois pares de antenas, exoesqueleto calcificado e vivem majoritariamente em ambientes aquáticos."
    },
    {
      code: "ARTR0023",
      context: "Qual é a principal diferença entre aracnídeos e insetos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Os aracnídeos possuem asas e os insetos não." },
        { letter: "B", isCorrect: false, text: "Os insetos têm oito patas e os aracnídeos seis." },
        { letter: "C", isCorrect: false, text: "Os aracnídeos são sempre aquáticos e os insetos, terrestres." },
        { letter: "D", isCorrect: true, text: "Aracnídeos têm quatro pares de patas e não possuem antenas; insetos têm três pares e um par de antenas." }
      ],
      explanation: "Os aracnídeos não possuem antenas e têm oito patas, diferindo dos insetos, que têm seis patas e antenas."
    },
    {
      code: "ARTR0024",
      context: "Como ocorre a excreção nos crustáceos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Por difusão direta pela cutícula." },
        { letter: "B", isCorrect: true, text: "Por glândulas antenais ou maxilares." },
        { letter: "C", isCorrect: false, text: "Por túbulos de Malpighi." },
        { letter: "D", isCorrect: false, text: "Por células-flama." }
      ],
      explanation: "Crustáceos possuem glândulas especializadas na base das antenas para excreção de resíduos."
    },
    {
      code: "ARTR0025",
      context: "Qual é o papel ecológico das abelhas nos ecossistemas?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Polinizadoras essenciais para a reprodução das plantas." },
        { letter: "B", isCorrect: false, text: "Decompositoras de matéria orgânica." },
        { letter: "C", isCorrect: false, text: "Predadoras de pequenos vertebrados." },
        { letter: "D", isCorrect: false, text: "Parasitárias de outros insetos." }
      ],
      explanation: "As abelhas garantem a polinização de diversas espécies vegetais, sendo fundamentais para a biodiversidade e agricultura."
    },
    {
      code: "ARTR0026",
      context: "Qual é o grupo de artrópodes mais numeroso em número de espécies?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Crustáceos." },
        { letter: "B", isCorrect: false, text: "Aracnídeos." },
        { letter: "C", isCorrect: true, text: "Insetos." },
        { letter: "D", isCorrect: false, text: "Quilópodes." }
      ],
      explanation: "Os insetos representam o grupo mais diverso do reino animal, com milhões de espécies descritas."
    },
    {
      code: "ARTR0027",
      context: "O que é o tagmatização nos artrópodes?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Processo de troca de exoesqueleto." },
        { letter: "B", isCorrect: false, text: "Segmentação dos apêndices." },
        { letter: "C", isCorrect: false, text: "Fusão dos apêndices locomotores." },
        { letter: "D", isCorrect: true, text: "Divisão do corpo em regiões especializadas, como cabeça, tórax e abdômen." }
      ],
      explanation: "A tagmatização é a fusão de segmentos corporais em regiões funcionais específicas."
    },
    {
      code: "ARTR0028",
      context: "Qual é a função das glândulas sericígenas nas aranhas?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produção de veneno." },
        { letter: "B", isCorrect: true, text: "Produção de teias de seda para captura de presas e proteção." },
        { letter: "C", isCorrect: false, text: "Produção de enzimas digestivas." },
        { letter: "D", isCorrect: false, text: "Produção de feromônios sexuais." }
      ],
      explanation: "As glândulas sericígenas produzem o fio de seda usado na construção de teias e casulos."
    },
    {
      code: "ARTR0029",
      context: "Qual é a função das quelíceras nos aracnídeos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Locomoção e equilíbrio." },
        { letter: "B", isCorrect: false, text: "Percepção sensorial." },
        { letter: "C", isCorrect: true, text: "Captura e inoculação de veneno nas presas." },
        { letter: "D", isCorrect: false, text: "Reprodução e defesa." }
      ],
      explanation: "As quelíceras são apêndices bucais adaptados para capturar e inocular veneno nas presas."
    },
    {
      code: "ARTR0030",
      context: "O que é o hemocélio nos artrópodes?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Cavidade corporal onde circula a hemolinfa no sistema aberto." },
        { letter: "B", isCorrect: false, text: "Órgão excretor especializado." },
        { letter: "C", isCorrect: false, text: "Estrutura reprodutora feminina." },
        { letter: "D", isCorrect: false, text: "Canal interno de respiração aquática." }
      ],
      explanation: "O hemocélio é o espaço corporal onde circula a hemolinfa, substituindo vasos sanguíneos fechados."
    },
    {
      code: "ARTR0031",
      context: "Como ocorre a digestão nos artrópodes?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Apenas extracelular." },
        { letter: "B", isCorrect: false, text: "Apenas intracelular." },
        { letter: "C", isCorrect: false, text: "Por filtração e difusão direta." },
        { letter: "D", isCorrect: true, text: "Extracelular, realizada em tubo digestivo completo com boca e ânus." }
      ],
      explanation: "Os artrópodes possuem digestão extracelular em tubo digestivo completo."
    },
    {
      code: "ARTR0032",
      context: "O que são os espiráculos nos insetos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Glândulas excretoras." },
        { letter: "B", isCorrect: true, text: "Aberturas externas por onde entra o ar no sistema traqueal." },
        { letter: "C", isCorrect: false, text: "Órgãos de audição." },
        { letter: "D", isCorrect: false, text: "Canais digestivos." }
      ],
      explanation: "Os espiráculos são aberturas externas que conectam o sistema traqueal ao exterior, permitindo trocas gasosas."
    },
    {
      code: "ARTR0033",
      context: "Como ocorre a circulação nos insetos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Por vasos fechados e sangue rico em hemoglobina." },
        { letter: "B", isCorrect: false, text: "Por difusão direta entre as células." },
        { letter: "C", isCorrect: true, text: "Aberta, com hemolinfa bombeada por um coração dorsal." },
        { letter: "D", isCorrect: false, text: "Fechada, com artérias e veias bem definidas." }
      ],
      explanation: "Insetos possuem sistema circulatório aberto, com hemolinfa sem papel no transporte de gases."
    },
    {
      code: "ARTR0034",
      context: "Qual estrutura permite que crustáceos e insetos percebam estímulos químicos no ambiente?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Quelíceras." },
        { letter: "B", isCorrect: false, text: "Glândulas antenais." },
        { letter: "C", isCorrect: false, text: "Olhos compostos." },
        { letter: "D", isCorrect: true, text: "Antenas sensoriais." }
      ],
      explanation: "As antenas contêm receptores olfativos e gustativos que detectam substâncias químicas do ambiente."
    },
    {
      code: "ARTR0035",
      context: "Qual é o nome do pigmento que endurece o exoesqueleto dos artrópodes?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Clorofila." },
        { letter: "B", isCorrect: true, text: "Esclerotina." },
        { letter: "C", isCorrect: false, text: "Quitinase." },
        { letter: "D", isCorrect: false, text: "Melanina." }
      ],
      explanation: "A esclerotina é uma proteína que endurece o exoesqueleto, tornando-o mais resistente."
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
    },
    {
      code: "PEIX0016",
      context: "Qual é a principal função das escamas nos peixes?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Facilitar a respiração aquática." },
        { letter: "B", isCorrect: true, text: "Proteger o corpo contra atritos e parasitas." },
        { letter: "C", isCorrect: false, text: "Auxiliar na reprodução." },
        { letter: "D", isCorrect: false, text: "Aumentar a flutuabilidade." }
      ],
      explanation: "As escamas funcionam como uma barreira protetora mecânica e biológica."
    },
    {
      code: "PEIX0017",
      context: "Como é o coração dos peixes?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Possui duas cavidades: um átrio e um ventrículo." },
        { letter: "B", isCorrect: false, text: "Possui três cavidades." },
        { letter: "C", isCorrect: false, text: "Possui quatro cavidades." },
        { letter: "D", isCorrect: false, text: "Não possui cavidades definidas." }
      ],
      explanation: "O coração dos peixes tem um átrio e um ventrículo, sendo característico da circulação simples."
    },
    {
      code: "PEIX0018",
      context: "Que tipo de fertilização é mais comum entre os peixes ósseos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Interna e vivípara." },
        { letter: "B", isCorrect: false, text: "Interna e ovovivípara." },
        { letter: "C", isCorrect: false, text: "Interna e ovípara." },
        { letter: "D", isCorrect: true, text: "Externa e ovípara." }
      ],
      explanation: "A maioria dos peixes ósseos libera gametas na água, onde ocorre a fecundação externa."
    },
    {
      code: "PEIX0019",
      context: "Como os peixes cartilaginosos mantêm a flutuabilidade sem bexiga natatória?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Por meio de pulmões vestigiais." },
        { letter: "B", isCorrect: true, text: "Pelo fígado grande e rico em óleo." },
        { letter: "C", isCorrect: false, text: "Pelas escamas ósseas ocas." },
        { letter: "D", isCorrect: false, text: "Pelo consumo de ar atmosférico." }
      ],
      explanation: "O fígado oleoso reduz a densidade corporal, ajudando os tubarões e raias a flutuar."
    },
    {
      code: "PEIX0020",
      context: "Como é a temperatura corporal dos peixes?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Constante e independente do ambiente." },
        { letter: "B", isCorrect: false, text: "Variável apenas em águas doces." },
        { letter: "C", isCorrect: true, text: "Dependente da temperatura da água (ectotérmicos)." },
        { letter: "D", isCorrect: false, text: "Controlada por glândulas especializadas." }
      ],
      explanation: "Peixes são ectotérmicos, ajustando sua temperatura corporal ao ambiente aquático."
    },
    {
      code: "PEIX0021",
      context: "Qual é o nome do órgão sensorial responsável pelo olfato dos peixes?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Narinas ou fossas nasais." },
        { letter: "B", isCorrect: false, text: "Linha lateral." },
        { letter: "C", isCorrect: false, text: "Ampolas de Lorenzini." },
        { letter: "D", isCorrect: false, text: "Bexiga natatória." }
      ],
      explanation: "As narinas captam substâncias químicas dissolvidas na água, permitindo o olfato."
    },
    {
      code: "PEIX0022",
      context: "Como os peixes ósseos realizam a respiração quando estão parados?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Utilizando pulmões auxiliares." },
        { letter: "B", isCorrect: true, text: "Movimentando a boca e o opérculo para bombear água pelas brânquias." },
        { letter: "C", isCorrect: false, text: "Por respiração cutânea." },
        { letter: "D", isCorrect: false, text: "Através da bexiga natatória." }
      ],
      explanation: "O movimento alternado da boca e do opérculo garante o fluxo contínuo de água nas brânquias."
    },
    {
      code: "PEIX0023",
      context: "O que são as ampolas de Lorenzini?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Glândulas de excreção de sais." },
        { letter: "B", isCorrect: false, text: "Órgãos digestivos dos peixes ósseos." },
        { letter: "C", isCorrect: false, text: "Canais sensoriais da linha lateral." },
        { letter: "D", isCorrect: true, text: "Órgãos sensoriais eletroceptores presentes em peixes cartilaginosos." }
      ],
      explanation: "As ampolas de Lorenzini detectam campos elétricos, ajudando tubarões a localizar presas."
    },
    {
      code: "PEIX0024",
      context: "Qual estrutura protege as brânquias nos peixes ósseos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Opérculo." },
        { letter: "B", isCorrect: false, text: "Bexiga natatória." },
        { letter: "C", isCorrect: false, text: "Linhagem lateral." },
        { letter: "D", isCorrect: false, text: "Membrana timpânica." }
      ],
      explanation: "O opérculo é uma estrutura óssea móvel que protege as brânquias e auxilia na respiração."
    },
    {
      code: "PEIX0025",
      context: "Qual é o tipo de esqueleto dos peixes ósseos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "De cartilagem flexível." },
        { letter: "B", isCorrect: false, text: "Fibroso e não mineralizado." },
        { letter: "C", isCorrect: true, text: "Ósseo e rígido, composto por cálcio e fósforo." },
        { letter: "D", isCorrect: false, text: "Misto, de osso e quitina." }
      ],
      explanation: "Os peixes ósseos possuem esqueleto mineralizado, o que oferece suporte e proteção."
    },
    {
      code: "PEIX0026",
      context: "Como os peixes ósseos controlam o equilíbrio e a orientação espacial?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Por músculos da nadadeira caudal." },
        { letter: "B", isCorrect: true, text: "Por meio do ouvido interno e da bexiga natatória." },
        { letter: "C", isCorrect: false, text: "Através da linha lateral apenas." },
        { letter: "D", isCorrect: false, text: "Usando os olhos como sensores de posição." }
      ],
      explanation: "O ouvido interno e a bexiga natatória ajudam na percepção de posição e profundidade."
    },
    {
      code: "PEIX0027",
      context: "Qual substância é excretada principalmente pelos peixes?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Ureia." },
        { letter: "B", isCorrect: false, text: "Ácido úrico." },
        { letter: "C", isCorrect: true, text: "Amônia." },
        { letter: "D", isCorrect: false, text: "Glicose." }
      ],
      explanation: "A amônia é altamente tóxica, mas pode ser eliminada facilmente pela água."
    },
    {
      code: "PEIX0028",
      context: "Que tipo de reprodução é comum em tubarões?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Fecundação interna, podendo ser ovípara, ovovivípara ou vivípara." },
        { letter: "B", isCorrect: false, text: "Fecundação externa e partenogênese." },
        { letter: "C", isCorrect: false, text: "Fecundação interna exclusivamente vivípara." },
        { letter: "D", isCorrect: false, text: "Fecundação externa e ovípara." }
      ],
      explanation: "Tubarões realizam fecundação interna, e o desenvolvimento pode variar entre espécies."
    },
    {
      code: "PEIX0029",
      context: "Como ocorre a excreção de sais em peixes marinhos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Absorvem água e excretam sais pelas fezes." },
        { letter: "B", isCorrect: true, text: "Eliminam o excesso de sais pelas brânquias e urina concentrada." },
        { letter: "C", isCorrect: false, text: "Excretam sais apenas pela pele." },
        { letter: "D", isCorrect: false, text: "Não excretam sais, pois são isotônicos à água do mar." }
      ],
      explanation: "Peixes marinhos excretam sais ativamente para manter o equilíbrio osmótico."
    },
    {
      code: "PEIX0030",
      context: "Que nome se dá ao fenômeno de migração dos salmões para desovar?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Fototaxia." },
        { letter: "B", isCorrect: false, text: "Estivação." },
        { letter: "C", isCorrect: false, text: "Anidrobiose." },
        { letter: "D", isCorrect: true, text: "Migração anádroma." }
      ],
      explanation: "Salmões sobem dos oceanos para rios de água doce, onde realizam a desova."
    },
    {
      code: "PEIX0031",
      context: "Qual é a principal forma de locomoção dos peixes?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Movimento ondulatório do corpo e da nadadeira caudal." },
        { letter: "B", isCorrect: false, text: "Bater de asas." },
        { letter: "C", isCorrect: false, text: "Rebater a água com as nadadeiras peitorais." },
        { letter: "D", isCorrect: false, text: "Contrações abdominais lentas." }
      ],
      explanation: "A natação é impulsionada pelas ondulações do corpo e pela força da nadadeira caudal."
    },
    {
      code: "PEIX0032",
      context: "Que substância dá brilho e proteção às escamas dos peixes?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Quitina." },
        { letter: "B", isCorrect: true, text: "Mucina, um muco protetor secretado pela pele." },
        { letter: "C", isCorrect: false, text: "Colágeno." },
        { letter: "D", isCorrect: false, text: "Queratina." }
      ],
      explanation: "O muco reduz o atrito com a água e impede a entrada de microrganismos."
    },
    {
      code: "PEIX0033",
      context: "Qual é a função das nadadeiras peitorais nos peixes?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Propulsão principal." },
        { letter: "B", isCorrect: false, text: "Respiração auxiliar." },
        { letter: "C", isCorrect: false, text: "Excreção de sais." },
        { letter: "D", isCorrect: true, text: "Auxiliar no equilíbrio e na mudança de direção." }
      ],
      explanation: "As nadadeiras peitorais e pélvicas ajudam a estabilizar o corpo e controlar o movimento."
    },
    {
      code: "PEIX0034",
      context: "Que grupo de peixes possui opérculo e bexiga natatória bem desenvolvida?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Condrictes." },
        { letter: "B", isCorrect: false, text: "Agnatos." },
        { letter: "C", isCorrect: true, text: "Osteíctes." },
        { letter: "D", isCorrect: false, text: "Cefalocordados." }
      ],
      explanation: "Os peixes ósseos (osteíctes) possuem opérculo e bexiga natatória que auxiliam na respiração e flutuação."
    },
    {
      code: "PEIX0035",
      context: "Qual é o habitat dos peixes agnatos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Ambientes marinhos e dulcícolas, como rios e mares." },
        { letter: "B", isCorrect: false, text: "Somente ambientes terrestres." },
        { letter: "C", isCorrect: false, text: "Ambientes aéreos e subterrâneos." },
        { letter: "D", isCorrect: false, text: "Apenas águas polares." }
      ],
      explanation: "Agnatos vivem em águas doces e salgadas, sendo peixes primitivos sem mandíbula."
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
    },
    {
      code: "ANFI0016",
      context: "Qual é a principal característica que diferencia os anfíbios dos peixes?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "A presença de escamas e linha lateral." },
        { letter: "B", isCorrect: false, text: "A respiração exclusivamente branquial." },
        { letter: "C", isCorrect: true, text: "A capacidade de viver tanto na água quanto em terra firme." },
        { letter: "D", isCorrect: false, text: "A ausência de pulmões." }
      ],
      explanation: "Os anfíbios foram os primeiros vertebrados a conquistar o ambiente terrestre, mantendo ligação com a água."
    },
    {
      code: "ANFI0017",
      context: "Qual estrutura auxilia os anfíbios na audição terrestre?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Tímpano externo." },
        { letter: "B", isCorrect: false, text: "Língua retrátil." },
        { letter: "C", isCorrect: false, text: "Glândulas paratoides." },
        { letter: "D", isCorrect: false, text: "Brânquias internas." }
      ],
      explanation: "O tímpano externo capta vibrações sonoras no ambiente terrestre, transmitindo-as ao ouvido interno."
    },
    {
      code: "ANFI0018",
      context: "Qual substância é secretada pelas glândulas paratoides de alguns sapos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Muco hidratante." },
        { letter: "B", isCorrect: true, text: "Toxinas que servem como defesa contra predadores." },
        { letter: "C", isCorrect: false, text: "Feromônios sexuais." },
        { letter: "D", isCorrect: false, text: "Enzimas digestivas." }
      ],
      explanation: "As glândulas paratoides liberam substâncias tóxicas que afastam predadores."
    },
    {
      code: "ANFI0019",
      context: "Como é o coração dos anfíbios?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Possui uma cavidade única." },
        { letter: "B", isCorrect: false, text: "Possui quatro cavidades completas." },
        { letter: "C", isCorrect: false, text: "Possui duas cavidades." },
        { letter: "D", isCorrect: true, text: "Possui três cavidades: dois átrios e um ventrículo." }
      ],
      explanation: "O coração dos anfíbios apresenta três câmaras, o que permite circulação dupla, porém incompleta."
    },
    {
      code: "ANFI0020",
      context: "Qual é o nome do processo pelo qual o girino se transforma em adulto?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Regeneração." },
        { letter: "B", isCorrect: false, text: "Divisão celular." },
        { letter: "C", isCorrect: true, text: "Metamorfose." },
        { letter: "D", isCorrect: false, text: "Fecundação." }
      ],
      explanation: "A metamorfose é uma transformação que envolve profundas mudanças anatômicas e fisiológicas."
    },
    {
      code: "ANFI0021",
      context: "Qual é o modo de vida típico das salamandras?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Totalmente terrestre." },
        { letter: "B", isCorrect: true, text: "Semiaquático, alternando entre água e terra." },
        { letter: "C", isCorrect: false, text: "Apenas marinho." },
        { letter: "D", isCorrect: false, text: "Exclusivamente aéreo." }
      ],
      explanation: "As salamandras passam parte da vida em ambientes úmidos terrestres e parte em corpos d’água."
    },
    {
      code: "ANFI0022",
      context: "Qual é o tipo de respiração dos girinos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Branquial." },
        { letter: "B", isCorrect: false, text: "Pulmonar." },
        { letter: "C", isCorrect: false, text: "Cutânea." },
        { letter: "D", isCorrect: false, text: "Tráqueal." }
      ],
      explanation: "Os girinos respiram por brânquias, que são substituídas por pulmões e respiração cutânea na fase adulta."
    },
    {
      code: "ANFI0023",
      context: "Por que os anfíbios dependem da água para se reproduzir?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Porque seus ovos possuem casca dura que precisa de umidade." },
        { letter: "B", isCorrect: false, text: "Porque são vivíparos." },
        { letter: "C", isCorrect: true, text: "Porque seus ovos não têm casca e precisam de ambiente úmido." },
        { letter: "D", isCorrect: false, text: "Porque o esperma precisa ser transportado por ar úmido." }
      ],
      explanation: "Os ovos dos anfíbios são gelatinosos e desidratam facilmente fora da água."
    },
    {
      code: "ANFI0024",
      context: "Qual é o grupo de anfíbios que não possui patas?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Anura." },
        { letter: "B", isCorrect: true, text: "Gymnophiona (cecílias ou cobras-cegas)." },
        { letter: "C", isCorrect: false, text: "Urodela." },
        { letter: "D", isCorrect: false, text: "Caudata." }
      ],
      explanation: "As cecílias são anfíbios sem patas, com corpo alongado e hábitos subterrâneos."
    },
    {
      code: "ANFI0025",
      context: "Qual é a principal função da língua dos sapos e rãs?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Capturar presas rapidamente." },
        { letter: "B", isCorrect: false, text: "Auxiliar na respiração." },
        { letter: "C", isCorrect: false, text: "Produzir sons." },
        { letter: "D", isCorrect: false, text: "Manter o equilíbrio." }
      ],
      explanation: "A língua dos anuros é longa e presa à frente da boca, projetando-se rapidamente para capturar presas."
    },
    {
      code: "ANFI0026",
      context: "Como os anfíbios evitam a dessecação quando estão fora d’água?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Excretando grandes quantidades de água." },
        { letter: "B", isCorrect: false, text: "Reduzindo a respiração pulmonar." },
        { letter: "C", isCorrect: false, text: "Aumentando a temperatura corporal." },
        { letter: "D", isCorrect: true, text: "Permanecendo em locais úmidos e com sombra." }
      ],
      explanation: "A pele permeável dos anfíbios os obriga a viver em ambientes úmidos para evitar a desidratação."
    },
    {
      code: "ANFI0027",
      context: "Qual é o tipo de esqueleto dos anfíbios?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Exoesqueleto quitinoso." },
        { letter: "B", isCorrect: true, text: "Endoesqueleto ósseo." },
        { letter: "C", isCorrect: false, text: "Cartilaginoso." },
        { letter: "D", isCorrect: false, text: "Quitinoso e calcário." }
      ],
      explanation: "Os anfíbios possuem endoesqueleto formado principalmente por ossos."
    },
    {
      code: "ANFI0028",
      context: "Como é a temperatura corporal dos anfíbios?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Constante, independente do ambiente." },
        { letter: "B", isCorrect: false, text: "Controlada internamente por glândulas." },
        { letter: "C", isCorrect: true, text: "Variável conforme a temperatura do ambiente (ectotérmicos)." },
        { letter: "D", isCorrect: false, text: "Regulada pelo batimento cardíaco." }
      ],
      explanation: "Os anfíbios são ectotérmicos, ajustando sua temperatura à do ambiente."
    },
    {
      code: "ANFI0029",
      context: "Qual é a principal forma de locomoção dos anuros?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Saltos impulsionados pelas patas traseiras." },
        { letter: "B", isCorrect: false, text: "Rastejamento com o abdômen." },
        { letter: "C", isCorrect: false, text: "Deslizamento corporal." },
        { letter: "D", isCorrect: false, text: "Natação por ondulações." }
      ],
      explanation: "Os sapos e rãs usam suas patas traseiras musculosas para saltar."
    },
    {
      code: "ANFI0030",
      context: "O que é estivação nos anfíbios?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Período de acasalamento anual." },
        { letter: "B", isCorrect: false, text: "Troca periódica da pele." },
        { letter: "C", isCorrect: false, text: "Processo de metamorfose reversa." },
        { letter: "D", isCorrect: true, text: "Período de dormência em épocas muito quentes e secas." }
      ],
      explanation: "Durante a estiagem, alguns anfíbios entram em repouso para evitar desidratação."
    },
    {
      code: "ANFI0031",
      context: "Que estrutura permite aos anfíbios produzir sons?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Brânquias vibratórias." },
        { letter: "B", isCorrect: true, text: "Saco vocal." },
        { letter: "C", isCorrect: false, text: "Tímpano duplo." },
        { letter: "D", isCorrect: false, text: "Glândula de ressonância." }
      ],
      explanation: "Os machos de várias espécies possuem sacos vocais que amplificam sons durante o acasalamento."
    },
    {
      code: "ANFI0032",
      context: "Como ocorre a troca de pele nos anfíbios?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Periodicamente, e muitos ingerem a pele logo após a muda." },
        { letter: "B", isCorrect: false, text: "Apenas em fases larvais." },
        { letter: "C", isCorrect: false, text: "Somente em ambientes aquáticos." },
        { letter: "D", isCorrect: false, text: "Quando estão doentes." }
      ],
      explanation: "A ecdise ocorre regularmente e ajuda na renovação da pele úmida e sensível."
    },
    {
      code: "ANFI0033",
      context: "Qual é o habitat predominante das cecílias?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Árvores e copas de florestas." },
        { letter: "B", isCorrect: false, text: "Águas marinhas profundas." },
        { letter: "C", isCorrect: true, text: "Solo úmido e subterrâneo." },
        { letter: "D", isCorrect: false, text: "Rios de montanha." }
      ],
      explanation: "As cecílias vivem enterradas em solos úmidos, alimentando-se de pequenos invertebrados."
    },
    {
      code: "ANFI0034",
      context: "Qual é o nome da membrana que protege os olhos dos anfíbios debaixo d’água?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Pálpebra óssea." },
        { letter: "B", isCorrect: false, text: "Membrana bucal." },
        { letter: "C", isCorrect: false, text: "Epiderme ocular." },
        { letter: "D", isCorrect: true, text: "Membrana nictitante." }
      ],
      explanation: "A membrana nictitante cobre e protege os olhos durante a natação."
    },
    {
      code: "ANFI0035",
      context: "Qual característica favoreceu a transição dos anfíbios para o ambiente terrestre?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Desenvolvimento direto sem larva." },
        { letter: "B", isCorrect: true, text: "A presença de pulmões e membros locomotores." },
        { letter: "C", isCorrect: false, text: "A pele espessa e impermeável." },
        { letter: "D", isCorrect: false, text: "A fecundação interna obrigatória." }
      ],
      explanation: "Os pulmões e as patas possibilitaram a locomoção e respiração fora da água."
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
    },
    {
      code: "ANFI0016",
      context: "Qual é a principal característica que diferencia os anfíbios dos peixes?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "A presença de escamas e linha lateral." },
        { letter: "B", isCorrect: false, text: "A respiração exclusivamente branquial." },
        { letter: "C", isCorrect: true, text: "A capacidade de viver tanto na água quanto em terra firme." },
        { letter: "D", isCorrect: false, text: "A ausência de pulmões." }
      ],
      explanation: "Os anfíbios foram os primeiros vertebrados a conquistar o ambiente terrestre, mantendo ligação com a água."
    },
    {
      code: "ANFI0017",
      context: "Qual estrutura auxilia os anfíbios na audição terrestre?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Tímpano externo." },
        { letter: "B", isCorrect: false, text: "Língua retrátil." },
        { letter: "C", isCorrect: false, text: "Glândulas paratoides." },
        { letter: "D", isCorrect: false, text: "Brânquias internas." }
      ],
      explanation: "O tímpano externo capta vibrações sonoras no ambiente terrestre, transmitindo-as ao ouvido interno."
    },
    {
      code: "ANFI0018",
      context: "Qual substância é secretada pelas glândulas paratoides de alguns sapos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Muco hidratante." },
        { letter: "B", isCorrect: true, text: "Toxinas que servem como defesa contra predadores." },
        { letter: "C", isCorrect: false, text: "Feromônios sexuais." },
        { letter: "D", isCorrect: false, text: "Enzimas digestivas." }
      ],
      explanation: "As glândulas paratoides liberam substâncias tóxicas que afastam predadores."
    },
    {
      code: "ANFI0019",
      context: "Como é o coração dos anfíbios?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Possui uma cavidade única." },
        { letter: "B", isCorrect: false, text: "Possui quatro cavidades completas." },
        { letter: "C", isCorrect: false, text: "Possui duas cavidades." },
        { letter: "D", isCorrect: true, text: "Possui três cavidades: dois átrios e um ventrículo." }
      ],
      explanation: "O coração dos anfíbios apresenta três câmaras, o que permite circulação dupla, porém incompleta."
    },
    {
      code: "ANFI0020",
      context: "Qual é o nome do processo pelo qual o girino se transforma em adulto?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Regeneração." },
        { letter: "B", isCorrect: false, text: "Divisão celular." },
        { letter: "C", isCorrect: true, text: "Metamorfose." },
        { letter: "D", isCorrect: false, text: "Fecundação." }
      ],
      explanation: "A metamorfose é uma transformação que envolve profundas mudanças anatômicas e fisiológicas."
    },
    {
      code: "ANFI0021",
      context: "Qual é o modo de vida típico das salamandras?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Totalmente terrestre." },
        { letter: "B", isCorrect: true, text: "Semiaquático, alternando entre água e terra." },
        { letter: "C", isCorrect: false, text: "Apenas marinho." },
        { letter: "D", isCorrect: false, text: "Exclusivamente aéreo." }
      ],
      explanation: "As salamandras passam parte da vida em ambientes úmidos terrestres e parte em corpos d’água."
    },
    {
      code: "ANFI0022",
      context: "Qual é o tipo de respiração dos girinos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Branquial." },
        { letter: "B", isCorrect: false, text: "Pulmonar." },
        { letter: "C", isCorrect: false, text: "Cutânea." },
        { letter: "D", isCorrect: false, text: "Tráqueal." }
      ],
      explanation: "Os girinos respiram por brânquias, que são substituídas por pulmões e respiração cutânea na fase adulta."
    },
    {
      code: "ANFI0023",
      context: "Por que os anfíbios dependem da água para se reproduzir?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Porque seus ovos possuem casca dura que precisa de umidade." },
        { letter: "B", isCorrect: false, text: "Porque são vivíparos." },
        { letter: "C", isCorrect: true, text: "Porque seus ovos não têm casca e precisam de ambiente úmido." },
        { letter: "D", isCorrect: false, text: "Porque o esperma precisa ser transportado por ar úmido." }
      ],
      explanation: "Os ovos dos anfíbios são gelatinosos e desidratam facilmente fora da água."
    },
    {
      code: "ANFI0024",
      context: "Qual é o grupo de anfíbios que não possui patas?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Anura." },
        { letter: "B", isCorrect: true, text: "Gymnophiona (cecílias ou cobras-cegas)." },
        { letter: "C", isCorrect: false, text: "Urodela." },
        { letter: "D", isCorrect: false, text: "Caudata." }
      ],
      explanation: "As cecílias são anfíbios sem patas, com corpo alongado e hábitos subterrâneos."
    },
    {
      code: "ANFI0025",
      context: "Qual é a principal função da língua dos sapos e rãs?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Capturar presas rapidamente." },
        { letter: "B", isCorrect: false, text: "Auxiliar na respiração." },
        { letter: "C", isCorrect: false, text: "Produzir sons." },
        { letter: "D", isCorrect: false, text: "Manter o equilíbrio." }
      ],
      explanation: "A língua dos anuros é longa e presa à frente da boca, projetando-se rapidamente para capturar presas."
    },
    {
      code: "ANFI0026",
      context: "Como os anfíbios evitam a dessecação quando estão fora d’água?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Excretando grandes quantidades de água." },
        { letter: "B", isCorrect: false, text: "Reduzindo a respiração pulmonar." },
        { letter: "C", isCorrect: false, text: "Aumentando a temperatura corporal." },
        { letter: "D", isCorrect: true, text: "Permanecendo em locais úmidos e com sombra." }
      ],
      explanation: "A pele permeável dos anfíbios os obriga a viver em ambientes úmidos para evitar a desidratação."
    },
    {
      code: "ANFI0027",
      context: "Qual é o tipo de esqueleto dos anfíbios?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Exoesqueleto quitinoso." },
        { letter: "B", isCorrect: true, text: "Endoesqueleto ósseo." },
        { letter: "C", isCorrect: false, text: "Cartilaginoso." },
        { letter: "D", isCorrect: false, text: "Quitinoso e calcário." }
      ],
      explanation: "Os anfíbios possuem endoesqueleto formado principalmente por ossos."
    },
    {
      code: "ANFI0028",
      context: "Como é a temperatura corporal dos anfíbios?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Constante, independente do ambiente." },
        { letter: "B", isCorrect: false, text: "Controlada internamente por glândulas." },
        { letter: "C", isCorrect: true, text: "Variável conforme a temperatura do ambiente (ectotérmicos)." },
        { letter: "D", isCorrect: false, text: "Regulada pelo batimento cardíaco." }
      ],
      explanation: "Os anfíbios são ectotérmicos, ajustando sua temperatura à do ambiente."
    },
    {
      code: "ANFI0029",
      context: "Qual é a principal forma de locomoção dos anuros?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Saltos impulsionados pelas patas traseiras." },
        { letter: "B", isCorrect: false, text: "Rastejamento com o abdômen." },
        { letter: "C", isCorrect: false, text: "Deslizamento corporal." },
        { letter: "D", isCorrect: false, text: "Natação por ondulações." }
      ],
      explanation: "Os sapos e rãs usam suas patas traseiras musculosas para saltar."
    },
    {
      code: "ANFI0030",
      context: "O que é estivação nos anfíbios?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Período de acasalamento anual." },
        { letter: "B", isCorrect: false, text: "Troca periódica da pele." },
        { letter: "C", isCorrect: false, text: "Processo de metamorfose reversa." },
        { letter: "D", isCorrect: true, text: "Período de dormência em épocas muito quentes e secas." }
      ],
      explanation: "Durante a estiagem, alguns anfíbios entram em repouso para evitar desidratação."
    },
    {
      code: "ANFI0031",
      context: "Que estrutura permite aos anfíbios produzir sons?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Brânquias vibratórias." },
        { letter: "B", isCorrect: true, text: "Saco vocal." },
        { letter: "C", isCorrect: false, text: "Tímpano duplo." },
        { letter: "D", isCorrect: false, text: "Glândula de ressonância." }
      ],
      explanation: "Os machos de várias espécies possuem sacos vocais que amplificam sons durante o acasalamento."
    },
    {
      code: "ANFI0032",
      context: "Como ocorre a troca de pele nos anfíbios?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Periodicamente, e muitos ingerem a pele logo após a muda." },
        { letter: "B", isCorrect: false, text: "Apenas em fases larvais." },
        { letter: "C", isCorrect: false, text: "Somente em ambientes aquáticos." },
        { letter: "D", isCorrect: false, text: "Quando estão doentes." }
      ],
      explanation: "A ecdise ocorre regularmente e ajuda na renovação da pele úmida e sensível."
    },
    {
      code: "ANFI0033",
      context: "Qual é o habitat predominante das cecílias?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Árvores e copas de florestas." },
        { letter: "B", isCorrect: false, text: "Águas marinhas profundas." },
        { letter: "C", isCorrect: true, text: "Solo úmido e subterrâneo." },
        { letter: "D", isCorrect: false, text: "Rios de montanha." }
      ],
      explanation: "As cecílias vivem enterradas em solos úmidos, alimentando-se de pequenos invertebrados."
    },
    {
      code: "ANFI0034",
      context: "Qual é o nome da membrana que protege os olhos dos anfíbios debaixo d’água?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Pálpebra óssea." },
        { letter: "B", isCorrect: false, text: "Membrana bucal." },
        { letter: "C", isCorrect: false, text: "Epiderme ocular." },
        { letter: "D", isCorrect: true, text: "Membrana nictitante." }
      ],
      explanation: "A membrana nictitante cobre e protege os olhos durante a natação."
    },
    {
      code: "ANFI0035",
      context: "Qual característica favoreceu a transição dos anfíbios para o ambiente terrestre?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Desenvolvimento direto sem larva." },
        { letter: "B", isCorrect: true, text: "A presença de pulmões e membros locomotores." },
        { letter: "C", isCorrect: false, text: "A pele espessa e impermeável." },
        { letter: "D", isCorrect: false, text: "A fecundação interna obrigatória." }
      ],
      explanation: "Os pulmões e as patas possibilitaram a locomoção e respiração fora da água."
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
    },
    {
      code: "AVES0016",
      context: "Qual é a origem evolutiva das aves?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "De mamíferos aquáticos primitivos." },
        { letter: "B", isCorrect: true, text: "De dinossauros terópodes, répteis carnívoros do Mesozoico." },
        { letter: "C", isCorrect: false, text: "De anfíbios do período Devoniano." },
        { letter: "D", isCorrect: false, text: "De insetos voadores do Carbonífero." }
      ],
      explanation: "As aves evoluíram a partir de dinossauros terópodes, compartilhando características como penas e ossos ocos."
    },
    {
      code: "AVES0017",
      context: "O que são ossos pneumáticos nas aves?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Ossos cheios de gordura." },
        { letter: "B", isCorrect: false, text: "Ossos sólidos e densos." },
        { letter: "C", isCorrect: true, text: "Ossos ocos e leves, conectados ao sistema respiratório." },
        { letter: "D", isCorrect: false, text: "Ossos externos formados por queratina." }
      ],
      explanation: "Os ossos pneumáticos tornam o corpo mais leve e ajudam na ventilação pulmonar."
    },
    {
      code: "AVES0018",
      context: "Qual é o tipo de esqueleto das aves?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Endoesqueleto ósseo leve e adaptado ao voo." },
        { letter: "B", isCorrect: false, text: "Exoesqueleto quitinoso." },
        { letter: "C", isCorrect: false, text: "Cartilaginoso como nos peixes." },
        { letter: "D", isCorrect: false, text: "Totalmente flexível e sem ossos." }
      ],
      explanation: "As aves possuem endoesqueleto leve, com fusões ósseas que aumentam a rigidez e eficiência durante o voo."
    },
    {
      code: "AVES0019",
      context: "Qual é a temperatura corporal das aves?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Dependente da temperatura ambiente." },
        { letter: "B", isCorrect: false, text: "Sempre abaixo de 20 °C." },
        { letter: "C", isCorrect: false, text: "Variável conforme o metabolismo." },
        { letter: "D", isCorrect: true, text: "Constante e elevada (homeotermia)." }
      ],
      explanation: "Aves são homeotérmicas e mantêm temperatura corporal estável independentemente do ambiente."
    },
    {
      code: "AVES0020",
      context: "Qual é a função dos sacos aéreos nas aves?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Armazenar alimentos durante o voo." },
        { letter: "B", isCorrect: true, text: "Aumentar a eficiência da respiração e resfriar o corpo." },
        { letter: "C", isCorrect: false, text: "Produzir hormônios respiratórios." },
        { letter: "D", isCorrect: false, text: "Ajudar na digestão de sementes." }
      ],
      explanation: "Os sacos aéreos permitem fluxo contínuo de ar e auxiliam na termorregulação durante o voo."
    },
    {
      code: "AVES0021",
      context: "Como é o sistema digestório das aves?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Incompleto, sem estômago." },
        { letter: "B", isCorrect: false, text: "Com dentes e mandíbula flexível." },
        { letter: "C", isCorrect: true, text: "Completo, com papo, moela e cloaca." },
        { letter: "D", isCorrect: false, text: "Aberto, com digestão externa." }
      ],
      explanation: "As aves possuem papo para armazenar alimento e moela que tritura o alimento ingerido."
    },
    {
      code: "AVES0022",
      context: "Qual é o órgão responsável pela trituração do alimento nas aves?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Moela." },
        { letter: "B", isCorrect: false, text: "Fígado." },
        { letter: "C", isCorrect: false, text: "Bexiga." },
        { letter: "D", isCorrect: false, text: "Papo." }
      ],
      explanation: "A moela possui paredes musculosas que trituram o alimento, auxiliada por pequenas pedras ingeridas."
    },
    {
      code: "AVES0023",
      context: "Como as aves mantêm o equilíbrio durante o voo?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Através do sistema digestório." },
        { letter: "B", isCorrect: false, text: "Por contrações do papo." },
        { letter: "C", isCorrect: true, text: "Com auxílio do cerebelo e da visão desenvolvida." },
        { letter: "D", isCorrect: false, text: "Com o uso da bexiga natatória." }
      ],
      explanation: "O cerebelo coordenado e a visão apurada garantem equilíbrio e controle durante o voo."
    },
    {
      code: "AVES0024",
      context: "O que caracteriza o coração das aves?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Duas cavidades e circulação simples." },
        { letter: "B", isCorrect: false, text: "Três cavidades e mistura de sangue." },
        { letter: "C", isCorrect: false, text: "Ausência de ventrículos." },
        { letter: "D", isCorrect: true, text: "Quatro cavidades e separação completa do sangue." }
      ],
      explanation: "O coração das aves é totalmente dividido, garantindo circulação eficiente e oxigenação contínua."
    },
    {
      code: "AVES0025",
      context: "Por que as aves não possuem bexiga urinária?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Porque eliminam urina pela pele." },
        { letter: "B", isCorrect: true, text: "Para reduzir o peso corporal e facilitar o voo." },
        { letter: "C", isCorrect: false, text: "Porque produzem urina líquida em excesso." },
        { letter: "D", isCorrect: false, text: "Por adaptação à vida aquática." }
      ],
      explanation: "A ausência de bexiga reduz o peso, e o ácido úrico é eliminado junto com as fezes pela cloaca."
    },
    {
      code: "AVES0026",
      context: "Qual é o nome da estrutura onde se unem os sistemas excretor e reprodutor das aves?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Cloaca." },
        { letter: "B", isCorrect: false, text: "Uretra." },
        { letter: "C", isCorrect: false, text: "Ânus." },
        { letter: "D", isCorrect: false, text: "Siringe." }
      ],
      explanation: "A cloaca é uma abertura comum para os sistemas digestório, excretor e reprodutor."
    },
    {
      code: "AVES0027",
      context: "Qual é o órgão responsável pela produção do canto nas aves?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Laringe." },
        { letter: "B", isCorrect: false, text: "Traqueia." },
        { letter: "C", isCorrect: false, text: "Pulmão." },
        { letter: "D", isCorrect: true, text: "Siringe." }
      ],
      explanation: "A siringe, localizada na base da traqueia, é responsável pela produção de sons nas aves."
    },
    {
      code: "AVES0028",
      context: "Qual grupo de aves é incapaz de voar?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Passeriformes." },
        { letter: "B", isCorrect: false, text: "Falconiformes." },
        { letter: "C", isCorrect: true, text: "Ratitas (avestruz, ema, kiwi)." },
        { letter: "D", isCorrect: false, text: "Anseriformes." }
      ],
      explanation: "Ratitas possuem asas atrofiadas e ausência de quilha, o que impede o voo."
    },
    {
      code: "AVES0029",
      context: "Como é a reprodução das aves quanto ao desenvolvimento do embrião?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Vivípara com placenta." },
        { letter: "B", isCorrect: true, text: "Ovípara com desenvolvimento externo ao corpo da fêmea." },
        { letter: "C", isCorrect: false, text: "Ovovivípara." },
        { letter: "D", isCorrect: false, text: "Assexuada por partenogênese." }
      ],
      explanation: "O embrião se desenvolve dentro do ovo com casca calcária fora do corpo materno."
    },
    {
      code: "AVES0030",
      context: "Qual é a principal função das asas nas aves que não voam?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Respiração subaquática." },
        { letter: "B", isCorrect: false, text: "Produção de calor." },
        { letter: "C", isCorrect: true, text: "Equilíbrio e exibição durante o acasalamento ou corrida." },
        { letter: "D", isCorrect: false, text: "Filtração da água e obtenção de alimento." }
      ],
      explanation: "Nas aves não voadoras, as asas servem para equilíbrio, defesa e exibição."
    },
    {
      code: "AVES0031",
      context: "Qual é a importância ecológica das aves necrófagas?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Eliminam carcaças e reduzem a propagação de doenças." },
        { letter: "B", isCorrect: false, text: "Polinizam flores aquáticas." },
        { letter: "C", isCorrect: false, text: "Produzem oxigênio no ecossistema." },
        { letter: "D", isCorrect: false, text: "Aumentam a taxa de decomposição fúngica." }
      ],
      explanation: "Aves necrófagas, como urubus, são fundamentais na limpeza ambiental."
    },
    {
      code: "AVES0032",
      context: "Qual é o papel das aves marinhas nos ecossistemas costeiros?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produzem fitoplâncton." },
        { letter: "B", isCorrect: true, text: "Participam da cadeia alimentar e indicam a saúde dos oceanos." },
        { letter: "C", isCorrect: false, text: "São parasitas de mamíferos marinhos." },
        { letter: "D", isCorrect: false, text: "Fixam nitrogênio na água." }
      ],
      explanation: "Aves marinhas refletem a qualidade ambiental dos oceanos e controlam populações aquáticas."
    },
    {
      code: "AVES0033",
      context: "Por que as aves migratórias viajam grandes distâncias?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Por competição entre indivíduos." },
        { letter: "B", isCorrect: false, text: "Por reprodução assexuada." },
        { letter: "C", isCorrect: false, text: "Por defesa de território fixo." },
        { letter: "D", isCorrect: true, text: "Para buscar melhores condições de alimentação e reprodução." }
      ],
      explanation: "A migração é uma adaptação que garante sobrevivência e reprodução em ambientes favoráveis."
    },
    {
      code: "AVES0034",
      context: "Qual é a função do papo nas aves granívoras?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Filtrar oxigênio." },
        { letter: "B", isCorrect: false, text: "Produzir sons de acasalamento." },
        { letter: "C", isCorrect: true, text: "Armazenar e amolecer o alimento antes da digestão." },
        { letter: "D", isCorrect: false, text: "Excretar resíduos nitrogenados." }
      ],
      explanation: "O papo serve como câmara de armazenamento e início da digestão em aves granívoras."
    },
    {
      code: "AVES0035",
      context: "Qual é a importância econômica das aves ornamentais?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produzem mel e cera." },
        { letter: "B", isCorrect: true, text: "São criadas para comércio e turismo, movimentando o setor econômico." },
        { letter: "C", isCorrect: false, text: "São utilizadas como polinizadoras de grãos." },
        { letter: "D", isCorrect: false, text: "São produtoras de seda e algodão." }
      ],
      explanation: "Aves ornamentais como araras e canários têm alto valor comercial e turístico."
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
    },
    {
      code: "MAMI0016",
      context: "Qual característica permite aos mamíferos manter a temperatura corporal constante?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Respiração branquial." },
        { letter: "B", isCorrect: true, text: "Endotermia, com controle interno da temperatura." },
        { letter: "C", isCorrect: false, text: "Ectotermia, dependendo da temperatura ambiente." },
        { letter: "D", isCorrect: false, text: "Cutícula impermeável e quitinosa." }
      ],
      explanation: "Mamíferos são endotérmicos, mantendo temperatura corporal estável independentemente do ambiente."
    },
    {
      code: "MAMI0017",
      context: "Qual estrutura dos mamíferos é responsável pela produção de leite?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Glândulas sudoríparas." },
        { letter: "B", isCorrect: false, text: "Glândulas sebáceas." },
        { letter: "C", isCorrect: true, text: "Glândulas mamárias." },
        { letter: "D", isCorrect: false, text: "Glândulas salivares." }
      ],
      explanation: "As glândulas mamárias produzem leite para nutrir os filhotes, característica exclusiva dos mamíferos."
    },
    {
      code: "MAMI0018",
      context: "Qual é a função da placenta nos mamíferos placentários?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Trocar nutrientes e gases entre mãe e embrião." },
        { letter: "B", isCorrect: false, text: "Produzir hormônios de lactação." },
        { letter: "C", isCorrect: false, text: "Eliminar excretas do corpo materno." },
        { letter: "D", isCorrect: false, text: "Regular a temperatura do útero." }
      ],
      explanation: "A placenta permite trocas de nutrientes e gases, mantendo o desenvolvimento do embrião no útero."
    },
    {
      code: "MAMI0019",
      context: "Qual grupo de mamíferos apresenta oviparidade?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Marsupiais." },
        { letter: "B", isCorrect: false, text: "Placentários." },
        { letter: "C", isCorrect: false, text: "Primatas." },
        { letter: "D", isCorrect: true, text: "Monotremados." }
      ],
      explanation: "Os monotremados, como o ornitorrinco e a equidna, são mamíferos que põem ovos."
    },
    {
      code: "MAMI0020",
      context: "O que diferencia os mamíferos aquáticos dos demais?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Respiração branquial adaptada ao ambiente aquático." },
        { letter: "B", isCorrect: false, text: "Fecundação externa." },
        { letter: "C", isCorrect: true, text: "Adaptação hidrodinâmica e respiração pulmonar." },
        { letter: "D", isCorrect: false, text: "Ausência de glândulas mamárias." }
      ],
      explanation: "Mamíferos aquáticos, como golfinhos e baleias, têm corpo adaptado à natação e respiram por pulmões."
    },
    {
      code: "MAMI0021",
      context: "Qual mamífero é conhecido por utilizar ecolocalização?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Morcego." },
        { letter: "B", isCorrect: false, text: "Cavalo." },
        { letter: "C", isCorrect: false, text: "Elefante." },
        { letter: "D", isCorrect: false, text: "Tatu." }
      ],
      explanation: "Os morcegos usam ondas sonoras para se orientar e caçar no escuro."
    },
    {
      code: "MAMI0022",
      context: "Qual estrutura é exclusiva dos mamíferos entre os vertebrados?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Bico córneo." },
        { letter: "B", isCorrect: false, text: "Escamas dérmicas." },
        { letter: "C", isCorrect: false, text: "Penas." },
        { letter: "D", isCorrect: true, text: "Pelos e glândulas mamárias." }
      ],
      explanation: "Pelos e glândulas mamárias são estruturas exclusivas da classe Mammalia."
    },
    {
      code: "MAMI0023",
      context: "Qual é o tipo de reprodução dos monotremados?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Vivípara." },
        { letter: "B", isCorrect: true, text: "Ovípara." },
        { letter: "C", isCorrect: false, text: "Ovovivípara." },
        { letter: "D", isCorrect: false, text: "Assexuada." }
      ],
      explanation: "Monotremados são mamíferos ovíparos, ou seja, que põem ovos."
    },
    {
      code: "MAMI0024",
      context: "Qual é o papel ecológico dos morcegos frugívoros?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Predadores de pequenos mamíferos." },
        { letter: "B", isCorrect: false, text: "Desintegradores de matéria orgânica." },
        { letter: "C", isCorrect: true, text: "Dispersores de sementes." },
        { letter: "D", isCorrect: false, text: "Produtores de néctar." }
      ],
      explanation: "Morcegos frugívoros ajudam na dispersão de sementes e regeneração das florestas."
    },
    {
      code: "MAMI0025",
      context: "Qual é o principal órgão responsável pela troca gasosa nos mamíferos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Pulmões." },
        { letter: "B", isCorrect: false, text: "Brânquias." },
        { letter: "C", isCorrect: false, text: "Cutícula." },
        { letter: "D", isCorrect: false, text: "Sacos aéreos." }
      ],
      explanation: "Os mamíferos respiram exclusivamente pelos pulmões, mesmo os aquáticos."
    },
    {
      code: "MAMI0026",
      context: "O que caracteriza o sistema nervoso dos mamíferos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Ausência de cérebro desenvolvido." },
        { letter: "B", isCorrect: false, text: "Predominância de reflexos automáticos simples." },
        { letter: "C", isCorrect: false, text: "Coordenação baseada em gânglios segmentares." },
        { letter: "D", isCorrect: true, text: "Cérebro altamente desenvolvido e complexo." }
      ],
      explanation: "Mamíferos possuem encéfalo grande e complexo, responsável por comportamento e aprendizado elaborados."
    },
    {
      code: "MAMI0027",
      context: "Qual é a função da glândula sudorípara nos mamíferos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Produzir leite." },
        { letter: "B", isCorrect: false, text: "Lubrificar pelos." },
        { letter: "C", isCorrect: true, text: "Regular a temperatura corporal através da transpiração." },
        { letter: "D", isCorrect: false, text: "Secretar feromônios sexuais." }
      ],
      explanation: "A transpiração ajuda na regulação térmica, mantendo a temperatura constante."
    },
    {
      code: "MAMI0028",
      context: "Qual é o principal componente do leite produzido pelos mamíferos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Proteínas, gorduras e lactose." },
        { letter: "B", isCorrect: false, text: "Somente água e sais minerais." },
        { letter: "C", isCorrect: false, text: "Apenas vitaminas e pigmentos." },
        { letter: "D", isCorrect: false, text: "Aminoácidos livres e enzimas digestivas." }
      ],
      explanation: "O leite contém nutrientes essenciais para o desenvolvimento dos filhotes."
    },
    {
      code: "MAMI0029",
      context: "Qual grupo de mamíferos possui o maior número de espécies?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Primatas." },
        { letter: "B", isCorrect: true, text: "Roedores." },
        { letter: "C", isCorrect: false, text: "Carnívoros." },
        { letter: "D", isCorrect: false, text: "Cetáceos." }
      ],
      explanation: "Os roedores representam quase metade das espécies conhecidas de mamíferos."
    },
    {
      code: "MAMI0030",
      context: "Qual estrutura é responsável pela amamentação nos mamíferos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Placenta." },
        { letter: "B", isCorrect: false, text: "Pelos." },
        { letter: "C", isCorrect: false, text: "Sacos aéreos." },
        { letter: "D", isCorrect: true, text: "Mamas." }
      ],
      explanation: "As mamas são responsáveis pela amamentação e estão presentes em todos os mamíferos fêmeas."
    },
    {
      code: "MAMI0031",
      context: "Qual mamífero é capaz de voo ativo?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", isCorrect: true, text: "Morcego." },
        { letter: "B", isCorrect: false, text: "Esquilo-voador." },
        { letter: "C", isCorrect: false, text: "Tamanduá." },
        { letter: "D", isCorrect: false, text: "Lontra." }
      ],
      explanation: "O morcego é o único mamífero capaz de voo ativo, graças às membranas entre os dedos das asas."
    },
    {
      code: "MAMI0032",
      context: "Qual mamífero marinho é conhecido por sua espessa camada de gordura isolante?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Golfinho." },
        { letter: "B", isCorrect: true, text: "Baleia." },
        { letter: "C", isCorrect: false, text: "Foca." },
        { letter: "D", isCorrect: false, text: "Lontra." }
      ],
      explanation: "Baleias possuem uma espessa camada de gordura chamada blubber, que ajuda na regulação térmica."
    },
    {
      code: "MAMI0033",
      context: "Qual mamífero é considerado o maior animal do planeta?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Elefante-africano." },
        { letter: "B", isCorrect: false, text: "Tubarão-branco." },
        { letter: "C", isCorrect: true, text: "Baleia-azul." },
        { letter: "D", isCorrect: false, text: "Girafa." }
      ],
      explanation: "A baleia-azul pode ultrapassar 30 metros de comprimento e 150 toneladas."
    },
    {
      code: "MAMI0034",
      context: "Como os mamíferos participam da polinização?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Através de sementes aladas." },
        { letter: "B", isCorrect: false, text: "Com secreções glandulares das patas." },
        { letter: "C", isCorrect: false, text: "Por liberação de esporos." },
        { letter: "D", isCorrect: true, text: "Alguns mamíferos, como morcegos, transportam pólen entre flores." }
      ],
      explanation: "Certas espécies de morcegos atuam como polinizadores, principalmente em regiões tropicais."
    },
    {
      code: "MAMI0035",
      context: "Qual é a função dos caninos em mamíferos carnívoros?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", isCorrect: false, text: "Mastigação de vegetais fibrosos." },
        { letter: "B", isCorrect: true, text: "Rasgar e segurar presas." },
        { letter: "C", isCorrect: false, text: "Cortar folhas e frutos." },
        { letter: "D", isCorrect: false, text: "Triturar sementes duras." }
      ],
      explanation: "Caninos longos e afiados são adaptados à alimentação carnívora."
    }

  ]
};

export const getAnimalKingdomQuestions = (topic: ANIMAL_KINGDOM_TOPICS): IQuestion | undefined => {
  if (topic.includes('porifera')) return poriferosQuestions;
  if (topic.includes('cnidaria')) return cnidariosQuestions;
  if (topic.includes('platyhelminthes')) return platelmintosQuestions;
  if (topic.includes('nematoda')) return nematelmintosQuestions;
  if (topic.includes('annelida')) return anelideosQuestions;
  if (topic.includes('mollusca')) return moluscosQuestions;
  if (topic.includes('arthropoda')) return artropodesQuestions;
  if (topic.includes('echinodermata')) return equinodermosQuestions;
  if (topic.includes('amphibia')) return cordadosAnfibiosQuestions;
  if (topic.includes('chondrichthyes') || topic.includes('osteichthyes')) return cordadosPeixesQuestions;
  if (topic.includes('reptilia')) return cordadosRepteisQuestions;
  if (topic.includes('aves')) return cordadosAvesQuestions;
  if (topic.includes('mammalia')) return cordadosMamiferosQuestions;
  return undefined;
}