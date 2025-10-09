import type { DISCIPLINE, DISCIPLINE_SUBTOPICS, DISCIPLINE_TOPICS } from "@interfaces/discipline";
import { BIOLOGY_MODELS } from "./biology/biologyModels";
import type { IClass, IModel, IModelData } from "@interfaces/model";

export const getModel = (discipline: DISCIPLINE = 'BIOLOGY', topic: DISCIPLINE_TOPICS = 'CYTOLOGY'):IModel => {
  return BIOLOGY_MODELS[0]
}

export const getModelByCode = (
  code: DISCIPLINE_SUBTOPICS,
  discipline: DISCIPLINE = 'BIOLOGY', 
  topic: DISCIPLINE_TOPICS = 'CYTOLOGY',
):IModelData => {
  const model  = BIOLOGY_MODELS[0].data.find(m => m.code === code) 
  return model!
}

export const setClass = (model:IModelData):IClass[] => {

  const iClass:IClass[] = [
    {
      name: model.name,
      node: null,
      text: model.text
    }
  ]

  model.node.forEach((node) => {
    const iClassItem:IClass = {
      name: node.name,
      node: node.node,
      text: node.text
    }

    iClass.push(iClassItem)
  })

  return iClass

}