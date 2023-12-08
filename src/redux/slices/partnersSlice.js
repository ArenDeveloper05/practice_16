import { createSlice } from "@reduxjs/toolkit";

import partner1 from "../../assets/images/partners/partner1.jpg";
import partner2 from "../../assets/images/partners/partner2.jpg";
import partner3 from "../../assets/images/partners/partner3.jpg";
import partner4 from "../../assets/images/partners/partner4.jpg";
import partner5 from "../../assets/images/partners/partner5.jpg";
import partner6 from "../../assets/images/partners/partner6.jpg";

const initialState = {
  partnersList: [
    {
      id: 1,
      img: partner1,
      title: "logo1",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
    {
      id: 2,
      img: partner2,
      title: "logo2",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
    {
      id: 3,
      img: partner3,
      title: "logo3",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
    {
      id: 4,
      img: partner4,
      title: "logo3",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
    {
      id: 5,
      img: partner5,
      title: "logo3",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
    {
      id: 6,
      img: partner6,
      title: "logo6",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
  ],
};

const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {},
});

export default partnersSlice.reducer;
export const {} = partnersSlice.actions;
