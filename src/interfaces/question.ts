import type { BIOLOGY_TOPICS, DISCIPLINE } from "./discipline";

interface IAnswer {
  letter: string;
  isCorrect: boolean;
  text?: string;
}

interface IQuestionData {
  code: string;
  context: string;
  files?: string[];
  correctAltenative: string;
  altenativesIntroduction?: string;
  alternatives: IAnswer[];
  explanation?: string;
}

export interface IQuestion {
  discipline: DISCIPLINE;
  topic: BIOLOGY_TOPICS;
  data: IQuestionData[] 
}