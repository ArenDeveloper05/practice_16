import { useSelector } from "react-redux";
import PageBanner from "../common/page-banner/PageBanner";
import "./Partners.scss";
const Partners = () => {
  const partnersData = useSelector((state) => state.partners.partnersList);

  return (
    <div className="partners-parent">
      <PageBanner />
      <h3>Գործընկերներ</h3>
      <div className="partners">
        {partnersData &&
          partnersData.map(({ id, img, title, text },index) => {
            return (
              <div className="partners-container" key={id} style={{ '--index': index }}>
                <img src={img} alt="partners-img" />
                <h1>{title}</h1>
                <span>{text}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Partners;
