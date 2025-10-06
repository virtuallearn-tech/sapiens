import QRCodePIX from '@assets/qrcode-pix.jpg'

const Donate = () => {
  return (
    <section className="p-donate">
      <h1 className="p-donate__title">Apoie o Sapiens</h1>
      <p className="p-donate__subtitle">
        O Sapiens é gratuito e feito para você aprender ciências de forma didática, simples e objetiva.  
        Se você acredita no projeto, considere apoiar com uma doação via Pix.
      </p>

      <div className="p-donate__qrcode">
        <img src={QRCodePIX} alt="QR Code Pix para apoiar o Sapiens" />
      </div>

      <div className="p-donate__info">
        <p className="p-donate__info-text">Chave Pix</p>
        <a
          href="mailto:virtuallearn.tech@gmail.com?subject=Sapiens%20Apoio"
          className="p-donate__info-email"
        >
          virtuallearn.tech@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Donate