import { useState } from "react";
import { aboutUsSideBar } from "../../config";
import SideList from "../common/side-list/SideList";
import "./About.scss"

const About = () => {
  const [active, setActive] = useState(1);
  
  return (
    <section className="about">
      <div className="about-container">
        <SideList
          title={"ԸՆԿԵՐՈՒԹՅՈՒՆ"}
          list={aboutUsSideBar}
          active={active}
          setActive={setActive}
        />
        <div>{aboutUsSideBar[active - 1].component}</div>
      </div>
    </section>
  );
};

export default About;
