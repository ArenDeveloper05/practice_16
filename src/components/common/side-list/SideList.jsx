import "./SideList.scss"

const SideList = ({ title, list, active, setActive }) => {
  return (
    <div className="side-list">
      <h1 className="side-list-title">
        <span className="side-list-title-text">
          {title ? title : ""}
        </span>
      </h1>
      <div className="side-list-lists">
        {list &&
          list.map(({ id, title }) => {
            return (
              <div
                key={id}
                onClick={() => {
                  id !== active && setActive(id);
                }}
                className="side-list-lists-item"
              >
                <span>{title ? title : ""}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SideList;
