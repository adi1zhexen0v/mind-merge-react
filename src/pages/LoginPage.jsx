import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../services/axios";
import Input from "../components/Input";
import { HOME_PAGE_ROUTE, REGISTER_PAGE_ROUTE } from "../utils/consts";
import { useAuth } from "../providers/AuthProvider";

function LoginPage() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      navigate(HOME_PAGE_ROUTE);
      login(response.data.token);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container">
      <div className="login">
        <form onSubmit={loginUser} className="login-form">
          <h2 className="login-title">Войти в систему</h2>
          <Input
            title="E-mail"
            placeholder="Введите ваш e-mail"
            value={email}
            setValue={setEmail}
          />
          <Input
            type="password"
            title="Пароль"
            placeholder="Введите ваш пароль"
            value={password}
            setValue={setPassword}
          />
          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? "Загрузка..." : "Войти"}
          </button>

          {error && <p>{error.toString()}</p>}

          <p className="login-link">
            У вас нет аккаунта?{" "}
            <Link to={REGISTER_PAGE_ROUTE}>Регистрация</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
