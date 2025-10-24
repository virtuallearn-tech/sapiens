import type { DISCIPLINE_MODULE, DISCIPLINE_TOPICS } from "./discipline"

export interface IModelNode {
  name: string,
  node: string | string[] |  null,
  description: string,
  text: string
}

export interface IModelData {
  topic: DISCIPLINE_TOPICS,
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
  node: IModelNode[] | null,
  attribuition?: string,
  wikipedia?: string,
  animation?: string | string[],
  sound?:string,
  sceneBg?:string,
  hasAnimation?:boolean 
}

export interface IModel {
  // discipline: DISCIPLINE,
  module: DISCIPLINE_MODULE,
  data: IModelData[]
}

export interface IClass {
  name: string,
  node: string | string[] | null,
  text: string
}