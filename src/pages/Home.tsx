import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import { CardContent } from "@components/cards/CardContent"

import { BIOLOGY_TOPICS } from "@services/biology/topics"
import type { ITopicData } from "interfaces/topic"


export const Home = () => {

  const [topicList, setTopicList] = useState<ITopicData[]>([])

  useEffect(() => {
    const topics = BIOLOGY_TOPICS[0].data
    setTopicList(topics)
  }, [])

  return (
    <div className="p-home">

      <h1 className="p-home__title">
        Descubra o mundo das ciências
      </h1>

      <div className="p-home__list">
        {topicList && topicList.map((topic) => (
          <Link to={`/topic-option/${topic.code}/${topic.title}`}>
            <CardContent
              key={topic.code}
              id={topic.code}
              title={topic.title}
              description={topic.description}
              cover={topic.cover}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}