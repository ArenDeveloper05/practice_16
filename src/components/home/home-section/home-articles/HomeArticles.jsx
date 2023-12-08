import { useSelector } from "react-redux";
import NewsItem from "./news-item/NewsItem";
import "./HomeArticles.scss";

const HomeArticles = () => {
  const news = useSelector((state) => state.homeNews.news);

  return (
    <div className="home-section-articles">
      {news &&
        news.map((news) => {
          return (
            <article key={news.id} className="home-news-article">
              <NewsItem
                news={news}
              />
            </article>
          );
        })}
    </div>
  );
};

export default HomeArticles;
