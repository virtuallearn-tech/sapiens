import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@components/common/Button";
import { getByTopicCode } from "@services/biology/topics";
import type { CITOLOGY_TOPICS } from "interfaces/discipline";
import type { ITopicData } from "interfaces/topic";

const TopicOptions = () => {

  const { code } = useParams<{ code: string}>()
  const navigate = useNavigate()

  const [topic, setTopic] = useState<ITopicData| null>(null)
  
  useEffect(()=>{
    const topics = getByTopicCode(code as CITOLOGY_TOPICS)
    setTopic(topics)
  }, [code])

  return (
    <div className="p-topic-options">
      
      <h1 className="p-topic-options__title">{topic?.title}</h1>
      
      <div className="p-topic-options__content">
        <Button type="button" className="m-button--full">
          Explorar em 3D
        </Button>
        <Button type="button" className="m-button--full" onClick={() => navigate(`/flashcards/BIOLOGY/${topic?.code}`)}>
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