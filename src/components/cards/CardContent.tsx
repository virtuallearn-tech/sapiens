
interface CardContentProps {
  id?: number | string;
  bgImage: string;
  title: string;
  description: string;
  link?: string;
}
export const CardContent = ({ id, bgImage, title, description, link }: CardContentProps) => {
  return (
    <div className="m-card-content">
      <div className="m-card-content__image" style={{ backgroundImage: `url(${bgImage})` }} />
      <div className="m-card-content__info">
        <h3 className="m-card-content__info-title">{title}</h3>
        <p className="m-card-content__info-description">{description}</p>
      </div>
    </div>
  )
}