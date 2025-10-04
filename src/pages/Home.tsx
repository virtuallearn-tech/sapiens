import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import { CardContent } from "@components/cards/CardContent"

import type { Itopic, ITopicCode, ITopicData } from "interfaces/topic"
import {getAllTopics } from "@services/content"


export const Home = () => {

  const [topicList, setTopicList] = useState<ITopicCode[]>([])

  useEffect(() => {
    const topics = getAllTopics()
    console.log('topics', topics)
    setTopicList(topics)
  }, [])

  return (
    <div className="p-home">

      <h1 className="p-home__title">
        Descubra o mundo das ciências
      </h1>

      <div className="p-home__list">
        {topicList && topicList.map((topic) => (
          <Link to={`/topic-option/${topic.discipline}/${topic.code}`}>
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