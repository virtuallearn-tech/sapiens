import { useNavigate } from "react-router-dom";

interface CardContentProps {
  id?: number | string;
  cover: string;
  title: string;
  description?: string;
  link?: string;
  modifier?: string;
}

export const CardContent = ({ id, cover, title, description, link, modifier }: CardContentProps) => {

  const naviagte = useNavigate()

  const handleLink = () => {
    if (!link) return
    naviagte(link)
  }

  // className="m-card-content"
  //className="m-card-content__image"
  return (
    <div className={`m-card-content ${modifier ? `m-card-content--${modifier}` : ''}`} onClick={() => handleLink()}>
      <div className={`m-card-content__image ${modifier ? `m-card-content__image--${modifier}` : ''}`} style={{ backgroundImage: `url(${cover})` }} />
      <div className="m-card-content__info">
        <h3 className="m-card-content__info-title">{title}</h3>
        {description && <p className="m-card-content__info-description">{description}</p>}
      </div>
    </div>
  )
}