import { useState } from "react";
import SideList from "../common/side-list/SideList";

const About = () => {
  const [active, setActive] = useState(1);

  const list = [
    {
      id: 1,
      title: "mer masin",
      component:
        "stex lineluya component kanchac arden. orinak porceq <SideAboutUs/>",
    },
    {
      id: 2,
      title: "mer arjeqnery",
      component: "some text",
    },
  ];
  return (
    <div>
      <SideList
        title={"Ynkerutyun"}
        list={list}
        active={active}
        setActive={setActive}
      />
      <div>{list[active - 1].component}</div>
    </div>
  );
};

export default About;
