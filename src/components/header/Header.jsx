import { header } from "../../config";
import HeaderItem from "./header-item/HeaderItem";
import HeaderLogo from "./header-logo/HeaderLogo";
import "./Header.scss";
import twitter from "../../assets/images/icons/twitter.png"
import facebook from "../../assets/images/icons/facebook.png"
import google from "../../assets/images/icons/google.png"

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <input type="text" placeholder="search" className="search blue" />
        <ul className="header-nav-lists">
          {header &&
            header.map(({ id, route, title, img }) => {
              if (title)
                return <HeaderItem key={id} path={route} title={title} />
              else return <HeaderLogo key={id} img={img} path={route} />;
            })}
        </ul>
        <div className="icons">
      <a href="https://twitter.com/" target="_blank"><img className="icons-child" src={twitter} alt="" /></a>
      <a href="https://www.facebook.com/" target="_blank"><img className="icons-child " src={facebook} alt="" /></a>
      <a href="https://support.google.com/answer/2451065?hl=en" target="_blank"><img className="icons-child1" src={google} alt="" /></a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
