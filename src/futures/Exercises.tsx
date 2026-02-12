import { useState } from "react";
import { Button } from "@components/common/Button";
import { useNavigate, useParams } from "react-router-dom";
import type { IQuestionData } from "@interfaces/question";
import { getExerciciesByTopic } from "@services/exercicies";
import  { DISCIPLINE, DISCIPLINE_MODULE, DISCIPLINE_TOPICS } from "@interfaces/discipline";
import { SelectNumQuestions } from "@components/layout/SelectNumQuestions";
import { Message } from "@components/layout/Message";
import { ROUTES_NAME } from "@routes/routesName";


const Exercises = () => {

  const navigate = useNavigate()

  const { discipline, module, topic } = useParams<{ discipline: string; module:string, topic: string }>();


  const [questions, setQuestions] = useState<IQuestionData[]>([])
  const [right, setRight] = useState(0);

  const [numQuestions, setNumQuestions] = useState(10);
  const [started, setStarted] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<boolean | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const current = questions[currentIndex];

  const handleQuestions = () => {
    //console.log('numQuestions', numQuestions);
    const questions = getExerciciesByTopic(
        discipline as typeof DISCIPLINE[keyof typeof DISCIPLINE], 
        module as typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE], 
        topic as typeof DISCIPLINE_TOPICS[keyof typeof DISCIPLINE_TOPICS], numQuestions);
    //console.log('questions list', questions);
    setQuestions(questions);
    setStarted(true)
  }

  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      return navigate(`${ROUTES_NAME.RESULTS}/${questions.length}/${right}`)
      // return navigate(`/results/10/8`)
    }
    setSelected(null);
    setShowExplanation(false);
    setSelectedLetter(null);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  const handleAnswer = (value: string, isCorrect: boolean) => {
    setSelected(isCorrect);
    setSelectedLetter(value);
    if (!isCorrect) {
      setShowExplanation(true);
    }
    setRight((prev) => (isCorrect ? prev + 1 : prev));
  }

  if(started && questions.length === 0)
  {
    return <Message message="Não foi possível carregar os exercícios."/>
  }

  {
    return !started ? (
      <SelectNumQuestions
        id="num-questions"
        label="Número de questões"
        value={numQuestions.toString()}
        onChange={(e) => setNumQuestions(Number(e.target.value))}
        onClick={() => handleQuestions()}
      />
    ) : (
      <div className="p-exercicios">
        <div className="p-exercicios__card">
          {current.files && current.files.length > 0 && (
            <img
              src={current.files[0]}
              alt={`Imagem da questão ${currentIndex + 1}`}
              className="p-exercicios__image"
            />
          )}
          <p className="p-exercicios__num">{currentIndex+1}/{numQuestions}</p>  
          <h2 className="p-exercicios__question">{current.context}</h2>

          {current.altenativesIntroduction && (
            <p className="p-exercicios__intro">{current.altenativesIntroduction}</p>
          )}

          <ul className="p-exercicios__options">
            {current.alternatives.map((op, idx) => (
              <li key={idx} className={`p-exercicios__option ${selected !== null ? (op.isCorrect ? 'p-exercicios__option--correct' : (selectedLetter === op.letter ? 'p-exercicios__option--wrong' : '')) : ''}`}>
                <label className="p-exercicios__label">
                  <input
                    type="radio"
                    name={`questao-${currentIndex}`}
                    value={op.letter}
                    checked={selectedLetter === op.letter}
                    onChange={(e) => handleAnswer(e.target.value, op.isCorrect)}
                    disabled={selected !== null}
                    className="p-exercicios__input"
                  />
                  <span className="p-exercicios__text">
                    <strong>{op.letter}.</strong> {op.text}
                  </span>
                </label>
              </li>
            ))}
          </ul>

          {selected !== null && showExplanation && (
            <div className="p-exercicios__explanation">
              <span>Quase lá! 🤓</span>
              <span>{current.explanation}</span>
            </div>
          )}

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

export default Exercises;