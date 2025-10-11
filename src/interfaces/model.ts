import type { DISCIPLINE, DISCIPLINE_SUBTOPICS, DISCIPLINE_TOPICS } from "./discipline"

export interface IModelNode {
  name: string,
  node: string | string[] |  null,
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
  scale_sm:number,
  scale_md:number,
  scale_lg:number,
  scale_2lg:number,
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