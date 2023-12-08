import { useState } from "react";
import { pubicationsSideBar } from "../../config";
import SideList from "../common/side-list/SideList";
import PageBanner from "../common/page-banner/PageBanner"

const Publications = () => {
  const [active, setActive] = useState(1);
  
  return (
    <section className="about">
      <div className="about-container">
        <SideList
          title={"ԸՆԿԵՐՈՒԹՅՈՒՆ"}
          list={pubicationsSideBar}
          active={active}
          setActive={setActive}
        />
        <div>{pubicationsSideBar[active - 1].component}</div>
      </div>
    </section>
  );
};

export default Publications;
