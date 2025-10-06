import { FaWhatsapp, FaTelegramPlane, FaFacebookF } from "react-icons/fa";

const ShareApp = () => {
  const appUrl = "https://sapiens.app"; // URL do seu app

  const shareText = encodeURIComponent(
    "Conheça o Sapiens! Um app web para aprender ciências de forma didática, simples e objetiva."
  );

  return (
    <section className="p-share">
      <h1 className="p-share__title">Compartilhe o Sapiens</h1>
      <p className="p-share__subtitle">
        Ajude outras pessoas a descobrirem a ciência de forma simples e divertida!
      </p>

      <div className="p-share__buttons">
        <a
          href={`https://wa.me/?text=${shareText}%20${appUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-share__button p-share__button--whatsapp"
        >
          <FaWhatsapp /> WhatsApp
        </a>

        <a
          href={`https://t.me/share/url?url=${appUrl}&text=${shareText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-share__button p-share__button--telegram"
        >
          <FaTelegramPlane /> Telegram
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${appUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-share__button p-share__button--facebook"
        >
          <FaFacebookF /> Facebook
        </a>
      </div>
    </section>
  );
}

export default ShareApp