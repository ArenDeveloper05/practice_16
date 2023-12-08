import HomeHeader from "./home-header/HomeHeader";
import HomeArticles from "./home-articles/HomeArticles";
import HomeTitle from "./home-title/HomeTitle";
import "./HomeSection.scss";

const HomeSection = () => {
  return (
    <section className="home-section">
      <div className="home-section-content">
        <HomeHeader />
        <HomeTitle />
        <HomeArticles />
      </div>
    </section>
  );
};

export default HomeSection;
