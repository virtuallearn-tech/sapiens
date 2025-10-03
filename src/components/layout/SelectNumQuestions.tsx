import { Button } from "@components/common/Button";
import { Select } from "@components/common/Select";

const flashcardsOpts = [
  { label: '10 questões', value: '10' },
  { label: '20 questões', value: '20' },
  { label: '30 questões', value: '30' }
]

interface ISelectNumQuestions {
  id: string;
  label: string;
  options?: any[];
  value?: string;
  btnLabel?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClick: () => void;
}

export const SelectNumQuestions = ({
  id,
  label,
  value = "10",
  options = flashcardsOpts,
  btnLabel = "Iniciar",
  onChange,
  onClick
}: ISelectNumQuestions) => {
  return (
    <div className="m-num-questions">
      <Select
        id={id}
        label={label}
        options={options}
        value={value}
        onChange={onChange}
      />
      <Button onClick={onClick} className="m-button--full">
        {btnLabel}  
      </Button> 
    </div>
  )
}