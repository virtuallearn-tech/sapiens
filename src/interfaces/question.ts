import type { DISCIPLINE_MODULE, DISCIPLINE } from "./discipline";

export interface IAnswer {
  letter?: string;
  isCorrect: boolean;
  text?: string;
}

export interface IQuestionData {
  code: string;
  context: string;
  files?: string[];
  correctAltenative: string;
  altenativesIntroduction?: string;
  alternatives: IAnswer[];
  explanation?: string;
}

export interface IQuestion {
  discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE];
  module: typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE];
  data: IQuestionData[] 
}