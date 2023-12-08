import FooterItem from "./footer-item/FooterItem";
import FooterLogo from "./footer-logo/FooterLogo";
import { footer } from "../../config";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-navigation">
        <ul className="footer-navigation-lists">
          {footer &&
            footer.map(({ id, title, route, img }) => {
              if (!img && !route) {
                return (
                  <li className="footer-paragraph">
                    <h4 className="font-weight-400" key={id}>
                      {title}
                    </h4>
                  </li>
                );
              } else if (img) return <FooterLogo img={img} path={route} />;
              else return <FooterItem key={id} title={title} path={route} />;
            })}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
