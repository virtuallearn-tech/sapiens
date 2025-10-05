import { useState } from "react";
import { Button } from "@components/common/Button";
import { useNavigate } from "react-router-dom";
import { Select } from "@components/common/Select";
import { ENEM_ANO, ENEM_AREA, ENEM_NUM_QUESTOES } from "@services/enem/enemOptions";
import type { EnemAreas } from "@interfaces/enem";
import { useEnemQuestions } from "@hooks/useENEMQuestoes";


const ENEMQuestions = () => {

  const navigate = useNavigate()

  const [discipline, setDiscipline] = useState<EnemAreas | null>(null);
  const [language, setLanguage] = useState<'ingles' | 'espanhol' | null>(null);
  const [limit, setLimit] = useState<number|null>(null);
  const [year, setYear] = useState<number | null>(null);

  const { questions } = useEnemQuestions({ year, discipline, language, limit })

  const [started, setStarted] = useState(false);
  const [right, setRight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<boolean | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  
  // const current = questions[currentIndex];

  const handleNext = () => {
    // if (currentIndex === questions.length - 1) {
    //   return navigate(`/results/${questions.length}/${right}`)
    // }
    // setSelected(null);
    // setShowExplanation(false);
    // setSelectedLetter(null);
    // setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  const handleAnswer = (value: string, isCorrect: boolean) => {
    setSelected(isCorrect);
    setSelectedLetter(value);
    setRight((prev) => (isCorrect ? prev + 1 : prev));
  }

  const SelectEnemOptions = () => {
    return (
      <div className="enem-options">

        <h1 className="enem-options__title">Selecione a edição do ENEM</h1>

        <Select
          id="enem-area"
          label="Área de Conhecimento"
          options={ENEM_AREA}
          value={discipline ?? ""}
          onChange={(e) => setDiscipline(e.target.value as EnemAreas)}
        />
        {discipline == 'linguagens' && (
          <Select
            id="enem-linguagem"
            label="Língua Estrangeira"
            options={[{ label: "Inglês", value: "ingles" }, { label: "Espanhol", value: "espanhol" }]}
            value={language ?? ""}
            onChange={(e) => setLanguage(e.target.value as 'ingles' | 'espanhol')}
          />
        )}
        <Select
          id="enem-num-questions"
          label="Número de Questões"
          options={ENEM_NUM_QUESTOES}
          value={limit?.toString() ?? ""}
          onChange={(e) => setLimit(parseInt(e.target.value))}
        />
        <Select
          id="enem-year"
          label="Ano do exame"
          options={ENEM_ANO}
          value={year?.toString() ?? ""}
          onChange={(e) => setYear(Number(e.target.value))}
          disabled={!discipline || (discipline == 'linguagens' && language == null) || limit == null}
        />
        <Button
          onClick={() => setStarted(true)}
          disabled={discipline == null || (discipline == 'linguagens' && language == null) || year == null} className="m-button--full">
          Iniciar
        </Button>
      </div>
    )
  }

  {
    return !started ? (
      <SelectEnemOptions />
    ) : (
      <div className="p-exercicios">
        <div className="p-exercicios__content">
          <div className="p-exercicios__actions">
            <Button onClick={handleNext} disabled={selected == null} className="pm-button--full">
              Continuar
            </Button>
          </div>
        </div>
      </div>
    )
  }

};

export default ENEMQuestions;