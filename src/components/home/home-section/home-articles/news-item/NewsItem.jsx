import { useNavigate } from "react-router-dom";

const NewsItem = ({ news }) => {
  const { id, img, title, date, views, content } = news;
  const navigate = useNavigate();
  const changePath = (path) => navigate(path);
  const handleClick = () => {
    changePath(`/news/${id}`);
  }
  return (
    <>
      <img src={img.src} alt={img.alt} />
      <h2 className="home-news-article-title lightblue font-weight-400">
        {title}
      </h2>
      <div className="details">
        <h4 className="font-weight-400">
          {date} {views}
        </h4>
      </div>
      <h3 className="font-weight-400">{content}</h3>
      <button className="home-news-article-button" onClick={handleClick}>
        <h2 className="font-weight-400">Մանրամասն</h2>
      </button>
    </>
  );
};

export default NewsItem;
