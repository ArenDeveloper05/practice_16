import ROUTER from "./router/router";
import sliderImage1 from "./assets/images/slider/slider1.jpg";
import sliderImage2 from "./assets/images/slider/slider2.jpg";
import SideAboutUs from "./components/about/about-components/SideAboutUs";
import SideOurValues from "./components/about/about-components/SideOurValues";

export const sliderConfig = [
  {
    id: 1,
    img: sliderImage1,
    link: "",
  },
  {
    id: 2,
    img: sliderImage2,
    link: "",
  },
];

export const header = [
  {
    id: 1,
    title: "ԳԼԽԱՎՈՐ",
    route: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 2,
    title: "ՄԵՐ ՄԱՍԻՆ",
    route: ROUTER.ABOUT_PAGE_ROUTE,
  },
  {
    id: 3,
    title: "ՀՐԱՊԱՐԱԿՈՒՄՆԵՐ",
    route: ROUTER.PUBLICATIONS_PAGE_ROUTE,
  },
  {
    id: 4,
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png",
      alt: "logo",
    },
    route: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 5,
    title: "ԾԱՌԱՅՈԻԹՅՈՒՆՆԵՐ",
    route: ROUTER.SERVICES_PAGE_ROUTE,
  },
  {
    id: 6,
    title: "ԳՈՐԾԸՆԿԵՐՆԵՐ",
    route: ROUTER.PARTNERS_PAGE_ROUTE,
  },
  {
    id: 7,
    title: "ՀԵՏԱԴԱՐՁ ԿԱՊ",
    route: ROUTER.FEEDBACK_PAGE_ROUTE,
  },
];

export const footer = [
  {
    id: 1,
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png",
      alt: "logo",
    },
    route: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 2,
    title: "© «Գլոբ Աուդիտ» ՍՊԸ 2014 - 2019 Բոլոր իրավունքները պաշտպանված են",
  },
  {
    id: 3,
    title: "Մեր մասին",
    route: ROUTER.ABOUT_PAGE_ROUTE,
  },
  {
    id: 4,
    title: "Ծառայություններ",
    route: ROUTER.SERVICES_PAGE_ROUTE,
  },
  {
    id: 5,
    title: "Նորություններ",
    route: ROUTER.NEWS_PAGE_ROUTE,
  },
  {
    id: 6,
    title: "Հետադարձ կապ",
    route: ROUTER.FEEDBACK_PAGE_ROUTE,
  },
  {
    id: 7,
    img: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png",
      alt: "logo",
    },
    route: "",
  },
];

export const aboutUsSideBar =  [
  {
    id: 1,
    title: "ՄԵՐ ՄԱՍԻՆ",
    component: <SideAboutUs />,
  },
  {
    id: 2,
    title: "ՄԵՐ ԱՐԺԵՔՆԵՐԸ",
    component: <SideOurValues />,
  },
];

export const pubicationsSideBar =  [
  {
    id: 1,
    title: "ԱՄՍ",
    // component: <SideAms />,
  },
  {
    id: 2,
    title: "ՖՀՄՍ",
    // component: <SideFhms />,
  },
  {
    id: 3,
    title: "ՀՀՄՍ",
    // component: <SideHhms />,
  },
  {
    id: 4,
    title: "ՕՐԵՆՔՆԵՐ",
    // component: <SideRules />,
  },
  {
    id: 5,
    title: "ՏԻՊԱՅԻՆ ՓԱՍՏԱԹՂԹԵՐ",
    // component: <SideStandardDocuments />,
  },
  {
    id: 6,
    title: "ՀԱՇՎԵՏՎՈՒԹՅՈՒՆՆԵՐ",
    // component: <SideReports />,
  },
];