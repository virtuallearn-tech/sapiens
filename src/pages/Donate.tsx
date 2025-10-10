import { Button } from '@components/common/Button';
import { Message } from '@components/layout/Message';
import { useState } from 'react';

const Donate = () => {

  const [copied, setCopied] = useState<boolean>(false)

  const handleCopy = () => {
    const text = "virtuallearn.tech@gmail.com"
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true)
      })
      .catch(err => {
        console.error("Erro ao copiar: ", err)
      })
  }

  return (
    <section className="p-donate">
      <h1 className="p-donate__title">Apoie o Sapiens</h1>
      <p className="p-donate__subtitle">
        O Sapiens é gratuito e feito para você aprender ciências de forma didática, simples e objetiva.
        Se você acredita no projeto, considere apoiar com uma doação via Pix.
      </p>

      <div className="p-donate__info">
        <p className="p-donate__info-text">Chave Pix</p>
        <a
          href="mailto:virtuallearn.tech@gmail.com?subject=Sapiens%20Apoio"
          className="p-donate__info-email"
        >
          virtuallearn.tech@gmail.com
        </a>
      </div>

      <div className="p-donate__qrcode">
        <Button type='button' typeBtn='secondary' onClick={handleCopy}>
          Copiar chave PIX
        </Button>
      </div>

      {copied && <Message message='Pix copiado com sucesso! 😁❤️'/>}

    </section>
  );
};

export default Donate