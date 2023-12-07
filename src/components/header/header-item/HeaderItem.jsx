import { Link } from "react-router-dom";

const HeaderItem = ({ path, title }) => {
  return (
    <li>
      <Link
        to={path}
        className={
          window.location.pathname === path ? `active-link blue` : "blue"
        }
      >
        {title}
      </Link>
    </li>
  );
};

export default HeaderItem;
