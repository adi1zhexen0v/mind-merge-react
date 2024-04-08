import { Link } from "react-router-dom";
import { POSTS_PAGE_ROUTE } from "../utils/consts";

function HomePage() {
  return (
    <div className="container">
      <div className="home">
        <h1 className="home-title">Mind Merge</h1>
        <p className="home-text">
          MindMerge: объединяя умы, создаём новые горизонты. Поделитесь своими
          идеями, вдохновляйтесь и открывайте неизведанные пути вместе
        </p>
        <Link to={POSTS_PAGE_ROUTE} className="home-btn">
          Все посты
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
