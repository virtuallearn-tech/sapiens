import type { DISCIPLINE_MODULE, DISCIPLINE } from "@interfaces/discipline";
import type { IFlashcard } from "@interfaces/flsahcards";
import { getRandomItems } from "@utils/getRandomItems";
import { CitologyFlashcards } from "./biology/flashcards";

export const getFlashcardsByTopic = (
  discipline: DISCIPLINE,
  module: DISCIPLINE_MODULE,
  qtd: number): IFlashcard[] => {
  if (discipline === 'BIOLOGY' && module === 'CYTOLOGY') {
    return getRandomItems<IFlashcard>(CitologyFlashcards, qtd);
  }
  return [];
}