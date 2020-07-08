import Home from "../components/Home";
import Registered from "../components/Registered";
import Login from "../components/Login";
import Release from "../components/Release";
import Management from "../components/Management";
import UserCenter from "../components/UserCenter";
import Article from "../components/Article";
import Search from "../components/Search";

const Routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/registered",
    name: "Registered",
    component: Registered,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/release",
    name: "Release",
    component: Release,
  },
  {
    path: "/management",
    name: "Management",
    component: Management,
  },
  {
    path: "/usercenter",
    name: "UserCenter",
    component: UserCenter,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/article/:id",
    name: "Article",
    component: Article,
  },
];

export default Routes;
