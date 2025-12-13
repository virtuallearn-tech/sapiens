import { DISCIPLINE, DISCIPLINE_MODULE, DISCIPLINE_TOPICS } from "@interfaces/discipline";
import { getRandomItems } from "@utils/getRandomItems";
import { CitologyQuestions } from "./biology/questions/citology_questions";
import type { IQuestionData } from "@interfaces/question";
import { getAnimalKingdomQuestions } from "./biology/questions/animal_kingdom_questions";
import type { HUMAN_ANATOMY_TOPICS } from "@interfaces/disciplines/biology-topics/human-anatomy";
import { getHumanAnatomyQuestions } from "./biology/questions/human_anatomy_questions";
import type { ANIMAL_KINGDOM_TOPICS } from "@interfaces/disciplines/biology-topics/animal-kingdom";

export const getExerciciesByTopic = (
  discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE],
  module: typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE],
  topic: typeof DISCIPLINE_TOPICS[keyof typeof DISCIPLINE_TOPICS] | null,
  qtd: number): IQuestionData[] => {
    // console.log('qtd ', qtd)
  if (discipline === DISCIPLINE.BIOLOGY && module === DISCIPLINE_MODULE.CYTOLOGY) {
    return getRandomItems<IQuestionData>(CitologyQuestions.data, qtd); 
  }
  else if (discipline === DISCIPLINE.BIOLOGY && module === DISCIPLINE_MODULE.ANIMAL_KINGDOM) {
    const animalKingdomQuestions = getAnimalKingdomQuestions(topic as typeof ANIMAL_KINGDOM_TOPICS[keyof typeof ANIMAL_KINGDOM_TOPICS]);
    return getRandomItems<IQuestionData>(animalKingdomQuestions!.data, qtd);
  }
  else if (discipline === DISCIPLINE.BIOLOGY && module === DISCIPLINE_MODULE.HUMAN_ANATOMY) {
    const humanAnatomyQuestions = getHumanAnatomyQuestions(topic as typeof HUMAN_ANATOMY_TOPICS[keyof typeof HUMAN_ANATOMY_TOPICS]);
    return getRandomItems<IQuestionData>(humanAnatomyQuestions!.data, qtd);
  }
  return [];
}