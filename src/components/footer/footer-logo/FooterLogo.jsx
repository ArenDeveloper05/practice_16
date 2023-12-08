import { useNavigate } from "react-router-dom";

const FooterLogo = ({ path, img }) => {
  const navigate = useNavigate();
  const changePath = (path) => navigate(path);
  return (
    <li>
      <div className="header-logo">
        <div
          className="header-logo-container"
          onClick={() => {
            path && changePath(path);
          }}
        >
          <img className="header-img" src={img.src} alt={img.alt} />
        </div>
      </div>
    </li>
  );
};

export default FooterLogo;
