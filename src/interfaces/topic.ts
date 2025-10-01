import type { BIOLOGY_TOPICS, CITOLOGY_TOPICS, DISCIPLINE } from "./discipline";

export interface ITopicData{
  title: string,
  description: string,
  cover:string,
  code: CITOLOGY_TOPICS
}

export interface Itopic{
  discipline: DISCIPLINE,
  topic: BIOLOGY_TOPICS,
  data:Array<ITopicData>
}