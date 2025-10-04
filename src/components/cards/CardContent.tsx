
interface CardContentProps {
  id?: number | string;
  cover: string;
  title: string;
  description?: string;
  link?: string;
}
export const CardContent = ({ id, cover, title, description, link }: CardContentProps) => {
  return (
    <div className="m-card-content">
      <div className="m-card-content__image" style={{ backgroundImage: `url(${cover})` }} />
      <div className="m-card-content__info">
        <h3 className="m-card-content__info-title">{title}</h3>
        {description && <p className="m-card-content__info-description">{description}</p>}
      </div>
    </div>
  )
}