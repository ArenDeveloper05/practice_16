import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./SingleNews.scss"

const SingleNews = () => {
    const { id } = useParams()
    const news = useSelector((state) => state.homeNews.news.find((item) => item.id === Number(id)))

    const { title, img,  content } = news ? news : "";
    
    return (
        <div className="single-news">
            { news && (
                <>
                    <h2 className="single-news-title font-weight-400">
                        {title}
                    </h2>
                    <img className="single-news-img" src={img && img.src} alt={img && img.alt} />
                    <h3 className="single-news-content">{content}</h3>
                </>
            )}
        </div>
    )
}

export default SingleNews;