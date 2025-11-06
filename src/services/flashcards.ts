import type { DISCIPLINE_MODULE, DISCIPLINE, DISCIPLINE_TOPICS } from "@interfaces/discipline";
import type { IFlashcard } from "@interfaces/flsahcards";
import { getRandomItems } from "@utils/getRandomItems";
import { CitologyFlashcards } from "./biology/flashcards/cytology";
import { getAnimalKingdomFlashcards } from "./biology/flashcards/animal_kindom";
import type { ANIMAL_KINGDOM_TOPICS } from "@interfaces/disciplines/biology";

export const getFlashcardsByTopic = (
  discipline: DISCIPLINE,
  module: DISCIPLINE_MODULE,
  topic: DISCIPLINE_TOPICS | null,
  qtd: number
): IFlashcard[] => {
  if (discipline === 'BIOLOGY' && module === 'CYTOLOGY') {
    return getRandomItems<IFlashcard>(CitologyFlashcards, qtd);
  }
  else if (discipline === 'BIOLOGY' && module === 'ANIMAL_KINGDOM') {
    const animalKingdomFlashcards = getAnimalKingdomFlashcards(topic as ANIMAL_KINGDOM_TOPICS);
    return getRandomItems<IFlashcard>(animalKingdomFlashcards, qtd); 
  }
  // eslint-disable-next-line @typescript-eslint/no-var-requires    
  return [];
}