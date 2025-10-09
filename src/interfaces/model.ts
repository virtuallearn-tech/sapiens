import type { DISCIPLINE, DISCIPLINE_SUBTOPICS, DISCIPLINE_TOPICS } from "./discipline"

export interface IModelNode {
  name: string,
  node: string | string[],
  description: string,
  text: string
}

export interface IModelData {
  code: DISCIPLINE_SUBTOPICS,
  source: string,
  name: string,
  title: string,
  description: string,
  text: string,
  scale: number,
  rotation: [number, number, number],
  position: [number, number, number],
  node: IModelNode[],
  attribuition?: string,
  wikipedia?: string
}

export interface IModel {
  disciplie: DISCIPLINE,
  topic: DISCIPLINE_TOPICS,
  data: IModelData[]
}

export interface IClass {
  name: string,
  node: string | string[] | null,
  text: string
}