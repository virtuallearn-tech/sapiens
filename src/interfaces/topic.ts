import type { BIOLOGY_TOPICS, CYTOLOGY_TOPICS, DISCIPLINE } from "./discipline";

export interface ITopicCode {
  discipline?:DISCIPLINE,
  topic?: BIOLOGY_TOPICS,
  title: string,
  description: string,
  cover: string,
  code: CYTOLOGY_TOPICS
}

export interface ITopicData {
  discipline?:DISCIPLINE,
  topic: BIOLOGY_TOPICS,
  data: Array<ITopicCode>
}

export interface Itopic {
  discipline: DISCIPLINE,
  data: Array<ITopicData>
}