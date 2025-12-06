import type { DISCIPLINE_MODULE, DISCIPLINE_TOPICS, DISCIPLINE } from "./discipline";

export interface ITopicCode {
  discipline?: typeof DISCIPLINE[keyof typeof DISCIPLINE],
  module?: typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE],
  title: string,
  description: string,
  cover: string,
  topic: typeof DISCIPLINE_TOPICS[keyof typeof DISCIPLINE_TOPICS]
}

export interface ITopicData {
  discipline?: typeof DISCIPLINE[keyof typeof DISCIPLINE],
  module: typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE],
  data: Array<ITopicCode>
}

export interface Itopic {
  discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE],
  data: Array<ITopicData>
}