import { partnersConfig } from "../../config";
import PageBanner from "../common/page-banner/PageBanner";
import "./Partners.scss"
const Partners = () => {
  return <div className="partners-parent">
    <PageBanner />
    <h3>Գործընկերներ</h3>
    <div className="partners">
    {partnersConfig &&
          partnersConfig.map(({ id, img,title,text }) => {
            return (
                <div className="partners-container">
                  <img src={img} alt="partners-img" />
                <h1>{title}</h1>
                <span>{text}</span>
                </div>
            );
          })}
  </div>
  </div>
};

export default Partners;
