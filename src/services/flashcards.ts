import { DISCIPLINE, DISCIPLINE_MODULE, type DISCIPLINE_TOPICS } from "@interfaces/discipline";
import type { IFlashcard } from "@interfaces/flashcards";
import { getRandomItems } from "@utils/getRandomItems";
import { CitologyFlashcards } from "./biology/flashcards/cytology";
import { getAnimalKingdomFlashcards } from "./biology/flashcards/animal_kingdom";
import type { ANIMAL_KINGDOM_TOPICS } from "@interfaces/disciplines/biology-topics/animal-kingdom";
import { getHumanAnatomyFlashcards } from "./biology/flashcards/human_anatomy";
import type { HUMAN_ANATOMY_TOPICS } from "@interfaces/disciplines/biology-topics/human-anatomy";

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
  else if (discipline === DISCIPLINE.BIOLOGY && module === DISCIPLINE_MODULE.HUMAN_ANATOMY) {
    const humanAnatomyTopics = getHumanAnatomyFlashcards(topic as typeof HUMAN_ANATOMY_TOPICS[keyof typeof HUMAN_ANATOMY_TOPICS]);
    return getRandomItems<IFlashcard>(humanAnatomyTopics, qtd); 
  }
  // eslint-disable-next-line @typescript-eslint/no-var-requires    
  return [];
}