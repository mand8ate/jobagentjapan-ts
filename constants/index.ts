import {
  AcademicCapIcon,
  CheckBadgeIcon,
  LightBulbIcon,
} from "@heroicons/react/20/solid";

export const footerLinks = [
  {
    title: "Navigation",
    links: [
      { title: "Home", url: "/" },
      { title: "Positions", url: "positions" },
      { title: "Blog", url: "https://lifenippon.com" },
      { title: "Contact", url: "/contact" },
      { title: "About", url: "/about" },
      { title: "企業向け", url: "/company" },
    ],
  },
  {
    title: "Main",
    links: [
      { title: "Top", url: "/" },
      { title: "Features", url: "/" },
      { title: "Recommended", url: "/" },
      { title: "Search", url: "/" },
      { title: "Testimonies", url: "/" },
      { title: "Contact", url: "/" },
    ],
  },
];

export const headerLinks = [
  { title: "Home", url: "/" },
  { title: "Positions", url: "/positions" },
  { title: "Blog", url: "https://lifenippon.com" },
  { title: "Contact", url: "/contact" },
  { title: "About", url: "/about" },
];

export const features = [
  {
    title: "Easy Signup",
    description: `Sign up with us is a breeze! No CV required upfront – just link your LinkedIn profile, and
                  you're good to go! Join us today and unlock a world of opportunities.`,
    icon: AcademicCapIcon,
  },
  {
    title: "Easy Application",
    description: `Discover your dream job and sign up with just one click! Simplify
                  your application process and unlock endless career opportunities.
                  Your next job is just a click away!`,
    icon: CheckBadgeIcon,
  },
  {
    title: "AI-Powered Scoring",
    description: `We utilize AI algorithms to score applications for position-fit. 
                  This technology-driven approach ensures effortless matching to perfect roles, 
                  enhancing the probability of hiring success.`,
    icon: LightBulbIcon,
  },
];

export const categories = {
  "Information Technology": {
    imagePath: "/categoryimage@2x.png",
    border: "violetGradient-border",
  },
  Hospitality: {
    imagePath: "/categoryimage@2x.png",
    border: "blueGradient-border",
  },
};

export const agents = {
  Malte: {
    name: "Malte",
    profileImage: "/image1@2x.jpg",
  },
};
