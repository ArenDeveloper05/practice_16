import { header } from "../../config";
import HeaderItem from "./header-item/HeaderItem";
import HeaderLogo from "./header-logo/HeaderLogo";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <input type="text" placeholder="search" className="search blue" />
        <ul className="header-nav-lists">
          {header &&
            header.map(({ id, route, title, img }) => {
              if (title)
                return <HeaderItem key={id} path={route} title={title} />;
              else return <HeaderLogo key={id} img={img} path={route} />;
            })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
