import { Button } from "@components/common/Button";
import { Input } from "@components/common/Input";
import { useState } from "react";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, senha });
    // Aqui futuramente você vai integrar com a API de autenticação
  };

  return (
    <div className="p-login">
      <div className="p-login__card">
        <h2 className="p-login__title">Entrar</h2>

        <form className="p-login__form" onSubmit={handleSubmit}>
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

          <div className="p-login__actions">
            <Button type="submit" typeBtn="primary" className="m-button--full">Entrar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
