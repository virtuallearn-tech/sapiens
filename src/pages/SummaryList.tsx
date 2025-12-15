import { CardContent } from "@components/cards/CardContent";
import { ROUTES_NAME } from "@routes/routesName";
import type { DisciplineCard } from "@services/summaries/disciplines";
import { getDiscipline } from "@services/summary";
// import { useNavigate } from "react-router-dom";

const SumaryList = () => {
  // const navigate = useNavigate()
  const contents: DisciplineCard[] = getDiscipline();

  return (
    <section className="p-summary-list">
      <h1 className="p-summary-list__title">Resumos Científicos de Forma Didática.</h1>

      <div className="p-summary-list__grid">
        {contents.map(content => (
          <CardContent
            key={content.discipline}
            id={content.discipline}
            cover={content.cover}
            title={content.title}
            link={`${ROUTES_NAME.LISTA_RESUMO}/${content.discipline}`}
          />
        ))}
      </div>
    </section>
  );
};

export default SumaryList;
