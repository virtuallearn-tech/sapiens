import  { BIOLOGY_MODULE, BIOLOGY_TOPICS } from "./disciplines/biology";

export const DISCIPLINE = {
  BIOLOGY: 'biologia',
  PHYSICS: 'fisica',
  QUEMISTRY: 'quimica',
  MATH: 'matematica',
} as const;

export const DISCIPLINE_MODULE = {
  ...BIOLOGY_MODULE,
} as const;

export const DISCIPLINE_TOPICS = {
  ...BIOLOGY_TOPICS,
} as const;
