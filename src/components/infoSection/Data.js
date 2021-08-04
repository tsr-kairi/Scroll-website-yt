import SvgImg1 from "../../images/svg-1.svg";
import SvgImg2 from "../../images/svg-2.svg";
import SvgImg3 from "../../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: SvgImg1,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited access",
  headline: "Login to your account at any time",
  description:
    "We have you covered no matter where you are located. All you need is an internet connection and phone or computer.",
  buttonLabel: "Lern More",
  imgStart: true,
  img: SvgImg2,
  alt: "Piggybank",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our Team",
  headline: "Creating an account is extremely easy",
  description:
    "Get everything set up and redy in under 10 minutes. All you need to do is add your information  and you're ready to go.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: SvgImg3,
  alt: "paper",
  dark: false,
  primary: false,
  darkText: true,
};
