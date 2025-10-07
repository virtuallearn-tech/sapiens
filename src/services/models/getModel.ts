import type { DISCIPLINE, DISCIPLINE_TOPICS } from "@interfaces/discipline";
import { BIOLOGY_MODELS } from "./biology/biologyModels";
import type { IModel } from "@interfaces/model";

export const getModel = (discipline: DISCIPLINE = 'BIOLOGY', topic: DISCIPLINE_TOPICS = 'CYTOLOGY'):IModel => {
  return BIOLOGY_MODELS[0]
}