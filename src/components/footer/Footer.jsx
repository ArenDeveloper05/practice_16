import { Link, useNavigate } from "react-router-dom";
import ROUTER from "../../router/router";
import "./Footer.scss";

const Footer = () => {
  const navigate = useNavigate();
  const changePath = (path) => navigate(path);
  return (
    <footer className="footer">
      <nav className="footer-navigation">
        <ul className="footer-navigation-lists">
          <li>
            <div className="header-logo">
              <div
                className="header-logo-container"
                onClick={() => changePath(ROUTER.HOME_PAGE_ROUTE)}
              >
                <img className="header-img" src={""} alt={"logo"} />
              </div>
            </div>
          </li>
          <li>
            <Link
              className={
                window.location.pathname === ROUTER.ABOUT_PAGE_ROUTE
                  ? `active-link`
                  : undefined
              }
              to={ROUTER.ABOUT_PAGE_ROUTE}
            >
              Մեր մասին
            </Link>
          </li>
          <li>
            <Link
              className={
                window.location.pathname === ROUTER.SERVICES_PAGE_ROUTE
                  ? `active-link`
                  : undefined
              }
              to={ROUTER.SERVICES_PAGE_ROUTE}
            >
              Ծառայոիթյուններ
            </Link>
          </li>
          <li>
            <Link
              className={
                window.location.pathname === ROUTER.NEWS_PAGE_ROUTE
                  ? `active-link`
                  : undefined
              }
              to={ROUTER.NEWS_PAGE_ROUTE}
            >
              Նորություններ
            </Link>
          </li>
          <li>
            <Link
              className={
                window.location.pathname === ROUTER.FEEDBACK_PAGE_ROUTE
                  ? `active-link`
                  : undefined
              }
              to={ROUTER.FEEDBACK_PAGE_ROUTE}
            >
              Հետադարձ կապ
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
