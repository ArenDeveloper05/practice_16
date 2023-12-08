import { useNavigate } from "react-router-dom";

const HeaderLogo = ({ img, path }) => {
  const navigate = useNavigate();
  const changePath = (path) => navigate(path);
  return (
    <li>
      <div className="header-logo" onClick={() => changePath(path)}>
        <img className="header-img" src={img.src} alt={img.alt} />
      </div>
    </li>
  );
};

export default HeaderLogo;
