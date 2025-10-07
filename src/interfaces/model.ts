import type { DISCIPLINE, DISCIPLINE_TOPICS } from "./discipline"

export interface IModelNode{
  name:string,
  node:string|string[],
  description:string,
  text:string
}

export interface IModelData{
  souce:string,
  name:string,
  title:string,
  description:string,
  text:string,
  scale:number|number[],
  rotation?:number|number[],
  position?:number|number[]
  node:IModelNode[],
  attribuition?:string,
  wikipedia?:string
}

export interface IModel{
  disciplie:DISCIPLINE,
  topic: DISCIPLINE_TOPICS,
  data: IModelData[]
}