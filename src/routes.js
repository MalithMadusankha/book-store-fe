import Register from "views/user/Register";
import Login from "views/user/Login";
import BookAdmin from "views/book/BookAdmin";

var routes = [
  {
    path: "/index",
    name: "Book",
    icon: "fa fa-book text-success",
    component: BookAdmin,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
