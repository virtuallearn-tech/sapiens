import { ANIMAL_KINGDOM_TOPICS } from "./biology-topics/animal-kingdom";
import { CYTOLOGY_TOPICS } from "./biology-topics/cytology";
import { HUMAN_ANATOMY_TOPICS } from "./biology-topics/human-anatomy";

export const BIOLOGY_MODULE = {
  CYTOLOGY: "citologia",
  ANIMAL_KINGDOM: "reino-animal",
  HUMAN_ANATOMY: "anatomia-humana"
} as const;

export const BIOLOGY_TOPICS = {
  ...CYTOLOGY_TOPICS,
  ...ANIMAL_KINGDOM_TOPICS,
  ...HUMAN_ANATOMY_TOPICS
} as const;


