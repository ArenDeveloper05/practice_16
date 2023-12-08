import { createSlice } from "@reduxjs/toolkit";
import img_src from "../../assets/images/news_image.png";

const initialState = {
  news: [
    {
      id: 1,
      img: {
        src: img_src,
        alt: "news_img",
      },
      title: "Lorem ipsum dolor sit amet",
      date: "Չորեքշաբթի, Փետրվարի 15, 2017",
      views: "1074",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut. Lorem ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aeneanommodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus...",
    },
    {
      id: 2,
      img: {
        src: img_src,
        alt: "news_img",
      },
      title: "Lorem ipsum dolor sit amet 2",
      date: "Չորեքշաբթի, Փետրվարի 15, 2017",
      views: "1029",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut. Lorem ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aeneanommodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus...",
    },
    {
      id: 3,
      img: {
        src: img_src,
        alt: "news_img",
      },
      title: "Lorem ipsum dolor sit amet 2",
      date: "Չորեքշաբթի, Փետրվարի 15, 2017",
      views: "1029",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut. Lorem ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aeneanommodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus...",
    },
  ],
};

const slice = createSlice({
  name: "homeNews",
  initialState,
  reducers: {},
});

export const {} = slice.actions;
export default slice.reducer;
