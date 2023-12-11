import { Link } from "react-router-dom";
import ROUTER from "../../../../router/router";
import "./HomeHeader.scss";

const HomeHeader = () => {
  return (
    <header className="home-header">
      <ul className="home-header-lists">
        <li>
          <Link to={ROUTER.SERVICES_PAGE_ROUTE} className="home-header-link">
            ԱՈՒԴԻՏ ԵՎ ՀԱՎԱՍՏԻԱՑՈՒՄ
          </Link>
        </li>
        <li>
          <button></button>
        </li>
        <li>
          <Link to={ROUTER.Accountant_PAGE_ROUTE} className="home-header-link">
            ՀԱՇՎԱՊԱՀԱԿԱՆ ՀԱՇՎԱՌՈՒՄ
          </Link>
        </li>
        <li>
          <button></button>
        </li>
        <li>
          <Link to={ROUTER.Taxes_PAGE_ROUTE} className="home-header-link">
            ՀԱՐԿԵՐ
          </Link>
        </li>
        <li>
          <button></button>
        </li>
        <li>
          <Link to={ROUTER.Advices_PAGE_ROUTE} className="home-header-link">
            ԽՈՐՀՐԴԱՏՎՈՒԹՅՈՒՆ
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default HomeHeader;
