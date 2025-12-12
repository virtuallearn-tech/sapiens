import  { DISCIPLINE, DISCIPLINE_MODULE } from "@interfaces/discipline";
import { BIOLOGY_TOPICS } from "./biology/topics";
import type { Itopic, ITopicCode, ITopicData } from "@interfaces/topic";

export const getDiscipline: typeof DISCIPLINE[keyof typeof DISCIPLINE][] = [
  DISCIPLINE.BIOLOGY,
  // 'PHYSICS',
  // 'CHEMISTRY',
  // 'MATH'
]

export const getAllTopics = (): ITopicCode[] => {
  const biologyTopics = flattenTopics(BIOLOGY_TOPICS);
  const allTpícs: ITopicCode[] = [...biologyTopics]
  return allTpícs
}

export const getContentByDiscipline = (discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE] = DISCIPLINE.BIOLOGY):Itopic => {
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

export const getContentByModule = (
    module: typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE],
    discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE] = DISCIPLINE.BIOLOGY, 
  ): ITopicData => {
  const content = getContentByDiscipline(discipline)!
  const modules = content.data.find(t => t.module === module)! 
  modules['discipline'] = content.discipline
  return modules
}


export const getContentByTopic = (
  module: typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE],
  topic: string,
  discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE] = DISCIPLINE.BIOLOGY,
): ITopicCode => {
  
  const moduleData = getContentByModule(module, discipline)
  const topicData = moduleData.data.find(d => d.topic === topic)!
  
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