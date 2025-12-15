import { DISCIPLINE } from "@interfaces/discipline";
// import "./SummaryListByDiscipline.scss";
import { getSummaryListByDiscipline } from "@services/summary";
import { useParams } from "react-router-dom";
import type { Summary } from "@services/summaries/disciplines";
import { useEffect, useState } from "react";

const SummaryListByDiscipline = () => {
  const params = useParams()
  const [summaries, setSummaries] = useState<Summary[]>([])
  console.log(params.discipline)

  useEffect(()=>{

     const summariesList = getSummaryListByDiscipline(params.discipline as typeof DISCIPLINE[keyof typeof DISCIPLINE]);

     setSummaries(summariesList)
     console.log(summaries)

  }, [params.discipline])


  return (
    <section className="summary-list">
      <h1 className="summary-list__title">Resumos didáticos</h1>
      <ul className="summary-list__items">
        {summaries.map((summary) => (
          <li key={summary.file} className="summary-list__item">
            <article className="summary-card">
              <h3 className="summary-card__title">
                {summary.title}
              </h3>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SummaryListByDiscipline;
