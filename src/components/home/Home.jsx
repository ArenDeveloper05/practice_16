import HomeSection from "./home-section/HomeSection";
import HomeSlider from "./home-slider/HomeSlider";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <HomeSection />
    </div>
  );
};

export default Home;
