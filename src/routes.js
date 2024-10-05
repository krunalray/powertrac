import AboutUs from "./Components/AboutUs/aboutUs";
import ForgotPassword from "./Components/auth/ForgotPassword/forgotPassword";
import Login from "./Components/auth/Login/login";
import Signup from "./Components/auth/Signup/signup";
import EditProfile from "./Components/EditProfile/editProfile";
import FoodMenu from "./Components/FoodMenu/foodMenu";
import HomeComponent from "./Components/Home/home";
import JobsForm1 from "./Components/Jobs/JobsForm1/JobsForm1";
import JobsForm2 from "./Components/Jobs/JobsForm2/JobsForm2";
import JobsForm3 from "./Components/Jobs/JobsForm3/JobsForm3";
import JobsForm4 from "./Components/Jobs/JobsForm4/JobsForm4";
import JobsForm5 from "./Components/Jobs/JobsForm5/JobsForm5";
import LiquorStores from "./Components/LiquorStores/liquorStores";
import Location from "./Components/Location/location";
import MyProfile from "./Components/MyProfile/myProfile";
import Novelties from "./Components/Novelties/novelties";
import ServiceComponent from "./Components/Service";
import Home2 from "./Components/storeHomePage/Home2.js/home2";
import Blanklayout from "./layout/blanklayout";
import Mainlayout from "./layout/mainlayout";
import Verticallayout from "./layout/verticallayout";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomeComponent,
    layout: Mainlayout,
  },
  {
    path: "/food-menu",
    exact: true,
    component: FoodMenu,
    layout: Mainlayout,
  },
  {
    path: "/location",
    exact: true,
    component: Location,
    layout: Mainlayout,
  },
  {
    path: "/novelties",
    exact: true,
    component: Novelties,
    layout: Mainlayout,
  },
  {
    path: "/liquor-stores",
    exact: true,
    component: LiquorStores,
    layout: Mainlayout,
  },
  {
    path: "/home-page2",
    exact: true,
    component: Home2,
    layout: Mainlayout,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
    layout: Blanklayout,
  },
  {
    path: "/signup",
    exact: true,
    component: Signup,
    layout: Blanklayout,
  },
  {
    path: "/forgot-password",
    exact: true,
    component: ForgotPassword,
    layout: Blanklayout,
  },
  {
    path: "/about-us",
    exact: true,
    component: AboutUs,
    layout: Verticallayout,
  },
  {
    path: "/jobs-form1",
    exact: true,
    component: JobsForm1,
    layout: Verticallayout,
  },
  {
    path: "/jobs-form2",
    exact: true,
    component: JobsForm2,
    layout: Verticallayout,
  },
  {
    path: "/jobs-form3",
    exact: true,
    component: JobsForm3,
    layout: Verticallayout,
  },
  {
    path: "/jobs-form4",
    exact: true,
    component: JobsForm4,
    layout: Verticallayout,
  },
  {
    path: "/jobs-form5",
    exact: true,
    component: JobsForm5,
    layout: Verticallayout,
  },
  {
    path: "/my-profile",
    exact: true,
    component: MyProfile,
    layout: Verticallayout,
  },
  {
    path: "/edit-profile",
    exact: true,
    component: EditProfile,
    layout: Verticallayout,
  },
  // {
  //   path: "/my-cart",
  //   exact: true,
  //   component: MyCart,
  //   layout: Verticallayout,
  // },
  {
    path: "/service",
    exact: true,
    component: ServiceComponent,
    layout: Blanklayout,
  },
];

export default routes;
