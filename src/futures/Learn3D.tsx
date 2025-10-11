import { CardContent } from "@components/cards/CardContent"
import type { ITopicCode } from "@interfaces/topic"
import { getAllTopics } from "@services/content"
import { useEffect, useState } from "react"

const Learn3D = () => {
 const [topicList, setTopicList] = useState<ITopicCode[]>([])
 
   useEffect(() => {
     const topics = getAllTopics()
     console.log('topics', topics)
     setTopicList(topics)
   }, [])
 
   return (
     <div className="p-home">
 
       <h1 className="p-home__title">
         Explore a ciência em 3D
       </h1>
 
       <div className="p-home__list">
         {topicList && topicList.map((topic) => (
             <CardContent
               key={topic.code}
               id={topic.code}
               title={topic.title}
               description={topic.description}
               cover={topic.cover}
               link={`/scene/${topic.discipline}/${topic.topic}/${topic.code}`}
             />
         ))}
       </div>
     </div>
   )
}

export default Learn3D