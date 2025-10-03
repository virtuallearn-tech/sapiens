import type { DISCIPLINE } from "@interfaces/discipline";
import { BIOLOGY_TOPICS } from "./biology/topics";
import type { Itopic, ITopicCode, ITopicData } from "@interfaces/topic";

export const getDiscipline: DISCIPLINE[] = [
  "BIOLOGY",
  // 'PHYSICS',
  // 'CHEMISTRY',
  // 'MATH'
]

export const getAllTopics = (): ITopicCode[] => {
  const biologyTopics = flattenTopics(BIOLOGY_TOPICS);
  const allTpícs: ITopicCode[] = [...biologyTopics]
  return allTpícs
}

export const getContentByDiscipline = (discipline: DISCIPLINE = "BIOLOGY") => {
  return BIOLOGY_TOPICS
  // switch (discipline) {
  //   case 'BIOLOGY':
  //     return BIOLOGY_TOPICS
  //   case 'PHYSICS':
  //     return 'Physics'
  //   case 'CHEMISTRY':
  //     return 'Chemistry'
  //   case 'MATH':
  //     return 'Mathematics'    
  // }
}

export const getContentByTopic = (discipline: DISCIPLINE = "BIOLOGY", topic: string): ITopicData => {
  const content = getContentByDiscipline(discipline)!
  const data = content.data.find(t => t.topic === topic)!
  data.discipline = discipline
  return data
}

export const getContentByCode = (
  discipline: DISCIPLINE = "BIOLOGY",
  code: string): ITopicCode => {
  const content = getContentByDiscipline(discipline)!
  const getTopic = content.data.find(t => t.data.find(d => d.code === code))
  const topic = getTopic?.data.find(d => d.code === code)!
  topic.discipline = discipline
  return topic
}

const flattenTopics = (itopic: Itopic) => {
  return itopic.data.flatMap(topic =>
    topic.data.map(item => ({
      discipline: itopic.discipline,
      topic: topic.topic,
      ...item,
    }))
  );
};