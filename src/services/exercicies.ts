import type { DISCIPLINE, DISCIPLINE_MODULE, DISCIPLINE_TOPICS } from "@interfaces/discipline";
import { getRandomItems } from "@utils/getRandomItems";
import { CitologyQuestions } from "./biology/questions/citology_questions";
import type { IQuestionData } from "@interfaces/question";
import { getAnimalKingdomQuestions } from "./biology/questions/animal_kingdom_questions";
import type { ANIMAL_KINGDOM_TOPICS } from "@interfaces/disciplines/biology";

export const getExerciciesByTopic = (
  discipline: DISCIPLINE,
  module: DISCIPLINE_MODULE,
  topic: DISCIPLINE_TOPICS | null,
  qtd: number): IQuestionData[] => {
    // console.log('qtd ', qtd)
  if (discipline === 'BIOLOGY' && module === 'CYTOLOGY') {
    return getRandomItems<IQuestionData>(CitologyQuestions.data, qtd); 
  }
  else if (discipline === 'BIOLOGY' && module === 'ANIMAL_KINGDOM') {
    const animalKingdomQuestions = getAnimalKingdomQuestions(topic as ANIMAL_KINGDOM_TOPICS);
    return getRandomItems<IQuestionData>(animalKingdomQuestions!.data, qtd);
  }
  return [];
}