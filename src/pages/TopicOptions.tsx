import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@components/common/Button";
import type { DISCIPLINE_MODULE, DISCIPLINE, DISCIPLINE_TOPICS } from "interfaces/discipline";
import type { ITopicCode } from "@interfaces/topic";
import { getContentByTopic } from "@services/content";

const TopicOptions = () => {

  const { discipline, module, topic } = useParams<{ discipline:string, module: string, topic:string}>()
  // console.log('params', discipline, module, topic)
  const navigate = useNavigate()

  const [moduleData, setModule] = useState<ITopicCode | null>(null)
  
  useEffect(()=>{
    const modules = getContentByTopic(discipline as DISCIPLINE, module as DISCIPLINE_MODULE, topic as DISCIPLINE_TOPICS )
    // console.log('modules on get topics', modules)
    setModule(modules)
  }, [moduleData])

  return (
    <div className="p-topic-options">
      
      <h1 className="p-topic-options__title">{moduleData?.title}</h1>
      
      <div className="p-topic-options__content">
        <Button 
          type="button" 
          className="m-button--full"
          onClick={() => navigate(`/scene/${discipline}/${moduleData?.module}/${moduleData?.topic}`)}
          >
          Explorar em 3D
        </Button>
        <Button 
          type="button" 
          className="m-button--full" 
          onClick={() => navigate(`/flashcards/${discipline}/${moduleData?.module}/${moduleData?.topic}`)}>
          Flashcards
        </Button>
        <Button 
          type="button" 
          className="m-button--full"
          onClick={() => navigate(`/exercises/${discipline}/${moduleData?.module}/${moduleData?.topic}`)}
          >
          Exercícios
        </Button>
      </div>

    </div>
  )
}

export default TopicOptions