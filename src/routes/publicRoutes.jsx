
import LayoutIndex from "../layouts/user/LayoutIndex";
import Home from "../pages/user/home";
import Login from "../pages/admin/login";

const publicRoutes = [
    {
        path: "/",
        element: <LayoutIndex />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "home",
                element: <Home />
            },
        ],
    },
    {
        path: "/logon",
        element: <Login />
    }
];
export default publicRoutes;