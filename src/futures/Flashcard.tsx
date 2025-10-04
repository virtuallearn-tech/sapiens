import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Button } from "@components/common/Button";
import { SelectNumQuestions } from "@components/layout/SelectNumQuestions";
import type { IFlashcard } from "interfaces/flsahcards";
import { useNavigate } from "react-router-dom";
import { getFlashcardsByTopic } from "@services/flashcards";
import type { BIOLOGY_TOPICS, DISCIPLINE } from "@interfaces/discipline";


const Flashcard = () => {
  const navigate = useNavigate()

  const { discipline, topic } = useParams<{ discipline: string; topic: string }>();

  const [flashcards, setFlashcards] = useState<IFlashcard[]>([])
  const [right, setRight] = useState(0);

  const [numFlashcards, setNumFlashcards] = useState(2);
  const [started, setStarted] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [answer, setAnswer] = useState<"acertou" | "errou" | null>(null);

  const currentCard = flashcards[currentIndex];

  const handleNext = () => {
    if (currentIndex === flashcards.length - 1) {
      return navigate(`/results/${flashcards.length}/${right}`)
    }
    setFlipped(false);
    setAnswer(null);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handleFlashcards = () => {
    const flashcards = getFlashcardsByTopic(discipline as DISCIPLINE, topic as BIOLOGY_TOPICS, numFlashcards);
    console.log('flashcard list', flashcards);
    setFlashcards(flashcards);
    setStarted(true)
  }

  const handleAnswer = (response: "acertou" | "errou") => {
    setAnswer(response);
    setRight((prev) => (response === "acertou" ? prev + 1 : prev));
  }

  {
    return !started ? (
      <SelectNumQuestions
        id="num-flashcards"
        label="Número de Flashcards"
        onChange={(e) => setNumFlashcards(Number(e.target.value))}
        onClick={() => handleFlashcards()}
      />
    ) : (
      <div className="m-flashcard">
        
        <div
          className={`m-flashcard__card ${flipped ? "m-flashcard__card--flipped" : ""}`}
          onClick={() => setFlipped(!flipped)}
        >
          <div className="m-flashcard__face m-flashcard__face--front">
            {currentCard.question}
          </div>
          <div className="m-flashcard__face m-flashcard__face--back">
            {currentCard.answer}
          </div>
        </div>

        <div className="m-flashcard__options">
          <label>
            <input
              type="radio"
              name="answer"
              value="acertou"
              checked={answer === "acertou"}
              onChange={() => handleAnswer("acertou")}
            />
            Acertou
          </label>
          <label>
            <input
              type="radio"
              name="answer"
              value="errou"
              checked={answer === "errou"}
              onChange={() => handleAnswer("errou")}
            />
            Errou
          </label>
        </div>

        <div className="m-flshcard__label">
          <p>{currentIndex + 1}/{numFlashcards}</p>
        </div>

        <div className="m-flashcard__actions">
          <Button onClick={handleNext} disabled={!answer} className="m-button--full">
            Continuar
          </Button>
        </div>
      </div>
    );
  }

};

export default Flashcard;