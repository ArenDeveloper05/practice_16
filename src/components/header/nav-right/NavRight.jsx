import { Link } from "react-router-dom";
import ROUTER from "../../../router/router";
import "./NavRight.scss";

const NavRight = () => {
  return (
    <div className="nav-right">
      <div className="nav-right-icons">
        <button></button>
        <button></button>
        <button></button>
      </div>
      <ul className="nav-right-lists">
        <li>
          <Link
            className={
              window.location.pathname === ROUTER.SERVICES_PAGE_ROUTE
                ? `active-link`
                : undefined
            }
            to={ROUTER.SERVICES_PAGE_ROUTE}
          >
            ԾԱՌԱՅՈԻԹՅՈՒՆՆԵՐ
          </Link>
        </li>
        <li>
          <Link
            className={
              window.location.pathname === ROUTER.PARTNERS_PAGE_ROUTE
                ? `active-link`
                : undefined
            }
            to={ROUTER.PARTNERS_PAGE_ROUTE}
          >
            ԳՈՐԾԸՆԿԵՐՆԵՐ
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
            ՀԵՏԱԴԱՐՁ ԿԱՊ
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavRight;
