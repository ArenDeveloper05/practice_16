import { Link } from "react-router-dom";

const FooterItem = ({ title, path }) => {
  return (
    <li>
      <Link to={path}>{title}</Link>
    </li>
  );
};

export default FooterItem;
