import { Button } from "@components/common/Button";
import { useState } from "react";

type FlashcardItem = {
  id: string;
  front: string;
  back: string;
};

const flashcards: FlashcardItem[] = [
  { id: "1", front: "O que são vertebrados?", back: "Animais que possuem vértebras." },
  { id: "2", front: "Qual a fórmula da água?", back: "H₂O" },
  { id: "3", front: "Capital do Brasil?", back: "Brasília" },
];

export const Flashcard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [answer, setAnswer] = useState<"acertou" | "errou" | null>(null);

  const currentCard = flashcards[currentIndex];

  const handleNext = () => {
    setFlipped(false);
    setAnswer(null);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  return (
    <div className="m-flashcard">
      <div
        className={`m-flashcard__card ${flipped ? "m-flashcard__card--flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="m-flashcard__face m-flashcard__face--front">
          {currentCard.front}
        </div>
        <div className="m-flashcard__face m-flashcard__face--back">
          {currentCard.back}
        </div>
      </div>

      <div className="m-flashcard__options">
        <label>
          <input
            type="radio"
            name="answer"
            value="acertou"
            checked={answer === "acertou"}
            onChange={() => setAnswer("acertou")}
          />
          Acertou
        </label>
        <label>
          <input
            type="radio"
            name="answer"
            value="errou"
            checked={answer === "errou"}
            onChange={() => setAnswer("errou")}
          />
          Errou
        </label>
      </div>

      <div className="m-flashcard__actions">
        <Button onClick={handleNext} disabled={!answer}>
          Continuar
        </Button>
      </div>
    </div>
  );
};
