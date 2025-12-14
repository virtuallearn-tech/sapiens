import { useEffect, useState } from "react"

import { CardContent } from "@components/cards/CardContent"

// import type { ITopicCode } from "interfaces/topic"
// import { getAllTopics } from "@services/content"
import { ROUTES_NAME } from "@routes/routesName"
import { BIOLOGY_MODULES, type IModule } from "@services/modules"


export const Home = () => {

  const [topicList, setTopicList] = useState<IModule[]>([])

  useEffect(() => {
    const topics = [...BIOLOGY_MODULES]//getAllTopics()
    // console.log('topics', topics)
    setTopicList(topics)
  }, [])

  return (
    <div className="p-home">

      <h1 className="p-home__title">
        Transforme o estudo em descoberta.
      </h1>

      <div className="p-home__list">
        {topicList && topicList.map((topic) => (
          <CardContent
            key={topic.module}
            title={topic.title}
            description={topic.description}
            cover={topic.cover}
            link={`${ROUTES_NAME.MODULE}/${topic.module}`}
            modifier="module"
          />
        ))}
      </div>

      {/* <div className="p-home__list">
        {topicList && topicList.map((topic) => (
            <CardContent
              key={topic.topic}
              id={topic.topic}
              title={topic.title}
              description={topic.description}
              cover={topic.cover}
              link={`${ROUTES_NAME.TOPIC_OPTIONS}/${topic.discipline}/${topic.module}/${topic.topic}`}
            />
        ))}
      </div> */}
    </div>
  )
}