import ROUTER from "./router/router";
import sliderImage1 from "./assets/images/slider/slider1.jpg";
import sliderImage2 from "./assets/images/slider/slider2.jpg";

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
    title: "Ծառայոիթյուններ",
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

export const homeConfig=[
  {
    id:1,
    title:"Արտաքին աուդիտ"
  },
  {
    id:2,
    title:"ներքին աուդիտ"
  },
  {
    id:3,
    title: "Հատուկ նշանակության աուդիտ"
  },
  {
    id:4,
    title:"Աուդիտորական դիտարկում"
  },
  {
    id:5,
    title:"Կոմպիլիացիա"
  },
]