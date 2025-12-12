import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@components/common/Button";
import type { DISCIPLINE_MODULE, DISCIPLINE, DISCIPLINE_TOPICS } from "interfaces/discipline";
import type { ITopicCode } from "@interfaces/topic";
import { getContentByTopic } from "@services/content";
import { ROUTES_NAME } from "@routes/routesName";

const TopicOptions = () => {

  const { discipline, module, topic } = useParams<{ discipline:string, module: string, topic:string}>()
  console.log('params on topic', discipline, module, topic)
  const navigate = useNavigate()

  const [moduleData, setModule] = useState<ITopicCode | null>(null)
  
  useEffect(()=>{
    const modules = getContentByTopic(
      module as typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE], 
      topic as typeof DISCIPLINE_TOPICS[keyof typeof DISCIPLINE_TOPICS])
      //discipline as typeof DISCIPLINE[keyof typeof DISCIPLINE],
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
          onClick={() => navigate(`${ROUTES_NAME.SCENE}/${discipline}/${moduleData?.module}/${moduleData?.topic}`)}
          >
          Explorar em 3D
        </Button>
        <Button 
          type="button" 
          className="m-button--full" 
          onClick={() => navigate(`${ROUTES_NAME.FLASHCARDS}/${discipline}/${moduleData?.module}/${moduleData?.topic}`)}>
          Flashcards
        </Button>
        <Button 
          type="button" 
          className="m-button--full"
          onClick={() => navigate(`${ROUTES_NAME.EXERCISES}/${discipline}/${moduleData?.module}/${moduleData?.topic}`)}
          >
          Exercícios
        </Button>
      </div>

    </div>
  )
}

export default TopicOptions