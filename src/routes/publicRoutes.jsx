
import LayoutIndex from "../layouts/user/LayoutIndex";
import Home from "../pages/user/home";
import Login from "../pages/admin/login";
import ProductSearch from "../pages/user/product";

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
            {
                path: "search",
                element: <ProductSearch />
            },

        ],
    },
    {
        path: "/logon",
        element: <Login />
    }
];
export default publicRoutes;