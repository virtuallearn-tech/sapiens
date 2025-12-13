import { DISCIPLINE, DISCIPLINE_MODULE } from "@interfaces/discipline";
import { HUMAN_ANATOMY_TOPICS } from "@interfaces/disciplines/biology-topics/human-anatomy";
import type { IQuestion } from "@interfaces/question";

export const respiratorySystemQuestions: IQuestion = {
  discipline: DISCIPLINE.BIOLOGY,
  module: DISCIPLINE_MODULE.HUMAN_ANATOMY,
  data: [
    {
      code: "RQSR0001",
      context: "Qual é a principal função do sistema respiratório?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Realizar as trocas gasosas", isCorrect: true },
        { letter: "B", text: "Transportar nutrientes", isCorrect: false },
        { letter: "C", text: "Produzir energia", isCorrect: false },
        { letter: "D", text: "Eliminar fezes", isCorrect: false }
      ],
      explanation: "O sistema respiratório permite a entrada de oxigênio e a eliminação de gás carbônico."
    },
    {
      code: "RQSR0002",
      context: "Qual gás é absorvido pelo organismo durante a respiração?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Gás carbônico", isCorrect: false },
        { letter: "B", text: "Oxigênio", isCorrect: true },
        { letter: "C", text: "Nitrogênio", isCorrect: false },
        { letter: "D", text: "Hidrogênio", isCorrect: false }
      ],
      explanation: "O oxigênio é essencial para a respiração celular."
    },
    {
      code: "RQSR0003",
      context: "Qual gás é eliminado durante a expiração?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Oxigênio", isCorrect: false },
        { letter: "B", text: "Nitrogênio", isCorrect: false },
        { letter: "C", text: "Gás carbônico", isCorrect: true },
        { letter: "D", text: "Ozônio", isCorrect: false }
      ],
      explanation: "O gás carbônico é produzido na respiração celular."
    },
    {
      code: "RQSR0004",
      context: "Onde ocorrem as trocas gasosas no sistema respiratório?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Alvéolos", isCorrect: true },
        { letter: "B", text: "Traqueia", isCorrect: false },
        { letter: "C", text: "Brônquios", isCorrect: false },
        { letter: "D", text: "Faringe", isCorrect: false }
      ],
      explanation: "Os alvéolos possuem paredes finas e muitos capilares."
    },
    {
      code: "RQSR0005",
      context: "Qual estrutura conduz o ar da laringe até os brônquios?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Faringe", isCorrect: false },
        { letter: "B", text: "Bronquíolos", isCorrect: false },
        { letter: "C", text: "Pulmões", isCorrect: false },
        { letter: "D", text: "Traqueia", isCorrect: true }
      ],
      explanation: "A traqueia é um tubo que conduz o ar até os brônquios."
    },
    {
      code: "RQSR0006",
      context: "Qual é a função da cavidade nasal?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Filtrar, aquecer e umidificar o ar", isCorrect: true },
        { letter: "B", text: "Produzir oxigênio", isCorrect: false },
        { letter: "C", text: "Realizar trocas gasosas", isCorrect: false },
        { letter: "D", text: "Produzir voz", isCorrect: false }
      ],
      explanation: "A cavidade nasal prepara o ar para os pulmões."
    },
    {
      code: "RQSR0007",
      context: "Qual estrutura impede a entrada de alimentos nas vias respiratórias?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Laringe", isCorrect: false },
        { letter: "B", text: "Faringe", isCorrect: false },
        { letter: "C", text: "Epiglote", isCorrect: true },
        { letter: "D", text: "Traqueia", isCorrect: false }
      ],
      explanation: "A epiglote fecha a entrada da traqueia durante a deglutição."
    },
    {
      code: "RQSR0008",
      context: "Qual estrutura contém as cordas vocais?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Faringe", isCorrect: false },
        { letter: "B", text: "Laringe", isCorrect: true },
        { letter: "C", text: "Traqueia", isCorrect: false },
        { letter: "D", text: "Brônquios", isCorrect: false }
      ],
      explanation: "A laringe é responsável pela produção da voz."
    },
    {
      code: "RQSR0009",
      context: "Qual músculo é essencial para o movimento respiratório?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Diafragma", isCorrect: true },
        { letter: "B", text: "Bíceps", isCorrect: false },
        { letter: "C", text: "Tríceps", isCorrect: false },
        { letter: "D", text: "Glúteo", isCorrect: false }
      ],
      explanation: "O diafragma permite a entrada e saída de ar dos pulmões."
    },
    {
      code: "RQSR0010",
      context: "O que acontece com o diafragma durante a inspiração?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Ele relaxa e sobe", isCorrect: false },
        { letter: "B", text: "Ele permanece parado", isCorrect: false },
        { letter: "C", text: "Ele encolhe", isCorrect: false },
        { letter: "D", text: "Ele se contrai e desce", isCorrect: true }
      ],
      explanation: "A contração do diafragma aumenta o volume da caixa torácica."
    },
    {
      code: "RQSR0011",
      context: "Qual estrutura liga os brônquios aos alvéolos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Traqueia", isCorrect: false },
        { letter: "B", text: "Bronquíolos", isCorrect: true },
        { letter: "C", text: "Faringe", isCorrect: false },
        { letter: "D", text: "Laringe", isCorrect: false }
      ],
      explanation: "Os bronquíolos conduzem o ar até os alvéolos."
    },
    {
      code: "RQSR0012",
      context: "Qual sistema atua junto com o respiratório no transporte de gases?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Digestório", isCorrect: false },
        { letter: "B", text: "Urinário", isCorrect: false },
        { letter: "C", text: "Circulatório", isCorrect: true },
        { letter: "D", text: "Nervoso", isCorrect: false }
      ],
      explanation: "O sistema circulatório transporta oxigênio pelo sangue."
    },
    {
      code: "RQSR0013",
      context: "Qual proteína do sangue transporta oxigênio?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Hemoglobina", isCorrect: true },
        { letter: "B", text: "Insulina", isCorrect: false },
        { letter: "C", text: "Albumina", isCorrect: false },
        { letter: "D", text: "Queratina", isCorrect: false }
      ],
      explanation: "A hemoglobina está presente nas hemácias."
    },
    {
      code: "RQSR0014",
      context: "O que é respiração celular?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Entrada de ar nos pulmões", isCorrect: false },
        { letter: "B", text: "Movimento do diafragma", isCorrect: false },
        { letter: "C", text: "Troca gasosa nos alvéolos", isCorrect: false },
        { letter: "D", text: "Produção de energia nas células", isCorrect: true }
      ],
      explanation: "A respiração celular ocorre nas mitocôndrias."
    },
    {
      code: "RQSR0015",
      context: "Qual doença inflama os brônquios?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Pneumonia", isCorrect: false },
        { letter: "B", text: "Bronquite", isCorrect: true },
        { letter: "C", text: "Asma", isCorrect: false },
        { letter: "D", text: "Tuberculose", isCorrect: false }
      ],
      explanation: "A bronquite causa inflamação dos brônquios."
    },
    {
      code: "RQSR0016",
      context: "Qual hábito prejudica o sistema respiratório?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Beber água", isCorrect: false },
        { letter: "B", text: "Praticar exercícios", isCorrect: false },
        { letter: "C", text: "Fumar", isCorrect: true },
        { letter: "D", text: "Dormir bem", isCorrect: false }
      ],
      explanation: "O tabagismo danifica os alvéolos pulmonares."
    },
    {
      code: "RQSR0017",
      context: "O que é asma?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Doença que dificulta a respiração", isCorrect: true },
        { letter: "B", text: "Infecção bacteriana", isCorrect: false },
        { letter: "C", text: "Problema no coração", isCorrect: false },
        { letter: "D", text: "Doença dos rins", isCorrect: false }
      ],
      explanation: "A asma causa estreitamento das vias respiratórias."
    },
    {
      code: "RQSR0018",
      context: "Por que os alvéolos possuem paredes finas?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Para armazenar ar", isCorrect: false },
        { letter: "B", text: "Para proteger os pulmões", isCorrect: false },
        { letter: "C", text: "Para produzir muco", isCorrect: false },
        { letter: "D", text: "Para facilitar as trocas gasosas", isCorrect: true }
      ],
      explanation: "Paredes finas facilitam a difusão de gases."
    },
    {
      code: "RQSR0019",
      context: "Qual poluente prejudica diretamente os pulmões?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Água", isCorrect: false },
        { letter: "B", text: "Fumaça", isCorrect: true },
        { letter: "C", text: "Oxigênio", isCorrect: false },
        { letter: "D", text: "Luz solar", isCorrect: false }
      ],
      explanation: "A fumaça contém substâncias tóxicas."
    },
    {
      code: "RQSR0020",
      context: "Por que a respiração é essencial para a vida?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Porque fornece oxigênio para produção de energia", isCorrect: true },
        { letter: "B", text: "Porque controla a temperatura", isCorrect: false },
        { letter: "C", text: "Porque elimina fezes", isCorrect: false },
        { letter: "D", text: "Porque produz hormônios", isCorrect: false }
      ],
      explanation: "Sem oxigênio, as células não produzem energia."
    }
  ]
};

export const circulatorySystemQuestions: IQuestion = {
  discipline: DISCIPLINE.BIOLOGY,
  module: DISCIPLINE_MODULE.HUMAN_ANATOMY,
  data: [
    {
      code: "RQSC01",
      context: "Qual é a principal função do sistema circulatório?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Transportar substâncias pelo corpo", isCorrect: true },
        { letter: "B", text: "Produzir hormônios", isCorrect: false },
        { letter: "C", text: "Realizar digestão", isCorrect: false },
        { letter: "D", text: "Eliminar fezes", isCorrect: false }
      ],
      explanation: "O sistema circulatório transporta oxigênio, nutrientes e resíduos."
    },
    {
      code: "RQSC02",
      context: "Qual órgão funciona como uma bomba no sistema circulatório?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Pulmão", isCorrect: false },
        { letter: "B", text: "Coração", isCorrect: true },
        { letter: "C", text: "Fígado", isCorrect: false },
        { letter: "D", text: "Rim", isCorrect: false }
      ],
      explanation: "O coração bombeia o sangue para todo o corpo."
    },
    {
      code: "RQSC03",
      context: "Qual é o principal fluido do sistema circulatório?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Linfa", isCorrect: false },
        { letter: "B", text: "Água", isCorrect: false },
        { letter: "C", text: "Sangue", isCorrect: true },
        { letter: "D", text: "Plasma", isCorrect: false }
      ],
      explanation: "O sangue transporta gases, nutrientes e células."
    },
    {
      code: "RQSC04",
      context: "Qual vaso sanguíneo leva o sangue do coração para o corpo?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Artérias", isCorrect: true },
        { letter: "B", text: "Veias", isCorrect: false },
        { letter: "C", text: "Capilares", isCorrect: false },
        { letter: "D", text: "Vênulas", isCorrect: false }
      ],
      explanation: "As artérias conduzem o sangue para fora do coração."
    },
    {
      code: "RQSC05",
      context: "Qual vaso sanguíneo traz o sangue de volta ao coração?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Artérias", isCorrect: false },
        { letter: "B", text: "Veias", isCorrect: true },
        { letter: "C", text: "Capilares", isCorrect: false },
        { letter: "D", text: "Arteríolas", isCorrect: false }
      ],
      explanation: "As veias retornam o sangue ao coração."
    },
    {
      code: "RQSC06",
      context: "Onde ocorrem as trocas de gases e nutrientes com as células?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Artérias", isCorrect: false },
        { letter: "B", text: "Veias", isCorrect: false },
        { letter: "C", text: "Capilares", isCorrect: true },
        { letter: "D", text: "Coração", isCorrect: false }
      ],
      explanation: "Os capilares possuem paredes muito finas."
    },
    {
      code: "RQSC07",
      context: "Quantas cavidades possui o coração humano?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Duas", isCorrect: false },
        { letter: "B", text: "Três", isCorrect: false },
        { letter: "C", text: "Cinco", isCorrect: false },
        { letter: "D", text: "Quatro", isCorrect: true }
      ],
      explanation: "São dois átrios e dois ventrículos."
    },
    {
      code: "RQSC08",
      context: "Qual parte do coração recebe o sangue?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Átrios", isCorrect: true },
        { letter: "B", text: "Ventrículos", isCorrect: false },
        { letter: "C", text: "Valvas", isCorrect: false },
        { letter: "D", text: "Aorta", isCorrect: false }
      ],
      explanation: "Os átrios recebem o sangue que chega ao coração."
    },
    {
      code: "RQSC09",
      context: "Qual parte do coração bombeia o sangue?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Átrios", isCorrect: false },
        { letter: "B", text: "Ventrículos", isCorrect: true },
        { letter: "C", text: "Veias", isCorrect: false },
        { letter: "D", text: "Capilares", isCorrect: false }
      ],
      explanation: "Os ventrículos possuem paredes musculares mais espessas."
    },
    {
      code: "RQSC10",
      context: "Qual célula sanguínea transporta oxigênio?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Plaquetas", isCorrect: false },
        { letter: "B", text: "Leucócitos", isCorrect: false },
        { letter: "C", text: "Hemácias", isCorrect: true },
        { letter: "D", text: "Linfócitos", isCorrect: false }
      ],
      explanation: "As hemácias possuem hemoglobina."
    },
    {
      code: "RQSC11",
      context: "Qual substância presente nas hemácias transporta oxigênio?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Hemoglobina", isCorrect: true },
        { letter: "B", text: "Insulina", isCorrect: false },
        { letter: "C", text: "Plasma", isCorrect: false },
        { letter: "D", text: "Glicose", isCorrect: false }
      ],
      explanation: "A hemoglobina se liga ao oxigênio."
    },
    {
      code: "RQSC12",
      context: "Qual célula sanguínea atua na defesa do organismo?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Hemácias", isCorrect: false },
        { letter: "B", text: "Leucócitos", isCorrect: true },
        { letter: "C", text: "Plaquetas", isCorrect: false },
        { letter: "D", text: "Plasma", isCorrect: false }
      ],
      explanation: "Leucócitos combatem microrganismos."
    },
    {
      code: "RQSC13",
      context: "Qual componente do sangue atua na coagulação?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Hemácias", isCorrect: false },
        { letter: "B", text: "Leucócitos", isCorrect: false },
        { letter: "C", text: "Plaquetas", isCorrect: true },
        { letter: "D", text: "Plasma", isCorrect: false }
      ],
      explanation: "As plaquetas ajudam a estancar sangramentos."
    },
    {
      code: "RQSC14",
      context: "O que é pressão arterial?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Quantidade de sangue", isCorrect: false },
        { letter: "B", text: "Velocidade do sangue", isCorrect: false },
        { letter: "C", text: "Batimentos cardíacos", isCorrect: false },
        { letter: "D", text: "Força do sangue contra as artérias", isCorrect: true }
      ],
      explanation: "A pressão depende do bombeamento do coração."
    },
    {
      code: "RQSC15",
      context: "Qual circuito leva o sangue do coração aos pulmões?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Circulação pulmonar", isCorrect: true },
        { letter: "B", text: "Circulação sistêmica", isCorrect: false },
        { letter: "C", text: "Circulação linfática", isCorrect: false },
        { letter: "D", text: "Circulação renal", isCorrect: false }
      ],
      explanation: "A circulação pulmonar oxigena o sangue."
    },
    {
      code: "RQSC16",
      context: "Qual circulação leva sangue para todo o corpo?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Pulmonar", isCorrect: false },
        { letter: "B", text: "Sistêmica", isCorrect: true },
        { letter: "C", text: "Linfática", isCorrect: false },
        { letter: "D", text: "Portal", isCorrect: false }
      ],
      explanation: "A circulação sistêmica distribui nutrientes e oxigênio."
    },
    {
      code: "RQSC17",
      context: "Qual hábito ajuda a manter o sistema circulatório saudável?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Fumar", isCorrect: false },
        { letter: "B", text: "Sedentarismo", isCorrect: false },
        { letter: "C", text: "Praticar exercícios físicos", isCorrect: true },
        { letter: "D", text: "Alimentação rica em gordura", isCorrect: false }
      ],
      explanation: "Exercícios fortalecem o coração."
    },
    {
      code: "RQSC18",
      context: "O que pode causar o entupimento de artérias?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Acúmulo de gordura", isCorrect: true },
        { letter: "B", text: "Oxigênio", isCorrect: false },
        { letter: "C", text: "Água", isCorrect: false },
        { letter: "D", text: "Glicose", isCorrect: false }
      ],
      explanation: "O acúmulo de placas pode causar aterosclerose."
    },
    {
      code: "RQSC19",
      context: "Qual doença está relacionada ao sistema circulatório?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Asma", isCorrect: false },
        { letter: "B", text: "Gastrite", isCorrect: false },
        { letter: "C", text: "Diabetes", isCorrect: false },
        { letter: "D", text: "Hipertensão", isCorrect: true }
      ],
      explanation: "A hipertensão envolve aumento da pressão arterial."
    },
    {
      code: "RQSC20",
      context: "Por que o sistema circulatório é essencial para a vida?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Porque mantém as células nutridas e oxigenadas", isCorrect: true },
        { letter: "B", text: "Porque produz hormônios", isCorrect: false },
        { letter: "C", text: "Porque elimina fezes", isCorrect: false },
        { letter: "D", text: "Porque controla movimentos", isCorrect: false }
      ],
      explanation: "Sem transporte de oxigênio, as células não sobrevivem."
    }
  ]
};

export const digestiveSystemQuestions: IQuestion = {
  discipline: DISCIPLINE.BIOLOGY,
  module: DISCIPLINE_MODULE.HUMAN_ANATOMY,
  data: [
    {
      code: "RQSD01",
      context: "Qual é a principal função do sistema digestório?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Realizar a digestão e absorção de nutrientes", isCorrect: true },
        { letter: "B", text: "Transportar oxigênio", isCorrect: false },
        { letter: "C", text: "Produzir hormônios", isCorrect: false },
        { letter: "D", text: "Eliminar gás carbônico", isCorrect: false }
      ],
      explanation: "O sistema digestório transforma os alimentos em nutrientes."
    },
    {
      code: "RQSD02",
      context: "Onde se inicia a digestão dos alimentos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Estômago", isCorrect: false },
        { letter: "B", text: "Boca", isCorrect: true },
        { letter: "C", text: "Esôfago", isCorrect: false },
        { letter: "D", text: "Intestino delgado", isCorrect: false }
      ],
      explanation: "A digestão começa na boca com a mastigação e a saliva."
    },
    {
      code: "RQSD03",
      context: "Qual estrutura é responsável pela mastigação?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Dentes", isCorrect: true },
        { letter: "B", text: "Língua", isCorrect: false },
        { letter: "C", text: "Glândulas salivares", isCorrect: false },
        { letter: "D", text: "Faringe", isCorrect: false }
      ],
      explanation: "Os dentes trituram os alimentos."
    },
    {
      code: "RQSD04",
      context: "Qual substância presente na saliva inicia a digestão do amido?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Pepsina", isCorrect: false },
        { letter: "B", text: "Lipase", isCorrect: false },
        { letter: "C", text: "Amilase salivar", isCorrect: true },
        { letter: "D", text: "Tripsina", isCorrect: false }
      ],
      explanation: "A amilase salivar inicia a digestão dos carboidratos."
    },
    {
      code: "RQSD05",
      context: "Qual órgão conduz o alimento da boca ao estômago?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Traqueia", isCorrect: false },
        { letter: "B", text: "Esôfago", isCorrect: true },
        { letter: "C", text: "Faringe", isCorrect: false },
        { letter: "D", text: "Intestino grosso", isCorrect: false }
      ],
      explanation: "O esôfago realiza movimentos peristálticos."
    },
    {
      code: "RQSD06",
      context: "Qual órgão realiza a digestão química das proteínas?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Estômago", isCorrect: true },
        { letter: "B", text: "Boca", isCorrect: false },
        { letter: "C", text: "Intestino grosso", isCorrect: false },
        { letter: "D", text: "Fígado", isCorrect: false }
      ],
      explanation: "A pepsina atua no estômago."
    },
    {
      code: "RQSD07",
      context: "Qual substância presente no suco gástrico auxilia na digestão?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Bile", isCorrect: false },
        { letter: "B", text: "Insulina", isCorrect: false },
        { letter: "C", text: "Amilase", isCorrect: false },
        { letter: "D", text: "Ácido clorídrico", isCorrect: true }
      ],
      explanation: "O ácido clorídrico ativa enzimas digestivas."
    },
    {
      code: "RQSD08",
      context: "Qual órgão produz a bile?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Pâncreas", isCorrect: false },
        { letter: "B", text: "Vesícula biliar", isCorrect: false },
        { letter: "C", text: "Fígado", isCorrect: true },
        { letter: "D", text: "Estômago", isCorrect: false }
      ],
      explanation: "A bile emulsifica gorduras."
    },
    {
      code: "RQSD09",
      context: "Onde ocorre a maior parte da absorção de nutrientes?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Intestino delgado", isCorrect: true },
        { letter: "B", text: "Intestino grosso", isCorrect: false },
        { letter: "C", text: "Estômago", isCorrect: false },
        { letter: "D", text: "Esôfago", isCorrect: false }
      ],
      explanation: "As vilosidades intestinais aumentam a absorção."
    },
    {
      code: "RQSD10",
      context: "Qual estrutura aumenta a área de absorção do intestino delgado?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Dobras gástricas", isCorrect: false },
        { letter: "B", text: "Vilosidades intestinais", isCorrect: true },
        { letter: "C", text: "Alvéolos", isCorrect: false },
        { letter: "D", text: "Néfrons", isCorrect: false }
      ],
      explanation: "As vilosidades aumentam o contato com os nutrientes."
    },
    {
      code: "RQSD11",
      context: "Qual órgão armazena a bile?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Fígado", isCorrect: false },
        { letter: "B", text: "Pâncreas", isCorrect: false },
        { letter: "C", text: "Vesícula biliar", isCorrect: true },
        { letter: "D", text: "Intestino delgado", isCorrect: false }
      ],
      explanation: "A bile é liberada no intestino delgado."
    },
    {
      code: "RQSD12",
      context: "Qual órgão produz enzimas digestivas e hormônios?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Pâncreas", isCorrect: true },
        { letter: "B", text: "Fígado", isCorrect: false },
        { letter: "C", text: "Estômago", isCorrect: false },
        { letter: "D", text: "Intestino grosso", isCorrect: false }
      ],
      explanation: "O pâncreas produz enzimas e insulina."
    },
    {
      code: "RQSD13",
      context: "Qual a principal função do intestino grosso?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Digestão de proteínas", isCorrect: false },
        { letter: "B", text: "Digestão de gorduras", isCorrect: false },
        { letter: "C", text: "Absorção de nutrientes", isCorrect: false },
        { letter: "D", text: "Absorção de água e formação das fezes", isCorrect: true }
      ],
      explanation: "O intestino grosso recupera água."
    },
    {
      code: "RQSD14",
      context: "Qual movimento empurra o alimento ao longo do tubo digestório?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Respiração", isCorrect: false },
        { letter: "B", text: "Peristaltismo", isCorrect: true },
        { letter: "C", text: "Filtração", isCorrect: false },
        { letter: "D", text: "Difusão", isCorrect: false }
      ],
      explanation: "O peristaltismo é realizado pela musculatura lisa."
    },
    {
      code: "RQSD15",
      context: "Qual órgão elimina os resíduos da digestão?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Ânus", isCorrect: true },
        { letter: "B", text: "Estômago", isCorrect: false },
        { letter: "C", text: "Reto", isCorrect: false },
        { letter: "D", text: "Esôfago", isCorrect: false }
      ],
      explanation: "O ânus controla a eliminação das fezes."
    },
    {
      code: "RQSD16",
      context: "Qual hábito ajuda a manter o sistema digestório saudável?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Comer rápido", isCorrect: false },
        { letter: "B", text: "Pular refeições", isCorrect: false },
        { letter: "C", text: "Alimentação equilibrada", isCorrect: true },
        { letter: "D", text: "Excesso de gordura", isCorrect: false }
      ],
      explanation: "Uma dieta equilibrada melhora a digestão."
    },
    {
      code: "RQSD17",
      context: "Qual doença afeta o estômago?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Asma", isCorrect: false },
        { letter: "B", text: "Gastrite", isCorrect: true },
        { letter: "C", text: "Bronquite", isCorrect: false },
        { letter: "D", text: "Hipertensão", isCorrect: false }
      ],
      explanation: "A gastrite é uma inflamação do estômago."
    },
    {
      code: "RQSD18",
      context: "Por que a bile é importante na digestão?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Porque facilita a digestão das gorduras", isCorrect: true },
        { letter: "B", text: "Porque digere proteínas", isCorrect: false },
        { letter: "C", text: "Porque digere carboidratos", isCorrect: false },
        { letter: "D", text: "Porque absorve vitaminas", isCorrect: false }
      ],
      explanation: "A bile emulsifica lipídios."
    },
    {
      code: "RQSD19",
      context: "Qual vitamina é absorvida junto com as gorduras?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Vitamina C", isCorrect: false },
        { letter: "B", text: "Vitamina B", isCorrect: false },
        { letter: "C", text: "Vitamina B12", isCorrect: false },
        { letter: "D", text: "Vitamina A", isCorrect: true }
      ],
      explanation: "Vitaminas lipossolúveis dependem das gorduras."
    },
    {
      code: "RQSD20",
      context: "Por que o sistema digestório é essencial para a vida?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Porque fornece energia e nutrientes às células", isCorrect: true },
        { letter: "B", text: "Porque transporta oxigênio", isCorrect: false },
        { letter: "C", text: "Porque produz hormônios", isCorrect: false },
        { letter: "D", text: "Porque elimina gás carbônico", isCorrect: false }
      ],
      explanation: "Os nutrientes são usados na produção de energia."
    }
  ]
};

export const nervousSystemQuestions: IQuestion = {
  discipline: DISCIPLINE.BIOLOGY,
  module: DISCIPLINE_MODULE.HUMAN_ANATOMY,
  data: [
    {
      code: "RQSN01",
      context: "Qual é a principal função do sistema nervoso?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Coordenar e controlar as atividades do corpo", isCorrect: true },
        { letter: "B", text: "Transportar nutrientes", isCorrect: false },
        { letter: "C", text: "Produzir hormônios", isCorrect: false },
        { letter: "D", text: "Realizar digestão", isCorrect: false }
      ],
      explanation: "O sistema nervoso integra e coordena funções corporais."
    },
    {
      code: "RQSN02",
      context: "Qual é a principal célula do sistema nervoso?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Hemácia", isCorrect: false },
        { letter: "B", text: "Neurônio", isCorrect: true },
        { letter: "C", text: "Leucócito", isCorrect: false },
        { letter: "D", text: "Miócito", isCorrect: false }
      ],
      explanation: "Os neurônios transmitem impulsos nervosos."
    },
    {
      code: "RQSN03",
      context: "Qual parte do neurônio recebe os estímulos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Axônio", isCorrect: false },
        { letter: "B", text: "Bainha de mielina", isCorrect: false },
        { letter: "C", text: "Dendritos", isCorrect: true },
        { letter: "D", text: "Nódulos de Ranvier", isCorrect: false }
      ],
      explanation: "Os dendritos recebem sinais de outros neurônios."
    },
    {
      code: "RQSN04",
      context: "Qual parte do neurônio conduz o impulso nervoso?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Axônio", isCorrect: true },
        { letter: "B", text: "Dendritos", isCorrect: false },
        { letter: "C", text: "Corpo celular", isCorrect: false },
        { letter: "D", text: "Sinapse", isCorrect: false }
      ],
      explanation: "O axônio transmite o impulso nervoso."
    },
    {
      code: "RQSN05",
      context: "O que é sinapse?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Parte do axônio", isCorrect: false },
        { letter: "B", text: "Parte do cérebro", isCorrect: false },
        { letter: "C", text: "Tipo de neurônio", isCorrect: false },
        { letter: "D", text: "Comunicação entre neurônios", isCorrect: true }
      ],
      explanation: "A sinapse permite a transmissão do impulso."
    },
    {
      code: "RQSN06",
      context: "Qual estrutura protege o cérebro?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Coluna vertebral", isCorrect: false },
        { letter: "B", text: "Crânio", isCorrect: true },
        { letter: "C", text: "Costelas", isCorrect: false },
        { letter: "D", text: "Pelve", isCorrect: false }
      ],
      explanation: "O crânio protege o encéfalo."
    },
    {
      code: "RQSN07",
      context: "Qual estrutura protege a medula espinal?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Coluna vertebral", isCorrect: true },
        { letter: "B", text: "Crânio", isCorrect: false },
        { letter: "C", text: "Esterno", isCorrect: false },
        { letter: "D", text: "Escápula", isCorrect: false }
      ],
      explanation: "A medula passa pelo canal vertebral."
    },
    {
      code: "RQSN08",
      context: "Qual parte do sistema nervoso controla os movimentos voluntários?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Sistema nervoso autônomo", isCorrect: false },
        { letter: "B", text: "Sistema nervoso periférico", isCorrect: false },
        { letter: "C", text: "Sistema nervoso somático", isCorrect: true },
        { letter: "D", text: "Sistema nervoso simpático", isCorrect: false }
      ],
      explanation: "O sistema somático controla ações conscientes."
    },
    {
      code: "RQSN09",
      context: "Qual parte do sistema nervoso controla funções involuntárias?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Sistema nervoso somático", isCorrect: false },
        { letter: "B", text: "Sistema nervoso autônomo", isCorrect: true },
        { letter: "C", text: "Sistema nervoso central", isCorrect: false },
        { letter: "D", text: "Sistema nervoso sensorial", isCorrect: false }
      ],
      explanation: "Batimentos cardíacos são involuntários."
    },
    {
      code: "RQSN10",
      context: "Qual subdivisão do sistema nervoso autônomo prepara o corpo para ação?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Simpático", isCorrect: true },
        { letter: "B", text: "Parassimpático", isCorrect: false },
        { letter: "C", text: "Somático", isCorrect: false },
        { letter: "D", text: "Central", isCorrect: false }
      ],
      explanation: "O simpático atua em situações de estresse."
    },
    {
      code: "RQSN11",
      context: "Qual subdivisão do sistema nervoso autônomo atua no repouso?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Simpático", isCorrect: false },
        { letter: "B", text: "Parassimpático", isCorrect: true },
        { letter: "C", text: "Somático", isCorrect: false },
        { letter: "D", text: "Central", isCorrect: false }
      ],
      explanation: "O parassimpático reduz a frequência cardíaca."
    },
    {
      code: "RQSN12",
      context: "Qual órgão é responsável pelo pensamento e memória?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Medula espinal", isCorrect: false },
        { letter: "B", text: "Cerebelo", isCorrect: false },
        { letter: "C", text: "Cérebro", isCorrect: true },
        { letter: "D", text: "Tronco encefálico", isCorrect: false }
      ],
      explanation: "O cérebro controla funções cognitivas."
    },
    {
      code: "RQSN13",
      context: "Qual parte do encéfalo coordena o equilíbrio?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Cerebelo", isCorrect: true },
        { letter: "B", text: "Cérebro", isCorrect: false },
        { letter: "C", text: "Bulbo", isCorrect: false },
        { letter: "D", text: "Hipotálamo", isCorrect: false }
      ],
      explanation: "O cerebelo coordena movimentos e equilíbrio."
    },
    {
      code: "RQSN14",
      context: "Qual estrutura controla batimentos cardíacos e respiração?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Cérebro", isCorrect: false },
        { letter: "B", text: "Cerebelo", isCorrect: false },
        { letter: "C", text: "Tronco encefálico", isCorrect: true },
        { letter: "D", text: "Hipófise", isCorrect: false }
      ],
      explanation: "Funções vitais são controladas pelo tronco encefálico."
    },
    {
      code: "RQSN15",
      context: "O que são nervos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Conjuntos de fibras nervosas", isCorrect: true },
        { letter: "B", text: "Células sanguíneas", isCorrect: false },
        { letter: "C", text: "Hormônios", isCorrect: false },
        { letter: "D", text: "Músculos", isCorrect: false }
      ],
      explanation: "Os nervos conduzem impulsos."
    },
    {
      code: "RQSN16",
      context: "Qual sistema atua junto ao nervoso no controle do corpo?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Digestório", isCorrect: false },
        { letter: "B", text: "Respiratório", isCorrect: false },
        { letter: "C", text: "Circulatório", isCorrect: false },
        { letter: "D", text: "Endócrino", isCorrect: true }
      ],
      explanation: "O sistema endócrino atua com hormônios."
    },
    {
      code: "RQSN17",
      context: "Qual ação é um reflexo?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Pensar", isCorrect: false },
        { letter: "B", text: "Retirar a mão de algo quente", isCorrect: true },
        { letter: "C", text: "Correr", isCorrect: false },
        { letter: "D", text: "Falar", isCorrect: false }
      ],
      explanation: "Reflexos são respostas rápidas."
    },
    {
      code: "RQSN18",
      context: "Qual estrutura realiza o arco reflexo?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Medula espinal", isCorrect: true },
        { letter: "B", text: "Cérebro", isCorrect: false },
        { letter: "C", text: "Cerebelo", isCorrect: false },
        { letter: "D", text: "Hipotálamo", isCorrect: false }
      ],
      explanation: "O arco reflexo não depende do cérebro."
    },
    {
      code: "RQSN19",
      context: "Qual hábito ajuda a manter o sistema nervoso saudável?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Privação de sono", isCorrect: false },
        { letter: "B", text: "Estresse constante", isCorrect: false },
        { letter: "C", text: "Dormir bem", isCorrect: true },
        { letter: "D", text: "Assistir televisão", isCorrect: false }
      ],
      explanation: "O sono é essencial para o cérebro."
    },
    {
      code: "RQSN20",
      context: "Por que o sistema nervoso é essencial para a vida?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Porque permite resposta aos estímulos do ambiente", isCorrect: true },
        { letter: "B", text: "Porque transporta oxigênio", isCorrect: false },
        { letter: "C", text: "Porque digere alimentos", isCorrect: false },
        { letter: "D", text: "Porque elimina resíduos", isCorrect: false }
      ],
      explanation: "Ele coordena ações e reações do corpo."
    }
  ]
};

export const endocrineSystemQuestions: IQuestion = {
  discipline: DISCIPLINE.BIOLOGY,
  module: DISCIPLINE_MODULE.HUMAN_ANATOMY,
  data: [
    {
      code: "RQSE01",
      context: "Qual é a principal função do sistema endócrino?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Produzir e liberar hormônios", isCorrect: true },
        { letter: "B", text: "Transportar oxigênio", isCorrect: false },
        { letter: "C", text: "Realizar digestão", isCorrect: false },
        { letter: "D", text: "Produzir impulsos nervosos", isCorrect: false }
      ],
      explanation: "O sistema endócrino regula funções por meio de hormônios."
    },
    {
      code: "RQSE02",
      context: "O que são hormônios?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Células do sangue", isCorrect: false },
        { letter: "B", text: "Mensageiros químicos do corpo", isCorrect: true },
        { letter: "C", text: "Impulsos elétricos", isCorrect: false },
        { letter: "D", text: "Enzimas digestivas", isCorrect: false }
      ],
      explanation: "Hormônios levam informações aos órgãos-alvo."
    },
    {
      code: "RQSE03",
      context: "Qual glândula é conhecida como glândula mestra?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Tireoide", isCorrect: false },
        { letter: "B", text: "Suprarrenal", isCorrect: false },
        { letter: "C", text: "Hipófise", isCorrect: true },
        { letter: "D", text: "Pâncreas", isCorrect: false }
      ],
      explanation: "A hipófise controla outras glândulas."
    },
    {
      code: "RQSE04",
      context: "Qual glândula regula o metabolismo?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Tireoide", isCorrect: true },
        { letter: "B", text: "Hipófise", isCorrect: false },
        { letter: "C", text: "Pâncreas", isCorrect: false },
        { letter: "D", text: "Pineal", isCorrect: false }
      ],
      explanation: "Hormônios tireoidianos regulam o gasto de energia."
    },
    {
      code: "RQSE05",
      context: "Qual hormônio regula a quantidade de açúcar no sangue?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Adrenalina", isCorrect: false },
        { letter: "B", text: "Tiroxina", isCorrect: false },
        { letter: "C", text: "Melatonina", isCorrect: false },
        { letter: "D", text: "Insulina", isCorrect: true }
      ],
      explanation: "A insulina reduz a glicose no sangue."
    },
    {
      code: "RQSE06",
      context: "Qual glândula produz insulina?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Tireoide", isCorrect: false },
        { letter: "B", text: "Pâncreas", isCorrect: true },
        { letter: "C", text: "Hipófise", isCorrect: false },
        { letter: "D", text: "Suprarrenal", isCorrect: false }
      ],
      explanation: "O pâncreas também atua no sistema digestório."
    },
    {
      code: "RQSE07",
      context: "Qual hormônio prepara o corpo para situações de estresse?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Adrenalina", isCorrect: true },
        { letter: "B", text: "Insulina", isCorrect: false },
        { letter: "C", text: "Melatonina", isCorrect: false },
        { letter: "D", text: "Progesterona", isCorrect: false }
      ],
      explanation: "A adrenalina é liberada pelas suprarrenais."
    },
    {
      code: "RQSE08",
      context: "Qual glândula produz melatonina?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Hipófise", isCorrect: false },
        { letter: "B", text: "Tireoide", isCorrect: false },
        { letter: "C", text: "Pineal", isCorrect: true },
        { letter: "D", text: "Pâncreas", isCorrect: false }
      ],
      explanation: "A melatonina regula o sono."
    },
    {
      code: "RQSE09",
      context: "Qual hormônio está relacionado ao crescimento?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Insulina", isCorrect: false },
        { letter: "B", text: "Hormônio do crescimento (GH)", isCorrect: true },
        { letter: "C", text: "Cortisol", isCorrect: false },
        { letter: "D", text: "Testosterona", isCorrect: false }
      ],
      explanation: "O GH é produzido pela hipófise."
    },
    {
      code: "RQSE10",
      context: "Qual glândula produz o hormônio do crescimento?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Hipófise", isCorrect: true },
        { letter: "B", text: "Pâncreas", isCorrect: false },
        { letter: "C", text: "Pineal", isCorrect: false },
        { letter: "D", text: "Suprarrenal", isCorrect: false }
      ],
      explanation: "A hipófise libera diversos hormônios."
    },
    {
      code: "RQSE11",
      context: "Qual glândula está localizada no pescoço?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Pineal", isCorrect: false },
        { letter: "B", text: "Hipófise", isCorrect: false },
        { letter: "C", text: "Suprarrenal", isCorrect: false },
        { letter: "D", text: "Tireoide", isCorrect: true }
      ],
      explanation: "A tireoide tem formato de borboleta."
    },
    {
      code: "RQSE12",
      context: "Qual glândula está localizada acima dos rins?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Suprarrenais", isCorrect: true },
        { letter: "B", text: "Tireoide", isCorrect: false },
        { letter: "C", text: "Hipófise", isCorrect: false },
        { letter: "D", text: "Pâncreas", isCorrect: false }
      ],
      explanation: "As suprarrenais produzem adrenalina."
    },
    {
      code: "RQSE13",
      context: "Qual hormônio reduz a glicose no sangue?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Glucagon", isCorrect: false },
        { letter: "B", text: "Adrenalina", isCorrect: false },
        { letter: "C", text: "Insulina", isCorrect: true },
        { letter: "D", text: "Cortisol", isCorrect: false }
      ],
      explanation: "A insulina facilita a entrada de glicose nas células."
    },
    {
      code: "RQSE14",
      context: "Qual hormônio aumenta a glicose no sangue?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Glucagon", isCorrect: true },
        { letter: "B", text: "Insulina", isCorrect: false },
        { letter: "C", text: "Melatonina", isCorrect: false },
        { letter: "D", text: "Tiroxina", isCorrect: false }
      ],
      explanation: "O glucagon atua de forma oposta à insulina."
    },
    {
      code: "RQSE15",
      context: "Qual sistema atua junto com o endócrino na regulação do corpo?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Digestório", isCorrect: false },
        { letter: "B", text: "Nervoso", isCorrect: true },
        { letter: "C", text: "Respiratório", isCorrect: false },
        { letter: "D", text: "Urinário", isCorrect: false }
      ],
      explanation: "Os dois sistemas mantêm a homeostase."
    },
    {
      code: "RQSE16",
      context: "Qual hormônio regula o ciclo do sono?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Insulina", isCorrect: false },
        { letter: "B", text: "Adrenalina", isCorrect: false },
        { letter: "C", text: "Tiroxina", isCorrect: false },
        { letter: "D", text: "Melatonina", isCorrect: true }
      ],
      explanation: "A melatonina é liberada à noite."
    },
    {
      code: "RQSE17",
      context: "Qual hormônio masculino é produzido nos testículos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Testosterona", isCorrect: true },
        { letter: "B", text: "Progesterona", isCorrect: false },
        { letter: "C", text: "Estrógeno", isCorrect: false },
        { letter: "D", text: "Insulina", isCorrect: false }
      ],
      explanation: "A testosterona atua no desenvolvimento masculino."
    },
    {
      code: "RQSE18",
      context: "Qual hormônio feminino é produzido nos ovários?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Testosterona", isCorrect: false },
        { letter: "B", text: "Insulina", isCorrect: false },
        { letter: "C", text: "Estrógeno", isCorrect: true },
        { letter: "D", text: "Cortisol", isCorrect: false }
      ],
      explanation: "O estrógeno atua no ciclo menstrual."
    },
    {
      code: "RQSE19",
      context: "Qual doença está relacionada ao sistema endócrino?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Asma", isCorrect: false },
        { letter: "B", text: "Diabetes", isCorrect: true },
        { letter: "C", text: "Bronquite", isCorrect: false },
        { letter: "D", text: "Hipertensão", isCorrect: false }
      ],
      explanation: "O diabetes envolve falhas na insulina."
    },
    {
      code: "RQSE20",
      context: "Por que o sistema endócrino é essencial para a vida?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Porque regula crescimento, metabolismo e equilíbrio do corpo", isCorrect: true },
        { letter: "B", text: "Porque transporta oxigênio", isCorrect: false },
        { letter: "C", text: "Porque digere alimentos", isCorrect: false },
        { letter: "D", text: "Porque elimina resíduos", isCorrect: false }
      ],
      explanation: "Os hormônios controlam funções vitais."
    }
  ]
};

export const muscularSystemQuestions: IQuestion = {
  discipline: DISCIPLINE.BIOLOGY,
  module: DISCIPLINE_MODULE.HUMAN_ANATOMY,
  data: [
    {
      code: "RQSM01",
      context: "Qual é a principal função do sistema muscular?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Permitir movimentos do corpo", isCorrect: true },
        { letter: "B", text: "Produzir hormônios", isCorrect: false },
        { letter: "C", text: "Transportar oxigênio", isCorrect: false },
        { letter: "D", text: "Filtrar o sangue", isCorrect: false }
      ],
      explanation: "Os músculos permitem locomoção e movimentos voluntários e involuntários."
    },
    {
      code: "RQSM02",
      context: "Quantos tipos principais de tecido muscular existem?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Dois", isCorrect: false },
        { letter: "B", text: "Três", isCorrect: true },
        { letter: "C", text: "Quatro", isCorrect: false },
        { letter: "D", text: "Cinco", isCorrect: false }
      ],
      explanation: "São eles: estriado esquelético, estriado cardíaco e liso."
    },
    {
      code: "RQSM03",
      context: "Qual tipo de músculo é responsável pelos movimentos voluntários?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Liso", isCorrect: false },
        { letter: "B", text: "Cardíaco", isCorrect: false },
        { letter: "C", text: "Estriado esquelético", isCorrect: true },
        { letter: "D", text: "Visceral", isCorrect: false }
      ],
      explanation: "O músculo estriado esquelético permite movimentos conscientes."
    },
    {
      code: "RQSM04",
      context: "Qual músculo é responsável pelos batimentos do coração?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Músculo estriado cardíaco", isCorrect: true },
        { letter: "B", text: "Músculo liso", isCorrect: false },
        { letter: "C", text: "Músculo esquelético", isCorrect: false },
        { letter: "D", text: "Músculo voluntário", isCorrect: false }
      ],
      explanation: "O músculo cardíaco funciona de forma involuntária."
    },
    {
      code: "RQSM05",
      context: "Onde o músculo liso é encontrado?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Nos ossos", isCorrect: false },
        { letter: "B", text: "No coração", isCorrect: false },
        { letter: "C", text: "Nos tendões", isCorrect: false },
        { letter: "D", text: "Nos órgãos internos", isCorrect: true }
      ],
      explanation: "O músculo liso atua em órgãos como intestino e estômago."
    },
    {
      code: "RQSM06",
      context: "Qual estrutura liga o músculo ao osso?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Tendão", isCorrect: true },
        { letter: "B", text: "Ligamento", isCorrect: false },
        { letter: "C", text: "Cartilagem", isCorrect: false },
        { letter: "D", text: "Articulação", isCorrect: false }
      ],
      explanation: "Os tendões transmitem a força do músculo ao osso."
    },
    {
      code: "RQSM07",
      context: "O que acontece quando um músculo se contrai?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Ele aumenta de tamanho", isCorrect: false },
        { letter: "B", text: "Ele encurta", isCorrect: true },
        { letter: "C", text: "Ele relaxa", isCorrect: false },
        { letter: "D", text: "Ele se alonga sem força", isCorrect: false }
      ],
      explanation: "A contração muscular gera movimento."
    },
    {
      code: "RQSM08",
      context: "Qual músculo é responsável pela flexão do braço?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Tríceps", isCorrect: false },
        { letter: "B", text: "Deltoide", isCorrect: false },
        { letter: "C", text: "Bíceps", isCorrect: true },
        { letter: "D", text: "Peitoral", isCorrect: false }
      ],
      explanation: "O bíceps dobra o braço no cotovelo."
    },
    {
      code: "RQSM09",
      context: "Qual músculo atua de forma oposta ao bíceps?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Tríceps", isCorrect: true },
        { letter: "B", text: "Peitoral", isCorrect: false },
        { letter: "C", text: "Deltoide", isCorrect: false },
        { letter: "D", text: "Abdominal", isCorrect: false }
      ],
      explanation: "Bíceps e tríceps são músculos antagonistas."
    },
    {
      code: "RQSM10",
      context: "O que são músculos antagonistas?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Músculos que não se movem", isCorrect: false },
        { letter: "B", text: "Músculos do coração", isCorrect: false },
        { letter: "C", text: "Músculos involuntários", isCorrect: false },
        { letter: "D", text: "Músculos que atuam em sentidos opostos", isCorrect: true }
      ],
      explanation: "Um contrai enquanto o outro relaxa."
    },
    {
      code: "RQSM11",
      context: "Qual músculo auxilia na respiração?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Bíceps", isCorrect: false },
        { letter: "B", text: "Diafragma", isCorrect: true },
        { letter: "C", text: "Tríceps", isCorrect: false },
        { letter: "D", text: "Glúteo", isCorrect: false }
      ],
      explanation: "O diafragma é essencial para inspirar e expirar."
    },
    {
      code: "RQSM12",
      context: "Qual é o maior músculo do corpo humano?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Glúteo máximo", isCorrect: true },
        { letter: "B", text: "Bíceps", isCorrect: false },
        { letter: "C", text: "Peitoral", isCorrect: false },
        { letter: "D", text: "Abdominal", isCorrect: false }
      ],
      explanation: "O glúteo máximo auxilia na postura e locomoção."
    },
    {
      code: "RQSM13",
      context: "Qual músculo protege órgãos internos e auxilia na postura?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Bíceps", isCorrect: false },
        { letter: "B", text: "Tríceps", isCorrect: false },
        { letter: "C", text: "Abdominais", isCorrect: true },
        { letter: "D", text: "Deltoide", isCorrect: false }
      ],
      explanation: "Os músculos abdominais sustentam o tronco."
    },
    {
      code: "RQSM14",
      context: "Qual tipo de músculo é involuntário?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Estriado esquelético", isCorrect: false },
        { letter: "B", text: "Liso", isCorrect: true },
        { letter: "C", text: "Voluntário", isCorrect: false },
        { letter: "D", text: "Bíceps", isCorrect: false }
      ],
      explanation: "O músculo liso atua sem controle consciente."
    },
    {
      code: "RQSM15",
      context: "Qual sistema trabalha em conjunto com o sistema muscular?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Sistema esquelético", isCorrect: true },
        { letter: "B", text: "Sistema urinário", isCorrect: false },
        { letter: "C", text: "Sistema digestório", isCorrect: false },
        { letter: "D", text: "Sistema endócrino", isCorrect: false }
      ],
      explanation: "Juntos, formam o sistema locomotor."
    },
    {
      code: "RQSM16",
      context: "O que ocorre quando um músculo relaxa?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Ele se contrai mais", isCorrect: false },
        { letter: "B", text: "Ele para de funcionar", isCorrect: false },
        { letter: "C", text: "Ele desaparece", isCorrect: false },
        { letter: "D", text: "Ele retorna ao tamanho normal", isCorrect: true }
      ],
      explanation: "Contração e relaxamento permitem o movimento."
    },
    {
      code: "RQSM17",
      context: "Qual nutriente é essencial para o funcionamento muscular?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Vitamina C", isCorrect: false },
        { letter: "B", text: "Proteína", isCorrect: true },
        { letter: "C", text: "Fibra", isCorrect: false },
        { letter: "D", text: "Água apenas", isCorrect: false }
      ],
      explanation: "Proteínas são fundamentais para os músculos."
    },
    {
      code: "RQSM18",
      context: "O que causa a fadiga muscular?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Uso excessivo do músculo", isCorrect: true },
        { letter: "B", text: "Relaxamento muscular", isCorrect: false },
        { letter: "C", text: "Falta de ossos", isCorrect: false },
        { letter: "D", text: "Excesso de hormônios", isCorrect: false }
      ],
      explanation: "O esforço prolongado causa cansaço muscular."
    },
    {
      code: "RQSM19",
      context: "Qual músculo permite levantar o braço lateralmente?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Bíceps", isCorrect: false },
        { letter: "B", text: "Tríceps", isCorrect: false },
        { letter: "C", text: "Deltoide", isCorrect: true },
        { letter: "D", text: "Peitoral", isCorrect: false }
      ],
      explanation: "O deltoide atua no ombro."
    },
    {
      code: "RQSM20",
      context: "Por que o sistema muscular é essencial para a vida?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Porque permite movimento, postura e funções vitais", isCorrect: true },
        { letter: "B", text: "Porque produz sangue", isCorrect: false },
        { letter: "C", text: "Porque filtra toxinas", isCorrect: false },
        { letter: "D", text: "Porque controla hormônios", isCorrect: false }
      ],
      explanation: "Os músculos atuam na locomoção, respiração e circulação."
    }
  ]
};

export const skeletalSystemQuestions: IQuestion = {
  discipline: DISCIPLINE.BIOLOGY,
  module: DISCIPLINE_MODULE.HUMAN_ANATOMY,
  data: [
    {
      code: "RQSS01",
      context: "Qual é a principal função do sistema esquelético?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Sustentar e proteger o corpo", isCorrect: true },
        { letter: "B", text: "Produzir hormônios", isCorrect: false },
        { letter: "C", text: "Transportar oxigênio", isCorrect: false },
        { letter: "D", text: "Realizar digestão", isCorrect: false }
      ],
      explanation: "Os ossos sustentam o corpo e protegem órgãos vitais."
    },
    {
      code: "RQSS02",
      context: "Quantos ossos possui aproximadamente o corpo humano adulto?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "180", isCorrect: false },
        { letter: "B", text: "206", isCorrect: true },
        { letter: "C", text: "250", isCorrect: false },
        { letter: "D", text: "300", isCorrect: false }
      ],
      explanation: "O número padrão é cerca de 206 ossos."
    },
    {
      code: "RQSS03",
      context: "Qual estrutura protege o cérebro?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Coluna vertebral", isCorrect: false },
        { letter: "B", text: "Costelas", isCorrect: false },
        { letter: "C", text: "Crânio", isCorrect: true },
        { letter: "D", text: "Pelve", isCorrect: false }
      ],
      explanation: "O crânio envolve e protege o encéfalo."
    },
    {
      code: "RQSS04",
      context: "Qual é a função da coluna vertebral?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Sustentar o corpo e proteger a medula espinal", isCorrect: true },
        { letter: "B", text: "Produzir células do sangue", isCorrect: false },
        { letter: "C", text: "Auxiliar na digestão", isCorrect: false },
        { letter: "D", text: "Permitir a respiração", isCorrect: false }
      ],
      explanation: "A coluna mantém a postura e protege a medula."
    },
    {
      code: "RQSS05",
      context: "Qual conjunto de ossos protege coração e pulmões?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Crânio", isCorrect: false },
        { letter: "B", text: "Pelve", isCorrect: false },
        { letter: "C", text: "Coluna vertebral", isCorrect: false },
        { letter: "D", text: "Caixa torácica", isCorrect: true }
      ],
      explanation: "A caixa torácica é formada por costelas e esterno."
    },
    {
      code: "RQSS06",
      context: "Qual osso é considerado o mais longo do corpo humano?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Úmero", isCorrect: false },
        { letter: "B", text: "Fêmur", isCorrect: true },
        { letter: "C", text: "Tíbia", isCorrect: false },
        { letter: "D", text: "Rádio", isCorrect: false }
      ],
      explanation: "O fêmur está localizado na coxa."
    },
    {
      code: "RQSS07",
      context: "Qual osso protege o coração?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Crânio", isCorrect: false },
        { letter: "B", text: "Coluna", isCorrect: false },
        { letter: "C", text: "Esterno", isCorrect: true },
        { letter: "D", text: "Pelve", isCorrect: false }
      ],
      explanation: "O esterno fica no centro do peito."
    },
    {
      code: "RQSS08",
      context: "O que são articulações?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Regiões onde dois ossos se encontram", isCorrect: true },
        { letter: "B", text: "Músculos que ligam ossos", isCorrect: false },
        { letter: "C", text: "Células do sangue", isCorrect: false },
        { letter: "D", text: "Partes do cérebro", isCorrect: false }
      ],
      explanation: "As articulações permitem movimento."
    },
    {
      code: "RQSS09",
      context: "Qual tipo de articulação permite maior movimento?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Imóvel", isCorrect: false },
        { letter: "B", text: "Semimóvel", isCorrect: false },
        { letter: "C", text: "Fibrosa", isCorrect: false },
        { letter: "D", text: "Móvel", isCorrect: true }
      ],
      explanation: "Exemplo: ombro e joelho."
    },
    {
      code: "RQSS10",
      context: "Qual estrutura liga os ossos entre si?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Tendões", isCorrect: false },
        { letter: "B", text: "Ligamentos", isCorrect: true },
        { letter: "C", text: "Cartilagens", isCorrect: false },
        { letter: "D", text: "Músculos", isCorrect: false }
      ],
      explanation: "Ligamentos estabilizam as articulações."
    },
    {
      code: "RQSS11",
      context: "Qual tecido reveste as extremidades dos ossos?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Osso compacto", isCorrect: false },
        { letter: "B", text: "Medula óssea", isCorrect: false },
        { letter: "C", text: "Cartilagem", isCorrect: true },
        { letter: "D", text: "Ligamento", isCorrect: false }
      ],
      explanation: "A cartilagem reduz o atrito."
    },
    {
      code: "RQSS12",
      context: "Qual a função da medula óssea?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Produzir células do sangue", isCorrect: true },
        { letter: "B", text: "Permitir movimentos", isCorrect: false },
        { letter: "C", text: "Produzir hormônios", isCorrect: false },
        { letter: "D", text: "Filtrar o sangue", isCorrect: false }
      ],
      explanation: "Hematopoiese ocorre na medula."
    },
    {
      code: "RQSS13",
      context: "Qual osso protege os pulmões?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Crânio", isCorrect: false },
        { letter: "B", text: "Pelve", isCorrect: false },
        { letter: "C", text: "Coluna vertebral", isCorrect: false },
        { letter: "D", text: "Costelas", isCorrect: true }
      ],
      explanation: "As costelas formam a caixa torácica."
    },
    {
      code: "RQSS14",
      context: "Qual osso faz parte do braço?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Fêmur", isCorrect: false },
        { letter: "B", text: "Úmero", isCorrect: true },
        { letter: "C", text: "Tíbia", isCorrect: false },
        { letter: "D", text: "Fíbula", isCorrect: false }
      ],
      explanation: "O úmero liga ombro ao cotovelo."
    },
    {
      code: "RQSS15",
      context: "Qual conjunto de ossos forma a pelve?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Crânio", isCorrect: false },
        { letter: "B", text: "Costelas", isCorrect: false },
        { letter: "C", text: "Quadril", isCorrect: true },
        { letter: "D", text: "Coluna cervical", isCorrect: false }
      ],
      explanation: "A pelve sustenta órgãos e membros inferiores."
    },
    {
      code: "RQSS16",
      context: "Qual osso protege a medula espinal?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Coluna vertebral", isCorrect: true },
        { letter: "B", text: "Crânio", isCorrect: false },
        { letter: "C", text: "Costelas", isCorrect: false },
        { letter: "D", text: "Esterno", isCorrect: false }
      ],
      explanation: "A medula passa pelo interior das vértebras."
    },
    {
      code: "RQSS17",
      context: "Qual é a função do sistema esquelético junto ao muscular?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Produzir hormônios", isCorrect: false },
        { letter: "B", text: "Realizar digestão", isCorrect: false },
        { letter: "C", text: "Transportar sangue", isCorrect: false },
        { letter: "D", text: "Permitir locomoção", isCorrect: true }
      ],
      explanation: "Ambos formam o sistema locomotor."
    },
    {
      code: "RQSS18",
      context: "Qual vitamina é essencial para a saúde dos ossos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Vitamina C", isCorrect: false },
        { letter: "B", text: "Vitamina D", isCorrect: true },
        { letter: "C", text: "Vitamina A", isCorrect: false },
        { letter: "D", text: "Vitamina K", isCorrect: false }
      ],
      explanation: "A vitamina D ajuda na absorção de cálcio."
    },
    {
      code: "RQSS19",
      context: "Qual mineral é fundamental para a formação óssea?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Cálcio", isCorrect: true },
        { letter: "B", text: "Ferro", isCorrect: false },
        { letter: "C", text: "Potássio", isCorrect: false },
        { letter: "D", text: "Sódio", isCorrect: false }
      ],
      explanation: "O cálcio dá resistência aos ossos."
    },
    {
      code: "RQSS20",
      context: "Por que o sistema esquelético é essencial para a vida?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Porque sustenta, protege órgãos e permite movimento", isCorrect: true },
        { letter: "B", text: "Porque produz energia", isCorrect: false },
        { letter: "C", text: "Porque regula hormônios", isCorrect: false },
        { letter: "D", text: "Porque filtra o sangue", isCorrect: false }
      ],
      explanation: "Sem ossos, não haveria sustentação nem proteção."
    }
  ]
};

export const urinarySystemQuestions: IQuestion = {
  discipline: DISCIPLINE.BIOLOGY,
  module: DISCIPLINE_MODULE.HUMAN_ANATOMY,
  data: [
    {
      code: "RQSU01",
      context: "Qual é a principal função do sistema urinário?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Eliminar resíduos do sangue", isCorrect: true },
        { letter: "B", text: "Produzir hormônios", isCorrect: false },
        { letter: "C", text: "Realizar digestão", isCorrect: false },
        { letter: "D", text: "Transportar oxigênio", isCorrect: false }
      ],
      explanation: "O sistema urinário filtra o sangue e forma a urina."
    },
    {
      code: "RQSU02",
      context: "Qual órgão é responsável pela filtração do sangue?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Bexiga", isCorrect: false },
        { letter: "B", text: "Ureter", isCorrect: false },
        { letter: "C", text: "Rins", isCorrect: true },
        { letter: "D", text: "Uretra", isCorrect: false }
      ],
      explanation: "Os rins removem substâncias tóxicas do sangue."
    },
    {
      code: "RQSU03",
      context: "Quantos rins possui o ser humano normalmente?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Um", isCorrect: false },
        { letter: "B", text: "Dois", isCorrect: true },
        { letter: "C", text: "Três", isCorrect: false },
        { letter: "D", text: "Quatro", isCorrect: false }
      ],
      explanation: "A maioria das pessoas possui dois rins."
    },
    {
      code: "RQSU04",
      context: "Qual estrutura transporta a urina dos rins até a bexiga?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Ureter", isCorrect: true },
        { letter: "B", text: "Uretra", isCorrect: false },
        { letter: "C", text: "Néfron", isCorrect: false },
        { letter: "D", text: "Pelvis renal", isCorrect: false }
      ],
      explanation: "Os ureteres conduzem a urina até a bexiga."
    },
    {
      code: "RQSU05",
      context: "Qual órgão armazena a urina temporariamente?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Rim", isCorrect: false },
        { letter: "B", text: "Ureter", isCorrect: false },
        { letter: "C", text: "Uretra", isCorrect: false },
        { letter: "D", text: "Bexiga urinária", isCorrect: true }
      ],
      explanation: "A bexiga acumula a urina até a eliminação."
    },
    {
      code: "RQSU06",
      context: "Qual estrutura elimina a urina para fora do corpo?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Ureter", isCorrect: false },
        { letter: "B", text: "Uretra", isCorrect: true },
        { letter: "C", text: "Néfron", isCorrect: false },
        { letter: "D", text: "Pelvis renal", isCorrect: false }
      ],
      explanation: "A uretra conduz a urina ao exterior."
    },
    {
      code: "RQSU07",
      context: "O que é o néfron?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Unidade funcional do rim", isCorrect: true },
        { letter: "B", text: "Um tipo de músculo", isCorrect: false },
        { letter: "C", text: "Um osso", isCorrect: false },
        { letter: "D", text: "Um vaso sanguíneo", isCorrect: false }
      ],
      explanation: "O néfron realiza a filtração do sangue."
    },
    {
      code: "RQSU08",
      context: "Qual substância é eliminada na urina?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Oxigênio", isCorrect: false },
        { letter: "B", text: "Glicose sempre", isCorrect: false },
        { letter: "C", text: "Ureia", isCorrect: true },
        { letter: "D", text: "Proteínas grandes", isCorrect: false }
      ],
      explanation: "A ureia é um resíduo do metabolismo."
    },
    {
      code: "RQSU09",
      context: "Qual é a função da urina?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Transportar nutrientes", isCorrect: false },
        { letter: "B", text: "Produzir energia", isCorrect: false },
        { letter: "C", text: "Regular batimentos cardíacos", isCorrect: false },
        { letter: "D", text: "Eliminar substâncias tóxicas", isCorrect: true }
      ],
      explanation: "A urina remove resíduos do corpo."
    },
    {
      code: "RQSU10",
      context: "Qual sistema atua junto ao sistema urinário na excreção?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Sistema circulatório", isCorrect: true },
        { letter: "B", text: "Sistema respiratório", isCorrect: false },
        { letter: "C", text: "Sistema nervoso", isCorrect: false },
        { letter: "D", text: "Sistema muscular", isCorrect: false }
      ],
      explanation: "O sangue leva resíduos até os rins."
    },
    {
      code: "RQSU11",
      context: "Qual a principal função dos rins além da excreção?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Produzir oxigênio", isCorrect: false },
        { letter: "B", text: "Produzir energia", isCorrect: false },
        { letter: "C", text: "Regular água e sais minerais", isCorrect: true },
        { letter: "D", text: "Produzir bile", isCorrect: false }
      ],
      explanation: "Os rins mantêm o equilíbrio do corpo."
    },
    {
      code: "RQSU12",
      context: "Qual hormônio é produzido pelos rins?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Insulina", isCorrect: false },
        { letter: "B", text: "Eritropoetina", isCorrect: true },
        { letter: "C", text: "Tiroxina", isCorrect: false },
        { letter: "D", text: "Adrenalina", isCorrect: false }
      ],
      explanation: "A eritropoetina estimula a produção de hemácias."
    },
    {
      code: "RQSU13",
      context: "O que acontece quando os rins não funcionam corretamente?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Resíduos se acumulam no sangue", isCorrect: true },
        { letter: "B", text: "O corpo para de respirar", isCorrect: false },
        { letter: "C", text: "Os ossos se enfraquecem", isCorrect: false },
        { letter: "D", text: "O estômago para de funcionar", isCorrect: false }
      ],
      explanation: "A falha renal causa intoxicação do organismo."
    },
    {
      code: "RQSU14",
      context: "Qual é a função da bexiga urinária?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Filtrar o sangue", isCorrect: false },
        { letter: "B", text: "Produzir hormônios", isCorrect: false },
        { letter: "C", text: "Transportar urina", isCorrect: false },
        { letter: "D", text: "Armazenar urina", isCorrect: true }
      ],
      explanation: "A bexiga armazena a urina até a micção."
    },
    {
      code: "RQSU15",
      context: "Qual hábito ajuda a manter o sistema urinário saudável?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Evitar beber água", isCorrect: false },
        { letter: "B", text: "Beber bastante água", isCorrect: true },
        { letter: "C", text: "Consumir muito sal", isCorrect: false },
        { letter: "D", text: "Prender a urina sempre", isCorrect: false }
      ],
      explanation: "A hidratação facilita a filtração."
    },
    {
      code: "RQSU16",
      context: "Qual sistema regula a eliminação de água pelo corpo?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Sistema nervoso", isCorrect: false },
        { letter: "B", text: "Sistema digestório", isCorrect: false },
        { letter: "C", text: "Sistema urinário", isCorrect: true },
        { letter: "D", text: "Sistema respiratório", isCorrect: false }
      ],
      explanation: "Os rins controlam o volume de água."
    },
    {
      code: "RQSU17",
      context: "Qual substância NÃO deve aparecer na urina em condições normais?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Proteínas", isCorrect: true },
        { letter: "B", text: "Água", isCorrect: false },
        { letter: "C", text: "Ureia", isCorrect: false },
        { letter: "D", text: "Sais minerais", isCorrect: false }
      ],
      explanation: "Proteínas indicam problema renal."
    },
    {
      code: "RQSU18",
      context: "Qual parte do néfron realiza a filtração inicial do sangue?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Túbulo renal", isCorrect: false },
        { letter: "B", text: "Alça de Henle", isCorrect: false },
        { letter: "C", text: "Ducto coletor", isCorrect: false },
        { letter: "D", text: "Glomérulo", isCorrect: true }
      ],
      explanation: "O glomérulo filtra o plasma sanguíneo."
    },
    {
      code: "RQSU19",
      context: "Qual doença está relacionada ao sistema urinário?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Asma", isCorrect: false },
        { letter: "B", text: "Anemia", isCorrect: false },
        { letter: "C", text: "Cálculo renal", isCorrect: true },
        { letter: "D", text: "Diabetes tipo 1", isCorrect: false }
      ],
      explanation: "Pedras nos rins afetam o sistema urinário."
    },
    {
      code: "RQSU20",
      context: "Por que o sistema urinário é essencial para a vida?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Porque remove resíduos e mantém o equilíbrio interno", isCorrect: true },
        { letter: "B", text: "Porque produz oxigênio", isCorrect: false },
        { letter: "C", text: "Porque controla movimentos", isCorrect: false },
        { letter: "D", text: "Porque digere alimentos", isCorrect: false }
      ],
      explanation: "Sem excreção, o corpo se intoxica."
    }
  ]
};

export const lymphaticSystemQuestions: IQuestion = {
  discipline: DISCIPLINE.BIOLOGY,
  module: DISCIPLINE_MODULE.HUMAN_ANATOMY,
  data: [
    {
      code: "RQSL01",
      context: "Qual é a principal função do sistema linfático?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Defender o corpo contra infecções", isCorrect: true },
        { letter: "B", text: "Transportar oxigênio", isCorrect: false },
        { letter: "C", text: "Produzir hormônios", isCorrect: false },
        { letter: "D", text: "Realizar digestão", isCorrect: false }
      ],
      explanation: "O sistema linfático é essencial para a imunidade."
    },
    {
      code: "RQSL02",
      context: "Qual líquido circula pelo sistema linfático?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Sangue", isCorrect: false },
        { letter: "B", text: "Urina", isCorrect: false },
        { letter: "C", text: "Linfa", isCorrect: true },
        { letter: "D", text: "Bile", isCorrect: false }
      ],
      explanation: "A linfa transporta células de defesa e nutrientes."
    },
    {
      code: "RQSL03",
      context: "Qual órgão é considerado o principal do sistema linfático?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Rim", isCorrect: false },
        { letter: "B", text: "Baço", isCorrect: true },
        { letter: "C", text: "Fígado", isCorrect: false },
        { letter: "D", text: "Coração", isCorrect: false }
      ],
      explanation: "O baço filtra sangue e combate infecções."
    },
    {
      code: "RQSL04",
      context: "Qual estrutura armazena linfócitos e filtra linfa?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Timo", isCorrect: false },
        { letter: "B", text: "Medula óssea", isCorrect: false },
        { letter: "C", text: "Linfonodo", isCorrect: true },
        { letter: "D", text: "Pelve", isCorrect: false }
      ],
      explanation: "Os linfonodos filtram a linfa e ativam linfócitos."
    },
    {
      code: "RQSL05",
      context: "Qual órgão produz linfócitos T?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Baço", isCorrect: false },
        { letter: "B", text: "Timo", isCorrect: true },
        { letter: "C", text: "Medula óssea", isCorrect: false },
        { letter: "D", text: "Linfonodo", isCorrect: false }
      ],
      explanation: "O timo é responsável pelo amadurecimento de linfócitos T."
    },
    {
      code: "RQSL06",
      context: "Qual é a função das amígdalas no sistema linfático?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Proteger o corpo de germes na boca e garganta", isCorrect: true },
        { letter: "B", text: "Produzir urina", isCorrect: false },
        { letter: "C", text: "Filtrar sangue", isCorrect: false },
        { letter: "D", text: "Transportar oxigênio", isCorrect: false }
      ],
      explanation: "As amígdalas atuam como barreiras contra micro-organismos."
    },
    {
      code: "RQSL07",
      context: "Qual vaso transporta a linfa de volta ao sangue?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Veia porta", isCorrect: false },
        { letter: "B", text: "Artéria", isCorrect: false },
        { letter: "C", text: "Ducto linfático", isCorrect: true },
        { letter: "D", text: "Capilar sanguíneo", isCorrect: false }
      ],
      explanation: "Os ductos linfáticos drenam linfa para o sistema venoso."
    },
    {
      code: "RQSL08",
      context: "Qual célula é fundamental para a defesa do organismo no sistema linfático?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Neurônio", isCorrect: false },
        { letter: "B", text: "Linfócito", isCorrect: true },
        { letter: "C", text: "Hemácia", isCorrect: false },
        { letter: "D", text: "Plaqueta", isCorrect: false }
      ],
      explanation: "Os linfócitos identificam e atacam agentes invasores."
    },
    {
      code: "RQSL09",
      context: "O que ocorre quando há inchaço nos linfonodos?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Produção de urina aumenta", isCorrect: false },
        { letter: "B", text: "O coração bate mais rápido", isCorrect: false },
        { letter: "C", text: "O sangue se coagula", isCorrect: false },
        { letter: "D", text: "Indica reação do corpo a infecção", isCorrect: true }
      ],
      explanation: "Linfonodos inchados sinalizam defesa imunológica."
    },
    {
      code: "RQSL10",
      context: "Qual órgão atua como reservatório de sangue e linfócitos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Rim", isCorrect: false },
        { letter: "B", text: "Baço", isCorrect: true },
        { letter: "C", text: "Timo", isCorrect: false },
        { letter: "D", text: "Pâncreas", isCorrect: false }
      ],
      explanation: "O baço armazena células do sangue e combate infecções."
    },
    {
      code: "RQSL11",
      context: "Qual é a função da linfa no corpo humano?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Transportar oxigênio", isCorrect: false },
        { letter: "B", text: "Produzir hormônios", isCorrect: false },
        { letter: "C", text: "Transporte de células e nutrientes para defesa", isCorrect: true },
        { letter: "D", text: "Filtrar urina", isCorrect: false }
      ],
      explanation: "A linfa transporta células de defesa e lipídios."
    },
    {
      code: "RQSL12",
      context: "O que são linfonodos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Pequenos órgãos que filtram linfa", isCorrect: true },
        { letter: "B", text: "Células do sangue", isCorrect: false },
        { letter: "C", text: "Vasos sanguíneos", isCorrect: false },
        { letter: "D", text: "Músculos", isCorrect: false }
      ],
      explanation: "Os linfonodos removem microorganismos e ativam linfócitos."
    },
    {
      code: "RQSL13",
      context: "Qual órgão é responsável pelo amadurecimento de linfócitos T?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Baço", isCorrect: false },
        { letter: "B", text: "Timo", isCorrect: true },
        { letter: "C", text: "Linfonodo", isCorrect: false },
        { letter: "D", text: "Medula óssea", isCorrect: false }
      ],
      explanation: "O timo é essencial para a maturação de linfócitos T."
    },
    {
      code: "RQSL14",
      context: "Qual é a relação do sistema linfático com o sistema circulatório?",
      correctAltenative: "D",
      alternatives: [
        { letter: "A", text: "Transporta oxigênio diretamente", isCorrect: false },
        { letter: "B", text: "Produz hemácias", isCorrect: false },
        { letter: "C", text: "Regula batimentos cardíacos", isCorrect: false },
        { letter: "D", text: "Drena excesso de líquidos e devolve ao sangue", isCorrect: true }
      ],
      explanation: "O sistema linfático mantém equilíbrio de fluidos."
    },
    {
      code: "RQSL15",
      context: "O que acontece com a linfa nos linfonodos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "É convertida em sangue", isCorrect: false },
        { letter: "B", text: "É filtrada e ativam-se linfócitos", isCorrect: true },
        { letter: "C", text: "É eliminada pela urina", isCorrect: false },
        { letter: "D", text: "É transformada em plasma", isCorrect: false }
      ],
      explanation: "Os linfonodos defendem o corpo contra infecções."
    },
    {
      code: "RQSL16",
      context: "Qual função do baço está relacionada à destruição de células sanguíneas velhas?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Produzir linfócitos T", isCorrect: false },
        { letter: "B", text: "Transportar oxigênio", isCorrect: false },
        { letter: "C", text: "Filtrar e destruir hemácias envelhecidas", isCorrect: true },
        { letter: "D", text: "Produzir urina", isCorrect: false }
      ],
      explanation: "O baço recicla hemácias e participa da defesa."
    },
    {
      code: "RQSL17",
      context: "Qual parte do corpo contém maior concentração de linfonodos?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Pescoço, axilas e virilha", isCorrect: true },
        { letter: "B", text: "Pés e mãos", isCorrect: false },
        { letter: "C", text: "Costas", isCorrect: false },
        { letter: "D", text: "Rosto", isCorrect: false }
      ],
      explanation: "Estas regiões ajudam na defesa de órgãos vitais."
    },
    {
      code: "RQSL18",
      context: "O que são linfócitos?",
      correctAltenative: "B",
      alternatives: [
        { letter: "A", text: "Hormônios", isCorrect: false },
        { letter: "B", text: "Células de defesa do sistema imunológico", isCorrect: true },
        { letter: "C", text: "Vasos sanguíneos", isCorrect: false },
        { letter: "D", text: "Plaquetas", isCorrect: false }
      ],
      explanation: "Linfócitos combatem vírus, bactérias e células anormais."
    },
    {
      code: "RQSL19",
      context: "Qual órgão auxilia na absorção de lipídios do intestino?",
      correctAltenative: "C",
      alternatives: [
        { letter: "A", text: "Rim", isCorrect: false },
        { letter: "B", text: "Baço", isCorrect: false },
        { letter: "C", text: "Vasos linfáticos", isCorrect: true },
        { letter: "D", text: "Timo", isCorrect: false }
      ],
      explanation: "Os vasos linfáticos transportam gorduras absorvidas no intestino."
    },
    {
      code: "RQSL20",
      context: "Por que o sistema linfático é essencial para a vida?",
      correctAltenative: "A",
      alternatives: [
        { letter: "A", text: "Porque defende o corpo e mantém equilíbrio de líquidos", isCorrect: true },
        { letter: "B", text: "Porque produz energia", isCorrect: false },
        { letter: "C", text: "Porque digere alimentos", isCorrect: false },
        { letter: "D", text: "Porque transporta oxigênio sozinho", isCorrect: false }
      ],
      explanation: "O sistema linfático protege contra doenças e regula fluidos."
    }
  ]
};

export const getHumanAnatomyQuestions = (topic: typeof HUMAN_ANATOMY_TOPICS[keyof typeof HUMAN_ANATOMY_TOPICS]): IQuestion | undefined => {
  if (topic == HUMAN_ANATOMY_TOPICS.CIRCULATORY_SYSTEM) return circulatorySystemQuestions;
  if (topic == HUMAN_ANATOMY_TOPICS.DIGESTIVE_SYSTEM) return digestiveSystemQuestions;
  if (topic == HUMAN_ANATOMY_TOPICS.ENDOCRINE_SYSTEM) return endocrineSystemQuestions;
  if (topic == HUMAN_ANATOMY_TOPICS.LYMPHATIC_SYSTEM) return lymphaticSystemQuestions;
  if (topic == HUMAN_ANATOMY_TOPICS.RESPIRATORY_SYSTEM) return respiratorySystemQuestions;
  if (topic == HUMAN_ANATOMY_TOPICS.URINARY_SYSTEM) return urinarySystemQuestions;
  if (topic == HUMAN_ANATOMY_TOPICS.NERVOUS_SYSTEM) return nervousSystemQuestions;
  if (topic == HUMAN_ANATOMY_TOPICS.MUSCULAR_SYSTEM) return muscularSystemQuestions;
  if (topic == HUMAN_ANATOMY_TOPICS.SKELETAL_SYSTEM) return skeletalSystemQuestions;
  return undefined;
}