import { Button } from "@components/common/Button";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Results = () => {

  const { total, right } = useParams<{ total: string; right: string }>();

  const [errors, setErrors] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [message, setMessage] = useState('');

  const handleErros = (total: number, right: number): number => {
    return total - right;
  };

  const handlePercentage = (total: number, right: number): number => {
    if (total === 0) return 0;
    return Math.round((right / total) * 100);
  };

  const handleMessage = (percentage:number) => {
    console.log('handleMessage', percentage)
    const messages = {
      EXCELENT: 'Excelente trabalho! Você está dominando o conteúdo 🚀',
      GOOD: 'Bom trabalho! Continue assim 🚀',
      AVERAGE: 'Você está indo bem, mas há espaço para melhorias. Continue praticando! 😊',
      NEEDS_IMPROVEMENT: 'Não desanime! Cada erro é uma oportunidade de aprendizado. Vamos tentar novamente! 💪',
    }

    if (percentage >= 90) {
      setMessage(messages.EXCELENT)
    } else if (percentage >= 70) {
      setMessage(messages.GOOD)
    } else if (percentage >= 50) {
      setMessage(messages.AVERAGE)
    } else {
      setMessage(messages.NEEDS_IMPROVEMENT)
    }
  }

useEffect(() => {
  const totalNum = Number(total);
  const rightNum = Number(right);

  const errors = handleErros(totalNum, rightNum);
  const perc = handlePercentage(totalNum, rightNum);

  setErrors(errors);
  setPercentage(perc);

  console.log('PA', perc);
  handleMessage(perc);
}, [total, right]);


  return (
    <div className="results">
      
      <div className="results__cards">
        <div className="results__card results__card--correct">
          <h3 className="results__card-title">Acertos</h3>
          <p className="results__card-value">{right}</p>
        </div>

        <div className="results__card results__card--wrong">
          <h3 className="results__card-title">Erros</h3>
          <p className="results__card-value">{errors}</p>
        </div>

        <div className="results__card results__card--percentage">
          <h3 className="results__card-title">Aproveitamento</h3>
          <p className="results__card-value">{percentage}%</p>
        </div>
      </div>

      <div className="results__feedback">
        <p className="results__feedback-message">
          {message}
        </p>
      </div>

      <div className="results__actions">
        <Button type="button" className="m-button--full">
          Salvar resultado
        </Button>
      </div>
    </div>

  )
}

export default Results;