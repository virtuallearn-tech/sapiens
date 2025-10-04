import type { DISCIPLINE, DISCIPLINE_TOPICS } from "@interfaces/discipline";
import { getRandomItems } from "@utils/getRandomItems";
import { CitologyQuestions } from "./biology/questions";
import type { IQuestionData } from "@interfaces/question";

export const getExerciciesByTopic = (
  discipline: DISCIPLINE,
  topic: DISCIPLINE_TOPICS,
  qtd: number): IQuestionData[] => {
  if (discipline === 'BIOLOGY' && topic === 'CITOLOGY') {
    return getRandomItems<IQuestionData>(CitologyQuestions.data, qtd);
  }
  return [];
}