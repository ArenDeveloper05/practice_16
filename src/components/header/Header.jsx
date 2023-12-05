import "./Header.scss";
import NavCenter from "./nav-center/NavCenter";
import NavLeft from "./nav-left/NavLeft";
import NavRight from "./nav-right/NavRight";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <NavLeft />
        <NavCenter />
        <NavRight />
      </nav>
    </header>
  );
};

export default Header;
