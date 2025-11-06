import type { DISCIPLINE, DISCIPLINE_MODULE, DISCIPLINE_TOPICS } from "@interfaces/discipline";
import { getRandomItems } from "@utils/getRandomItems";
import { CitologyQuestions } from "./biology/questions/citology_questions";
import type { IQuestionData } from "@interfaces/question";
import { getAnimalKingdomQuestions } from "./biology/questions/animal_kindom_questions";
import type { ANIMAL_KINGDOM_TOPICS } from "@interfaces/disciplines/biology";

export const getExerciciesByTopic = (
  discipline: DISCIPLINE,
  module: DISCIPLINE_MODULE,
  topic: DISCIPLINE_TOPICS | null,
  qtd: number): IQuestionData[] => {
    console.log('qtd ', qtd)
  if (discipline === 'BIOLOGY' && module === 'CYTOLOGY') {
    console.log('q cy')
    const t = CitologyQuestions.data
    console.log('t', t);
    const qt = getRandomItems<IQuestionData>(t, qtd); 
    console.log('qt', qt);
    return qt
  }
  else if (discipline === 'BIOLOGY' && module === 'ANIMAL_KINGDOM') {
    const animalKingdomQuestions = getAnimalKingdomQuestions(topic as ANIMAL_KINGDOM_TOPICS);
    console.log('animalKingdomQuestions', animalKingdomQuestions);
    return getRandomItems<IQuestionData>(animalKingdomQuestions!.data, qtd);
    // return animalKingdomQuestions!.data
  }
  return [];
}