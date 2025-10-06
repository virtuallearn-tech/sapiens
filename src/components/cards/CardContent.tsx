import { useNavigate } from "react-router-dom";

interface CardContentProps {
  id?: number | string;
  cover: string;
  title: string;
  description?: string;
  link?: string;
}

export const CardContent = ({ id, cover, title, description, link }: CardContentProps) => {

  const naviagte = useNavigate()

  const handleLink = () => {
    if (!link) return
    naviagte(link)
  }

  return (
    <div className="m-card-content" onClick={() => handleLink()}>
      <div className="m-card-content__image" style={{ backgroundImage: `url(${cover})` }} />
      <div className="m-card-content__info">
        <h3 className="m-card-content__info-title">{title}</h3>
        {description && <p className="m-card-content__info-description">{description}</p>}
      </div>
    </div>
  )
}