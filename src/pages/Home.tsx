import { useEffect, useState } from "react"

import { CardContent } from "@components/cards/CardContent"

import type { ITopicCode } from "interfaces/topic"
import {getAllTopics } from "@services/content"


export const Home = () => {

  const [topicList, setTopicList] = useState<ITopicCode[]>([])

  useEffect(() => {
    const topics = getAllTopics()
    //console.log('topics', topics)
    setTopicList(topics)
  }, [])

  return (
    <div className="p-home">

      <h1 className="p-home__title">
        Descubra o mundo das ciências
      </h1>

      <div className="p-home__list">
        {topicList && topicList.map((topic) => (
            <CardContent
              key={topic.code}
              id={topic.code}
              title={topic.title}
              description={topic.description}
              cover={topic.cover}
              link={`/topic-option/${topic.discipline}/${topic.code}`}
            />
        ))}
      </div>
    </div>
  )
}