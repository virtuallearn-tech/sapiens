import { CardContent } from "@components/cards/CardContent"
import { DISCIPLINE, DISCIPLINE_MODULE } from "@interfaces/discipline"
import type { ITopicCode } from "@interfaces/topic"
import { ROUTES_NAME } from "@routes/routesName"
import { getContentByModule } from "@services/content"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const PageModule = () => {

  const [topicList, setTopicList] = useState<ITopicCode[]>([])
  const [discipline, setDiscipline] = useState<typeof DISCIPLINE[keyof typeof DISCIPLINE]>()

  const params = useParams()

  useEffect(() => {
    const listTopic = getContentByModule(params.module! as typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE])
    console.log('listTopic', listTopic)
    
    setTopicList(listTopic.data)
    setDiscipline(listTopic?.discipline)

  }, [params?.module])

  return (
    <div className="p-page-module">

      <h1 className="p-page-module__title">
        Selecione o modelo para visualização em 3D.
      </h1>

      <div className="p-page-module__list">
        {topicList && topicList.map((topic) => (
          <CardContent
            key={topic.topic}
            id={topic.topic}
            title={topic.title}
            description={topic.description}
            cover={topic.cover}
            link={`${ROUTES_NAME.TOPIC_OPTIONS}/${discipline}/${params.module}/${topic.topic}`}
          />
        ))}
      </div>
    </div>
  )
}

export default PageModule