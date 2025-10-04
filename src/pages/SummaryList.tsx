import { CardContent } from "@components/cards/CardContent";
import type { IContent } from "@interfaces/content";
import { getSummaryAll } from "@services/summary";
import { useNavigate, Link } from "react-router-dom";

const SumaryList = () => {
  const navigate = useNavigate()
  const contents: IContent[] = getSummaryAll();

  return (
    <section className="p-summary-list">
      <h1 className="p-summary-list__title">Conteúdos de Biologia</h1>

      <div className="p-summary-list__grid">
        {contents.map(content => (
          <Link to={`/summary/${content.discipline}/${content.code}`}>
          <CardContent
            key={content.id}
            id={content.id}
            cover={content.cover} // caminho fictício para imagem
            title={content.title}
          />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SumaryList;
