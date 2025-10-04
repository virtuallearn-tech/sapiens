import type { IContent } from "@interfaces/content";
import type { DISCIPLINE, DISCIPLINE_SUBTOPICS } from "@interfaces/discipline";
import { getSummaryByCode } from "@services/summary";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Summary = () => {

  const { discipline, code } = useParams<{ discipline: string, code: string }>();
  const [summary, setSummary] = useState<IContent|null>(null);

  useEffect(() => {
    const summary = getSummaryByCode(discipline as DISCIPLINE, code as DISCIPLINE_SUBTOPICS);
    console.log('summary', summary)
    setSummary(summary || null);
  }, [])

  return (
    <div className="summary">
      {summary && summary.component()}
    </div>
  );
}

export default Summary;