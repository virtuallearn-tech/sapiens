import type { DISCIPLINE, DISCIPLINE_MODULE } from "@interfaces/discipline";
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

export const getContentByModule = (discipline: DISCIPLINE = "BIOLOGY", module: DISCIPLINE_MODULE): ITopicData => {
  const content = getContentByDiscipline(discipline)!
  const modules = content.data.find(t => t.module === module)! 
  return modules
}


export const getContentByTopic = (
  discipline: DISCIPLINE = "BIOLOGY",
  module: DISCIPLINE_MODULE,
  topic: string): ITopicCode => {
  const moduleData = getContentByModule(discipline, module)
  console.log('module', moduleData)
  
  const topicData = moduleData?.data.find(d => d.topic === topic)!
  console.log('topicdata ', topicData)
  
  topicData['discipline'] = discipline
  topicData.module = moduleData?.module
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