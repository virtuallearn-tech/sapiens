import type { DISCIPLINE_MODULE, DISCIPLINE_TOPICS, DISCIPLINE } from "./discipline";

export interface ITopicCode {
  discipline?:DISCIPLINE,
  module?: DISCIPLINE_MODULE,
  title: string,
  description: string,
  cover: string,
  topic: DISCIPLINE_TOPICS
}

export interface ITopicData {
  discipline?:DISCIPLINE,
  module: DISCIPLINE_MODULE,
  data: Array<ITopicCode>
}

export interface Itopic {
  discipline: DISCIPLINE,
  data: Array<ITopicData>
}