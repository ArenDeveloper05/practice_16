import HomeHeader from "./home-header/HomeHeader";
import "./HomeSection.scss";

const HomeSection = () => {
  return (
    <section className="home-section">
      <HomeHeader />
      <div className="news-description">
        <h1 className="news-description-text">ՆՈՐՈՒԹՅՈՒՆՆԵՐ</h1>
      </div>
      <div className="home-section-articles">
        <article>
          <img src="" alt="" />
          <h2>Lorem ipsum dolor sit amet 2</h2>
          <div className="description">
            <p>etc.</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            dignissimos itaque asperiores soluta veniam, voluptates explicabo
            cum incidunt quibusdam labore! Placeat sit delectus rem rerum
            aliquid dignissimos vero doloribus tempora.
          </p>
          <button>
            <h2>Մանրամասն</h2>
          </button>
        </article>
        <article>
          <img src="" alt="" />
          <h2>Lorem ipsum dolor sit amet 2</h2>
          <div className="description">
            <p>etc.</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            dignissimos itaque asperiores soluta veniam, voluptates explicabo
            cum incidunt quibusdam labore! Placeat sit delectus rem rerum
            aliquid dignissimos vero doloribus tempora.
          </p>
          <button>
            <h2>Մանրամասն</h2>
          </button>
        </article>
      </div>
    </section>
  );
};

export default HomeSection;
