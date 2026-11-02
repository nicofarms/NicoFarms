import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Team from "../pages/corporate/Team";
import Products from "../pages/products/Products";
import Sustainability from "../pages/sustain/Sustainability";
import Values from "../pages/ourValues/Values";
import Investors from "../pages/workWithUs/Investors";
import Contact from "../pages/getInTouch/Contact";
import Homeroute from "../pages/Homeroute";
import ScrollToTop from "./scrollToTop";
import Privacy from "../pages/privacy/Privacy";
import AdminLayout from "../admin/AdminLayout";
import { ContactsPage, TeamPage, VideoPage } from "../admin/AdminPages";
import { Navigate } from "react-router-dom";

function AppRoutes() {
  const router = createBrowserRouter([
    {
      element: <ScrollToTop />,
      children: [
        {
          path: "",
          element: <Homeroute />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/team",
              element: <Team />,
            },
            {
              path: "/products",
              element: <Products />,
            },
            {
              path: "/sustainability",
              element: <Sustainability />,
            },
            {
              path: "/privacy",
              element: <Privacy />,
            },
            {
              path: "/values",
              element: <Values />,
            },
            {
              path: "/investors",
              element: <Investors />,
            },
            {
              path: "/contact",
              element: <Contact />,
            },
          ],
        },
        {
          path: "/admin",
          element: <AdminLayout />,
          children: [
            { index: true, element: <Navigate to="/admin/team" replace /> },
            { path: "team", element: <TeamPage /> },
            { path: "video", element: <VideoPage /> },
            { path: "contacts", element: <ContactsPage /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AppRoutes;
