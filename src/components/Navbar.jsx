import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import {
  FORM_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  POSTS_PAGE_ROUTE,
} from "../utils/consts";

function Navbar() {
  const { isAuth, logout } = useAuth();

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-part">
          <Link to={HOME_PAGE_ROUTE} className="nav-link">
            Главная
          </Link>
          <Link to={POSTS_PAGE_ROUTE} className="nav-link">
            Посты
          </Link>
        </div>
        <div className="nav-part">
          {isAuth ? (
            <>
              <Link to={FORM_PAGE_ROUTE} className="nav-btn nav-btn__inverse">
                Добавить пост
              </Link>
              <button className="nav-btn" onClick={logout}>
                Выйти
              </button>
            </>
          ) : (
            <Link to={LOGIN_PAGE_ROUTE} className="nav-btn">
              Войти
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
