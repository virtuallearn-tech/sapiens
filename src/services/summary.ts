import type { DISCIPLINE, DISCIPLINE_MODULE, DISCIPLINE_TOPICS } from "@interfaces/discipline";
import { CitologySummary } from "./biology/summary";
import type { IContent } from "@interfaces/content";

export const getSummaryByDiscipline = (discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE]): IContent[] => {
  return CitologySummary.filter(c => c.discipline === discipline);
}

export const getSummaryByTopic = (
    discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE],
    topic: typeof DISCIPLINE_TOPICS[keyof typeof DISCIPLINE_TOPICS]): IContent[] => {
  return CitologySummary.filter(c => c.discipline === discipline && c.topic === topic);
}

export const getSummaryByCode = (
    discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE], 
    module: typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE]): IContent | undefined => {
  return CitologySummary.find(c => c.discipline === discipline && c.module === module);
}

export const getSummaryAll = (): IContent[] => {
  return CitologySummary;
}
