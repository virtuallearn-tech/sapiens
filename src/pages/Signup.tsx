import { useState } from "react";
import { Input } from "@components/common/Input";
import { Button } from "@components/common/Button";

export const Signup = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nome, email, senha });
    // Aqui futuramente você vai integrar com a API de cadastro
  };

  return (
    <div className="p-cadastro">
      <div className="p-cadastro__card">
        <h2 className="p-cadastro__title">Criar Conta</h2>

        <form className="p-cadastro__form" onSubmit={handleSubmit}>
          <Input
            id="nome"
            name="nome"
            label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Input
            id="email"
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            id="senha"
            name="password"
            label="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <div className="p-cadastro__actions">
            <Button type="submit" typeBtn="primary" className="m-button--full">Cadastrar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
