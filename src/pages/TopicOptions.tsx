import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@components/common/Button";
import type { DISCIPLINE_MODULE, DISCIPLINE } from "interfaces/discipline";
import type { ITopicCode } from "@interfaces/topic";
import { getContentByCode } from "@services/content";

const TopicOptions = () => {

  const { discipline, code } = useParams<{ discipline:string, code: string}>()
  //console.log('params', discipline, code)
  const navigate = useNavigate()

  const [module, setModule] = useState<ITopicCode | null>(null)
  
  useEffect(()=>{
    const modules = getContentByCode(discipline as DISCIPLINE, code as DISCIPLINE_MODULE)
    //console.log('topics', topics)
    setModule(modules)
  }, [code])

  return (
    <div className="p-topic-options">
      
      <h1 className="p-topic-options__title">{module?.title}</h1>
      
      <div className="p-topic-options__content">
        <Button 
          type="button" 
          className="m-button--full"
          onClick={() => navigate(`/scene/${discipline}/${module?.module}/${module?.topic}`)}
          >
          Explorar em 3D
        </Button>
        <Button 
          type="button" 
          className="m-button--full" 
          onClick={() => navigate(`/flashcards/${discipline}/${module?.module}`)}>
          Flashcards
        </Button>
        <Button 
          type="button" 
          className="m-button--full"
          onClick={() => navigate(`/exercises/${discipline}/${module?.module}`)}
          >
          Exercícios
        </Button>
      </div>

    </div>
  )
}

export default TopicOptions