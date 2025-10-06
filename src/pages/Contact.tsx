const Contact = () => {
  return (
    <section className="p-contact">
      <h1 className="p-contact__title">Contato</h1>
      <p className="p-contact__subtitle">
        Estamos muito felizes em receber o seu feedback e suas sugestões!  
        O Sapiens é um app feito para você aprender ciências de forma didática, simples e objetiva.
      </p>

      <div className="p-contact__info">
        <p className="p-contact__info-text">
          Você pode nos enviar um e-mail diretamente para:
        </p>
        <a
          href="mailto:virtuallearn.tech@gmail.com?subject=Sapiens%20Contato"
          target="_blank"
          className="m-button m-button--secondary m-button--full p-contact__info-email"
        >
          Enviar e-mail
        </a>
      </div>
    </section>
  );
};

export default Contact