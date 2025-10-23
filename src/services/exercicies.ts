import type { DISCIPLINE, DISCIPLINE_MODULE } from "@interfaces/discipline";
import { getRandomItems } from "@utils/getRandomItems";
import { CitologyQuestions } from "./biology/questions";
import type { IQuestionData } from "@interfaces/question";

export const getExerciciesByTopic = (
  discipline: DISCIPLINE,
  module: DISCIPLINE_MODULE,
  qtd: number): IQuestionData[] => {
  if (discipline === 'BIOLOGY' && module === 'CYTOLOGY') {
    return getRandomItems<IQuestionData>(CitologyQuestions.data, qtd);
  }
  return [];
}