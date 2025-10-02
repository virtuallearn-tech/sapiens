import { Button } from "@components/common/Button";
import { useParams } from "react-router-dom";

const TopicOptions = () => {
  const { code, title } = useParams<{ code: string, title: string }>();
  return (
    <div className="p-topic-options">
      
      <h1 className="p-topic-options__title">{title}</h1>
      
      <div className="p-topic-options__content">
        <Button type="button" className="m-button--full">
          Explorar em 3D
        </Button>
        <Button type="button" className="m-button--full">
          Flashcards
        </Button>
        <Button type="button" className="m-button--full">
          Exercícios
        </Button>
      </div>

    </div>
  )
}

export default TopicOptions