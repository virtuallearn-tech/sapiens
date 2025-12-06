import  { DISCIPLINE, DISCIPLINE_MODULE, DISCIPLINE_TOPICS } from "@interfaces/discipline";
import { BIOLOGY_MODELS } from "./biology/biologyModels";
import type { IClass, IModel, IModelData } from "@interfaces/model";

export const getModelByDiscipline = (discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE]) => {
  switch(discipline){
    case DISCIPLINE.BIOLOGY:
      return BIOLOGY_MODELS
    default:
      return []
  }
}

export const getModel = (discipline: typeof  DISCIPLINE[keyof typeof DISCIPLINE] = DISCIPLINE.BIOLOGY, module: typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE] = DISCIPLINE_MODULE.CYTOLOGY): IModel => {
  const disciplineData = getModelByDiscipline(discipline)
  return disciplineData.find((models) => models.module == module)!
}

export const getModelByTopic = (
  topic: typeof DISCIPLINE_TOPICS[keyof typeof DISCIPLINE_TOPICS],
  discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE] = DISCIPLINE.BIOLOGY,
  module: typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE] = DISCIPLINE_MODULE.CYTOLOGY,
): IModelData => {
  const model = getModelByDiscipline(discipline).find((model) => model.module == module)!.data.find(m => m.topic === topic)
  return model!
}

export const setClass = (model: IModelData): IClass[] => {

  console.log('model on set class', model)

  const iClass: IClass[] = [
    {
      name: model.name,
      node: null,
      text: model.text
    }
  ]

  if (model.node) {
    model.node.forEach((node) => {
      const iClassItem: IClass = {
        name: node.name,
        node: node.node,
        text: node.text
      }

      iClass.push(iClassItem)
    })
  }

  return iClass

}