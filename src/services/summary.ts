import type { DISCIPLINE, DISCIPLINE_SUBTOPICS, DISCIPLINE_TOPICS } from "@interfaces/discipline";
import { CitologySummary } from "./biology/summary";
import type { IContent } from "@interfaces/content";

export const getSummaryByDiscipline = (discipline: DISCIPLINE): IContent[] => {
  return CitologySummary.filter(c => c.discipline === discipline);
}

export const getSummaryByTopic = (discipline: DISCIPLINE, topic: DISCIPLINE_TOPICS): IContent[] => {
  return CitologySummary.filter(c => c.discipline === discipline && c.topic === topic);
}

export const getSummaryByCode = (discipline: DISCIPLINE, code: DISCIPLINE_SUBTOPICS): IContent | undefined => {
  return CitologySummary.find(c => c.discipline === discipline && c.code === code);
}

export const getSummaryAll = (): IContent[] => {
  return CitologySummary;
}
