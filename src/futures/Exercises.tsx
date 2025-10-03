import { useState } from "react";
import { Button } from "@components/common/Button";

type Opcao = {
  opcao: string;
  isRight: boolean;
};

type Questao = {
  questao: string;
  imagem?: string;
  opcoes: Opcao[];
};

const questoes: Questao[] = [
  {
    questao: "Qual a fórmula da água?",
    // imagem: "/images/h2o.png", // opcional
    opcoes: [
      { opcao: "H₂O", isRight: true },
      { opcao: "CO₂", isRight: false },
      { opcao: "O₂", isRight: false },
    ],
  },
  {
    questao: "Quem descobriu o Brasil?",
    opcoes: [
      { opcao: "Pedro Álvares Cabral", isRight: true },
      { opcao: "Dom Pedro II", isRight: false },
      { opcao: "Cristóvão Colombo", isRight: false },
    ],
  },
];

export const Exercises = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const current = questoes[currentIndex];

  const handleNext = () => {
    setSelected(null);
    setCurrentIndex((prev) => (prev + 1) % questoes.length);
  };

  return (
    <div className="p-exercicios">
      <div className="p-exercicios__card">
        {current.imagem && (
          <img
            src={current.imagem}
            alt="Imagem da questão"
            className="p-exercicios__image"
          />
        )}

        <h2 className="p-exercicios__question">{current.questao}</h2>

        <ul className="p-exercicios__options">
          {current.opcoes.map((op, idx) => (
            <li key={idx} className="p-exercicios__option">
              <label>
                <input
                  type="radio"
                  name={`questao-${currentIndex}`}
                  value={op.opcao}
                  checked={selected === op.opcao}
                  onChange={() => setSelected(op.opcao)}
                />
                {op.opcao}
              </label>
            </li>
          ))}
        </ul>

        <div className="p-exercicios__actions">
          <Button onClick={handleNext} disabled={!selected}>
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};
