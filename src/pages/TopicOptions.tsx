import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@components/common/Button";
import type { CITOLOGY_TOPICS, DISCIPLINE } from "interfaces/discipline";
import type { ITopicCode, ITopicData } from "@interfaces/topic";
import { getContentByCode } from "@services/content";

const TopicOptions = () => {

  const { discipline, code } = useParams<{ discipline:string, code: string}>()
  console.log('params', discipline, code)
  const navigate = useNavigate()

  const [topic, setTopic] = useState<ITopicCode | null>(null)
  
  useEffect(()=>{
    const topics = getContentByCode(discipline as DISCIPLINE, code as CITOLOGY_TOPICS)
    console.log('topics', topics)
    setTopic(topics)
  }, [code])

  return (
    <div className="p-topic-options">
      
      <h1 className="p-topic-options__title">{topic?.title}</h1>
      
      <div className="p-topic-options__content">
        <Button type="button" className="m-button--full">
          Explorar em 3D
        </Button>
        <Button type="button" className="m-button--full" onClick={() => navigate(`/flashcards/${discipline}/${topic?.topic}`)}>
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