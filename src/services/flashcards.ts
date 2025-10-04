import type { BIOLOGY_TOPICS, DISCIPLINE } from "@interfaces/discipline";
import type { IFlashcard } from "@interfaces/flsahcards";
import { getRandomItems } from "@utils/getRandomItems";
import { CitologyFlashcards } from "./biology/flashcards";

export const getFlashcardsByTopic = (
  discipline: DISCIPLINE,
  topic: BIOLOGY_TOPICS,
  qtd: number): IFlashcard[] => {
  if (discipline === 'BIOLOGY' && topic === 'CITOLOGY') {
    return getRandomItems<IFlashcard>(CitologyFlashcards, qtd);
  }
  return [];
}