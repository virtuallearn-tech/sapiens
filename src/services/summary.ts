import type { DISCIPLINE, DISCIPLINE_MODULE, DISCIPLINE_TOPICS } from "@interfaces/discipline";
import { CitologySummary } from "./biology/summary";
import type { IContent } from "@interfaces/content";

export const getSummaryByDiscipline = (discipline: DISCIPLINE): IContent[] => {
  return CitologySummary.filter(c => c.discipline === discipline);
}

export const getSummaryByTopic = (discipline: DISCIPLINE, topic: DISCIPLINE_TOPICS): IContent[] => {
  return CitologySummary.filter(c => c.discipline === discipline && c.topic === topic);
}

export const getSummaryByCode = (discipline: DISCIPLINE, module: DISCIPLINE_MODULE): IContent | undefined => {
  return CitologySummary.find(c => c.discipline === discipline && c.module === module);
}

export const getSummaryAll = (): IContent[] => {
  return CitologySummary;
}
