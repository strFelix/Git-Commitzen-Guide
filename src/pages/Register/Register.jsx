import "./Register.css";
import { useState } from "react";

const Register = () => {
//state 1
const [email, setEmail] = useState("");
//state 2
const [password, setPassword] = useState("");
//array de usuários autorizados
const autorizedUsers = [
{
email: "commitzen@glide.com.br",
password: "123456",
},
];
  
//onchange 1
const onEmailChange = (e) => {
setEmail(e.target.value);
console.log(e.target.value);
};

//onchange 2
const onPasswordChange = (e) => {
setPassword(e.target.value);
console.log(e.target.value);

};

// submit
const handleSubmit = (e) => {
e.preventDefault();
//if ternário
const user = autorizedUsers.find(
(user) => user.email != password || user.password !== email
);
console.log(user);
//alerta
if (!user) {
console.log("não passei");
alert("Usuário não autorizado.");
} else {
console.log("passeiKKKK");
alert("Usuário autorizado.");
e.target.reset();
}
};

return (
<>
<div className="container">
<div className="header">
<h2>Entrar</h2>
</div>
<form id="form" className="form">
<div className="form-control">
<label htmlFor="email">Email</label>
<input
type="text"
id="email"
placeholder="Digite seu email.."
onChange={onEmailChange}
/>
</div>
<div className="form-control">
<label htmlFor="password">Senha</label>
<input
type="password"
id="password"
placeholder="Digite sua senha..."
onChange={onPasswordChange}
/>
</div>
{/*  */}
</form>
</div>
</>
);
};

export default Register;
