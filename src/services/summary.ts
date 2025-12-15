import type { DISCIPLINE, DISCIPLINE_TOPICS } from "@interfaces/discipline";
import { SUMMARIES, type IDiscipline, type Summary, type DisciplineCard } from "./summaries/disciplines";

export const getSummaryListByDiscipline = (discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE]): Summary[] => {
  const summaries: IDiscipline = SUMMARIES.find(c => c.discipline === discipline)!;
  return summaries.summaries
}

export const getSummaryByTopic = (
  discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE],
  topic: typeof DISCIPLINE_TOPICS[keyof typeof DISCIPLINE_TOPICS]): Summary => {
  const disciplineSummaries = getSummaryListByDiscipline(discipline)
  return disciplineSummaries.find((summary) => summary.topic == topic)!
}

export const getDiscipline = (): DisciplineCard[] => {
  return SUMMARIES.map((d: IDiscipline) => ({
    title: d.title,
    discipline: d.discipline,
    cover: d.cover
  }));
};
