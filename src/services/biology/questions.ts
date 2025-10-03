import type { IQuestion } from "interfaces/question";

export const Questions: IQuestion[] = [
  {
    discipline: "BIOLOGY",
    topic: "CITOLOGY",
    data: [
      {
        code: "Q1A2B3C4",
        context: "Qual é a principal diferença entre células procarióticas e eucarióticas?",
        correctAltenative: "A",
        alternatives: [
          { letter: "A) Procarióticas não possuem núcleo nem organelas membranosas", isCorrect: true },
          { letter: "B) Eucarióticas não possuem núcleo", isCorrect: false },
          { letter: "C) Procarióticas possuem núcleo definido", isCorrect: false },
          { letter: "D) Ambas possuem núcleo definido", isCorrect: false }
        ],
        explanation: "As células procarióticas não possuem núcleo nem organelas membranosas, enquanto as eucarióticas possuem núcleo definido e diversas organelas."
      },
      {
        code: "Q5D6E7F8",
        context: "O que diferencia células vegetais de células animais?",
        correctAltenative: "C",
        alternatives: [
          { letter: "A) Animais possuem plastos", isCorrect: false },
          { letter: "B) Vegetais não possuem parede celular", isCorrect: false },
          { letter: "C) Vegetais possuem plastos e parede celular", isCorrect: true },
          { letter: "D) Animais possuem cloroplastos", isCorrect: false }
        ],
        explanation: "As células vegetais possuem plastos (como cloroplastos) e parede celular de celulose, enquanto as células animais não possuem plastos nem parede celular."
      },
      {
        code: "Q9G0H1I2",
        context: "Qual é a função da membrana plasmática?",
        correctAltenative: "B",
        alternatives: [
          { letter: "A) Produzir energia", isCorrect: false },
          { letter: "B) Controlar a entrada e saída de substâncias", isCorrect: true },
          { letter: "C) Produzir proteínas", isCorrect: false },
          { letter: "D) Armazenar DNA", isCorrect: false }
        ],
        explanation: "A membrana plasmática controla a entrada e saída de substâncias, mantendo o equilíbrio interno da célula. Ela não produz energia, proteínas ou armazena DNA."
      },
      {
        code: "Q3J4K5L6",
        context: "Quais são os principais componentes das membranas celulares?",
        correctAltenative: "D",
        alternatives: [
          { letter: "A) Apenas proteínas", isCorrect: false },
          { letter: "B) Apenas carboidratos", isCorrect: false },
          { letter: "C) Apenas colesterol", isCorrect: false },
          { letter: "D) Fosfolipídios e proteínas", isCorrect: true }
        ],
        explanation: "As membranas celulares são compostas principalmente por fosfolipídios e proteínas, que garantem estrutura, seletividade e funções de transporte."
      },
      {
        code: "Q7M8N9O0",
        context: "Qual a função do colesterol nas membranas das células animais?",
        correctAltenative: "C",
        alternatives: [
          { letter: "A) Produzir energia", isCorrect: false },
          { letter: "B) Transportar proteínas", isCorrect: false },
          { letter: "C) Conferir estabilidade e fluidez à membrana", isCorrect: true },
          { letter: "D) Armazenar DNA", isCorrect: false }
        ],
        explanation: "O colesterol confere estabilidade e fluidez à membrana plasmática em células animais. Ele não produz energia, não transporta proteínas e não armazena DNA."
      },
      {
        code: "Q1P2Q3R4",
        context: "O que significa dizer que a membrana plasmática é uma bicamada lipídica?",
        correctAltenative: "A",
        alternatives: [
          { letter: "A) É formada por duas camadas de fosfolipídios, com cabeças hidrofílicas e caudas hidrofóbicas", isCorrect: true },
          { letter: "B) É formada por uma única camada de proteínas", isCorrect: false },
          { letter: "C) É formada apenas por carboidratos", isCorrect: false },
          { letter: "D) É formada por DNA e RNA", isCorrect: false }
        ],
        explanation: "A membrana plasmática é formada por duas camadas de fosfolipídios, com cabeças hidrofílicas voltadas para fora e caudas hidrofóbicas voltadas para dentro."
      },
      {
        code: "Q5S6T7U8",
        context: "O que caracteriza as cabeças e caudas dos fosfolipídios?",
        correctAltenative: "B",
        alternatives: [
          { letter: "A) Cabeças hidrofóbicas e caudas hidrofílicas", isCorrect: false },
          { letter: "B) Cabeças hidrofílicas e caudas hidrofóbicas", isCorrect: true },
          { letter: "C) Ambas hidrofóbicas", isCorrect: false },
          { letter: "D) Ambas hidrofílicas", isCorrect: false }
        ],
        explanation: "As cabeças dos fosfolipídios são hidrofílicas (atraem água), enquanto as caudas são hidrofóbicas (repelem água). Essa característica é essencial para a formação da bicamada lipídica."
      },
      {
        code: "Q9V0W1X2",
        context: "Qual é a importância das proteínas na membrana plasmática?",
        correctAltenative: "D",
        alternatives: [
          { letter: "A) Apenas estrutural", isCorrect: false },
          { letter: "B) Apenas energética", isCorrect: false },
          { letter: "C) Apenas armazenar DNA", isCorrect: false },
          { letter: "D) Atuam no transporte, reconhecimento e comunicação celular", isCorrect: true }
        ],
        explanation: "As proteínas de membrana atuam no transporte de substâncias, reconhecimento celular, comunicação e reações enzimáticas, sendo fundamentais para o funcionamento da célula."
      },
      {
        code: "Q1Z2X3Y4",
        context: "Qual é a função da membrana plasmática na célula?",
        correctAltenative: "B",
        alternatives: [
          { letter: "A) Produzir energia", isCorrect: false },
          { letter: "B) Separar o meio intracelular do extracelular e controlar a entrada e saída de substâncias", isCorrect: true },
          { letter: "C) Armazenar DNA", isCorrect: false },
          { letter: "D) Sintetizar proteínas", isCorrect: false }
        ],
        explanation: "A membrana plasmática separa o meio intracelular do extracelular e controla a entrada e saída de substâncias. Ela não produz energia, não armazena DNA e não sintetiza proteínas."
      },
      {
        code: "Q5D6E7F9",
        context: "O que significa dizer que a membrana plasmática possui permeabilidade seletiva?",
        correctAltenative: "C",
        alternatives: [
          { letter: "A) Permite a passagem de todas as substâncias igualmente", isCorrect: false },
          { letter: "B) Não permite a passagem de nenhuma substância", isCorrect: false },
          { letter: "C) Controla seletivamente quais substâncias entram e saem da célula", isCorrect: true },
          { letter: "D) Permite apenas a passagem de proteínas", isCorrect: false }
        ],
        explanation: "Permeabilidade seletiva significa que a membrana controla seletivamente quais substâncias entram e saem da célula, mantendo o equilíbrio interno."
      },
      {
        code: "Q9G0H1I2",
        context: "O que caracteriza o transporte passivo?",
        correctAltenative: "A",
        alternatives: [
          { letter: "A) Ocorre sem gasto de energia, sempre a favor do gradiente de concentração", isCorrect: true },
          { letter: "B) Ocorre com gasto de energia", isCorrect: false },
          { letter: "C) Sempre contra o gradiente de concentração", isCorrect: false },
          { letter: "D) Exclusivo de proteínas transportadoras", isCorrect: false }
        ],
        explanation: "O transporte passivo ocorre sem gasto de energia, sempre a favor do gradiente de concentração. Já o transporte ativo exige energia."
      },
      {
        code: "Q3J4K5L6",
        context: "O que caracteriza o transporte ativo?",
        correctAltenative: "D",
        alternatives: [
          { letter: "A) Não consome energia", isCorrect: false },
          { letter: "B) Sempre a favor do gradiente", isCorrect: false },
          { letter: "C) Exclusivo de moléculas de água", isCorrect: false },
          { letter: "D) Consome energia para transportar substâncias contra o gradiente de concentração", isCorrect: true }
        ],
        explanation: "O transporte ativo consome energia (ATP) para mover substâncias contra o gradiente de concentração. Diferente do passivo, que não gasta energia."
      },
      {
        code: "Q7M8N9O0",
        context: "O que é difusão?",
        correctAltenative: "B",
        alternatives: [
          { letter: "A) Movimento de água através de membrana semipermeável", isCorrect: false },
          { letter: "B) Movimento espontâneo de partículas do meio mais concentrado para o menos concentrado", isCorrect: true },
          { letter: "C) Transporte ativo de íons", isCorrect: false },
          { letter: "D) Exclusivo de proteínas transportadoras", isCorrect: false }
        ],
        explanation: "Difusão é o movimento espontâneo de partículas de uma região mais concentrada para outra menos concentrada, até atingir o equilíbrio."
      },
      {
        code: "Q1P2Q3R4",
        context: "O que é osmose?",
        correctAltenative: "C",
        alternatives: [
          { letter: "A) Movimento de solutos através da membrana", isCorrect: false },
          { letter: "B) Transporte ativo de glicose", isCorrect: false },
          { letter: "C) Difusão da água através de uma membrana semipermeável", isCorrect: true },
          { letter: "D) Movimento de proteínas no citoplasma", isCorrect: false }
        ],
        explanation: "Osmose é a difusão da água através de uma membrana semipermeável, do meio menos concentrado em soluto para o mais concentrado."
      },
      {
        code: "Q5S6T7U8",
        context: "O que é uma membrana semipermeável?",
        correctAltenative: "A",
        alternatives: [
          { letter: "A) Permite a passagem apenas de moléculas de solvente, mas não de soluto", isCorrect: true },
          { letter: "B) Permite a passagem de todas as substâncias igualmente", isCorrect: false },
          { letter: "C) Não permite a passagem de nenhuma substância", isCorrect: false },
          { letter: "D) Permite apenas a passagem de proteínas", isCorrect: false }
        ],
        explanation: "Uma membrana semipermeável permite a passagem apenas de moléculas de solvente (como a água), mas não de solutos."
      },
      {
        code: "Q9V0W1X2",
        context: "O que caracteriza soluções hipertônicas, hipotônicas e isotônicas?",
        correctAltenative: "D",
        alternatives: [
          { letter: "A) Hipertônica: menos soluto; Hipotônica: mais soluto; Isotônica: igual", isCorrect: false },
          { letter: "B) Hipertônica: igual soluto; Hipotônica: mais soluto; Isotônica: menos", isCorrect: false },
          { letter: "C) Hipertônica: mais solvente; Hipotônica: menos solvente; Isotônica: igual", isCorrect: false },
          { letter: "D) Hipertônica: mais soluto; Hipotônica: menos soluto; Isotônica: mesma concentração", isCorrect: true }
        ],
        explanation: "Solução hipertônica tem mais soluto, hipotônica tem menos soluto e isotônica possui a mesma concentração de soluto dentro e fora da célula."
      },
      {
        code: "Q1A2B3C4",
        context: "O que caracteriza o transporte ativo?",
        correctAltenative: "B",
        alternatives: [
          { letter: "A) Ocorre sem gasto de energia", isCorrect: false },
          { letter: "B) Consome energia para transportar substâncias contra o gradiente de concentração", isCorrect: true },
          { letter: "C) Exclusivo de moléculas de água", isCorrect: false },
          { letter: "D) Sempre a favor do gradiente", isCorrect: false }
        ],
        explanation: "O transporte ativo exige gasto de energia (ATP) para mover substâncias contra o gradiente de concentração, diferentemente do transporte passivo."
      },
      {
        code: "Q5D6E7F8",
        context: "Qual é a função da bomba de sódio-potássio?",
        correctAltenative: "C",
        alternatives: [
          { letter: "A) Transportar glicose", isCorrect: false },
          { letter: "B) Produzir ATP", isCorrect: false },
          { letter: "C) Bombear sódio para fora e potássio para dentro da célula, consumindo ATP", isCorrect: true },
          { letter: "D) Transportar apenas água", isCorrect: false }
        ],
        explanation: "A bomba de sódio-potássio é um mecanismo ativo que mantém o equilíbrio osmótico e elétrico, bombeando Na⁺ para fora e K⁺ para dentro da célula com gasto de ATP."
      },
      {
        code: "Q9G0H1I2",
        context: "Qual a importância da bomba de sódio-potássio para o organismo?",
        correctAltenative: "A",
        alternatives: [
          { letter: "A) Mantém o equilíbrio osmótico e permite a condução de impulsos nervosos", isCorrect: true },
          { letter: "B) Produz energia para a célula", isCorrect: false },
          { letter: "C) Armazena proteínas", isCorrect: false },
          { letter: "D) Realiza fotossíntese", isCorrect: false }
        ],
        explanation: "A bomba de sódio-potássio regula o volume celular e cria gradientes elétricos essenciais para impulsos nervosos e contrações musculares."
      },
      {
        code: "Q3J4K5L6",
        context: "O que é endocitose?",
        correctAltenative: "D",
        alternatives: [
          { letter: "A) Eliminação de substâncias", isCorrect: false },
          { letter: "B) Transporte passivo de íons", isCorrect: false },
          { letter: "C) Exclusivo de água", isCorrect: false },
          { letter: "D) Entrada de partículas ou líquidos por invaginação da membrana e formação de vesículas", isCorrect: true }
        ],
        explanation: "Endocitose é o processo ativo em que a célula envolve partículas ou líquidos, formando vesículas que são internalizadas no citoplasma."
      },
      {
        code: "Q7M8N9O0",
        context: "Qual a diferença entre fagocitose e pinocitose?",
        correctAltenative: "B",
        alternatives: [
          { letter: "A) Ambas captam apenas líquidos", isCorrect: false },
          { letter: "B) Fagocitose engloba partículas grandes, pinocitose absorve líquidos e solutos", isCorrect: true },
          { letter: "C) Ambas são transporte passivo", isCorrect: false },
          { letter: "D) Fagocitose ocorre sem gasto de energia", isCorrect: false }
        ],
        explanation: "Na fagocitose, a célula engloba partículas grandes, como microrganismos. Na pinocitose, absorve pequenas quantidades de líquidos e solutos dissolvidos."
      },
      {
        code: "Q1P2Q3R4",
        context: "O que é exocitose?",
        correctAltenative: "C",
        alternatives: [
          { letter: "A) Entrada de partículas", isCorrect: false },
          { letter: "B) Transporte passivo de água", isCorrect: false },
          { letter: "C) Liberação de substâncias por fusão de vesículas com a membrana plasmática", isCorrect: true },
          { letter: "D) Exclusivo de células vegetais", isCorrect: false }
        ],
        explanation: "Exocitose é o processo pelo qual vesículas intracelulares se fundem com a membrana plasmática, liberando substâncias como hormônios, enzimas e neurotransmissores."
      },
      {
        code: "Q1A2B3C4",
        context: "O que é o retículo endoplasmático?",
        correctAltenative: "B",
        alternatives: [
          { letter: "A) Estrutura exclusiva de células procarióticas", isCorrect: false },
          { letter: "B) Rede membranosa de bolsas e canais presente em células eucarióticas", isCorrect: true },
          { letter: "C) Organela responsável pela fotossíntese", isCorrect: false },
          { letter: "D) Estrutura que armazena DNA", isCorrect: false }
        ],
        explanation: "O retículo endoplasmático é uma rede membranosa de bolsas achatadas e canais tubulares interligados, presente em todas as células eucarióticas."
      },
      {
        code: "Q5D6E7F8",
        context: "Qual a principal função do retículo endoplasmático liso?",
        correctAltenative: "C",
        alternatives: [
          { letter: "A) Síntese de proteínas", isCorrect: false },
          { letter: "B) Produção de energia", isCorrect: false },
          { letter: "C) Síntese de ácidos graxos, fosfolipídios e esteroides", isCorrect: true },
          { letter: "D) Armazenamento de DNA", isCorrect: false }
        ],
        explanation: "O retículo endoplasmático liso é responsável pela síntese de lipídios, como ácidos graxos, fosfolipídios e esteroides, além de participar da desintoxicação celular."
      },
      {
        code: "Q9G0H1I2",
        context: "Qual a principal função do retículo endoplasmático rugoso?",
        correctAltenative: "A",
        alternatives: [
          { letter: "A) Síntese de proteínas nos ribossomos aderidos à sua superfície", isCorrect: true },
          { letter: "B) Produção de energia", isCorrect: false },
          { letter: "C) Síntese de carboidratos", isCorrect: false },
          { letter: "D) Produção de pigmentos", isCorrect: false }
        ],
        explanation: "O retículo endoplasmático rugoso tem ribossomos aderidos à sua superfície externa, responsáveis pela síntese de proteínas destinadas à secreção ou a organelas."
      },
      {
        code: "Q3J4K5L6",
        context: "Qual a diferença entre ribossomos livres e ribossomos aderidos ao retículo rugoso?",
        correctAltenative: "D",
        alternatives: [
          { letter: "A) Ambos produzem apenas proteínas de exportação", isCorrect: false },
          { letter: "B) Ribossomos livres produzem lipídios", isCorrect: false },
          { letter: "C) Ribossomos aderidos produzem DNA", isCorrect: false },
          { letter: "D) Livres produzem proteínas usadas na célula; aderidos produzem proteínas para secreção ou organelas", isCorrect: true }
        ],
        explanation: "Ribossomos livres produzem proteínas utilizadas no interior da célula, enquanto os aderidos ao retículo rugoso produzem proteínas destinadas ao retículo e à secreção."
      },
      {
        code: "Q7M8N9O0",
        context: "O que é o Complexo de Golgi?",
        correctAltenative: "B",
        alternatives: [
          { letter: "A) Estrutura exclusiva de células procarióticas", isCorrect: false },
          { letter: "B) Conjunto de sacos membranosos achatados que processa, armazena e distribui substâncias", isCorrect: true },
          { letter: "C) Organela responsável pela respiração celular", isCorrect: false },
          { letter: "D) Estrutura que armazena DNA", isCorrect: false }
        ],
        explanation: "O Complexo de Golgi é formado por sacos membranosos achatados e empilhados, responsável por modificar, empacotar e distribuir substâncias produzidas pela célula."
      },
      {
        code: "Q1P2Q3R4",
        context: "Qual a função do Complexo de Golgi na secreção celular?",
        correctAltenative: "A",
        alternatives: [
          { letter: "A) Eliminar substâncias úteis produzidas pela célula", isCorrect: true },
          { letter: "B) Produzir energia", isCorrect: false },
          { letter: "C) Realizar fotossíntese", isCorrect: false },
          { letter: "D) Armazenar DNA", isCorrect: false }
        ],
        explanation: "O Complexo de Golgi empacota e elimina substâncias úteis ao organismo em um processo chamado secreção celular."
      },
      {
        code: "Q5S6T7U8",
        context: "Qual a relação entre o Complexo de Golgi e os lisossomos?",
        correctAltenative: "C",
        alternatives: [
          { letter: "A) Lisossomos produzem o Golgi", isCorrect: false },
          { letter: "B) Golgi produz ribossomos", isCorrect: false },
          { letter: "C) O Complexo de Golgi é responsável pela produção de lisossomos", isCorrect: true },
          { letter: "D) Lisossomos produzem proteínas no Golgi", isCorrect: false }
        ],
        explanation: "O Complexo de Golgi é responsável pela formação dos lisossomos, organelas que contêm enzimas digestivas."
      },
      {
        code: "Q1A2B3C4",
        context: "O que são lisossomos?",
        correctAltenative: "B",
        alternatives: [
          { letter: "A) Organelas responsáveis pela produção de energia", isCorrect: false },
          { letter: "B) Bolsas membranosas com enzimas digestivas que degradam substâncias orgânicas", isCorrect: true },
          { letter: "C) Estruturas que armazenam DNA", isCorrect: false },
          { letter: "D) Organelas responsáveis pela fotossíntese", isCorrect: false }
        ],
        explanation: "Lisossomos são organelas membranosas que contêm enzimas digestivas, promovendo a digestão intracelular de partículas externas ou componentes internos."
      },
      {
        code: "Q5D6E7F8",
        context: "O que são vacúolos digestivos e vacúolos residuais?",
        correctAltenative: "C",
        alternatives: [
          { letter: "A) Estruturas que armazenam DNA e RNA", isCorrect: false },
          { letter: "B) Organelas responsáveis pela respiração celular", isCorrect: false },
          { letter: "C) Vacúolos digestivos realizam a digestão intracelular; vacúolos residuais armazenam restos não aproveitados", isCorrect: true },
          { letter: "D) Estruturas que produzem proteínas", isCorrect: false }
        ],
        explanation: "Vacúolos digestivos são formados durante a digestão intracelular. Após o processo, os restos não aproveitados permanecem em vacúolos residuais."
      },
      {
        code: "Q9G0H1I2",
        context: "O que é função heterofágica dos lisossomos?",
        correctAltenative: "A",
        alternatives: [
          { letter: "A) Digestão de partículas vindas de fora da célula", isCorrect: true },
          { letter: "B) Digestão de partes da própria célula", isCorrect: false },
          { letter: "C) Produção de proteínas para secreção", isCorrect: false },
          { letter: "D) Transporte passivo de substâncias", isCorrect: false }
        ],
        explanation: "A função heterofágica ocorre quando os lisossomos digerem partículas externas, como microrganismos ou nutrientes capturados pela célula."
      },
      {
        code: "Q3J4K5L6",
        context: "O que é função autofágica dos lisossomos?",
        correctAltenative: "B",
        alternatives: [
          { letter: "A) Digestão de partículas externas", isCorrect: false },
          { letter: "B) Digestão de partes da própria célula", isCorrect: true },
          { letter: "C) Produção de energia", isCorrect: false },
          { letter: "D) Transporte de proteínas", isCorrect: false }
        ],
        explanation: "Na função autofágica, os lisossomos digerem partes da própria célula, como organelas danificadas, permitindo renovação celular e sobrevivência em situações de escassez."
      },
      {
        code: "Q7M8N9O0",
        context: "Qual a função da parede celular em plantas e algas?",
        correctAltenative: "C",
        alternatives: [
          { letter: "A) Produzir energia para a célula", isCorrect: false },
          { letter: "B) Realizar a fotossíntese", isCorrect: false },
          { letter: "C) Conferir rigidez, proteção e sustentação à célula", isCorrect: true },
          { letter: "D) Armazenar proteínas", isCorrect: false }
        ],
        explanation: "A parede celular, composta principalmente por celulose em plantas e algas, garante rigidez, proteção e sustentação à célula."
      },
      {
        code: "Q1P2Q3R4",
        context: "O que é o citoesqueleto?",
        correctAltenative: "D",
        alternatives: [
          { letter: "A) Estrutura que armazena DNA", isCorrect: false },
          { letter: "B) Organelas responsáveis pela respiração celular", isCorrect: false },
          { letter: "C) Estrutura exclusiva de células procarióticas", isCorrect: false },
          { letter: "D) Rede de filamentos e túbulos proteicos que dá forma, organiza e permite movimentos celulares", isCorrect: true }
        ],
        explanation: "O citoesqueleto é uma rede de filamentos proteicos que define a forma da célula, organiza sua estrutura interna e permite movimentos celulares e intracelulares."
      },
      {
        code: "Q5S6T7U8",
        context: "Quais são algumas funções do citoesqueleto?",
        correctAltenative: "A",
        alternatives: [
          { letter: "A) Definir a forma da célula, movimentar organelas, permitir contração muscular e divisão celular", isCorrect: true },
          { letter: "B) Produzir energia e armazenar DNA", isCorrect: false },
          { letter: "C) Realizar fotossíntese e síntese de proteínas", isCorrect: false },
          { letter: "D) Atuar apenas na adesão celular", isCorrect: false }
        ],
        explanation: "O citoesqueleto atua na forma celular, adesão, movimentação de organelas, contração muscular, divisão celular e movimento de cílios e flagelos."
      },
      {
        code: "Q9V0W1X2",
        context: "O que são microtúbulos?",
        correctAltenative: "B",
        alternatives: [
          { letter: "A) Estruturas responsáveis pela síntese de lipídios", isCorrect: false },
          { letter: "B) Finíssimos túbulos proteicos do citoesqueleto que participam da movimentação celular e dos cromossomos", isCorrect: true },
          { letter: "C) Organelas que armazenam enzimas digestivas", isCorrect: false },
          { letter: "D) Estruturas que produzem ATP", isCorrect: false }
        ],
        explanation: "Microtúbulos são estruturas cilíndricas do citoesqueleto que participam da movimentação celular, transporte intracelular e movimentação dos cromossomos na divisão celular."
      },
      {
        code: "Q1A2B3C4",
        context: "O que são centríolos?",
        correctAltenative: "B",
        alternatives: [
          { letter: "A) Organelas responsáveis pela produção de energia", isCorrect: false },
          { letter: "B) Estruturas cilíndricas formadas por microtúbulos que participam da divisão celular e da formação de cílios e flagelos", isCorrect: true },
          { letter: "C) Estruturas que armazenam DNA", isCorrect: false },
          { letter: "D) Organelas responsáveis pela fotossíntese", isCorrect: false }
        ],
        explanation: "Centríolos são estruturas cilíndricas compostas por microtúbulos, fundamentais na organização do fuso mitótico e na formação de cílios e flagelos."
      },
      {
        code: "Q5D6E7F8",
        context: "O que é o centrossomo e qual sua importância?",
        correctAltenative: "C",
        alternatives: [
          { letter: "A) Estrutura exclusiva de células vegetais", isCorrect: false },
          { letter: "B) Organela responsável pela respiração celular", isCorrect: false },
          { letter: "C) Região onde se localizam os centríolos, importante para organizar os microtúbulos na divisão celular", isCorrect: true },
          { letter: "D) Estrutura que produz proteínas", isCorrect: false }
        ],
        explanation: "O centrossomo é a região onde ficam os centríolos, sendo essencial para a organização do fuso mitótico durante a divisão celular."
      },
      {
        code: "Q9G0H1I2",
        context: "O que são cílios e flagelos?",
        correctAltenative: "A",
        alternatives: [
          { letter: "A) Projeções móveis da membrana plasmática sustentadas por microtúbulos, responsáveis pela locomoção celular ou movimentação de substâncias", isCorrect: true },
          { letter: "B) Organelas responsáveis pela síntese de proteínas", isCorrect: false },
          { letter: "C) Estruturas que armazenam DNA", isCorrect: false },
          { letter: "D) Organelas responsáveis pela digestão intracelular", isCorrect: false }
        ],
        explanation: "Cílios e flagelos são projeções móveis da membrana plasmática que permitem o movimento da célula ou o deslocamento de substâncias em sua superfície."
      },
      {
        code: "Q3J4K5L6",
        context: "Qual a diferença entre cílios e flagelos?",
        correctAltenative: "D",
        alternatives: [
          { letter: "A) Cílios são longos e poucos; flagelos são curtos e numerosos", isCorrect: false },
          { letter: "B) Ambos possuem estruturas completamente diferentes", isCorrect: false },
          { letter: "C) Cílios e flagelos não possuem microtúbulos", isCorrect: false },
          { letter: "D) Cílios são curtos e numerosos; flagelos são longos e geralmente em menor número", isCorrect: true }
        ],
        explanation: "Cílios são curtos e numerosos, enquanto flagelos são longos e geralmente em menor número, mas ambos possuem a mesma estrutura básica."
      },
      {
        code: "Q7M8N9O0",
        context: "O que são mitocôndrias?",
        correctAltenative: "B",
        alternatives: [
          { letter: "A) Organelas responsáveis pela fotossíntese", isCorrect: false },
          { letter: "B) Organelas de dupla membrana responsáveis pela respiração celular e produção de ATP", isCorrect: true },
          { letter: "C) Estruturas que armazenam DNA nuclear", isCorrect: false },
          { letter: "D) Organelas que produzem proteínas", isCorrect: false }
        ],
        explanation: "Mitocôndrias são organelas de dupla membrana, com cristas internas, responsáveis pela respiração celular e pela produção de energia em forma de ATP."
      },
      {
        code: "Q1P2Q3R4",
        context: "Qual a estrutura da mitocôndria?",
        correctAltenative: "A",
        alternatives: [
          { letter: "A) Possui membrana externa lisa e membrana interna com dobras chamadas cristas", isCorrect: true },
          { letter: "B) É formada apenas por uma membrana simples", isCorrect: false },
          { letter: "C) É composta exclusivamente por ribossomos", isCorrect: false },
          { letter: "D) É formada por tilacoides e grana", isCorrect: false }
        ],
        explanation: "A mitocôndria possui membrana externa lisa e membrana interna com dobras chamadas cristas, que aumentam a superfície para as reações da respiração celular."
      },
      {
        code: "Q5S6T7U8",
        context: "O que são cloroplastos?",
        correctAltenative: "C",
        alternatives: [
          { letter: "A) Organelas responsáveis pela respiração celular", isCorrect: false },
          { letter: "B) Estruturas exclusivas de células animais", isCorrect: false },
          { letter: "C) Plastos presentes em células vegetais e de algas, responsáveis pela fotossíntese", isCorrect: true },
          { letter: "D) Organelas que produzem proteínas", isCorrect: false }
        ],
        explanation: "Cloroplastos são plastos presentes em células vegetais e de algas, responsáveis pela fotossíntese, processo que converte energia luminosa em energia química."
      },
      {
        code: "Q9V0W1X2",
        context: "Qual a estrutura interna dos cloroplastos?",
        correctAltenative: "D",
        alternatives: [
          { letter: "A) Membrana externa lisa e cristas internas", isCorrect: false },
          { letter: "B) Apenas uma membrana simples", isCorrect: false },
          { letter: "C) Exclusivamente ribossomos", isCorrect: false },
          { letter: "D) Dupla membrana e tilacoides organizados em grana, contendo clorofila", isCorrect: true }
        ],
        explanation: "Os cloroplastos possuem dupla membrana e estruturas internas chamadas tilacoides, organizados em grana, onde estão os pigmentos como a clorofila."
      }
    ]

  }
];
