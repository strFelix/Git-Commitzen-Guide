import "./Register.css";
import { useState } from "react";
import Input from "../../components/Input";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const autorizedUsers = [
    {
      email: "commitzen@glide.com.br",
      password: "123456",
    },
  ];

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = autorizedUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      alert("Usuário autorizado.");
      e.target.reset();
    } else {
      alert("Usuário não autorizado.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h2>Entrar</h2>
        </div>
        <form id="form" className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="Digite seu email..."
              onChange={onEmailChange}
            />
          </div>
          <div className="form-control">
            <Input
              id="password"
              label="Senha"
              type="password"
              placeholder="Digite sua senha..."
              onChange={onPasswordChange}
            />
          </div>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
};

export default Register;
