import ROUTER from "../../../router/router";
import { Link } from "react-router-dom";
import "./NavLeft.scss";

const NavLeft = () => {
  return (
    <div className="nav-left">
      <div className="nav-left-input">
        <input className="search" type="text" placeholder="icon" />
      </div>

      <ul className="nav-left-lists">
        <li>
          <Link
            to={ROUTER.HOME_PAGE_ROUTE}
            className={
              window.location.pathname === ROUTER.HOME_PAGE_ROUTE
                ? `active-link`
                : undefined
            }
          >
            Գլխավոր
          </Link>
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
            ՄԵՐ ՄԱՍԻՆ
          </Link>
        </li>
        <li>
          <Link
            className={
              window.location.pathname === ROUTER.PUBLICATIONS_PAGE_ROUTE
                ? `active-link`
                : undefined
            }
            to={ROUTER.PUBLICATIONS_PAGE_ROUTE}
          >
            ՀՐԱՊԱՐԱԿՈՒՄՆԵՐ
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLeft;
