import { useNavigate } from "react-router-dom";
import ROUTER from "../../../router/router";
import "./NavCenter.scss";

const NavCenter = () => {
  const navigate = useNavigate();
  const changePath = (path) => navigate(path);
  return (
    <div className="nav-center">
      <div className="header-logo">
        <div
          className="header-logo-container"
          onClick={() => changePath(ROUTER.HOME_PAGE_ROUTE)}
        >
          <img className="header-img" src={""} alt={"logo"} />
        </div>
      </div>
    </div>
  );
};

export default NavCenter;
