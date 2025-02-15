import { Home, Profile, SignIn, SignUp } from "@/pages";
import Repairs from "./pages/Repairs";
import OnlineStore from "./pages/OnlineStore";
import Contact from "./pages/Contact";
import ITService from "./pages/ITService";
import Microsoldering from "./pages/Microsoldering";
import Carrier from "./pages/Carrier";
import Printing from "./pages/Printing";
import InternetSvc from "./pages/InternetSvc";
import MoneySvc from "./pages/MoneySvc";
import Shippingsvc from "./pages/Shippingsvc";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Products",
    path: "/products",
    element: <ITService/>,
  },
  {
    name: "Socials",
    path: "/socials",
    element: <Repairs/>,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    element: <Microsoldering />,
  },
  {
    name: "Order",
    path: "/order",
    element: <Printing />,
  }
];

export default routes;
