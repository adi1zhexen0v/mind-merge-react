import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { LOGIN_PAGE_ROUTE } from "../utils/consts";

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="login">
        <div className="login-form">
          <h2 className="login-title">Регистрация</h2>
          <Input
            title="Имя"
            placeholder="Введите ваше имя"
            value={firstName}
            setValue={setFirstName}
          />
          <Input
            title="Фамилия"
            placeholder="Введите вашу фамилию"
            value={lastName}
            setValue={setLastName}
          />
          <Input
            title="E-mail"
            placeholder="Введите ваш e-mail"
            value={email}
            setValue={setEmail}
          />
          <Input
            title="Пароль"
            placeholder="Введите ваш пароль"
            value={password}
            setValue={setPassword}
          />
          <button className="login-btn">Регистрация</button>
          <p className="login-link">
            У вас уже есть аккаунт? <Link to={LOGIN_PAGE_ROUTE}>Войти</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
