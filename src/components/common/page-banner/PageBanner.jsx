import bannerImage from "../../../assets/images/banner.jpg";

import "./PageBanner.scss";

const PageBanner = ({ img }) => {
  return (
    <div
      className="page-banner"
      style={{ backgroundImage: img ? `url(${img})` : `url(${bannerImage})` }}
    ></div>
  );
};

export default PageBanner;
