import { useSelector } from "react-redux";
import NewsItem from "./news-item/NewsItem";
import "./HomeArticles.scss";

const HomeArticles = () => {
  const news = useSelector((state) => state.homeNews.news);
  return (
    <div className="home-section-articles">
      {news &&
        news.map(({ id, img, title, date, views, content }) => {
          return (
            <article key={id} className="home-news-article">
              <NewsItem
                img={img}
                title={title}
                date={date}
                views={views}
                content={content}
              />
            </article>
          );
        })}
    </div>
  );
};

export default HomeArticles;
