const SideList = ({ title, list, active, setActive }) => {
  return (
    <div>
      <h1>{title ? title : ""}</h1>
      <div>
        {list &&
          list.map(({ id, title, component }) => {
            return (
              <div
                key={id}
                onClick={() => {
                  id !== active && setActive(id);
                }}
              >
                <p>{title ? title : ""}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SideList;
