import { DISCIPLINE, DISCIPLINE_MODULE, type DISCIPLINE_TOPICS } from "@interfaces/discipline";
import type { IFlashcard } from "@interfaces/flashcards";
import { getRandomItems } from "@utils/getRandomItems";
import { CitologyFlashcards } from "./biology/flashcards/cytology";
import { getAnimalKingdomFlashcards } from "./biology/flashcards/animal_kingdom";
import  { ANIMAL_KINGDOM_TOPICS } from "@interfaces/disciplines/biology";

export const getFlashcardsByTopic = (
  discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE],
  module: typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE],
  topic: typeof DISCIPLINE_TOPICS[keyof typeof DISCIPLINE_TOPICS] | null,
  qtd: number
): IFlashcard[] => {
  if (discipline === DISCIPLINE.BIOLOGY && module === DISCIPLINE_MODULE.CYTOLOGY) {
    return getRandomItems<IFlashcard>(CitologyFlashcards, qtd);
  }
  else if (discipline === DISCIPLINE.BIOLOGY && module === DISCIPLINE_MODULE.ANIMAL_KINGDOM) {
    const animalKingdomFlashcards = getAnimalKingdomFlashcards(topic as typeof ANIMAL_KINGDOM_TOPICS[keyof typeof ANIMAL_KINGDOM_TOPICS]);
    return getRandomItems<IFlashcard>(animalKingdomFlashcards, qtd); 
  }
  // eslint-disable-next-line @typescript-eslint/no-var-requires    
  return [];
}