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

export const getContentByTopic = (discipline: DISCIPLINE = "BIOLOGY", module: string): ITopicData => {
  const content = getContentByDiscipline(discipline)!
  const data = content.data.find(t => t.module === module)!
  data.discipline = discipline
  return data
}

export const getContentByCode = (
  discipline: DISCIPLINE = "BIOLOGY",
  topic: string): ITopicCode => {
  console.log('mod param ', topic)
  const content = getContentByDiscipline(discipline)!
  console.log('content ', content)
  const getModule = content.data.find(t => t.data.find(d => d.topic === topic))
  console.log('module', getModule)
  const topicData = getModule?.data.find(d => d.topic === topic)!
  console.log('topicdata ', topicData)
  topicData['discipline'] = discipline
  topicData.module = getModule?.module
  return topicData
}

const flattenTopics = (itopic: Itopic) => {
  return itopic.data.flatMap(topic =>
    topic.data.map(item => ({
      discipline: itopic.discipline,
      module: topic.module,
      ...item,
    }))
  );
};